import React, { useState, useMemo } from 'react';
import { QuarterlyObservation } from '../../types/eurostat';
import { COUNTRIES, getCountryInfo } from '../../data/countries';
import {
  Search,
  ArrowUpDown,
  ArrowUp,
  ArrowDown,
  FileSpreadsheet,
  FileCode,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

interface DataTableViewProps {
  countryCache: Record<string, QuarterlyObservation[]>;
  primaryCountry: string;
}

type SortField =
  | 'geo'
  | 'period'
  | 'hpi'
  | 'hicp'
  | 'realHpi'
  | 'yoy'
  | 'hicpYoy'
  | 'hpiNew'
  | 'hpiExst';

type SortDirection = 'asc' | 'desc';

export const DataTableView: React.FC<DataTableViewProps> = ({
  countryCache,
  primaryCountry,
}) => {
  const [selectedGeo, setSelectedGeo] = useState<string>(primaryCountry);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortField, setSortField] = useState<SortField>('period');
  const [sortDirection, setSortDirection] = useState<SortDirection>('desc');
  const [page, setPage] = useState<number>(1);
  const pageSize = 15;

  // Flatten all observations or filter by country
  const allRows = useMemo(() => {
    const list: Array<
      QuarterlyObservation & {
        countryName: string;
        countryFlag: string;
      }
    > = [];

    const geosToInclude = selectedGeo === 'ALL' ? Object.keys(countryCache) : [selectedGeo];

    for (const geo of geosToInclude) {
      const info = getCountryInfo(geo);
      const obs = countryCache[geo] || [];
      for (const o of obs) {
        list.push({
          ...o,
          countryName: info.nameFr,
          countryFlag: info.flag,
        });
      }
    }

    return list;
  }, [countryCache, selectedGeo]);

  // Filter
  const filteredRows = useMemo(() => {
    let result = allRows;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      result = result.filter(
        (r) =>
          r.period.toLowerCase().includes(q) ||
          r.geo.toLowerCase().includes(q) ||
          r.countryName.toLowerCase().includes(q)
      );
    }
    return result;
  }, [allRows, searchQuery]);

  // Sort
  const sortedRows = useMemo(() => {
    return [...filteredRows].sort((a, b) => {
      let vA: number | string = 0;
      let vB: number | string = 0;

      switch (sortField) {
        case 'geo':
          vA = a.countryName;
          vB = b.countryName;
          break;
        case 'period':
          vA = a.period;
          vB = b.period;
          break;
        case 'hpi':
          vA = a.hpi.total ?? -9999;
          vB = b.hpi.total ?? -9999;
          break;
        case 'hicp':
          vA = a.hicp ?? -9999;
          vB = b.hicp ?? -9999;
          break;
        case 'realHpi':
          vA = a.realHpi ?? -9999;
          vB = b.realHpi ?? -9999;
          break;
        case 'yoy':
          vA = a.hpi.yoy ?? -9999;
          vB = b.hpi.yoy ?? -9999;
          break;
        case 'hicpYoy':
          vA = a.hicpYoy ?? -9999;
          vB = b.hicpYoy ?? -9999;
          break;
        case 'hpiNew':
          vA = a.hpi.new ?? -9999;
          vB = b.hpi.new ?? -9999;
          break;
        case 'hpiExst':
          vA = a.hpi.existing ?? -9999;
          vB = b.hpi.existing ?? -9999;
          break;
      }

      if (vA < vB) return sortDirection === 'asc' ? -1 : 1;
      if (vA > vB) return sortDirection === 'asc' ? 1 : -1;
      return 0;
    });
  }, [filteredRows, sortField, sortDirection]);

  // Pagination
  const totalPages = Math.max(1, Math.ceil(sortedRows.length / pageSize));
  const paginatedRows = useMemo(() => {
    const start = (page - 1) * pageSize;
    return sortedRows.slice(start, start + pageSize);
  }, [sortedRows, page, pageSize]);

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortDirection((prev) => (prev === 'asc' ? 'desc' : 'asc'));
    } else {
      setSortField(field);
      setSortDirection('desc');
    }
    setPage(1);
  };

  // Export CSV
  const handleExportCsv = () => {
    const headers = [
      'Pays_Code',
      'Pays_Nom',
      'Période',
      'HPI_Total',
      'HICP_Inflation',
      'HPI_Réel',
      'HPI_YoY',
      'HICP_YoY',
      'HPI_Neuf',
      'HPI_Existant',
      'HPI_QoQ',
      'Source',
    ];

    const rows = sortedRows.map((r) => [
      r.geo,
      `"${r.countryName}"`,
      r.period,
      r.hpi.total ?? '',
      r.hicp ?? '',
      r.realHpi ?? '',
      r.hpi.yoy ?? '',
      r.hicpYoy ?? '',
      r.hpi.new ?? '',
      r.hpi.existing ?? '',
      r.hpi.qoq ?? '',
      r.source,
    ]);

    const csvContent =
      'data:text/csv;charset=utf-8,\uFEFF' +
      [headers.join(';'), ...rows.map((e) => e.join(';'))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `eurostat_housing_data_${selectedGeo}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Export JSON
  const handleExportJson = () => {
    const dataStr =
      'data:text/json;charset=utf-8,' +
      encodeURIComponent(JSON.stringify(sortedRows, null, 2));
    const link = document.createElement('a');
    link.setAttribute('href', dataStr);
    link.setAttribute('download', `eurostat_housing_data_${selectedGeo}.json`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const renderSortIcon = (field: SortField) => {
    if (sortField !== field) {
      return <ArrowUpDown className="w-3.5 h-3.5 text-slate-400 opacity-60" />;
    }
    return sortDirection === 'asc' ? (
      <ArrowUp className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 font-bold" />
    ) : (
      <ArrowDown className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 font-bold" />
    );
  };

  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs p-4 sm:p-6 space-y-4">
      {/* Header & Controls */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
            Base de Données Eurostat — Séries Trimestrielles
          </h3>
          <p className="text-xs text-slate-500 mt-0.5">
            {sortedRows.length} observations disponibles
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {/* Country filter */}
          <select
            value={selectedGeo}
            onChange={(e) => {
              setSelectedGeo(e.target.value);
              setPage(1);
            }}
            className="bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-1.5 text-xs font-semibold text-slate-800 dark:text-slate-200 focus:outline-hidden focus:ring-2 focus:ring-blue-500"
          >
            <option value="ALL">Tous les pays</option>
            {COUNTRIES.map((c) => (
              <option key={c.code} value={c.code}>
                {c.flag} {c.nameFr}
              </option>
            ))}
          </select>

          {/* Search */}
          <div className="relative">
            <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Rechercher (ex: 2024-Q1)..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setPage(1);
              }}
              className="pl-8 pr-3 py-1.5 text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white focus:outline-hidden focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Export buttons */}
          <button
            onClick={handleExportCsv}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition cursor-pointer"
            title="Exporter en CSV"
          >
            <FileSpreadsheet className="w-3.5 h-3.5 text-emerald-600" />
            <span>CSV</span>
          </button>
          <button
            onClick={handleExportJson}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition cursor-pointer"
            title="Exporter en JSON"
          >
            <FileCode className="w-3.5 h-3.5 text-blue-600" />
            <span>JSON</span>
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto border border-slate-100 dark:border-slate-800 rounded-xl">
        <table className="w-full text-xs text-left">
          <thead className="bg-slate-50 dark:bg-slate-800/80 text-slate-500 dark:text-slate-400 uppercase font-semibold border-b border-slate-100 dark:border-slate-800">
            <tr>
              <th
                onClick={() => handleSort('geo')}
                className="px-3 py-3 cursor-pointer hover:text-slate-900 dark:hover:text-white select-none"
              >
                <div className="flex items-center gap-1.5">
                  <span>Pays</span>
                  {renderSortIcon('geo')}
                </div>
              </th>
              <th
                onClick={() => handleSort('period')}
                className="px-3 py-3 cursor-pointer hover:text-slate-900 dark:hover:text-white select-none"
              >
                <div className="flex items-center gap-1.5">
                  <span>Période</span>
                  {renderSortIcon('period')}
                </div>
              </th>
              <th
                onClick={() => handleSort('hpi')}
                className="px-3 py-3 text-right cursor-pointer hover:text-slate-900 dark:hover:text-white select-none"
              >
                <div className="flex items-center justify-end gap-1.5">
                  <span>HPI Total</span>
                  {renderSortIcon('hpi')}
                </div>
              </th>
              <th
                onClick={() => handleSort('hicp')}
                className="px-3 py-3 text-right cursor-pointer hover:text-slate-900 dark:hover:text-white select-none"
              >
                <div className="flex items-center justify-end gap-1.5">
                  <span>HICP Inflation</span>
                  {renderSortIcon('hicp')}
                </div>
              </th>
              <th
                onClick={() => handleSort('realHpi')}
                className="px-3 py-3 text-right cursor-pointer hover:text-slate-900 dark:hover:text-white select-none"
              >
                <div className="flex items-center justify-end gap-1.5">
                  <span>HPI Réel</span>
                  {renderSortIcon('realHpi')}
                </div>
              </th>
              <th
                onClick={() => handleSort('yoy')}
                className="px-3 py-3 text-right cursor-pointer hover:text-slate-900 dark:hover:text-white select-none"
              >
                <div className="flex items-center justify-end gap-1.5">
                  <span>HPI YoY</span>
                  {renderSortIcon('yoy')}
                </div>
              </th>
              <th
                onClick={() => handleSort('hicpYoy')}
                className="px-3 py-3 text-right cursor-pointer hover:text-slate-900 dark:hover:text-white select-none"
              >
                <div className="flex items-center justify-end gap-1.5">
                  <span>HICP YoY</span>
                  {renderSortIcon('hicpYoy')}
                </div>
              </th>
              <th
                onClick={() => handleSort('hpiNew')}
                className="px-3 py-3 text-right cursor-pointer hover:text-slate-900 dark:hover:text-white select-none"
              >
                <div className="flex items-center justify-end gap-1.5">
                  <span>Neuf</span>
                  {renderSortIcon('hpiNew')}
                </div>
              </th>
              <th
                onClick={() => handleSort('hpiExst')}
                className="px-3 py-3 text-right cursor-pointer hover:text-slate-900 dark:hover:text-white select-none"
              >
                <div className="flex items-center justify-end gap-1.5">
                  <span>Existant</span>
                  {renderSortIcon('hpiExst')}
                </div>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
            {paginatedRows.length === 0 ? (
              <tr>
                <td colSpan={9} className="text-center py-8 text-slate-400">
                  Aucune donnée ne correspond aux critères.
                </td>
              </tr>
            ) : (
              paginatedRows.map((r) => (
                <tr
                  key={`${r.geo}-${r.period}`}
                  className="hover:bg-slate-50/70 dark:hover:bg-slate-800/50 transition font-mono"
                >
                  <td className="px-3 py-2.5 font-sans font-medium text-slate-900 dark:text-white">
                    <span className="mr-1.5">{r.countryFlag}</span>
                    <span>{r.countryName}</span>
                    <span className="text-[10px] text-slate-400 ml-1">({r.geo})</span>
                  </td>
                  <td className="px-3 py-2.5 font-bold text-slate-800 dark:text-slate-200">
                    {r.period}
                  </td>
                  <td className="px-3 py-2.5 text-right font-bold text-blue-600 dark:text-blue-400">
                    {r.hpi.total?.toFixed(2) ?? '—'}
                  </td>
                  <td className="px-3 py-2.5 text-right text-amber-600 dark:text-amber-400">
                    {r.hicp?.toFixed(2) ?? '—'}
                  </td>
                  <td className="px-3 py-2.5 text-right font-bold text-emerald-600 dark:text-emerald-400">
                    {r.realHpi?.toFixed(2) ?? '—'}
                  </td>
                  <td className="px-3 py-2.5 text-right font-medium">
                    <span
                      className={
                        (r.hpi.yoy ?? 0) >= 0 ? 'text-emerald-600' : 'text-rose-600'
                      }
                    >
                      {r.hpi.yoy !== null ? `${r.hpi.yoy > 0 ? '+' : ''}${r.hpi.yoy}%` : '—'}
                    </span>
                  </td>
                  <td className="px-3 py-2.5 text-right text-slate-500">
                    {r.hicpYoy !== null ? `${r.hicpYoy > 0 ? '+' : ''}${r.hicpYoy}%` : '—'}
                  </td>
                  <td className="px-3 py-2.5 text-right text-purple-600 dark:text-purple-400">
                    {r.hpi.new?.toFixed(2) ?? '—'}
                  </td>
                  <td className="px-3 py-2.5 text-right text-cyan-600 dark:text-cyan-400">
                    {r.hpi.existing?.toFixed(2) ?? '—'}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination Footer */}
      <div className="flex items-center justify-between pt-2">
        <span className="text-xs text-slate-500">
          Page {page} sur {totalPages} ({sortedRows.length} lignes au total)
        </span>

        <div className="flex items-center gap-1.5">
          <button
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page === 1}
            className="p-1.5 rounded-lg border border-slate-200 dark:border-slate-700 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-slate-100 dark:hover:bg-slate-800 transition cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <span className="text-xs font-semibold px-2">
            {page} / {totalPages}
          </span>
          <button
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            disabled={page === totalPages}
            className="p-1.5 rounded-lg border border-slate-200 dark:border-slate-700 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-slate-100 dark:hover:bg-slate-800 transition cursor-pointer"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
