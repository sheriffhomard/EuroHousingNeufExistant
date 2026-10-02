import { JsonStatDataset } from '../types/eurostat';

export class JsonStatReader {
  private dataset: JsonStatDataset;
  private id: string[];
  private size: number[];
  private strides: number[];
  private dimIndices: Map<string, Map<string, number>>;

  constructor(dataset: JsonStatDataset) {
    this.dataset = dataset;
    this.id = dataset.id || [];
    this.size = dataset.size || [];
    this.strides = [];
    this.dimIndices = new Map();

    this.calculateStrides();
    this.indexDimensions();
  }

  private calculateStrides() {
    const n = this.size.length;
    this.strides = new Array(n).fill(1);
    if (n === 0) return;

    this.strides[n - 1] = 1;
    for (let k = n - 2; k >= 0; k--) {
      this.strides[k] = this.strides[k + 1] * (this.size[k + 1] || 1);
    }
  }

  private indexDimensions() {
    for (const dimId of this.id) {
      const dim = this.dataset.dimension?.[dimId];
      const indexMap = new Map<string, number>();

      if (dim?.category?.index) {
        const catIndex = dim.category.index;
        if (Array.isArray(catIndex)) {
          catIndex.forEach((key, idx) => indexMap.set(key, idx));
        } else if (typeof catIndex === 'object') {
          for (const [key, idx] of Object.entries(catIndex)) {
            indexMap.set(key, idx);
          }
        }
      }
      this.dimIndices.set(dimId, indexMap);
    }
  }

  /**
   * Get dimension categories (keys)
   */
  public getDimensionKeys(dimId: string): string[] {
    const map = this.dimIndices.get(dimId);
    if (!map) return [];
    // Return sorted by index order
    return Array.from(map.entries())
      .sort((a, b) => a[1] - b[1])
      .map(([k]) => k);
  }

  /**
   * Get dimension category label
   */
  public getCategoryLabel(dimId: string, key: string): string {
    const dim = this.dataset.dimension?.[dimId];
    return dim?.category?.label?.[key] || key;
  }

  /**
   * Calculate flat index for a coordinate map
   */
  public getFlatIndex(coords: Record<string, string>): number | null {
    let flatIndex = 0;
    for (let d = 0; d < this.id.length; d++) {
      const dimId = this.id[d];
      const valKey = coords[dimId];
      if (!valKey) {
        // If coordinate is not provided, cannot resolve single cell
        return null;
      }
      const dimMap = this.dimIndices.get(dimId);
      if (!dimMap || !dimMap.has(valKey)) {
        return null;
      }
      const coordIdx = dimMap.get(valKey)!;
      flatIndex += coordIdx * this.strides[d];
    }
    return flatIndex;
  }

  /**
   * Retrieve single value for coordinates
   */
  public getValue(coords: Record<string, string>): number | null {
    const flatIndex = this.getFlatIndex(coords);
    if (flatIndex === null) return null;

    const values = this.dataset.value;
    if (!values) return null;

    let val: number | null | undefined;
    if (Array.isArray(values)) {
      val = values[flatIndex];
    } else {
      val = values[String(flatIndex)];
    }

    if (val === null || val === undefined || isNaN(val)) {
      return null;
    }
    return Number(val);
  }

  /**
   * Extract time-series values along a time dimension with fixed other coordinates
   */
  public getTimeSeries(
    fixedCoords: Record<string, string>,
    timeDimId = 'time'
  ): Record<string, number | null> {
    const timeKeys = this.getDimensionKeys(timeDimId);
    const series: Record<string, number | null> = {};

    for (const t of timeKeys) {
      const coords = { ...fixedCoords, [timeDimId]: t };
      series[t] = this.getValue(coords);
    }

    return series;
  }
}
