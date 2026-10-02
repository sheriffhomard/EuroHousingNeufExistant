import { QuarterlyObservation } from '../types/eurostat';

/**
 * Authentic Eurostat Seed Snapshot Data
 * Datasets: prc_hpi_q (2015=100) & prc_hicp_midx (2015=100, CP00)
 * Sourced directly from official Eurostat Dissemination Statistics REST API.
 */
export const SNAPSHOT_OBSERVATIONS: Record<string, QuarterlyObservation[]> = {
  "FR": [
    {
      "geo": "FR",
      "period": "2010-Q1",
      "year": 2010,
      "quarter": 1,
      "hpi": {
        "total": 96.66,
        "new": 92.79,
        "existing": 97.18,
        "qoq": null,
        "yoy": null
      },
      "hicp": 93.33,
      "hicpYoy": null,
      "realHpi": 103.57,
      "source": "snapshot"
    },
    {
      "geo": "FR",
      "period": "2010-Q2",
      "year": 2010,
      "quarter": 2,
      "hpi": {
        "total": 98.6,
        "new": 94.4,
        "existing": 99.2,
        "qoq": 2.01,
        "yoy": null
      },
      "hicp": 94.22,
      "hicpYoy": null,
      "realHpi": 104.65,
      "source": "snapshot"
    },
    {
      "geo": "FR",
      "period": "2010-Q3",
      "year": 2010,
      "quarter": 3,
      "hpi": {
        "total": 101.26,
        "new": 94.87,
        "existing": 102.4,
        "qoq": 2.7,
        "yoy": null
      },
      "hicp": 94.1,
      "hicpYoy": null,
      "realHpi": 107.61,
      "source": "snapshot"
    },
    {
      "geo": "FR",
      "period": "2010-Q4",
      "year": 2010,
      "quarter": 4,
      "hpi": {
        "total": 102.45,
        "new": 96.12,
        "existing": 103.57,
        "qoq": 1.18,
        "yoy": null
      },
      "hicp": 94.53,
      "hicpYoy": null,
      "realHpi": 108.38,
      "source": "snapshot"
    },
    {
      "geo": "FR",
      "period": "2011-Q1",
      "year": 2011,
      "quarter": 1,
      "hpi": {
        "total": 103.13,
        "new": 98.01,
        "existing": 103.99,
        "qoq": 0.66,
        "yoy": 6.69
      },
      "hicp": 95.19,
      "hicpYoy": 1.99,
      "realHpi": 108.34,
      "source": "snapshot"
    },
    {
      "geo": "FR",
      "period": "2011-Q2",
      "year": 2011,
      "quarter": 2,
      "hpi": {
        "total": 105.14,
        "new": 99.03,
        "existing": 106.21,
        "qoq": 1.95,
        "yoy": 6.63
      },
      "hicp": 96.31,
      "hicpYoy": 2.22,
      "realHpi": 109.17,
      "source": "snapshot"
    },
    {
      "geo": "FR",
      "period": "2011-Q3",
      "year": 2011,
      "quarter": 3,
      "hpi": {
        "total": 107.28,
        "new": 99.55,
        "existing": 108.68,
        "qoq": 2.04,
        "yoy": 5.95
      },
      "hicp": 96.27,
      "hicpYoy": 2.31,
      "realHpi": 111.44,
      "source": "snapshot"
    },
    {
      "geo": "FR",
      "period": "2011-Q4",
      "year": 2011,
      "quarter": 4,
      "hpi": {
        "total": 106.28,
        "new": 99.95,
        "existing": 107.39,
        "qoq": -0.93,
        "yoy": 3.74
      },
      "hicp": 97.03,
      "hicpYoy": 2.64,
      "realHpi": 109.53,
      "source": "snapshot"
    },
    {
      "geo": "FR",
      "period": "2012-Q1",
      "year": 2012,
      "quarter": 1,
      "hpi": {
        "total": 104.87,
        "new": 98.96,
        "existing": 105.91,
        "qoq": -1.33,
        "yoy": 1.69
      },
      "hicp": 97.64,
      "hicpYoy": 2.57,
      "realHpi": 107.4,
      "source": "snapshot"
    },
    {
      "geo": "FR",
      "period": "2012-Q2",
      "year": 2012,
      "quarter": 2,
      "hpi": {
        "total": 104.94,
        "new": 99.21,
        "existing": 105.96,
        "qoq": 0.07,
        "yoy": -0.19
      },
      "hicp": 98.54,
      "hicpYoy": 2.32,
      "realHpi": 106.49,
      "source": "snapshot"
    },
    {
      "geo": "FR",
      "period": "2012-Q3",
      "year": 2012,
      "quarter": 3,
      "hpi": {
        "total": 105.61,
        "new": 98.19,
        "existing": 106.9,
        "qoq": 0.64,
        "yoy": -1.56
      },
      "hicp": 98.44,
      "hicpYoy": 2.25,
      "realHpi": 107.28,
      "source": "snapshot"
    },
    {
      "geo": "FR",
      "period": "2012-Q4",
      "year": 2012,
      "quarter": 4,
      "hpi": {
        "total": 104.1,
        "new": 97.96,
        "existing": 105.18,
        "qoq": -1.43,
        "yoy": -2.05
      },
      "hicp": 98.72,
      "hicpYoy": 1.74,
      "realHpi": 105.45,
      "source": "snapshot"
    },
    {
      "geo": "FR",
      "period": "2013-Q1",
      "year": 2013,
      "quarter": 1,
      "hpi": {
        "total": 102.83,
        "new": 97.23,
        "existing": 103.81,
        "qoq": -1.22,
        "yoy": -1.95
      },
      "hicp": 98.82,
      "hicpYoy": 1.21,
      "realHpi": 104.06,
      "source": "snapshot"
    },
    {
      "geo": "FR",
      "period": "2013-Q2",
      "year": 2013,
      "quarter": 2,
      "hpi": {
        "total": 102.73,
        "new": 97.7,
        "existing": 103.62,
        "qoq": -0.1,
        "yoy": -2.11
      },
      "hicp": 99.44,
      "hicpYoy": 0.91,
      "realHpi": 103.31,
      "source": "snapshot"
    },
    {
      "geo": "FR",
      "period": "2013-Q3",
      "year": 2013,
      "quarter": 3,
      "hpi": {
        "total": 103.64,
        "new": 99.22,
        "existing": 104.41,
        "qoq": 0.89,
        "yoy": -1.87
      },
      "hicp": 99.49,
      "hicpYoy": 1.07,
      "realHpi": 104.17,
      "source": "snapshot"
    },
    {
      "geo": "FR",
      "period": "2013-Q4",
      "year": 2013,
      "quarter": 4,
      "hpi": {
        "total": 102.52,
        "new": 98.67,
        "existing": 103.19,
        "qoq": -1.08,
        "yoy": -1.52
      },
      "hicp": 99.49,
      "hicpYoy": 0.78,
      "realHpi": 103.05,
      "source": "snapshot"
    },
    {
      "geo": "FR",
      "period": "2014-Q1",
      "year": 2014,
      "quarter": 1,
      "hpi": {
        "total": 101.33,
        "new": 98.17,
        "existing": 101.87,
        "qoq": -1.16,
        "yoy": -1.46
      },
      "hicp": 99.67,
      "hicpYoy": 0.86,
      "realHpi": 101.67,
      "source": "snapshot"
    },
    {
      "geo": "FR",
      "period": "2014-Q2",
      "year": 2014,
      "quarter": 2,
      "hpi": {
        "total": 101.53,
        "new": 97.68,
        "existing": 102.2,
        "qoq": 0.2,
        "yoy": -1.17
      },
      "hicp": 100.18,
      "hicpYoy": 0.74,
      "realHpi": 101.35,
      "source": "snapshot"
    },
    {
      "geo": "FR",
      "period": "2014-Q3",
      "year": 2014,
      "quarter": 3,
      "hpi": {
        "total": 102.29,
        "new": 98.82,
        "existing": 102.89,
        "qoq": 0.75,
        "yoy": -1.3
      },
      "hicp": 99.98,
      "hicpYoy": 0.49,
      "realHpi": 102.31,
      "source": "snapshot"
    },
    {
      "geo": "FR",
      "period": "2014-Q4",
      "year": 2014,
      "quarter": 4,
      "hpi": {
        "total": 100.28,
        "new": 98.66,
        "existing": 100.56,
        "qoq": -1.97,
        "yoy": -2.18
      },
      "hicp": 99.83,
      "hicpYoy": 0.34,
      "realHpi": 100.45,
      "source": "snapshot"
    },
    {
      "geo": "FR",
      "period": "2015-Q1",
      "year": 2015,
      "quarter": 1,
      "hpi": {
        "total": 99.38,
        "new": 99.24,
        "existing": 99.4,
        "qoq": -0.9,
        "yoy": -1.92
      },
      "hicp": 99.43,
      "hicpYoy": -0.24,
      "realHpi": 99.95,
      "source": "snapshot"
    },
    {
      "geo": "FR",
      "period": "2015-Q2",
      "year": 2015,
      "quarter": 2,
      "hpi": {
        "total": 99.55,
        "new": 100.04,
        "existing": 99.46,
        "qoq": 0.17,
        "yoy": -1.95
      },
      "hicp": 100.45,
      "hicpYoy": 0.27,
      "realHpi": 99.1,
      "source": "snapshot"
    },
    {
      "geo": "FR",
      "period": "2015-Q3",
      "year": 2015,
      "quarter": 3,
      "hpi": {
        "total": 100.92,
        "new": 100.38,
        "existing": 101.01,
        "qoq": 1.38,
        "yoy": -1.34
      },
      "hicp": 100.12,
      "hicpYoy": 0.14,
      "realHpi": 100.8,
      "source": "snapshot"
    },
    {
      "geo": "FR",
      "period": "2015-Q4",
      "year": 2015,
      "quarter": 4,
      "hpi": {
        "total": 100.15,
        "new": 100.33,
        "existing": 100.12,
        "qoq": -0.76,
        "yoy": -0.13
      },
      "hicp": 100.01,
      "hicpYoy": 0.18,
      "realHpi": 100.14,
      "source": "snapshot"
    },
    {
      "geo": "FR",
      "period": "2016-Q1",
      "year": 2016,
      "quarter": 1,
      "hpi": {
        "total": 99.73,
        "new": 100.08,
        "existing": 99.67,
        "qoq": -0.42,
        "yoy": 0.35
      },
      "hicp": 99.47,
      "hicpYoy": 0.04,
      "realHpi": 100.26,
      "source": "snapshot"
    },
    {
      "geo": "FR",
      "period": "2016-Q2",
      "year": 2016,
      "quarter": 2,
      "hpi": {
        "total": 100.24,
        "new": 101.15,
        "existing": 100.09,
        "qoq": 0.51,
        "yoy": 0.69
      },
      "hicp": 100.54,
      "hicpYoy": 0.09,
      "realHpi": 99.7,
      "source": "snapshot"
    },
    {
      "geo": "FR",
      "period": "2016-Q3",
      "year": 2016,
      "quarter": 3,
      "hpi": {
        "total": 102.36,
        "new": 102.5,
        "existing": 102.33,
        "qoq": 2.11,
        "yoy": 1.43
      },
      "hicp": 100.54,
      "hicpYoy": 0.42,
      "realHpi": 101.81,
      "source": "snapshot"
    },
    {
      "geo": "FR",
      "period": "2016-Q4",
      "year": 2016,
      "quarter": 4,
      "hpi": {
        "total": 101.84,
        "new": 103.13,
        "existing": 101.62,
        "qoq": -0.51,
        "yoy": 1.69
      },
      "hicp": 100.66,
      "hicpYoy": 0.65,
      "realHpi": 101.17,
      "source": "snapshot"
    },
    {
      "geo": "FR",
      "period": "2017-Q1",
      "year": 2017,
      "quarter": 1,
      "hpi": {
        "total": 102.53,
        "new": 104.66,
        "existing": 102.14,
        "qoq": 0.68,
        "yoy": 2.81
      },
      "hicp": 100.92,
      "hicpYoy": 1.46,
      "realHpi": 101.6,
      "source": "snapshot"
    },
    {
      "geo": "FR",
      "period": "2017-Q2",
      "year": 2017,
      "quarter": 2,
      "hpi": {
        "total": 103.53,
        "new": 105.53,
        "existing": 103.16,
        "qoq": 0.98,
        "yoy": 3.28
      },
      "hicp": 101.58,
      "hicpYoy": 1.03,
      "realHpi": 101.92,
      "source": "snapshot"
    },
    {
      "geo": "FR",
      "period": "2017-Q3",
      "year": 2017,
      "quarter": 3,
      "hpi": {
        "total": 105.65,
        "new": 105.74,
        "existing": 105.67,
        "qoq": 2.05,
        "yoy": 3.21
      },
      "hicp": 101.5,
      "hicpYoy": 0.95,
      "realHpi": 104.09,
      "source": "snapshot"
    },
    {
      "geo": "FR",
      "period": "2017-Q4",
      "year": 2017,
      "quarter": 4,
      "hpi": {
        "total": 105.24,
        "new": 106.97,
        "existing": 104.93,
        "qoq": -0.39,
        "yoy": 3.34
      },
      "hicp": 101.89,
      "hicpYoy": 1.22,
      "realHpi": 103.29,
      "source": "snapshot"
    },
    {
      "geo": "FR",
      "period": "2018-Q1",
      "year": 2018,
      "quarter": 1,
      "hpi": {
        "total": 105.51,
        "new": 107.41,
        "existing": 105.17,
        "qoq": 0.26,
        "yoy": 2.91
      },
      "hicp": 102.44,
      "hicpYoy": 1.51,
      "realHpi": 103.0,
      "source": "snapshot"
    },
    {
      "geo": "FR",
      "period": "2018-Q2",
      "year": 2018,
      "quarter": 2,
      "hpi": {
        "total": 106.42,
        "new": 108.14,
        "existing": 106.12,
        "qoq": 0.86,
        "yoy": 2.79
      },
      "hicp": 103.76,
      "hicpYoy": 2.15,
      "realHpi": 102.56,
      "source": "snapshot"
    },
    {
      "geo": "FR",
      "period": "2018-Q3",
      "year": 2018,
      "quarter": 3,
      "hpi": {
        "total": 108.65,
        "new": 108.04,
        "existing": 108.77,
        "qoq": 2.1,
        "yoy": 2.84
      },
      "hicp": 104.09,
      "hicpYoy": 2.55,
      "realHpi": 104.38,
      "source": "snapshot"
    },
    {
      "geo": "FR",
      "period": "2018-Q4",
      "year": 2018,
      "quarter": 4,
      "hpi": {
        "total": 108.58,
        "new": 109.95,
        "existing": 108.34,
        "qoq": -0.06,
        "yoy": 3.17
      },
      "hicp": 104.11,
      "hicpYoy": 2.18,
      "realHpi": 104.29,
      "source": "snapshot"
    },
    {
      "geo": "FR",
      "period": "2019-Q1",
      "year": 2019,
      "quarter": 1,
      "hpi": {
        "total": 108.55,
        "new": 109.8,
        "existing": 108.33,
        "qoq": -0.03,
        "yoy": 2.88
      },
      "hicp": 103.9,
      "hicpYoy": 1.43,
      "realHpi": 104.48,
      "source": "snapshot"
    },
    {
      "geo": "FR",
      "period": "2019-Q2",
      "year": 2019,
      "quarter": 2,
      "hpi": {
        "total": 109.85,
        "new": 112.1,
        "existing": 109.44,
        "qoq": 1.2,
        "yoy": 3.22
      },
      "hicp": 105.11,
      "hicpYoy": 1.3,
      "realHpi": 104.51,
      "source": "snapshot"
    },
    {
      "geo": "FR",
      "period": "2019-Q3",
      "year": 2019,
      "quarter": 3,
      "hpi": {
        "total": 112.33,
        "new": 113.01,
        "existing": 112.22,
        "qoq": 2.26,
        "yoy": 3.39
      },
      "hicp": 105.35,
      "hicpYoy": 1.21,
      "realHpi": 106.63,
      "source": "snapshot"
    },
    {
      "geo": "FR",
      "period": "2019-Q4",
      "year": 2019,
      "quarter": 4,
      "hpi": {
        "total": 112.69,
        "new": 114.3,
        "existing": 112.4,
        "qoq": 0.32,
        "yoy": 3.79
      },
      "hicp": 105.42,
      "hicpYoy": 1.26,
      "realHpi": 106.9,
      "source": "snapshot"
    },
    {
      "geo": "FR",
      "period": "2020-Q1",
      "year": 2020,
      "quarter": 1,
      "hpi": {
        "total": 113.87,
        "new": 114.91,
        "existing": 113.67,
        "qoq": 1.05,
        "yoy": 4.9
      },
      "hicp": 105.28,
      "hicpYoy": 1.33,
      "realHpi": 108.16,
      "source": "snapshot"
    },
    {
      "geo": "FR",
      "period": "2020-Q2",
      "year": 2020,
      "quarter": 2,
      "hpi": {
        "total": 115.52,
        "new": 114.64,
        "existing": 115.66,
        "qoq": 1.45,
        "yoy": 5.16
      },
      "hicp": 105.46,
      "hicpYoy": 0.33,
      "realHpi": 109.54,
      "source": "snapshot"
    },
    {
      "geo": "FR",
      "period": "2020-Q3",
      "year": 2020,
      "quarter": 3,
      "hpi": {
        "total": 117.8,
        "new": 116.08,
        "existing": 118.09,
        "qoq": 1.97,
        "yoy": 4.87
      },
      "hicp": 105.73,
      "hicpYoy": 0.36,
      "realHpi": 111.42,
      "source": "snapshot"
    },
    {
      "geo": "FR",
      "period": "2020-Q4",
      "year": 2020,
      "quarter": 4,
      "hpi": {
        "total": 119.27,
        "new": 117.17,
        "existing": 119.62,
        "qoq": 1.25,
        "yoy": 5.84
      },
      "hicp": 105.51,
      "hicpYoy": 0.09,
      "realHpi": 113.04,
      "source": "snapshot"
    },
    {
      "geo": "FR",
      "period": "2021-Q1",
      "year": 2021,
      "quarter": 1,
      "hpi": {
        "total": 120.22,
        "new": 118.93,
        "existing": 120.46,
        "qoq": 0.8,
        "yoy": 5.58
      },
      "hicp": 106.3,
      "hicpYoy": 0.97,
      "realHpi": 113.1,
      "source": "snapshot"
    },
    {
      "geo": "FR",
      "period": "2021-Q2",
      "year": 2021,
      "quarter": 2,
      "hpi": {
        "total": 122.53,
        "new": 120.4,
        "existing": 122.89,
        "qoq": 1.92,
        "yoy": 6.07
      },
      "hicp": 107.32,
      "hicpYoy": 1.76,
      "realHpi": 114.17,
      "source": "snapshot"
    },
    {
      "geo": "FR",
      "period": "2021-Q3",
      "year": 2021,
      "quarter": 3,
      "hpi": {
        "total": 126.24,
        "new": 121.74,
        "existing": 126.95,
        "qoq": 3.03,
        "yoy": 7.16
      },
      "hicp": 108.06,
      "hicpYoy": 2.2,
      "realHpi": 116.82,
      "source": "snapshot"
    },
    {
      "geo": "FR",
      "period": "2021-Q4",
      "year": 2021,
      "quarter": 4,
      "hpi": {
        "total": 127.52,
        "new": 123.52,
        "existing": 128.16,
        "qoq": 1.01,
        "yoy": 6.92
      },
      "hicp": 109.02,
      "hicpYoy": 3.33,
      "realHpi": 116.97,
      "source": "snapshot"
    },
    {
      "geo": "FR",
      "period": "2022-Q1",
      "year": 2022,
      "quarter": 1,
      "hpi": {
        "total": 128.6,
        "new": 124.43,
        "existing": 129.26,
        "qoq": 0.85,
        "yoy": 6.97
      },
      "hicp": 110.75,
      "hicpYoy": 4.19,
      "realHpi": 116.12,
      "source": "snapshot"
    },
    {
      "geo": "FR",
      "period": "2022-Q2",
      "year": 2022,
      "quarter": 2,
      "hpi": {
        "total": 130.83,
        "new": 127.98,
        "existing": 131.3,
        "qoq": 1.73,
        "yoy": 6.77
      },
      "hicp": 113.67,
      "hicpYoy": 5.92,
      "realHpi": 115.1,
      "source": "snapshot"
    },
    {
      "geo": "FR",
      "period": "2022-Q3",
      "year": 2022,
      "quarter": 3,
      "hpi": {
        "total": 134.34,
        "new": 129.66,
        "existing": 135.07,
        "qoq": 2.68,
        "yoy": 6.42
      },
      "hicp": 115.11,
      "hicpYoy": 6.52,
      "realHpi": 116.71,
      "source": "snapshot"
    },
    {
      "geo": "FR",
      "period": "2022-Q4",
      "year": 2022,
      "quarter": 4,
      "hpi": {
        "total": 133.5,
        "new": 130.17,
        "existing": 134.04,
        "qoq": -0.63,
        "yoy": 4.69
      },
      "hicp": 116.61,
      "hicpYoy": 6.96,
      "realHpi": 114.48,
      "source": "snapshot"
    },
    {
      "geo": "FR",
      "period": "2023-Q1",
      "year": 2023,
      "quarter": 1,
      "hpi": {
        "total": 132.32,
        "new": 130.02,
        "existing": 132.72,
        "qoq": -0.88,
        "yoy": 2.89
      },
      "hicp": 118.51,
      "hicpYoy": 7.01,
      "realHpi": 111.65,
      "source": "snapshot"
    },
    {
      "geo": "FR",
      "period": "2023-Q2",
      "year": 2023,
      "quarter": 2,
      "hpi": {
        "total": 131.72,
        "new": 130.45,
        "existing": 131.97,
        "qoq": -0.45,
        "yoy": 0.68
      },
      "hicp": 120.57,
      "hicpYoy": 6.07,
      "realHpi": 109.25,
      "source": "snapshot"
    },
    {
      "geo": "FR",
      "period": "2023-Q3",
      "year": 2023,
      "quarter": 3,
      "hpi": {
        "total": 132.25,
        "new": 129.98,
        "existing": 132.64,
        "qoq": 0.4,
        "yoy": -1.56
      },
      "hicp": 121.42,
      "hicpYoy": 5.48,
      "realHpi": 108.92,
      "source": "snapshot"
    },
    {
      "geo": "FR",
      "period": "2023-Q4",
      "year": 2023,
      "quarter": 4,
      "hpi": {
        "total": 128.73,
        "new": 129.04,
        "existing": 128.76,
        "qoq": -2.66,
        "yoy": -3.57
      },
      "hicp": 121.47,
      "hicpYoy": 4.17,
      "realHpi": 105.98,
      "source": "snapshot"
    },
    {
      "geo": "FR",
      "period": "2024-Q1",
      "year": 2024,
      "quarter": 1,
      "hpi": {
        "total": 125.96,
        "new": 128.31,
        "existing": 125.78,
        "qoq": -2.15,
        "yoy": -4.81
      },
      "hicp": 122.07,
      "hicpYoy": 3.0,
      "realHpi": 103.19,
      "source": "snapshot"
    },
    {
      "geo": "FR",
      "period": "2024-Q2",
      "year": 2024,
      "quarter": 2,
      "hpi": {
        "total": 125.68,
        "new": 128.54,
        "existing": 125.44,
        "qoq": -0.22,
        "yoy": -4.59
      },
      "hicp": 123.59,
      "hicpYoy": 2.5,
      "realHpi": 101.69,
      "source": "snapshot"
    },
    {
      "geo": "FR",
      "period": "2024-Q3",
      "year": 2024,
      "quarter": 3,
      "hpi": {
        "total": 127.64,
        "new": 129.58,
        "existing": 127.49,
        "qoq": 1.56,
        "yoy": -3.49
      },
      "hicp": 123.98,
      "hicpYoy": 2.11,
      "realHpi": 102.95,
      "source": "snapshot"
    },
    {
      "geo": "FR",
      "period": "2024-Q4",
      "year": 2024,
      "quarter": 4,
      "hpi": {
        "total": 126.28,
        "new": 129.71,
        "existing": 125.98,
        "qoq": -1.07,
        "yoy": -1.9
      },
      "hicp": 123.51,
      "hicpYoy": 1.68,
      "realHpi": 102.24,
      "source": "snapshot"
    },
    {
      "geo": "FR",
      "period": "2025-Q1",
      "year": 2025,
      "quarter": 1,
      "hpi": {
        "total": 126.54,
        "new": 130.85,
        "existing": 126.14,
        "qoq": 0.21,
        "yoy": 0.46
      },
      "hicp": 123.55,
      "hicpYoy": 1.21,
      "realHpi": 102.42,
      "source": "snapshot"
    },
    {
      "geo": "FR",
      "period": "2025-Q2",
      "year": 2025,
      "quarter": 2,
      "hpi": {
        "total": 126.54,
        "new": 131.28,
        "existing": 126.1,
        "qoq": 0.0,
        "yoy": 0.68
      },
      "hicp": 124.57,
      "hicpYoy": 0.79,
      "realHpi": 101.58,
      "source": "snapshot"
    },
    {
      "geo": "FR",
      "period": "2025-Q3",
      "year": 2025,
      "quarter": 3,
      "hpi": {
        "total": 128.48,
        "new": 130.91,
        "existing": 128.28,
        "qoq": 1.53,
        "yoy": 0.66
      },
      "hicp": 125.16,
      "hicpYoy": 0.95,
      "realHpi": 102.65,
      "source": "snapshot"
    },
    {
      "geo": "FR",
      "period": "2025-Q4",
      "year": 2025,
      "quarter": 4,
      "hpi": {
        "total": 127.46,
        "new": 130.58,
        "existing": 127.19,
        "qoq": -0.79,
        "yoy": 0.93
      },
      "hicp": 124.45,
      "hicpYoy": 0.76,
      "realHpi": 102.42,
      "source": "snapshot"
    },
    {
      "geo": "FR",
      "period": "2026-Q1",
      "year": 2026,
      "quarter": 1,
      "hpi": {
        "total": 126.56,
        "new": 131.14,
        "existing": 126.18,
        "qoq": -0.71,
        "yoy": 0.02
      },
      "hicp": null,
      "hicpYoy": null,
      "realHpi": null,
      "source": "snapshot"
    },
    {
      "geo": "FR",
      "period": "2026-Q2",
      "year": 2026,
      "quarter": 2,
      "hpi": {
        "total": 125.54,
        "new": 131.25,
        "existing": 125.06,
        "qoq": -0.81,
        "yoy": -0.79
      },
      "hicp": null,
      "hicpYoy": null,
      "realHpi": null,
      "source": "snapshot"
    }
  ],
  "DE": [
    {
      "geo": "DE",
      "period": "2010-Q1",
      "year": 2010,
      "quarter": 1,
      "hpi": {
        "total": 83.0,
        "new": 82.6,
        "existing": 83.1,
        "qoq": null,
        "yoy": null
      },
      "hicp": 92.07,
      "hicpYoy": null,
      "realHpi": 90.15,
      "source": "snapshot"
    },
    {
      "geo": "DE",
      "period": "2010-Q2",
      "year": 2010,
      "quarter": 2,
      "hpi": {
        "total": 84.3,
        "new": 82.6,
        "existing": 84.6,
        "qoq": 1.57,
        "yoy": null
      },
      "hicp": 92.5,
      "hicpYoy": null,
      "realHpi": 91.14,
      "source": "snapshot"
    },
    {
      "geo": "DE",
      "period": "2010-Q3",
      "year": 2010,
      "quarter": 3,
      "hpi": {
        "total": 84.4,
        "new": 84.8,
        "existing": 84.3,
        "qoq": 0.12,
        "yoy": null
      },
      "hicp": 92.8,
      "hicpYoy": null,
      "realHpi": 90.95,
      "source": "snapshot"
    },
    {
      "geo": "DE",
      "period": "2010-Q4",
      "year": 2010,
      "quarter": 4,
      "hpi": {
        "total": 83.7,
        "new": 84.4,
        "existing": 83.6,
        "qoq": -0.83,
        "yoy": null
      },
      "hicp": 93.23,
      "hicpYoy": null,
      "realHpi": 89.78,
      "source": "snapshot"
    },
    {
      "geo": "DE",
      "period": "2011-Q1",
      "year": 2011,
      "quarter": 1,
      "hpi": {
        "total": 86.1,
        "new": 85.4,
        "existing": 86.2,
        "qoq": 2.87,
        "yoy": 3.73
      },
      "hicp": 94.1,
      "hicpYoy": 2.2,
      "realHpi": 91.5,
      "source": "snapshot"
    },
    {
      "geo": "DE",
      "period": "2011-Q2",
      "year": 2011,
      "quarter": 2,
      "hpi": {
        "total": 87.1,
        "new": 88.1,
        "existing": 87.0,
        "qoq": 1.16,
        "yoy": 3.32
      },
      "hicp": 94.83,
      "hicpYoy": 2.52,
      "realHpi": 91.85,
      "source": "snapshot"
    },
    {
      "geo": "DE",
      "period": "2011-Q3",
      "year": 2011,
      "quarter": 3,
      "hpi": {
        "total": 86.7,
        "new": 89.5,
        "existing": 86.3,
        "qoq": -0.46,
        "yoy": 2.73
      },
      "hicp": 95.23,
      "hicpYoy": 2.62,
      "realHpi": 91.04,
      "source": "snapshot"
    },
    {
      "geo": "DE",
      "period": "2011-Q4",
      "year": 2011,
      "quarter": 4,
      "hpi": {
        "total": 87.3,
        "new": 88.3,
        "existing": 87.2,
        "qoq": 0.69,
        "yoy": 4.3
      },
      "hicp": 95.63,
      "hicpYoy": 2.57,
      "realHpi": 91.29,
      "source": "snapshot"
    },
    {
      "geo": "DE",
      "period": "2012-Q1",
      "year": 2012,
      "quarter": 1,
      "hpi": {
        "total": 88.0,
        "new": 89.1,
        "existing": 87.8,
        "qoq": 0.8,
        "yoy": 2.21
      },
      "hicp": 96.37,
      "hicpYoy": 2.41,
      "realHpi": 91.31,
      "source": "snapshot"
    },
    {
      "geo": "DE",
      "period": "2012-Q2",
      "year": 2012,
      "quarter": 2,
      "hpi": {
        "total": 89.1,
        "new": 89.7,
        "existing": 89.0,
        "qoq": 1.25,
        "yoy": 2.3
      },
      "hicp": 96.8,
      "hicpYoy": 2.08,
      "realHpi": 92.05,
      "source": "snapshot"
    },
    {
      "geo": "DE",
      "period": "2012-Q3",
      "year": 2012,
      "quarter": 3,
      "hpi": {
        "total": 90.4,
        "new": 90.6,
        "existing": 90.4,
        "qoq": 1.46,
        "yoy": 4.27
      },
      "hicp": 97.27,
      "hicpYoy": 2.14,
      "realHpi": 92.94,
      "source": "snapshot"
    },
    {
      "geo": "DE",
      "period": "2012-Q4",
      "year": 2012,
      "quarter": 4,
      "hpi": {
        "total": 91.6,
        "new": 91.8,
        "existing": 91.6,
        "qoq": 1.33,
        "yoy": 4.93
      },
      "hicp": 97.57,
      "hicpYoy": 2.03,
      "realHpi": 93.88,
      "source": "snapshot"
    },
    {
      "geo": "DE",
      "period": "2013-Q1",
      "year": 2013,
      "quarter": 1,
      "hpi": {
        "total": 91.3,
        "new": 90.9,
        "existing": 91.4,
        "qoq": -0.33,
        "yoy": 3.75
      },
      "hicp": 98.13,
      "hicpYoy": 1.83,
      "realHpi": 93.04,
      "source": "snapshot"
    },
    {
      "geo": "DE",
      "period": "2013-Q2",
      "year": 2013,
      "quarter": 2,
      "hpi": {
        "total": 93.1,
        "new": 92.0,
        "existing": 93.2,
        "qoq": 1.97,
        "yoy": 4.49
      },
      "hicp": 98.3,
      "hicpYoy": 1.55,
      "realHpi": 94.71,
      "source": "snapshot"
    },
    {
      "geo": "DE",
      "period": "2013-Q3",
      "year": 2013,
      "quarter": 3,
      "hpi": {
        "total": 92.9,
        "new": 91.5,
        "existing": 93.1,
        "qoq": -0.21,
        "yoy": 2.77
      },
      "hicp": 98.9,
      "hicpYoy": 1.68,
      "realHpi": 93.93,
      "source": "snapshot"
    },
    {
      "geo": "DE",
      "period": "2013-Q4",
      "year": 2013,
      "quarter": 4,
      "hpi": {
        "total": 93.0,
        "new": 91.2,
        "existing": 93.3,
        "qoq": 0.11,
        "yoy": 1.53
      },
      "hicp": 98.9,
      "hicpYoy": 1.36,
      "realHpi": 94.03,
      "source": "snapshot"
    },
    {
      "geo": "DE",
      "period": "2014-Q1",
      "year": 2014,
      "quarter": 1,
      "hpi": {
        "total": 93.8,
        "new": 92.3,
        "existing": 94.0,
        "qoq": 0.86,
        "yoy": 2.74
      },
      "hicp": 99.07,
      "hicpYoy": 0.96,
      "realHpi": 94.68,
      "source": "snapshot"
    },
    {
      "geo": "DE",
      "period": "2014-Q2",
      "year": 2014,
      "quarter": 2,
      "hpi": {
        "total": 95.7,
        "new": 94.3,
        "existing": 95.9,
        "qoq": 2.03,
        "yoy": 2.79
      },
      "hicp": 99.2,
      "hicpYoy": 0.92,
      "realHpi": 96.47,
      "source": "snapshot"
    },
    {
      "geo": "DE",
      "period": "2014-Q3",
      "year": 2014,
      "quarter": 3,
      "hpi": {
        "total": 96.2,
        "new": 96.1,
        "existing": 96.3,
        "qoq": 0.52,
        "yoy": 3.55
      },
      "hicp": 99.67,
      "hicpYoy": 0.78,
      "realHpi": 96.52,
      "source": "snapshot"
    },
    {
      "geo": "DE",
      "period": "2014-Q4",
      "year": 2014,
      "quarter": 4,
      "hpi": {
        "total": 96.2,
        "new": 96.5,
        "existing": 96.1,
        "qoq": 0.0,
        "yoy": 3.44
      },
      "hicp": 99.33,
      "hicpYoy": 0.43,
      "realHpi": 96.85,
      "source": "snapshot"
    },
    {
      "geo": "DE",
      "period": "2015-Q1",
      "year": 2015,
      "quarter": 1,
      "hpi": {
        "total": 97.8,
        "new": 97.5,
        "existing": 97.8,
        "qoq": 1.66,
        "yoy": 4.26
      },
      "hicp": 98.93,
      "hicpYoy": -0.14,
      "realHpi": 98.86,
      "source": "snapshot"
    },
    {
      "geo": "DE",
      "period": "2015-Q2",
      "year": 2015,
      "quarter": 2,
      "hpi": {
        "total": 99.9,
        "new": 99.1,
        "existing": 100.1,
        "qoq": 2.15,
        "yoy": 4.39
      },
      "hicp": 100.43,
      "hicpYoy": 1.24,
      "realHpi": 99.47,
      "source": "snapshot"
    },
    {
      "geo": "DE",
      "period": "2015-Q3",
      "year": 2015,
      "quarter": 3,
      "hpi": {
        "total": 100.4,
        "new": 100.7,
        "existing": 100.4,
        "qoq": 0.5,
        "yoy": 4.37
      },
      "hicp": 100.73,
      "hicpYoy": 1.06,
      "realHpi": 99.67,
      "source": "snapshot"
    },
    {
      "geo": "DE",
      "period": "2015-Q4",
      "year": 2015,
      "quarter": 4,
      "hpi": {
        "total": 101.8,
        "new": 102.7,
        "existing": 101.7,
        "qoq": 1.39,
        "yoy": 5.82
      },
      "hicp": 99.87,
      "hicpYoy": 0.54,
      "realHpi": 101.93,
      "source": "snapshot"
    },
    {
      "geo": "DE",
      "period": "2016-Q1",
      "year": 2016,
      "quarter": 1,
      "hpi": {
        "total": 103.9,
        "new": 104.2,
        "existing": 103.8,
        "qoq": 2.06,
        "yoy": 6.24
      },
      "hicp": 99.07,
      "hicpYoy": 0.14,
      "realHpi": 104.88,
      "source": "snapshot"
    },
    {
      "geo": "DE",
      "period": "2016-Q2",
      "year": 2016,
      "quarter": 2,
      "hpi": {
        "total": 106.9,
        "new": 106.2,
        "existing": 107.0,
        "qoq": 2.89,
        "yoy": 7.01
      },
      "hicp": 100.33,
      "hicpYoy": -0.1,
      "realHpi": 106.55,
      "source": "snapshot"
    },
    {
      "geo": "DE",
      "period": "2016-Q3",
      "year": 2016,
      "quarter": 3,
      "hpi": {
        "total": 108.8,
        "new": 107.5,
        "existing": 109.0,
        "qoq": 1.78,
        "yoy": 8.37
      },
      "hicp": 101.13,
      "hicpYoy": 0.4,
      "realHpi": 107.58,
      "source": "snapshot"
    },
    {
      "geo": "DE",
      "period": "2016-Q4",
      "year": 2016,
      "quarter": 4,
      "hpi": {
        "total": 110.4,
        "new": 109.5,
        "existing": 110.5,
        "qoq": 1.47,
        "yoy": 8.45
      },
      "hicp": 100.9,
      "hicpYoy": 1.03,
      "realHpi": 109.42,
      "source": "snapshot"
    },
    {
      "geo": "DE",
      "period": "2017-Q1",
      "year": 2017,
      "quarter": 1,
      "hpi": {
        "total": 110.9,
        "new": 109.3,
        "existing": 111.2,
        "qoq": 0.45,
        "yoy": 6.74
      },
      "hicp": 100.83,
      "hicpYoy": 1.78,
      "realHpi": 109.99,
      "source": "snapshot"
    },
    {
      "geo": "DE",
      "period": "2017-Q2",
      "year": 2017,
      "quarter": 2,
      "hpi": {
        "total": 113.1,
        "new": 110.5,
        "existing": 113.5,
        "qoq": 1.98,
        "yoy": 5.8
      },
      "hicp": 102.0,
      "hicpYoy": 1.66,
      "realHpi": 110.88,
      "source": "snapshot"
    },
    {
      "geo": "DE",
      "period": "2017-Q3",
      "year": 2017,
      "quarter": 3,
      "hpi": {
        "total": 115.0,
        "new": 112.9,
        "existing": 115.3,
        "qoq": 1.68,
        "yoy": 5.7
      },
      "hicp": 102.97,
      "hicpYoy": 1.82,
      "realHpi": 111.68,
      "source": "snapshot"
    },
    {
      "geo": "DE",
      "period": "2017-Q4",
      "year": 2017,
      "quarter": 4,
      "hpi": {
        "total": 117.3,
        "new": 114.4,
        "existing": 117.8,
        "qoq": 2.0,
        "yoy": 6.25
      },
      "hicp": 102.47,
      "hicpYoy": 1.56,
      "realHpi": 114.47,
      "source": "snapshot"
    },
    {
      "geo": "DE",
      "period": "2018-Q1",
      "year": 2018,
      "quarter": 1,
      "hpi": {
        "total": 118.3,
        "new": 116.5,
        "existing": 118.6,
        "qoq": 0.85,
        "yoy": 6.67
      },
      "hicp": 102.3,
      "hicpYoy": 1.46,
      "realHpi": 115.64,
      "source": "snapshot"
    },
    {
      "geo": "DE",
      "period": "2018-Q2",
      "year": 2018,
      "quarter": 2,
      "hpi": {
        "total": 120.6,
        "new": 118.1,
        "existing": 121.1,
        "qoq": 1.94,
        "yoy": 6.63
      },
      "hicp": 103.97,
      "hicpYoy": 1.93,
      "realHpi": 115.99,
      "source": "snapshot"
    },
    {
      "geo": "DE",
      "period": "2018-Q3",
      "year": 2018,
      "quarter": 3,
      "hpi": {
        "total": 123.1,
        "new": 121.0,
        "existing": 123.5,
        "qoq": 2.07,
        "yoy": 7.04
      },
      "hicp": 105.23,
      "hicpYoy": 2.19,
      "realHpi": 116.98,
      "source": "snapshot"
    },
    {
      "geo": "DE",
      "period": "2018-Q4",
      "year": 2018,
      "quarter": 4,
      "hpi": {
        "total": 124.6,
        "new": 120.0,
        "existing": 125.4,
        "qoq": 1.22,
        "yoy": 6.22
      },
      "hicp": 104.67,
      "hicpYoy": 2.15,
      "realHpi": 119.04,
      "source": "snapshot"
    },
    {
      "geo": "DE",
      "period": "2019-Q1",
      "year": 2019,
      "quarter": 1,
      "hpi": {
        "total": 124.6,
        "new": 119.5,
        "existing": 125.5,
        "qoq": 0.0,
        "yoy": 5.33
      },
      "hicp": 103.9,
      "hicpYoy": 1.56,
      "realHpi": 119.92,
      "source": "snapshot"
    },
    {
      "geo": "DE",
      "period": "2019-Q2",
      "year": 2019,
      "quarter": 2,
      "hpi": {
        "total": 127.8,
        "new": 121.4,
        "existing": 129.0,
        "qoq": 2.57,
        "yoy": 5.97
      },
      "hicp": 105.7,
      "hicpYoy": 1.66,
      "realHpi": 120.91,
      "source": "snapshot"
    },
    {
      "geo": "DE",
      "period": "2019-Q3",
      "year": 2019,
      "quarter": 3,
      "hpi": {
        "total": 129.6,
        "new": 123.3,
        "existing": 130.8,
        "qoq": 1.41,
        "yoy": 5.28
      },
      "hicp": 106.3,
      "hicpYoy": 1.02,
      "realHpi": 121.92,
      "source": "snapshot"
    },
    {
      "geo": "DE",
      "period": "2019-Q4",
      "year": 2019,
      "quarter": 4,
      "hpi": {
        "total": 132.7,
        "new": 127.2,
        "existing": 133.7,
        "qoq": 2.39,
        "yoy": 6.5
      },
      "hicp": 105.9,
      "hicpYoy": 1.18,
      "realHpi": 125.31,
      "source": "snapshot"
    },
    {
      "geo": "DE",
      "period": "2020-Q1",
      "year": 2020,
      "quarter": 1,
      "hpi": {
        "total": 133.8,
        "new": 126.0,
        "existing": 135.3,
        "qoq": 0.83,
        "yoy": 7.38
      },
      "hicp": 105.53,
      "hicpYoy": 1.57,
      "realHpi": 126.79,
      "source": "snapshot"
    },
    {
      "geo": "DE",
      "period": "2020-Q2",
      "year": 2020,
      "quarter": 2,
      "hpi": {
        "total": 136.2,
        "new": 129.1,
        "existing": 137.5,
        "qoq": 1.79,
        "yoy": 6.57
      },
      "hicp": 106.43,
      "hicpYoy": 0.69,
      "realHpi": 127.97,
      "source": "snapshot"
    },
    {
      "geo": "DE",
      "period": "2020-Q3",
      "year": 2020,
      "quarter": 3,
      "hpi": {
        "total": 140.3,
        "new": 131.2,
        "existing": 142.0,
        "qoq": 3.01,
        "yoy": 8.26
      },
      "hicp": 106.13,
      "hicpYoy": -0.16,
      "realHpi": 132.2,
      "source": "snapshot"
    },
    {
      "geo": "DE",
      "period": "2020-Q4",
      "year": 2020,
      "quarter": 4,
      "hpi": {
        "total": 144.3,
        "new": 135.4,
        "existing": 145.9,
        "qoq": 2.85,
        "yoy": 8.74
      },
      "hicp": 105.27,
      "hicpYoy": -0.59,
      "realHpi": 137.08,
      "source": "snapshot"
    },
    {
      "geo": "DE",
      "period": "2021-Q1",
      "year": 2021,
      "quarter": 1,
      "hpi": {
        "total": 146.3,
        "new": 133.3,
        "existing": 148.7,
        "qoq": 1.39,
        "yoy": 9.34
      },
      "hicp": 107.37,
      "hicpYoy": 1.74,
      "realHpi": 136.26,
      "source": "snapshot"
    },
    {
      "geo": "DE",
      "period": "2021-Q2",
      "year": 2021,
      "quarter": 2,
      "hpi": {
        "total": 151.8,
        "new": 138.1,
        "existing": 154.4,
        "qoq": 3.76,
        "yoy": 11.45
      },
      "hicp": 108.73,
      "hicpYoy": 2.16,
      "realHpi": 139.61,
      "source": "snapshot"
    },
    {
      "geo": "DE",
      "period": "2021-Q3",
      "year": 2021,
      "quarter": 3,
      "hpi": {
        "total": 158.2,
        "new": 142.0,
        "existing": 161.2,
        "qoq": 4.22,
        "yoy": 12.76
      },
      "hicp": 109.87,
      "hicpYoy": 3.52,
      "realHpi": 143.99,
      "source": "snapshot"
    },
    {
      "geo": "DE",
      "period": "2021-Q4",
      "year": 2021,
      "quarter": 4,
      "hpi": {
        "total": 162.5,
        "new": 146.7,
        "existing": 165.5,
        "qoq": 2.72,
        "yoy": 12.61
      },
      "hicp": 111.0,
      "hicpYoy": 5.44,
      "realHpi": 146.4,
      "source": "snapshot"
    },
    {
      "geo": "DE",
      "period": "2022-Q1",
      "year": 2022,
      "quarter": 1,
      "hpi": {
        "total": 164.1,
        "new": 145.0,
        "existing": 167.6,
        "qoq": 0.98,
        "yoy": 12.17
      },
      "hicp": 113.9,
      "hicpYoy": 6.08,
      "realHpi": 144.07,
      "source": "snapshot"
    },
    {
      "geo": "DE",
      "period": "2022-Q2",
      "year": 2022,
      "quarter": 2,
      "hpi": {
        "total": 167.4,
        "new": 149.1,
        "existing": 170.8,
        "qoq": 2.01,
        "yoy": 10.28
      },
      "hicp": 117.73,
      "hicpYoy": 8.28,
      "realHpi": 142.19,
      "source": "snapshot"
    },
    {
      "geo": "DE",
      "period": "2022-Q3",
      "year": 2022,
      "quarter": 3,
      "hpi": {
        "total": 166.3,
        "new": 150.8,
        "existing": 169.2,
        "qoq": -0.66,
        "yoy": 5.12
      },
      "hicp": 120.2,
      "hicpYoy": 9.4,
      "realHpi": 138.35,
      "source": "snapshot"
    },
    {
      "geo": "DE",
      "period": "2022-Q4",
      "year": 2022,
      "quarter": 4,
      "hpi": {
        "total": 158.5,
        "new": 149.7,
        "existing": 160.2,
        "qoq": -4.69,
        "yoy": -2.46
      },
      "hicp": 123.0,
      "hicpYoy": 10.81,
      "realHpi": 128.86,
      "source": "snapshot"
    },
    {
      "geo": "DE",
      "period": "2023-Q1",
      "year": 2023,
      "quarter": 1,
      "hpi": {
        "total": 153.7,
        "new": 146.4,
        "existing": 155.1,
        "qoq": -3.03,
        "yoy": -6.34
      },
      "hicp": 123.83,
      "hicpYoy": 8.72,
      "realHpi": 124.12,
      "source": "snapshot"
    },
    {
      "geo": "DE",
      "period": "2023-Q2",
      "year": 2023,
      "quarter": 2,
      "hpi": {
        "total": 151.6,
        "new": 144.3,
        "existing": 153.0,
        "qoq": -1.37,
        "yoy": -9.44
      },
      "hicp": 125.83,
      "hicpYoy": 6.88,
      "realHpi": 120.48,
      "source": "snapshot"
    },
    {
      "geo": "DE",
      "period": "2023-Q3",
      "year": 2023,
      "quarter": 3,
      "hpi": {
        "total": 149.3,
        "new": 145.4,
        "existing": 150.0,
        "qoq": -1.52,
        "yoy": -10.22
      },
      "hicp": 127.1,
      "hicpYoy": 5.74,
      "realHpi": 117.47,
      "source": "snapshot"
    },
    {
      "geo": "DE",
      "period": "2023-Q4",
      "year": 2023,
      "quarter": 4,
      "hpi": {
        "total": 146.4,
        "new": 143.7,
        "existing": 146.9,
        "qoq": -1.94,
        "yoy": -7.63
      },
      "hicp": 126.7,
      "hicpYoy": 3.01,
      "realHpi": 115.55,
      "source": "snapshot"
    },
    {
      "geo": "DE",
      "period": "2024-Q1",
      "year": 2024,
      "quarter": 1,
      "hpi": {
        "total": 145.8,
        "new": 143.1,
        "existing": 146.2,
        "qoq": -0.41,
        "yoy": -5.14
      },
      "hicp": 127.2,
      "hicpYoy": 2.72,
      "realHpi": 114.62,
      "source": "snapshot"
    },
    {
      "geo": "DE",
      "period": "2024-Q2",
      "year": 2024,
      "quarter": 2,
      "hpi": {
        "total": 147.8,
        "new": 145.3,
        "existing": 148.2,
        "qoq": 1.37,
        "yoy": -2.51
      },
      "hicp": 129.07,
      "hicpYoy": 2.57,
      "realHpi": 114.51,
      "source": "snapshot"
    },
    {
      "geo": "DE",
      "period": "2024-Q3",
      "year": 2024,
      "quarter": 3,
      "hpi": {
        "total": 149.0,
        "new": 147.5,
        "existing": 149.0,
        "qoq": 0.81,
        "yoy": -0.2
      },
      "hicp": 129.83,
      "hicpYoy": 2.15,
      "realHpi": 114.77,
      "source": "snapshot"
    },
    {
      "geo": "DE",
      "period": "2024-Q4",
      "year": 2024,
      "quarter": 4,
      "hpi": {
        "total": 149.2,
        "new": 147.0,
        "existing": 149.5,
        "qoq": 0.13,
        "yoy": 1.91
      },
      "hicp": 129.9,
      "hicpYoy": 2.53,
      "realHpi": 114.86,
      "source": "snapshot"
    },
    {
      "geo": "DE",
      "period": "2025-Q1",
      "year": 2025,
      "quarter": 1,
      "hpi": {
        "total": 151.3,
        "new": 149.7,
        "existing": 151.5,
        "qoq": 1.41,
        "yoy": 3.77
      },
      "hicp": 130.47,
      "hicpYoy": 2.57,
      "realHpi": 115.97,
      "source": "snapshot"
    },
    {
      "geo": "DE",
      "period": "2025-Q2",
      "year": 2025,
      "quarter": 2,
      "hpi": {
        "total": 152.6,
        "new": 149.5,
        "existing": 153.0,
        "qoq": 0.86,
        "yoy": 3.25
      },
      "hicp": 131.77,
      "hicpYoy": 2.09,
      "realHpi": 115.81,
      "source": "snapshot"
    },
    {
      "geo": "DE",
      "period": "2025-Q3",
      "year": 2025,
      "quarter": 3,
      "hpi": {
        "total": 153.7,
        "new": 149.6,
        "existing": 154.4,
        "qoq": 0.72,
        "yoy": 3.15
      },
      "hicp": 132.57,
      "hicpYoy": 2.11,
      "realHpi": 115.94,
      "source": "snapshot"
    },
    {
      "geo": "DE",
      "period": "2025-Q4",
      "year": 2025,
      "quarter": 4,
      "hpi": {
        "total": 153.0,
        "new": 151.1,
        "existing": 153.2,
        "qoq": -0.46,
        "yoy": 2.55
      },
      "hicp": 132.87,
      "hicpYoy": 2.29,
      "realHpi": 115.15,
      "source": "snapshot"
    },
    {
      "geo": "DE",
      "period": "2026-Q1",
      "year": 2026,
      "quarter": 1,
      "hpi": {
        "total": 153.1,
        "new": 152.0,
        "existing": 153.3,
        "qoq": 0.07,
        "yoy": 1.19
      },
      "hicp": null,
      "hicpYoy": null,
      "realHpi": null,
      "source": "snapshot"
    },
    {
      "geo": "DE",
      "period": "2026-Q2",
      "year": 2026,
      "quarter": 2,
      "hpi": {
        "total": 153.5,
        "new": 151.9,
        "existing": 153.7,
        "qoq": 0.26,
        "yoy": 0.59
      },
      "hicp": null,
      "hicpYoy": null,
      "realHpi": null,
      "source": "snapshot"
    }
  ],
  "ES": [
    {
      "geo": "ES",
      "period": "2010-Q1",
      "year": 2010,
      "quarter": 1,
      "hpi": {
        "total": 134.08,
        "new": 123.33,
        "existing": 140.84,
        "qoq": null,
        "yoy": null
      },
      "hicp": 92.41,
      "hicpYoy": null,
      "realHpi": 145.09,
      "source": "snapshot"
    },
    {
      "geo": "ES",
      "period": "2010-Q2",
      "year": 2010,
      "quarter": 2,
      "hpi": {
        "total": 136.26,
        "new": 125.68,
        "existing": 142.6,
        "qoq": 1.63,
        "yoy": null
      },
      "hicp": 94.52,
      "hicpYoy": null,
      "realHpi": 144.16,
      "source": "snapshot"
    },
    {
      "geo": "ES",
      "period": "2010-Q3",
      "year": 2010,
      "quarter": 3,
      "hpi": {
        "total": 134.01,
        "new": 124.14,
        "existing": 139.45,
        "qoq": -1.65,
        "yoy": null
      },
      "hicp": 93.97,
      "hicpYoy": null,
      "realHpi": 142.61,
      "source": "snapshot"
    },
    {
      "geo": "ES",
      "period": "2010-Q4",
      "year": 2010,
      "quarter": 4,
      "hpi": {
        "total": 133.86,
        "new": 123.66,
        "existing": 139.82,
        "qoq": -0.11,
        "yoy": null
      },
      "hicp": 95.41,
      "hicpYoy": null,
      "realHpi": 140.3,
      "source": "snapshot"
    },
    {
      "geo": "ES",
      "period": "2011-Q1",
      "year": 2011,
      "quarter": 1,
      "hpi": {
        "total": 129.31,
        "new": 122.04,
        "existing": 132.01,
        "qoq": -3.4,
        "yoy": -3.56
      },
      "hicp": 95.41,
      "hicpYoy": 3.25,
      "realHpi": 135.53,
      "source": "snapshot"
    },
    {
      "geo": "ES",
      "period": "2011-Q2",
      "year": 2011,
      "quarter": 2,
      "hpi": {
        "total": 127.76,
        "new": 120.26,
        "existing": 130.81,
        "qoq": -1.2,
        "yoy": -6.24
      },
      "hicp": 97.64,
      "hicpYoy": 3.3,
      "realHpi": 130.85,
      "source": "snapshot"
    },
    {
      "geo": "ES",
      "period": "2011-Q3",
      "year": 2011,
      "quarter": 3,
      "hpi": {
        "total": 123.2,
        "new": 116.04,
        "existing": 126.05,
        "qoq": -3.57,
        "yoy": -8.07
      },
      "hicp": 96.7,
      "hicpYoy": 2.91,
      "realHpi": 127.4,
      "source": "snapshot"
    },
    {
      "geo": "ES",
      "period": "2011-Q4",
      "year": 2011,
      "quarter": 4,
      "hpi": {
        "total": 116.8,
        "new": 109.03,
        "existing": 120.67,
        "qoq": -5.19,
        "yoy": -12.74
      },
      "hicp": 98.02,
      "hicpYoy": 2.74,
      "realHpi": 119.16,
      "source": "snapshot"
    },
    {
      "geo": "ES",
      "period": "2012-Q1",
      "year": 2012,
      "quarter": 1,
      "hpi": {
        "total": 110.97,
        "new": 103.76,
        "existing": 114.51,
        "qoq": -4.99,
        "yoy": -14.18
      },
      "hicp": 97.21,
      "hicpYoy": 1.89,
      "realHpi": 114.15,
      "source": "snapshot"
    },
    {
      "geo": "ES",
      "period": "2012-Q2",
      "year": 2012,
      "quarter": 2,
      "hpi": {
        "total": 107.37,
        "new": 101.11,
        "existing": 110.24,
        "qoq": -3.24,
        "yoy": -15.96
      },
      "hicp": 99.49,
      "hicpYoy": 1.89,
      "realHpi": 107.92,
      "source": "snapshot"
    },
    {
      "geo": "ES",
      "period": "2012-Q3",
      "year": 2012,
      "quarter": 3,
      "hpi": {
        "total": 103.36,
        "new": 98.21,
        "existing": 105.43,
        "qoq": -3.73,
        "yoy": -16.1
      },
      "hicp": 99.39,
      "hicpYoy": 2.78,
      "realHpi": 103.99,
      "source": "snapshot"
    },
    {
      "geo": "ES",
      "period": "2012-Q4",
      "year": 2012,
      "quarter": 4,
      "hpi": {
        "total": 101.91,
        "new": 97.13,
        "existing": 103.72,
        "qoq": -1.4,
        "yoy": -12.75
      },
      "hicp": 101.13,
      "hicpYoy": 3.17,
      "realHpi": 100.77,
      "source": "snapshot"
    },
    {
      "geo": "ES",
      "period": "2013-Q1",
      "year": 2013,
      "quarter": 1,
      "hpi": {
        "total": 96.75,
        "new": 95.54,
        "existing": 97.0,
        "qoq": -5.06,
        "yoy": -12.81
      },
      "hicp": 99.9,
      "hicpYoy": 2.77,
      "realHpi": 96.85,
      "source": "snapshot"
    },
    {
      "geo": "ES",
      "period": "2013-Q2",
      "year": 2013,
      "quarter": 2,
      "hpi": {
        "total": 95.98,
        "new": 93.28,
        "existing": 96.89,
        "qoq": -0.8,
        "yoy": -10.61
      },
      "hicp": 101.33,
      "hicpYoy": 1.85,
      "realHpi": 94.72,
      "source": "snapshot"
    },
    {
      "geo": "ES",
      "period": "2013-Q3",
      "year": 2013,
      "quarter": 3,
      "hpi": {
        "total": 96.72,
        "new": 95.46,
        "existing": 96.99,
        "qoq": 0.77,
        "yoy": -6.42
      },
      "hicp": 100.72,
      "hicpYoy": 1.34,
      "realHpi": 96.03,
      "source": "snapshot"
    },
    {
      "geo": "ES",
      "period": "2013-Q4",
      "year": 2013,
      "quarter": 4,
      "hpi": {
        "total": 95.5,
        "new": 94.36,
        "existing": 95.71,
        "qoq": -1.26,
        "yoy": -6.29
      },
      "hicp": 101.35,
      "hicpYoy": 0.22,
      "realHpi": 94.23,
      "source": "snapshot"
    },
    {
      "geo": "ES",
      "period": "2014-Q1",
      "year": 2014,
      "quarter": 1,
      "hpi": {
        "total": 95.2,
        "new": 94.5,
        "existing": 95.32,
        "qoq": -0.31,
        "yoy": -1.6
      },
      "hicp": 99.93,
      "hicpYoy": 0.03,
      "realHpi": 95.27,
      "source": "snapshot"
    },
    {
      "geo": "ES",
      "period": "2014-Q2",
      "year": 2014,
      "quarter": 2,
      "hpi": {
        "total": 96.78,
        "new": 95.08,
        "existing": 97.12,
        "qoq": 1.66,
        "yoy": 0.83
      },
      "hicp": 101.53,
      "hicpYoy": 0.2,
      "realHpi": 95.32,
      "source": "snapshot"
    },
    {
      "geo": "ES",
      "period": "2014-Q3",
      "year": 2014,
      "quarter": 3,
      "hpi": {
        "total": 96.99,
        "new": 96.21,
        "existing": 97.13,
        "qoq": 0.22,
        "yoy": 0.28
      },
      "hicp": 100.33,
      "hicpYoy": -0.39,
      "realHpi": 96.67,
      "source": "snapshot"
    },
    {
      "geo": "ES",
      "period": "2014-Q4",
      "year": 2014,
      "quarter": 4,
      "hpi": {
        "total": 97.18,
        "new": 96.12,
        "existing": 97.38,
        "qoq": 0.2,
        "yoy": 1.76
      },
      "hicp": 100.74,
      "hicpYoy": -0.6,
      "realHpi": 96.47,
      "source": "snapshot"
    },
    {
      "geo": "ES",
      "period": "2015-Q1",
      "year": 2015,
      "quarter": 1,
      "hpi": {
        "total": 96.67,
        "new": 98.27,
        "existing": 96.37,
        "qoq": -0.52,
        "yoy": 1.54
      },
      "hicp": 98.79,
      "hicpYoy": -1.14,
      "realHpi": 97.85,
      "source": "snapshot"
    },
    {
      "geo": "ES",
      "period": "2015-Q2",
      "year": 2015,
      "quarter": 2,
      "hpi": {
        "total": 100.67,
        "new": 99.72,
        "existing": 100.85,
        "qoq": 4.14,
        "yoy": 4.02
      },
      "hicp": 101.19,
      "hicpYoy": -0.33,
      "realHpi": 99.49,
      "source": "snapshot"
    },
    {
      "geo": "ES",
      "period": "2015-Q3",
      "year": 2015,
      "quarter": 3,
      "hpi": {
        "total": 101.34,
        "new": 100.33,
        "existing": 101.53,
        "qoq": 0.67,
        "yoy": 4.48
      },
      "hicp": 99.77,
      "hicpYoy": -0.56,
      "realHpi": 101.57,
      "source": "snapshot"
    },
    {
      "geo": "ES",
      "period": "2015-Q4",
      "year": 2015,
      "quarter": 4,
      "hpi": {
        "total": 101.31,
        "new": 101.68,
        "existing": 101.24,
        "qoq": -0.03,
        "yoy": 4.25
      },
      "hicp": 100.26,
      "hicpYoy": -0.48,
      "realHpi": 101.05,
      "source": "snapshot"
    },
    {
      "geo": "ES",
      "period": "2016-Q1",
      "year": 2016,
      "quarter": 1,
      "hpi": {
        "total": 102.74,
        "new": 104.1,
        "existing": 102.51,
        "qoq": 1.41,
        "yoy": 6.28
      },
      "hicp": 98.0,
      "hicpYoy": -0.8,
      "realHpi": 104.84,
      "source": "snapshot"
    },
    {
      "geo": "ES",
      "period": "2016-Q2",
      "year": 2016,
      "quarter": 2,
      "hpi": {
        "total": 104.55,
        "new": 108.04,
        "existing": 103.98,
        "qoq": 1.76,
        "yoy": 3.85
      },
      "hicp": 100.14,
      "hicpYoy": -1.04,
      "realHpi": 104.4,
      "source": "snapshot"
    },
    {
      "geo": "ES",
      "period": "2016-Q3",
      "year": 2016,
      "quarter": 3,
      "hpi": {
        "total": 105.41,
        "new": 107.66,
        "existing": 105.05,
        "qoq": 0.82,
        "yoy": 4.02
      },
      "hicp": 99.46,
      "hicpYoy": -0.31,
      "realHpi": 105.98,
      "source": "snapshot"
    },
    {
      "geo": "ES",
      "period": "2016-Q4",
      "year": 2016,
      "quarter": 4,
      "hpi": {
        "total": 105.78,
        "new": 105.99,
        "existing": 105.74,
        "qoq": 0.35,
        "yoy": 4.41
      },
      "hicp": 101.05,
      "hicpYoy": 0.79,
      "realHpi": 104.68,
      "source": "snapshot"
    },
    {
      "geo": "ES",
      "period": "2017-Q1",
      "year": 2017,
      "quarter": 1,
      "hpi": {
        "total": 108.2,
        "new": 109.99,
        "existing": 107.93,
        "qoq": 2.29,
        "yoy": 5.31
      },
      "hicp": 100.65,
      "hicpYoy": 2.7,
      "realHpi": 107.5,
      "source": "snapshot"
    },
    {
      "geo": "ES",
      "period": "2017-Q2",
      "year": 2017,
      "quarter": 2,
      "hpi": {
        "total": 110.39,
        "new": 113.09,
        "existing": 109.98,
        "qoq": 2.02,
        "yoy": 5.59
      },
      "hicp": 102.2,
      "hicpYoy": 2.06,
      "realHpi": 108.01,
      "source": "snapshot"
    },
    {
      "geo": "ES",
      "period": "2017-Q3",
      "year": 2017,
      "quarter": 3,
      "hpi": {
        "total": 112.43,
        "new": 114.76,
        "existing": 112.07,
        "qoq": 1.85,
        "yoy": 6.66
      },
      "hicp": 101.3,
      "hicpYoy": 1.85,
      "realHpi": 110.99,
      "source": "snapshot"
    },
    {
      "geo": "ES",
      "period": "2017-Q4",
      "year": 2017,
      "quarter": 4,
      "hpi": {
        "total": 113.39,
        "new": 113.89,
        "existing": 113.3,
        "qoq": 0.85,
        "yoy": 7.19
      },
      "hicp": 102.62,
      "hicpYoy": 1.55,
      "realHpi": 110.5,
      "source": "snapshot"
    },
    {
      "geo": "ES",
      "period": "2018-Q1",
      "year": 2018,
      "quarter": 1,
      "hpi": {
        "total": 114.96,
        "new": 116.19,
        "existing": 114.76,
        "qoq": 1.38,
        "yoy": 6.25
      },
      "hicp": 101.73,
      "hicpYoy": 1.07,
      "realHpi": 113.01,
      "source": "snapshot"
    },
    {
      "geo": "ES",
      "period": "2018-Q2",
      "year": 2018,
      "quarter": 2,
      "hpi": {
        "total": 117.9,
        "new": 119.21,
        "existing": 117.69,
        "qoq": 2.56,
        "yoy": 6.8
      },
      "hicp": 104.08,
      "hicpYoy": 1.84,
      "realHpi": 113.28,
      "source": "snapshot"
    },
    {
      "geo": "ES",
      "period": "2018-Q3",
      "year": 2018,
      "quarter": 3,
      "hpi": {
        "total": 120.48,
        "new": 121.61,
        "existing": 120.3,
        "qoq": 2.19,
        "yoy": 7.16
      },
      "hicp": 103.59,
      "hicpYoy": 2.26,
      "realHpi": 116.3,
      "source": "snapshot"
    },
    {
      "geo": "ES",
      "period": "2018-Q4",
      "year": 2018,
      "quarter": 4,
      "hpi": {
        "total": 120.97,
        "new": 123.2,
        "existing": 120.62,
        "qoq": 0.41,
        "yoy": 6.68
      },
      "hicp": 104.43,
      "hicpYoy": 1.76,
      "realHpi": 115.84,
      "source": "snapshot"
    },
    {
      "geo": "ES",
      "period": "2019-Q1",
      "year": 2019,
      "quarter": 1,
      "hpi": {
        "total": 122.88,
        "new": 128.52,
        "existing": 121.96,
        "qoq": 1.58,
        "yoy": 6.89
      },
      "hicp": 102.88,
      "hicpYoy": 1.13,
      "realHpi": 119.44,
      "source": "snapshot"
    },
    {
      "geo": "ES",
      "period": "2019-Q2",
      "year": 2019,
      "quarter": 2,
      "hpi": {
        "total": 124.27,
        "new": 127.96,
        "existing": 123.68,
        "qoq": 1.13,
        "yoy": 5.4
      },
      "hicp": 105.18,
      "hicpYoy": 1.06,
      "realHpi": 118.15,
      "source": "snapshot"
    },
    {
      "geo": "ES",
      "period": "2019-Q3",
      "year": 2019,
      "quarter": 3,
      "hpi": {
        "total": 126.26,
        "new": 130.21,
        "existing": 125.62,
        "qoq": 1.6,
        "yoy": 4.8
      },
      "hicp": 104.04,
      "hicpYoy": 0.43,
      "realHpi": 121.36,
      "source": "snapshot"
    },
    {
      "geo": "ES",
      "period": "2019-Q4",
      "year": 2019,
      "quarter": 4,
      "hpi": {
        "total": 125.44,
        "new": 129.69,
        "existing": 124.75,
        "qoq": -0.65,
        "yoy": 3.7
      },
      "hicp": 104.95,
      "hicpYoy": 0.5,
      "realHpi": 119.52,
      "source": "snapshot"
    },
    {
      "geo": "ES",
      "period": "2020-Q1",
      "year": 2020,
      "quarter": 1,
      "hpi": {
        "total": 126.92,
        "new": 136.4,
        "existing": 125.3,
        "qoq": 1.18,
        "yoy": 3.29
      },
      "hicp": 103.59,
      "hicpYoy": 0.69,
      "realHpi": 122.52,
      "source": "snapshot"
    },
    {
      "geo": "ES",
      "period": "2020-Q2",
      "year": 2020,
      "quarter": 2,
      "hpi": {
        "total": 126.98,
        "new": 133.37,
        "existing": 125.91,
        "qoq": 0.05,
        "yoy": 2.18
      },
      "hicp": 104.54,
      "hicpYoy": -0.61,
      "realHpi": 121.47,
      "source": "snapshot"
    },
    {
      "geo": "ES",
      "period": "2020-Q3",
      "year": 2020,
      "quarter": 3,
      "hpi": {
        "total": 128.56,
        "new": 139.71,
        "existing": 126.64,
        "qoq": 1.24,
        "yoy": 1.82
      },
      "hicp": 103.38,
      "hicpYoy": -0.63,
      "realHpi": 124.36,
      "source": "snapshot"
    },
    {
      "geo": "ES",
      "period": "2020-Q4",
      "year": 2020,
      "quarter": 4,
      "hpi": {
        "total": 127.55,
        "new": 140.4,
        "existing": 125.32,
        "qoq": -0.79,
        "yoy": 1.68
      },
      "hicp": 104.14,
      "hicpYoy": -0.77,
      "realHpi": 122.48,
      "source": "snapshot"
    },
    {
      "geo": "ES",
      "period": "2021-Q1",
      "year": 2021,
      "quarter": 1,
      "hpi": {
        "total": 128.12,
        "new": 139.63,
        "existing": 126.22,
        "qoq": 0.45,
        "yoy": 0.95
      },
      "hicp": 104.12,
      "hicpYoy": 0.51,
      "realHpi": 123.05,
      "source": "snapshot"
    },
    {
      "geo": "ES",
      "period": "2021-Q2",
      "year": 2021,
      "quarter": 2,
      "hpi": {
        "total": 131.15,
        "new": 141.22,
        "existing": 129.62,
        "qoq": 2.36,
        "yoy": 3.28
      },
      "hicp": 106.93,
      "hicpYoy": 2.29,
      "realHpi": 122.65,
      "source": "snapshot"
    },
    {
      "geo": "ES",
      "period": "2021-Q3",
      "year": 2021,
      "quarter": 3,
      "hpi": {
        "total": 133.92,
        "new": 145.34,
        "existing": 132.08,
        "qoq": 2.11,
        "yoy": 4.17
      },
      "hicp": 106.9,
      "hicpYoy": 3.4,
      "realHpi": 125.28,
      "source": "snapshot"
    },
    {
      "geo": "ES",
      "period": "2021-Q4",
      "year": 2021,
      "quarter": 4,
      "hpi": {
        "total": 135.58,
        "new": 148.63,
        "existing": 133.36,
        "qoq": 1.24,
        "yoy": 6.3
      },
      "hicp": 110.2,
      "hicpYoy": 5.82,
      "realHpi": 123.03,
      "source": "snapshot"
    },
    {
      "geo": "ES",
      "period": "2022-Q1",
      "year": 2022,
      "quarter": 1,
      "hpi": {
        "total": 139.05,
        "new": 153.47,
        "existing": 136.57,
        "qoq": 2.56,
        "yoy": 8.53
      },
      "hicp": 112.31,
      "hicpYoy": 7.87,
      "realHpi": 123.81,
      "source": "snapshot"
    },
    {
      "geo": "ES",
      "period": "2022-Q2",
      "year": 2022,
      "quarter": 2,
      "hpi": {
        "total": 141.71,
        "new": 153.45,
        "existing": 139.76,
        "qoq": 1.91,
        "yoy": 8.05
      },
      "hicp": 116.49,
      "hicpYoy": 8.94,
      "realHpi": 121.65,
      "source": "snapshot"
    },
    {
      "geo": "ES",
      "period": "2022-Q3",
      "year": 2022,
      "quarter": 3,
      "hpi": {
        "total": 144.15,
        "new": 154.87,
        "existing": 142.4,
        "qoq": 1.72,
        "yoy": 7.64
      },
      "hicp": 117.64,
      "hicpYoy": 10.05,
      "realHpi": 122.53,
      "source": "snapshot"
    },
    {
      "geo": "ES",
      "period": "2022-Q4",
      "year": 2022,
      "quarter": 4,
      "hpi": {
        "total": 142.99,
        "new": 157.8,
        "existing": 140.45,
        "qoq": -0.8,
        "yoy": 5.47
      },
      "hicp": 117.35,
      "hicpYoy": 6.49,
      "realHpi": 121.85,
      "source": "snapshot"
    },
    {
      "geo": "ES",
      "period": "2023-Q1",
      "year": 2023,
      "quarter": 1,
      "hpi": {
        "total": 143.98,
        "new": 162.8,
        "existing": 140.77,
        "qoq": 0.69,
        "yoy": 3.55
      },
      "hicp": 117.87,
      "hicpYoy": 4.95,
      "realHpi": 122.15,
      "source": "snapshot"
    },
    {
      "geo": "ES",
      "period": "2023-Q2",
      "year": 2023,
      "quarter": 2,
      "hpi": {
        "total": 146.97,
        "new": 165.37,
        "existing": 143.84,
        "qoq": 2.08,
        "yoy": 3.71
      },
      "hicp": 119.73,
      "hicpYoy": 2.78,
      "realHpi": 122.75,
      "source": "snapshot"
    },
    {
      "geo": "ES",
      "period": "2023-Q3",
      "year": 2023,
      "quarter": 3,
      "hpi": {
        "total": 150.68,
        "new": 171.74,
        "existing": 147.1,
        "qoq": 2.52,
        "yoy": 4.53
      },
      "hicp": 120.7,
      "hicpYoy": 2.6,
      "realHpi": 124.84,
      "source": "snapshot"
    },
    {
      "geo": "ES",
      "period": "2023-Q4",
      "year": 2023,
      "quarter": 4,
      "hpi": {
        "total": 149.13,
        "new": 169.49,
        "existing": 145.67,
        "qoq": -1.03,
        "yoy": 4.29
      },
      "hicp": 121.27,
      "hicpYoy": 3.34,
      "realHpi": 122.97,
      "source": "snapshot"
    },
    {
      "geo": "ES",
      "period": "2024-Q1",
      "year": 2024,
      "quarter": 1,
      "hpi": {
        "total": 153.18,
        "new": 178.84,
        "existing": 148.87,
        "qoq": 2.72,
        "yoy": 6.39
      },
      "hicp": 121.68,
      "hicpYoy": 3.23,
      "realHpi": 125.89,
      "source": "snapshot"
    },
    {
      "geo": "ES",
      "period": "2024-Q2",
      "year": 2024,
      "quarter": 2,
      "hpi": {
        "total": 158.63,
        "new": 183.65,
        "existing": 154.42,
        "qoq": 3.56,
        "yoy": 7.93
      },
      "hicp": 124.02,
      "hicpYoy": 3.58,
      "realHpi": 127.91,
      "source": "snapshot"
    },
    {
      "geo": "ES",
      "period": "2024-Q3",
      "year": 2024,
      "quarter": 3,
      "hpi": {
        "total": 163.12,
        "new": 188.86,
        "existing": 158.79,
        "qoq": 2.83,
        "yoy": 8.26
      },
      "hicp": 123.49,
      "hicpYoy": 2.31,
      "realHpi": 132.09,
      "source": "snapshot"
    },
    {
      "geo": "ES",
      "period": "2024-Q4",
      "year": 2024,
      "quarter": 4,
      "hpi": {
        "total": 166.07,
        "new": 190.41,
        "existing": 161.95,
        "qoq": 1.81,
        "yoy": 11.36
      },
      "hicp": 124.12,
      "hicpYoy": 2.35,
      "realHpi": 133.8,
      "source": "snapshot"
    },
    {
      "geo": "ES",
      "period": "2025-Q1",
      "year": 2025,
      "quarter": 1,
      "hpi": {
        "total": 172.0,
        "new": 200.85,
        "existing": 167.21,
        "qoq": 3.57,
        "yoy": 12.29
      },
      "hicp": 124.92,
      "hicpYoy": 2.66,
      "realHpi": 137.69,
      "source": "snapshot"
    },
    {
      "geo": "ES",
      "period": "2025-Q2",
      "year": 2025,
      "quarter": 2,
      "hpi": {
        "total": 178.89,
        "new": 206.17,
        "existing": 174.3,
        "qoq": 4.01,
        "yoy": 12.77
      },
      "hicp": 126.7,
      "hicpYoy": 2.16,
      "realHpi": 141.19,
      "source": "snapshot"
    },
    {
      "geo": "ES",
      "period": "2025-Q3",
      "year": 2025,
      "quarter": 3,
      "hpi": {
        "total": 184.06,
        "new": 207.12,
        "existing": 180.07,
        "qoq": 2.89,
        "yoy": 12.84
      },
      "hicp": 126.96,
      "hicpYoy": 2.81,
      "realHpi": 144.97,
      "source": "snapshot"
    },
    {
      "geo": "ES",
      "period": "2025-Q4",
      "year": 2025,
      "quarter": 4,
      "hpi": {
        "total": 187.45,
        "new": 211.71,
        "existing": 183.28,
        "qoq": 1.84,
        "yoy": 12.87
      },
      "hicp": 128.0,
      "hicpYoy": 3.13,
      "realHpi": 146.45,
      "source": "snapshot"
    },
    {
      "geo": "ES",
      "period": "2026-Q1",
      "year": 2026,
      "quarter": 1,
      "hpi": {
        "total": 194.06,
        "new": 219.1,
        "existing": 189.75,
        "qoq": 3.53,
        "yoy": 12.83
      },
      "hicp": null,
      "hicpYoy": null,
      "realHpi": null,
      "source": "snapshot"
    },
    {
      "geo": "ES",
      "period": "2026-Q2",
      "year": 2026,
      "quarter": 2,
      "hpi": {
        "total": 200.6,
        "new": 221.3,
        "existing": 196.86,
        "qoq": 3.37,
        "yoy": 12.14
      },
      "hicp": null,
      "hicpYoy": null,
      "realHpi": null,
      "source": "snapshot"
    }
  ],
  "IT": [
    {
      "geo": "IT",
      "period": "2010-Q1",
      "year": 2010,
      "quarter": 1,
      "hpi": {
        "total": 116.8,
        "new": 99.5,
        "existing": 125.4,
        "qoq": null,
        "yoy": null
      },
      "hicp": 91.1,
      "hicpYoy": null,
      "realHpi": 128.21,
      "source": "snapshot"
    },
    {
      "geo": "IT",
      "period": "2010-Q2",
      "year": 2010,
      "quarter": 2,
      "hpi": {
        "total": 117.9,
        "new": 99.9,
        "existing": 127.0,
        "qoq": 0.94,
        "yoy": null
      },
      "hicp": 92.93,
      "hicpYoy": null,
      "realHpi": 126.87,
      "source": "snapshot"
    },
    {
      "geo": "IT",
      "period": "2010-Q3",
      "year": 2010,
      "quarter": 3,
      "hpi": {
        "total": 118.8,
        "new": 101.0,
        "existing": 127.8,
        "qoq": 0.76,
        "yoy": null
      },
      "hicp": 92.47,
      "hicpYoy": null,
      "realHpi": 128.47,
      "source": "snapshot"
    },
    {
      "geo": "IT",
      "period": "2010-Q4",
      "year": 2010,
      "quarter": 4,
      "hpi": {
        "total": 118.9,
        "new": 102.6,
        "existing": 126.8,
        "qoq": 0.08,
        "yoy": null
      },
      "hicp": 93.7,
      "hicpYoy": null,
      "realHpi": 126.89,
      "source": "snapshot"
    },
    {
      "geo": "IT",
      "period": "2011-Q1",
      "year": 2011,
      "quarter": 1,
      "hpi": {
        "total": 118.3,
        "new": 102.3,
        "existing": 126.0,
        "qoq": -0.5,
        "yoy": 1.28
      },
      "hicp": 93.23,
      "hicpYoy": 2.34,
      "realHpi": 126.89,
      "source": "snapshot"
    },
    {
      "geo": "IT",
      "period": "2011-Q2",
      "year": 2011,
      "quarter": 2,
      "hpi": {
        "total": 120.7,
        "new": 104.0,
        "existing": 128.9,
        "qoq": 2.03,
        "yoy": 2.37
      },
      "hicp": 95.7,
      "hicpYoy": 2.98,
      "realHpi": 126.12,
      "source": "snapshot"
    },
    {
      "geo": "IT",
      "period": "2011-Q3",
      "year": 2011,
      "quarter": 3,
      "hpi": {
        "total": 120.3,
        "new": 104.4,
        "existing": 128.0,
        "qoq": -0.33,
        "yoy": 1.26
      },
      "hicp": 94.93,
      "hicpYoy": 2.66,
      "realHpi": 126.72,
      "source": "snapshot"
    },
    {
      "geo": "IT",
      "period": "2011-Q4",
      "year": 2011,
      "quarter": 4,
      "hpi": {
        "total": 119.5,
        "new": 105.1,
        "existing": 126.3,
        "qoq": -0.67,
        "yoy": 0.5
      },
      "hicp": 97.2,
      "hicpYoy": 3.74,
      "realHpi": 122.94,
      "source": "snapshot"
    },
    {
      "geo": "IT",
      "period": "2012-Q1",
      "year": 2012,
      "quarter": 1,
      "hpi": {
        "total": 119.0,
        "new": 105.9,
        "existing": 125.1,
        "qoq": -0.42,
        "yoy": 0.59
      },
      "hicp": 96.53,
      "hicpYoy": 3.54,
      "realHpi": 123.28,
      "source": "snapshot"
    },
    {
      "geo": "IT",
      "period": "2012-Q2",
      "year": 2012,
      "quarter": 2,
      "hpi": {
        "total": 118.1,
        "new": 106.8,
        "existing": 123.3,
        "qoq": -0.76,
        "yoy": -2.15
      },
      "hicp": 99.17,
      "hicpYoy": 3.63,
      "realHpi": 119.09,
      "source": "snapshot"
    },
    {
      "geo": "IT",
      "period": "2012-Q3",
      "year": 2012,
      "quarter": 3,
      "hpi": {
        "total": 115.9,
        "new": 106.1,
        "existing": 120.5,
        "qoq": -1.86,
        "yoy": -3.66
      },
      "hicp": 98.23,
      "hicpYoy": 3.48,
      "realHpi": 117.99,
      "source": "snapshot"
    },
    {
      "geo": "IT",
      "period": "2012-Q4",
      "year": 2012,
      "quarter": 4,
      "hpi": {
        "total": 113.6,
        "new": 106.5,
        "existing": 116.8,
        "qoq": -1.98,
        "yoy": -4.94
      },
      "hicp": 99.77,
      "hicpYoy": 2.64,
      "realHpi": 113.86,
      "source": "snapshot"
    },
    {
      "geo": "IT",
      "period": "2013-Q1",
      "year": 2013,
      "quarter": 1,
      "hpi": {
        "total": 110.5,
        "new": 105.4,
        "existing": 112.7,
        "qoq": -2.73,
        "yoy": -7.14
      },
      "hicp": 98.53,
      "hicpYoy": 2.07,
      "realHpi": 112.15,
      "source": "snapshot"
    },
    {
      "geo": "IT",
      "period": "2013-Q2",
      "year": 2013,
      "quarter": 2,
      "hpi": {
        "total": 110.2,
        "new": 105.3,
        "existing": 112.2,
        "qoq": -0.27,
        "yoy": -6.69
      },
      "hicp": 100.37,
      "hicpYoy": 1.21,
      "realHpi": 109.79,
      "source": "snapshot"
    },
    {
      "geo": "IT",
      "period": "2013-Q3",
      "year": 2013,
      "quarter": 3,
      "hpi": {
        "total": 108.6,
        "new": 104.8,
        "existing": 110.1,
        "qoq": -1.45,
        "yoy": -6.3
      },
      "hicp": 99.3,
      "hicpYoy": 1.09,
      "realHpi": 109.37,
      "source": "snapshot"
    },
    {
      "geo": "IT",
      "period": "2013-Q4",
      "year": 2013,
      "quarter": 4,
      "hpi": {
        "total": 107.1,
        "new": 103.7,
        "existing": 108.4,
        "qoq": -1.38,
        "yoy": -5.72
      },
      "hicp": 100.4,
      "hicpYoy": 0.63,
      "realHpi": 106.67,
      "source": "snapshot"
    },
    {
      "geo": "IT",
      "period": "2014-Q1",
      "year": 2014,
      "quarter": 1,
      "hpi": {
        "total": 105.7,
        "new": 102.7,
        "existing": 107.0,
        "qoq": -1.31,
        "yoy": -4.34
      },
      "hicp": 98.97,
      "hicpYoy": 0.45,
      "realHpi": 106.8,
      "source": "snapshot"
    },
    {
      "geo": "IT",
      "period": "2014-Q2",
      "year": 2014,
      "quarter": 2,
      "hpi": {
        "total": 104.7,
        "new": 102.3,
        "existing": 105.6,
        "qoq": -0.95,
        "yoy": -4.99
      },
      "hicp": 100.77,
      "hicpYoy": 0.4,
      "realHpi": 103.9,
      "source": "snapshot"
    },
    {
      "geo": "IT",
      "period": "2014-Q3",
      "year": 2014,
      "quarter": 3,
      "hpi": {
        "total": 103.5,
        "new": 101.8,
        "existing": 104.1,
        "qoq": -1.15,
        "yoy": -4.7
      },
      "hicp": 99.23,
      "hicpYoy": -0.07,
      "realHpi": 104.3,
      "source": "snapshot"
    },
    {
      "geo": "IT",
      "period": "2014-Q4",
      "year": 2014,
      "quarter": 4,
      "hpi": {
        "total": 101.9,
        "new": 101.3,
        "existing": 102.1,
        "qoq": -1.55,
        "yoy": -4.86
      },
      "hicp": 100.57,
      "hicpYoy": 0.17,
      "realHpi": 101.32,
      "source": "snapshot"
    },
    {
      "geo": "IT",
      "period": "2015-Q1",
      "year": 2015,
      "quarter": 1,
      "hpi": {
        "total": 99.7,
        "new": 99.3,
        "existing": 99.8,
        "qoq": -2.16,
        "yoy": -5.68
      },
      "hicp": 98.83,
      "hicpYoy": -0.14,
      "realHpi": 100.88,
      "source": "snapshot"
    },
    {
      "geo": "IT",
      "period": "2015-Q2",
      "year": 2015,
      "quarter": 2,
      "hpi": {
        "total": 99.8,
        "new": 98.8,
        "existing": 100.2,
        "qoq": 0.1,
        "yoy": -4.68
      },
      "hicp": 100.87,
      "hicpYoy": 0.1,
      "realHpi": 98.94,
      "source": "snapshot"
    },
    {
      "geo": "IT",
      "period": "2015-Q3",
      "year": 2015,
      "quarter": 3,
      "hpi": {
        "total": 100.7,
        "new": 101.6,
        "existing": 100.4,
        "qoq": 0.9,
        "yoy": -2.71
      },
      "hicp": 99.53,
      "hicpYoy": 0.3,
      "realHpi": 101.18,
      "source": "snapshot"
    },
    {
      "geo": "IT",
      "period": "2015-Q4",
      "year": 2015,
      "quarter": 4,
      "hpi": {
        "total": 99.8,
        "new": 100.3,
        "existing": 99.6,
        "qoq": -0.89,
        "yoy": -2.06
      },
      "hicp": 100.73,
      "hicpYoy": 0.16,
      "realHpi": 99.08,
      "source": "snapshot"
    },
    {
      "geo": "IT",
      "period": "2016-Q1",
      "year": 2016,
      "quarter": 1,
      "hpi": {
        "total": 99.8,
        "new": 100.3,
        "existing": 99.7,
        "qoq": 0.0,
        "yoy": 0.1
      },
      "hicp": 98.83,
      "hicpYoy": 0.0,
      "realHpi": 100.98,
      "source": "snapshot"
    },
    {
      "geo": "IT",
      "period": "2016-Q2",
      "year": 2016,
      "quarter": 2,
      "hpi": {
        "total": 100.5,
        "new": 100.5,
        "existing": 100.5,
        "qoq": 0.7,
        "yoy": 0.7
      },
      "hicp": 100.57,
      "hicpYoy": -0.3,
      "realHpi": 99.93,
      "source": "snapshot"
    },
    {
      "geo": "IT",
      "period": "2016-Q3",
      "year": 2016,
      "quarter": 3,
      "hpi": {
        "total": 100.7,
        "new": 100.8,
        "existing": 100.6,
        "qoq": 0.2,
        "yoy": 0.0
      },
      "hicp": 99.47,
      "hicpYoy": -0.06,
      "realHpi": 101.24,
      "source": "snapshot"
    },
    {
      "geo": "IT",
      "period": "2016-Q4",
      "year": 2016,
      "quarter": 4,
      "hpi": {
        "total": 100.0,
        "new": 101.3,
        "existing": 99.6,
        "qoq": -0.7,
        "yoy": 0.2
      },
      "hicp": 100.9,
      "hicpYoy": 0.17,
      "realHpi": 99.11,
      "source": "snapshot"
    },
    {
      "geo": "IT",
      "period": "2017-Q1",
      "year": 2017,
      "quarter": 1,
      "hpi": {
        "total": 99.1,
        "new": 98.9,
        "existing": 99.1,
        "qoq": -0.9,
        "yoy": -0.7
      },
      "hicp": 100.17,
      "hicpYoy": 1.36,
      "realHpi": 98.93,
      "source": "snapshot"
    },
    {
      "geo": "IT",
      "period": "2017-Q2",
      "year": 2017,
      "quarter": 2,
      "hpi": {
        "total": 99.6,
        "new": 100.0,
        "existing": 99.5,
        "qoq": 0.5,
        "yoy": -0.9
      },
      "hicp": 102.17,
      "hicpYoy": 1.59,
      "realHpi": 97.48,
      "source": "snapshot"
    },
    {
      "geo": "IT",
      "period": "2017-Q3",
      "year": 2017,
      "quarter": 3,
      "hpi": {
        "total": 99.2,
        "new": 99.6,
        "existing": 99.0,
        "qoq": -0.4,
        "yoy": -1.49
      },
      "hicp": 100.77,
      "hicpYoy": 1.31,
      "realHpi": 98.44,
      "source": "snapshot"
    },
    {
      "geo": "IT",
      "period": "2017-Q4",
      "year": 2017,
      "quarter": 4,
      "hpi": {
        "total": 98.8,
        "new": 101.5,
        "existing": 98.1,
        "qoq": -0.4,
        "yoy": -1.2
      },
      "hicp": 101.97,
      "hicpYoy": 1.06,
      "realHpi": 96.89,
      "source": "snapshot"
    },
    {
      "geo": "IT",
      "period": "2018-Q1",
      "year": 2018,
      "quarter": 1,
      "hpi": {
        "total": 98.6,
        "new": 99.9,
        "existing": 98.1,
        "qoq": -0.2,
        "yoy": -0.5
      },
      "hicp": 101.03,
      "hicpYoy": 0.86,
      "realHpi": 97.59,
      "source": "snapshot"
    },
    {
      "geo": "IT",
      "period": "2018-Q2",
      "year": 2018,
      "quarter": 2,
      "hpi": {
        "total": 99.2,
        "new": 101.2,
        "existing": 98.7,
        "qoq": 0.61,
        "yoy": -0.4
      },
      "hicp": 103.17,
      "hicpYoy": 0.98,
      "realHpi": 96.15,
      "source": "snapshot"
    },
    {
      "geo": "IT",
      "period": "2018-Q3",
      "year": 2018,
      "quarter": 3,
      "hpi": {
        "total": 98.4,
        "new": 101.2,
        "existing": 97.7,
        "qoq": -0.81,
        "yoy": -0.81
      },
      "hicp": 102.43,
      "hicpYoy": 1.65,
      "realHpi": 96.07,
      "source": "snapshot"
    },
    {
      "geo": "IT",
      "period": "2018-Q4",
      "year": 2018,
      "quarter": 4,
      "hpi": {
        "total": 98.3,
        "new": 102.1,
        "existing": 97.4,
        "qoq": -0.1,
        "yoy": -0.51
      },
      "hicp": 103.47,
      "hicpYoy": 1.47,
      "realHpi": 95.0,
      "source": "snapshot"
    },
    {
      "geo": "IT",
      "period": "2019-Q1",
      "year": 2019,
      "quarter": 1,
      "hpi": {
        "total": 97.7,
        "new": 101.4,
        "existing": 96.8,
        "qoq": -0.61,
        "yoy": -0.91
      },
      "hicp": 102.07,
      "hicpYoy": 1.03,
      "realHpi": 95.72,
      "source": "snapshot"
    },
    {
      "geo": "IT",
      "period": "2019-Q2",
      "year": 2019,
      "quarter": 2,
      "hpi": {
        "total": 99.1,
        "new": 101.7,
        "existing": 98.3,
        "qoq": 1.43,
        "yoy": -0.1
      },
      "hicp": 104.1,
      "hicpYoy": 0.9,
      "realHpi": 95.2,
      "source": "snapshot"
    },
    {
      "geo": "IT",
      "period": "2019-Q3",
      "year": 2019,
      "quarter": 3,
      "hpi": {
        "total": 98.8,
        "new": 102.5,
        "existing": 97.8,
        "qoq": -0.3,
        "yoy": 0.41
      },
      "hicp": 102.77,
      "hicpYoy": 0.33,
      "realHpi": 96.14,
      "source": "snapshot"
    },
    {
      "geo": "IT",
      "period": "2019-Q4",
      "year": 2019,
      "quarter": 4,
      "hpi": {
        "total": 98.5,
        "new": 103.5,
        "existing": 97.4,
        "qoq": -0.3,
        "yoy": 0.2
      },
      "hicp": 103.77,
      "hicpYoy": 0.29,
      "realHpi": 94.92,
      "source": "snapshot"
    },
    {
      "geo": "IT",
      "period": "2020-Q1",
      "year": 2020,
      "quarter": 1,
      "hpi": {
        "total": 99.4,
        "new": 102.4,
        "existing": 98.6,
        "qoq": 0.91,
        "yoy": 1.74
      },
      "hicp": 102.3,
      "hicpYoy": 0.23,
      "realHpi": 97.17,
      "source": "snapshot"
    },
    {
      "geo": "IT",
      "period": "2020-Q2",
      "year": 2020,
      "quarter": 2,
      "hpi": {
        "total": 102.4,
        "new": 104.4,
        "existing": 101.8,
        "qoq": 3.02,
        "yoy": 3.33
      },
      "hicp": 103.9,
      "hicpYoy": -0.19,
      "realHpi": 98.56,
      "source": "snapshot"
    },
    {
      "geo": "IT",
      "period": "2020-Q3",
      "year": 2020,
      "quarter": 3,
      "hpi": {
        "total": 99.8,
        "new": 105.6,
        "existing": 98.5,
        "qoq": -2.54,
        "yoy": 1.01
      },
      "hicp": 102.53,
      "hicpYoy": -0.23,
      "realHpi": 97.34,
      "source": "snapshot"
    },
    {
      "geo": "IT",
      "period": "2020-Q4",
      "year": 2020,
      "quarter": 4,
      "hpi": {
        "total": 100.0,
        "new": 105.4,
        "existing": 98.7,
        "qoq": 0.2,
        "yoy": 1.52
      },
      "hicp": 103.37,
      "hicpYoy": -0.39,
      "realHpi": 96.74,
      "source": "snapshot"
    },
    {
      "geo": "IT",
      "period": "2021-Q1",
      "year": 2021,
      "quarter": 1,
      "hpi": {
        "total": 101.1,
        "new": 106.5,
        "existing": 99.8,
        "qoq": 1.1,
        "yoy": 1.71
      },
      "hicp": 103.07,
      "hicpYoy": 0.75,
      "realHpi": 98.09,
      "source": "snapshot"
    },
    {
      "geo": "IT",
      "period": "2021-Q2",
      "year": 2021,
      "quarter": 2,
      "hpi": {
        "total": 102.8,
        "new": 106.5,
        "existing": 101.8,
        "qoq": 1.68,
        "yoy": 0.39
      },
      "hicp": 105.1,
      "hicpYoy": 1.15,
      "realHpi": 97.81,
      "source": "snapshot"
    },
    {
      "geo": "IT",
      "period": "2021-Q3",
      "year": 2021,
      "quarter": 3,
      "hpi": {
        "total": 103.9,
        "new": 109.8,
        "existing": 102.5,
        "qoq": 1.07,
        "yoy": 4.11
      },
      "hicp": 104.7,
      "hicpYoy": 2.12,
      "realHpi": 99.24,
      "source": "snapshot"
    },
    {
      "geo": "IT",
      "period": "2021-Q4",
      "year": 2021,
      "quarter": 4,
      "hpi": {
        "total": 104.0,
        "new": 111.0,
        "existing": 102.4,
        "qoq": 0.1,
        "yoy": 4.0
      },
      "hicp": 107.23,
      "hicpYoy": 3.73,
      "realHpi": 96.99,
      "source": "snapshot"
    },
    {
      "geo": "IT",
      "period": "2022-Q1",
      "year": 2022,
      "quarter": 1,
      "hpi": {
        "total": 105.7,
        "new": 111.8,
        "existing": 104.2,
        "qoq": 1.63,
        "yoy": 4.55
      },
      "hicp": 109.27,
      "hicpYoy": 6.02,
      "realHpi": 96.73,
      "source": "snapshot"
    },
    {
      "geo": "IT",
      "period": "2022-Q2",
      "year": 2022,
      "quarter": 2,
      "hpi": {
        "total": 108.1,
        "new": 119.4,
        "existing": 105.7,
        "qoq": 2.27,
        "yoy": 5.16
      },
      "hicp": 112.83,
      "hicpYoy": 7.35,
      "realHpi": 95.81,
      "source": "snapshot"
    },
    {
      "geo": "IT",
      "period": "2022-Q3",
      "year": 2022,
      "quarter": 3,
      "hpi": {
        "total": 106.9,
        "new": 113.0,
        "existing": 105.5,
        "qoq": -1.11,
        "yoy": 2.89
      },
      "hicp": 114.07,
      "hicpYoy": 8.95,
      "realHpi": 93.71,
      "source": "snapshot"
    },
    {
      "geo": "IT",
      "period": "2022-Q4",
      "year": 2022,
      "quarter": 4,
      "hpi": {
        "total": 106.8,
        "new": 116.0,
        "existing": 104.8,
        "qoq": -0.09,
        "yoy": 2.69
      },
      "hicp": 120.63,
      "hicpYoy": 12.5,
      "realHpi": 88.54,
      "source": "snapshot"
    },
    {
      "geo": "IT",
      "period": "2023-Q1",
      "year": 2023,
      "quarter": 1,
      "hpi": {
        "total": 106.8,
        "new": 117.7,
        "existing": 104.5,
        "qoq": 0.0,
        "yoy": 1.04
      },
      "hicp": 119.67,
      "hicpYoy": 9.52,
      "realHpi": 89.25,
      "source": "snapshot"
    },
    {
      "geo": "IT",
      "period": "2023-Q2",
      "year": 2023,
      "quarter": 2,
      "hpi": {
        "total": 108.8,
        "new": 120.1,
        "existing": 106.4,
        "qoq": 1.87,
        "yoy": 0.65
      },
      "hicp": 121.6,
      "hicpYoy": 7.77,
      "realHpi": 89.47,
      "source": "snapshot"
    },
    {
      "geo": "IT",
      "period": "2023-Q3",
      "year": 2023,
      "quarter": 3,
      "hpi": {
        "total": 108.7,
        "new": 121.9,
        "existing": 105.9,
        "qoq": -0.09,
        "yoy": 1.68
      },
      "hicp": 120.7,
      "hicpYoy": 5.81,
      "realHpi": 90.06,
      "source": "snapshot"
    },
    {
      "geo": "IT",
      "period": "2023-Q4",
      "year": 2023,
      "quarter": 4,
      "hpi": {
        "total": 108.7,
        "new": 126.2,
        "existing": 105.1,
        "qoq": 0.0,
        "yoy": 1.78
      },
      "hicp": 121.8,
      "hicpYoy": 0.97,
      "realHpi": 89.24,
      "source": "snapshot"
    },
    {
      "geo": "IT",
      "period": "2024-Q1",
      "year": 2024,
      "quarter": 1,
      "hpi": {
        "total": 108.5,
        "new": 123.9,
        "existing": 105.3,
        "qoq": -0.18,
        "yoy": 1.59
      },
      "hicp": 120.87,
      "hicpYoy": 1.0,
      "realHpi": 89.77,
      "source": "snapshot"
    },
    {
      "geo": "IT",
      "period": "2024-Q2",
      "year": 2024,
      "quarter": 2,
      "hpi": {
        "total": 112.0,
        "new": 129.8,
        "existing": 108.3,
        "qoq": 3.23,
        "yoy": 2.94
      },
      "hicp": 122.67,
      "hicpYoy": 0.88,
      "realHpi": 91.3,
      "source": "snapshot"
    },
    {
      "geo": "IT",
      "period": "2024-Q3",
      "year": 2024,
      "quarter": 3,
      "hpi": {
        "total": 112.8,
        "new": 132.7,
        "existing": 108.8,
        "qoq": 0.71,
        "yoy": 3.77
      },
      "hicp": 122.13,
      "hicpYoy": 1.18,
      "realHpi": 92.36,
      "source": "snapshot"
    },
    {
      "geo": "IT",
      "period": "2024-Q4",
      "year": 2024,
      "quarter": 4,
      "hpi": {
        "total": 113.5,
        "new": 137.8,
        "existing": 108.7,
        "qoq": 0.62,
        "yoy": 4.42
      },
      "hicp": 123.37,
      "hicpYoy": 1.29,
      "realHpi": 92.0,
      "source": "snapshot"
    },
    {
      "geo": "IT",
      "period": "2025-Q1",
      "year": 2025,
      "quarter": 1,
      "hpi": {
        "total": 113.3,
        "new": 125.7,
        "existing": 110.5,
        "qoq": -0.18,
        "yoy": 4.42
      },
      "hicp": 123.1,
      "hicpYoy": 1.84,
      "realHpi": 92.04,
      "source": "snapshot"
    },
    {
      "geo": "IT",
      "period": "2025-Q2",
      "year": 2025,
      "quarter": 2,
      "hpi": {
        "total": 116.4,
        "new": 131.2,
        "existing": 113.1,
        "qoq": 2.74,
        "yoy": 3.93
      },
      "hicp": 124.93,
      "hicpYoy": 1.84,
      "realHpi": 93.17,
      "source": "snapshot"
    },
    {
      "geo": "IT",
      "period": "2025-Q3",
      "year": 2025,
      "quarter": 3,
      "hpi": {
        "total": 117.0,
        "new": 134.4,
        "existing": 113.4,
        "qoq": 0.52,
        "yoy": 3.72
      },
      "hicp": 124.23,
      "hicpYoy": 1.72,
      "realHpi": 94.18,
      "source": "snapshot"
    },
    {
      "geo": "IT",
      "period": "2025-Q4",
      "year": 2025,
      "quarter": 4,
      "hpi": {
        "total": 118.0,
        "new": 136.2,
        "existing": 114.2,
        "qoq": 0.85,
        "yoy": 3.96
      },
      "hicp": 124.87,
      "hicpYoy": 1.22,
      "realHpi": 94.5,
      "source": "snapshot"
    },
    {
      "geo": "IT",
      "period": "2026-Q1",
      "year": 2026,
      "quarter": 1,
      "hpi": {
        "total": 119.1,
        "new": 134.2,
        "existing": 115.6,
        "qoq": 0.93,
        "yoy": 5.12
      },
      "hicp": null,
      "hicpYoy": null,
      "realHpi": null,
      "source": "snapshot"
    },
    {
      "geo": "IT",
      "period": "2026-Q2",
      "year": 2026,
      "quarter": 2,
      "hpi": {
        "total": 121.0,
        "new": 137.8,
        "existing": 117.4,
        "qoq": 1.6,
        "yoy": 3.95
      },
      "hicp": null,
      "hicpYoy": null,
      "realHpi": null,
      "source": "snapshot"
    }
  ],
  "BE": [
    {
      "geo": "BE",
      "period": "2010-Q1",
      "year": 2010,
      "quarter": 1,
      "hpi": {
        "total": 90.11,
        "new": 88.46,
        "existing": 90.5,
        "qoq": null,
        "yoy": null
      },
      "hicp": 90.74,
      "hicpYoy": null,
      "realHpi": 99.31,
      "source": "snapshot"
    },
    {
      "geo": "BE",
      "period": "2010-Q2",
      "year": 2010,
      "quarter": 2,
      "hpi": {
        "total": 90.83,
        "new": 88.83,
        "existing": 91.32,
        "qoq": 0.8,
        "yoy": null
      },
      "hicp": 92.38,
      "hicpYoy": null,
      "realHpi": 98.32,
      "source": "snapshot"
    },
    {
      "geo": "BE",
      "period": "2010-Q3",
      "year": 2010,
      "quarter": 3,
      "hpi": {
        "total": 92.8,
        "new": 88.98,
        "existing": 93.75,
        "qoq": 2.17,
        "yoy": null
      },
      "hicp": 92.09,
      "hicpYoy": null,
      "realHpi": 100.77,
      "source": "snapshot"
    },
    {
      "geo": "BE",
      "period": "2010-Q4",
      "year": 2010,
      "quarter": 4,
      "hpi": {
        "total": 92.65,
        "new": 89.7,
        "existing": 93.38,
        "qoq": -0.16,
        "yoy": null
      },
      "hicp": 93.16,
      "hicpYoy": null,
      "realHpi": 99.45,
      "source": "snapshot"
    },
    {
      "geo": "BE",
      "period": "2011-Q1",
      "year": 2011,
      "quarter": 1,
      "hpi": {
        "total": 93.51,
        "new": 91.61,
        "existing": 93.99,
        "qoq": 0.93,
        "yoy": 3.77
      },
      "hicp": 93.86,
      "hicpYoy": 3.44,
      "realHpi": 99.63,
      "source": "snapshot"
    },
    {
      "geo": "BE",
      "period": "2011-Q2",
      "year": 2011,
      "quarter": 2,
      "hpi": {
        "total": 94.16,
        "new": 91.87,
        "existing": 94.73,
        "qoq": 0.7,
        "yoy": 3.67
      },
      "hicp": 95.26,
      "hicpYoy": 3.12,
      "realHpi": 98.85,
      "source": "snapshot"
    },
    {
      "geo": "BE",
      "period": "2011-Q3",
      "year": 2011,
      "quarter": 3,
      "hpi": {
        "total": 96.05,
        "new": 92.96,
        "existing": 96.81,
        "qoq": 2.01,
        "yoy": 3.5
      },
      "hicp": 95.36,
      "hicpYoy": 3.55,
      "realHpi": 100.72,
      "source": "snapshot"
    },
    {
      "geo": "BE",
      "period": "2011-Q4",
      "year": 2011,
      "quarter": 4,
      "hpi": {
        "total": 95.79,
        "new": 93.5,
        "existing": 96.36,
        "qoq": -0.27,
        "yoy": 3.39
      },
      "hicp": 96.24,
      "hicpYoy": 3.31,
      "realHpi": 99.53,
      "source": "snapshot"
    },
    {
      "geo": "BE",
      "period": "2012-Q1",
      "year": 2012,
      "quarter": 1,
      "hpi": {
        "total": 96.51,
        "new": 94.03,
        "existing": 97.13,
        "qoq": 0.75,
        "yoy": 3.21
      },
      "hicp": 96.91,
      "hicpYoy": 3.25,
      "realHpi": 99.59,
      "source": "snapshot"
    },
    {
      "geo": "BE",
      "period": "2012-Q2",
      "year": 2012,
      "quarter": 2,
      "hpi": {
        "total": 96.72,
        "new": 94.44,
        "existing": 97.29,
        "qoq": 0.22,
        "yoy": 2.72
      },
      "hicp": 97.7,
      "hicpYoy": 2.56,
      "realHpi": 99.0,
      "source": "snapshot"
    },
    {
      "geo": "BE",
      "period": "2012-Q3",
      "year": 2012,
      "quarter": 3,
      "hpi": {
        "total": 97.77,
        "new": 94.37,
        "existing": 98.61,
        "qoq": 1.09,
        "yoy": 1.79
      },
      "hicp": 97.65,
      "hicpYoy": 2.4,
      "realHpi": 100.12,
      "source": "snapshot"
    },
    {
      "geo": "BE",
      "period": "2012-Q4",
      "year": 2012,
      "quarter": 4,
      "hpi": {
        "total": 97.43,
        "new": 93.98,
        "existing": 98.28,
        "qoq": -0.35,
        "yoy": 1.71
      },
      "hicp": 98.45,
      "hicpYoy": 2.3,
      "realHpi": 98.96,
      "source": "snapshot"
    },
    {
      "geo": "BE",
      "period": "2013-Q1",
      "year": 2013,
      "quarter": 1,
      "hpi": {
        "total": 97.87,
        "new": 95.98,
        "existing": 98.35,
        "qoq": 0.45,
        "yoy": 1.41
      },
      "hicp": 98.34,
      "hicpYoy": 1.48,
      "realHpi": 99.52,
      "source": "snapshot"
    },
    {
      "geo": "BE",
      "period": "2013-Q2",
      "year": 2013,
      "quarter": 2,
      "hpi": {
        "total": 98.34,
        "new": 97.98,
        "existing": 98.46,
        "qoq": 0.48,
        "yoy": 1.67
      },
      "hicp": 99.02,
      "hicpYoy": 1.35,
      "realHpi": 99.31,
      "source": "snapshot"
    },
    {
      "geo": "BE",
      "period": "2013-Q3",
      "year": 2013,
      "quarter": 3,
      "hpi": {
        "total": 99.46,
        "new": 97.93,
        "existing": 99.87,
        "qoq": 1.14,
        "yoy": 1.73
      },
      "hicp": 98.87,
      "hicpYoy": 1.25,
      "realHpi": 100.6,
      "source": "snapshot"
    },
    {
      "geo": "BE",
      "period": "2013-Q4",
      "year": 2013,
      "quarter": 4,
      "hpi": {
        "total": 98.53,
        "new": 99.05,
        "existing": 98.45,
        "qoq": -0.94,
        "yoy": 1.13
      },
      "hicp": 99.36,
      "hicpYoy": 0.92,
      "realHpi": 99.16,
      "source": "snapshot"
    },
    {
      "geo": "BE",
      "period": "2014-Q1",
      "year": 2014,
      "quarter": 1,
      "hpi": {
        "total": 97.43,
        "new": 94.22,
        "existing": 98.17,
        "qoq": -1.12,
        "yoy": -0.45
      },
      "hicp": 99.24,
      "hicpYoy": 0.92,
      "realHpi": 98.18,
      "source": "snapshot"
    },
    {
      "geo": "BE",
      "period": "2014-Q2",
      "year": 2014,
      "quarter": 2,
      "hpi": {
        "total": 97.42,
        "new": 94.34,
        "existing": 98.13,
        "qoq": -0.01,
        "yoy": -0.94
      },
      "hicp": 99.69,
      "hicpYoy": 0.68,
      "realHpi": 97.72,
      "source": "snapshot"
    },
    {
      "geo": "BE",
      "period": "2014-Q3",
      "year": 2014,
      "quarter": 3,
      "hpi": {
        "total": 98.81,
        "new": 96.78,
        "existing": 99.29,
        "qoq": 1.43,
        "yoy": -0.65
      },
      "hicp": 99.24,
      "hicpYoy": 0.37,
      "realHpi": 99.57,
      "source": "snapshot"
    },
    {
      "geo": "BE",
      "period": "2014-Q4",
      "year": 2014,
      "quarter": 4,
      "hpi": {
        "total": 99.2,
        "new": 97.33,
        "existing": 99.64,
        "qoq": 0.39,
        "yoy": 0.68
      },
      "hicp": 99.36,
      "hicpYoy": 0.0,
      "realHpi": 99.84,
      "source": "snapshot"
    },
    {
      "geo": "BE",
      "period": "2015-Q1",
      "year": 2015,
      "quarter": 1,
      "hpi": {
        "total": 97.94,
        "new": 96.01,
        "existing": 98.4,
        "qoq": -1.27,
        "yoy": 0.52
      },
      "hicp": 98.86,
      "hicpYoy": -0.38,
      "realHpi": 99.07,
      "source": "snapshot"
    },
    {
      "geo": "BE",
      "period": "2015-Q2",
      "year": 2015,
      "quarter": 2,
      "hpi": {
        "total": 99.13,
        "new": 98.45,
        "existing": 99.29,
        "qoq": 1.22,
        "yoy": 1.76
      },
      "hicp": 100.38,
      "hicpYoy": 0.69,
      "realHpi": 98.75,
      "source": "snapshot"
    },
    {
      "geo": "BE",
      "period": "2015-Q3",
      "year": 2015,
      "quarter": 3,
      "hpi": {
        "total": 101.49,
        "new": 102.15,
        "existing": 101.34,
        "qoq": 2.38,
        "yoy": 2.71
      },
      "hicp": 100.07,
      "hicpYoy": 0.84,
      "realHpi": 101.42,
      "source": "snapshot"
    },
    {
      "geo": "BE",
      "period": "2015-Q4",
      "year": 2015,
      "quarter": 4,
      "hpi": {
        "total": 101.43,
        "new": 103.38,
        "existing": 100.98,
        "qoq": -0.06,
        "yoy": 2.25
      },
      "hicp": 100.69,
      "hicpYoy": 1.34,
      "realHpi": 100.73,
      "source": "snapshot"
    },
    {
      "geo": "BE",
      "period": "2016-Q1",
      "year": 2016,
      "quarter": 1,
      "hpi": {
        "total": 100.37,
        "new": 101.32,
        "existing": 100.22,
        "qoq": -1.05,
        "yoy": 2.48
      },
      "hicp": 100.37,
      "hicpYoy": 1.53,
      "realHpi": 100.0,
      "source": "snapshot"
    },
    {
      "geo": "BE",
      "period": "2016-Q2",
      "year": 2016,
      "quarter": 2,
      "hpi": {
        "total": 101.42,
        "new": 102.83,
        "existing": 101.12,
        "qoq": 1.05,
        "yoy": 2.31
      },
      "hicp": 102.03,
      "hicpYoy": 1.64,
      "realHpi": 99.4,
      "source": "snapshot"
    },
    {
      "geo": "BE",
      "period": "2016-Q3",
      "year": 2016,
      "quarter": 3,
      "hpi": {
        "total": 103.63,
        "new": 104.94,
        "existing": 103.37,
        "qoq": 2.18,
        "yoy": 2.11
      },
      "hicp": 102.01,
      "hicpYoy": 1.94,
      "realHpi": 101.59,
      "source": "snapshot"
    },
    {
      "geo": "BE",
      "period": "2016-Q4",
      "year": 2016,
      "quarter": 4,
      "hpi": {
        "total": 103.9,
        "new": 104.85,
        "existing": 103.75,
        "qoq": 0.26,
        "yoy": 2.44
      },
      "hicp": 102.66,
      "hicpYoy": 1.96,
      "realHpi": 101.21,
      "source": "snapshot"
    },
    {
      "geo": "BE",
      "period": "2017-Q1",
      "year": 2017,
      "quarter": 1,
      "hpi": {
        "total": 104.36,
        "new": 105.92,
        "existing": 104.07,
        "qoq": 0.44,
        "yoy": 3.98
      },
      "hicp": 103.34,
      "hicpYoy": 2.96,
      "realHpi": 100.99,
      "source": "snapshot"
    },
    {
      "geo": "BE",
      "period": "2017-Q2",
      "year": 2017,
      "quarter": 2,
      "hpi": {
        "total": 104.48,
        "new": 105.53,
        "existing": 104.31,
        "qoq": 0.11,
        "yoy": 3.02
      },
      "hicp": 104.11,
      "hicpYoy": 2.04,
      "realHpi": 100.36,
      "source": "snapshot"
    },
    {
      "geo": "BE",
      "period": "2017-Q3",
      "year": 2017,
      "quarter": 3,
      "hpi": {
        "total": 107.81,
        "new": 110.09,
        "existing": 107.37,
        "qoq": 3.19,
        "yoy": 4.03
      },
      "hicp": 103.97,
      "hicpYoy": 1.92,
      "realHpi": 103.69,
      "source": "snapshot"
    },
    {
      "geo": "BE",
      "period": "2017-Q4",
      "year": 2017,
      "quarter": 4,
      "hpi": {
        "total": 107.14,
        "new": 110.11,
        "existing": 106.55,
        "qoq": -0.62,
        "yoy": 3.12
      },
      "hicp": 104.71,
      "hicpYoy": 2.0,
      "realHpi": 102.32,
      "source": "snapshot"
    },
    {
      "geo": "BE",
      "period": "2018-Q1",
      "year": 2018,
      "quarter": 1,
      "hpi": {
        "total": 107.37,
        "new": 108.24,
        "existing": 107.45,
        "qoq": 0.21,
        "yoy": 2.88
      },
      "hicp": 104.97,
      "hicpYoy": 1.58,
      "realHpi": 102.29,
      "source": "snapshot"
    },
    {
      "geo": "BE",
      "period": "2018-Q2",
      "year": 2018,
      "quarter": 2,
      "hpi": {
        "total": 108.51,
        "new": 111.21,
        "existing": 108.0,
        "qoq": 1.06,
        "yoy": 3.86
      },
      "hicp": 106.36,
      "hicpYoy": 2.16,
      "realHpi": 102.02,
      "source": "snapshot"
    },
    {
      "geo": "BE",
      "period": "2018-Q3",
      "year": 2018,
      "quarter": 3,
      "hpi": {
        "total": 110.64,
        "new": 114.39,
        "existing": 109.81,
        "qoq": 1.96,
        "yoy": 2.62
      },
      "hicp": 106.81,
      "hicpYoy": 2.73,
      "realHpi": 103.59,
      "source": "snapshot"
    },
    {
      "geo": "BE",
      "period": "2018-Q4",
      "year": 2018,
      "quarter": 4,
      "hpi": {
        "total": 110.06,
        "new": 111.54,
        "existing": 109.94,
        "qoq": -0.52,
        "yoy": 2.73
      },
      "hicp": 107.61,
      "hicpYoy": 2.77,
      "realHpi": 102.28,
      "source": "snapshot"
    },
    {
      "geo": "BE",
      "period": "2019-Q1",
      "year": 2019,
      "quarter": 1,
      "hpi": {
        "total": 111.0,
        "new": 112.17,
        "existing": 110.98,
        "qoq": 0.85,
        "yoy": 3.38
      },
      "hicp": 107.06,
      "hicpYoy": 1.99,
      "realHpi": 103.68,
      "source": "snapshot"
    },
    {
      "geo": "BE",
      "period": "2019-Q2",
      "year": 2019,
      "quarter": 2,
      "hpi": {
        "total": 111.84,
        "new": 112.86,
        "existing": 111.85,
        "qoq": 0.76,
        "yoy": 3.07
      },
      "hicp": 108.12,
      "hicpYoy": 1.65,
      "realHpi": 103.44,
      "source": "snapshot"
    },
    {
      "geo": "BE",
      "period": "2019-Q3",
      "year": 2019,
      "quarter": 3,
      "hpi": {
        "total": 115.37,
        "new": 118.64,
        "existing": 114.77,
        "qoq": 3.16,
        "yoy": 4.28
      },
      "hicp": 107.75,
      "hicpYoy": 0.88,
      "realHpi": 107.07,
      "source": "snapshot"
    },
    {
      "geo": "BE",
      "period": "2019-Q4",
      "year": 2019,
      "quarter": 4,
      "hpi": {
        "total": 114.72,
        "new": 115.47,
        "existing": 114.82,
        "qoq": -0.56,
        "yoy": 4.23
      },
      "hicp": 108.14,
      "hicpYoy": 0.49,
      "realHpi": 106.08,
      "source": "snapshot"
    },
    {
      "geo": "BE",
      "period": "2020-Q1",
      "year": 2020,
      "quarter": 1,
      "hpi": {
        "total": 115.24,
        "new": 118.22,
        "existing": 114.73,
        "qoq": 0.45,
        "yoy": 3.82
      },
      "hicp": 108.08,
      "hicpYoy": 0.95,
      "realHpi": 106.62,
      "source": "snapshot"
    },
    {
      "geo": "BE",
      "period": "2020-Q2",
      "year": 2020,
      "quarter": 2,
      "hpi": {
        "total": 116.61,
        "new": 118.26,
        "existing": 116.47,
        "qoq": 1.19,
        "yoy": 4.27
      },
      "hicp": 108.12,
      "hicpYoy": 0.0,
      "realHpi": 107.85,
      "source": "snapshot"
    },
    {
      "geo": "BE",
      "period": "2020-Q3",
      "year": 2020,
      "quarter": 3,
      "hpi": {
        "total": 119.05,
        "new": 119.1,
        "existing": 119.35,
        "qoq": 2.09,
        "yoy": 3.19
      },
      "hicp": 108.21,
      "hicpYoy": 0.43,
      "realHpi": 110.02,
      "source": "snapshot"
    },
    {
      "geo": "BE",
      "period": "2020-Q4",
      "year": 2020,
      "quarter": 4,
      "hpi": {
        "total": 121.45,
        "new": 123.93,
        "existing": 121.09,
        "qoq": 2.02,
        "yoy": 5.87
      },
      "hicp": 108.5,
      "hicpYoy": 0.33,
      "realHpi": 111.94,
      "source": "snapshot"
    },
    {
      "geo": "BE",
      "period": "2021-Q1",
      "year": 2021,
      "quarter": 1,
      "hpi": {
        "total": 122.41,
        "new": 124.22,
        "existing": 122.26,
        "qoq": 0.79,
        "yoy": 6.22
      },
      "hicp": 108.99,
      "hicpYoy": 0.84,
      "realHpi": 112.31,
      "source": "snapshot"
    },
    {
      "geo": "BE",
      "period": "2021-Q2",
      "year": 2021,
      "quarter": 2,
      "hpi": {
        "total": 124.78,
        "new": 125.2,
        "existing": 125.05,
        "qoq": 1.94,
        "yoy": 7.01
      },
      "hicp": 110.68,
      "hicpYoy": 2.37,
      "realHpi": 112.74,
      "source": "snapshot"
    },
    {
      "geo": "BE",
      "period": "2021-Q3",
      "year": 2021,
      "quarter": 3,
      "hpi": {
        "total": 128.04,
        "new": 129.43,
        "existing": 128.02,
        "qoq": 2.61,
        "yoy": 7.55
      },
      "hicp": 111.78,
      "hicpYoy": 3.3,
      "realHpi": 114.55,
      "source": "snapshot"
    },
    {
      "geo": "BE",
      "period": "2021-Q4",
      "year": 2021,
      "quarter": 4,
      "hpi": {
        "total": 128.62,
        "new": 130.78,
        "existing": 128.38,
        "qoq": 0.45,
        "yoy": 5.9
      },
      "hicp": 115.4,
      "hicpYoy": 6.36,
      "realHpi": 111.46,
      "source": "snapshot"
    },
    {
      "geo": "BE",
      "period": "2022-Q1",
      "year": 2022,
      "quarter": 1,
      "hpi": {
        "total": 130.02,
        "new": 130.68,
        "existing": 130.16,
        "qoq": 1.09,
        "yoy": 6.22
      },
      "hicp": 118.92,
      "hicpYoy": 9.11,
      "realHpi": 109.33,
      "source": "snapshot"
    },
    {
      "geo": "BE",
      "period": "2022-Q2",
      "year": 2022,
      "quarter": 2,
      "hpi": {
        "total": 132.18,
        "new": 134.18,
        "existing": 131.98,
        "qoq": 1.66,
        "yoy": 5.93
      },
      "hicp": 121.68,
      "hicpYoy": 9.94,
      "realHpi": 108.63,
      "source": "snapshot"
    },
    {
      "geo": "BE",
      "period": "2022-Q3",
      "year": 2022,
      "quarter": 3,
      "hpi": {
        "total": 134.96,
        "new": 134.17,
        "existing": 135.47,
        "qoq": 2.1,
        "yoy": 5.4
      },
      "hicp": 124.06,
      "hicpYoy": 10.99,
      "realHpi": 108.79,
      "source": "snapshot"
    },
    {
      "geo": "BE",
      "period": "2022-Q4",
      "year": 2022,
      "quarter": 4,
      "hpi": {
        "total": 134.55,
        "new": 137.53,
        "existing": 134.11,
        "qoq": -0.3,
        "yoy": 4.61
      },
      "hicp": 128.38,
      "hicpYoy": 11.25,
      "realHpi": 104.81,
      "source": "snapshot"
    },
    {
      "geo": "BE",
      "period": "2023-Q1",
      "year": 2023,
      "quarter": 1,
      "hpi": {
        "total": 135.04,
        "new": 134.73,
        "existing": 135.33,
        "qoq": 0.36,
        "yoy": 3.86
      },
      "hicp": 125.96,
      "hicpYoy": 5.92,
      "realHpi": 107.21,
      "source": "snapshot"
    },
    {
      "geo": "BE",
      "period": "2023-Q2",
      "year": 2023,
      "quarter": 2,
      "hpi": {
        "total": 134.55,
        "new": 134.29,
        "existing": 134.83,
        "qoq": -0.36,
        "yoy": 1.79
      },
      "hicp": 124.78,
      "hicpYoy": 2.55,
      "realHpi": 107.83,
      "source": "snapshot"
    },
    {
      "geo": "BE",
      "period": "2023-Q3",
      "year": 2023,
      "quarter": 3,
      "hpi": {
        "total": 136.31,
        "new": 137.09,
        "existing": 136.37,
        "qoq": 1.31,
        "yoy": 1.0
      },
      "hicp": 125.99,
      "hicpYoy": 1.56,
      "realHpi": 108.19,
      "source": "snapshot"
    },
    {
      "geo": "BE",
      "period": "2023-Q4",
      "year": 2023,
      "quarter": 4,
      "hpi": {
        "total": 138.28,
        "new": 141.58,
        "existing": 137.78,
        "qoq": 1.45,
        "yoy": 2.77
      },
      "hicp": 127.55,
      "hicpYoy": -0.65,
      "realHpi": 108.41,
      "source": "snapshot"
    },
    {
      "geo": "BE",
      "period": "2024-Q1",
      "year": 2024,
      "quarter": 1,
      "hpi": {
        "total": 139.36,
        "new": 145.2,
        "existing": 138.19,
        "qoq": 0.78,
        "yoy": 3.2
      },
      "hicp": 129.7,
      "hicpYoy": 2.97,
      "realHpi": 107.45,
      "source": "snapshot"
    },
    {
      "geo": "BE",
      "period": "2024-Q2",
      "year": 2024,
      "quarter": 2,
      "hpi": {
        "total": 138.96,
        "new": 143.48,
        "existing": 138.14,
        "qoq": -0.29,
        "yoy": 3.28
      },
      "hicp": 131.09,
      "hicpYoy": 5.06,
      "realHpi": 106.0,
      "source": "snapshot"
    },
    {
      "geo": "BE",
      "period": "2024-Q3",
      "year": 2024,
      "quarter": 3,
      "hpi": {
        "total": 141.16,
        "new": 144.16,
        "existing": 140.75,
        "qoq": 1.58,
        "yoy": 3.56
      },
      "hicp": 131.9,
      "hicpYoy": 4.69,
      "realHpi": 107.02,
      "source": "snapshot"
    },
    {
      "geo": "BE",
      "period": "2024-Q4",
      "year": 2024,
      "quarter": 4,
      "hpi": {
        "total": 142.18,
        "new": 147.39,
        "existing": 141.18,
        "qoq": 0.72,
        "yoy": 2.82
      },
      "hicp": 133.38,
      "hicpYoy": 4.57,
      "realHpi": 106.6,
      "source": "snapshot"
    },
    {
      "geo": "BE",
      "period": "2025-Q1",
      "year": 2025,
      "quarter": 1,
      "hpi": {
        "total": 143.08,
        "new": 145.62,
        "existing": 143.17,
        "qoq": 0.63,
        "yoy": 2.67
      },
      "hicp": 135.03,
      "hicpYoy": 4.11,
      "realHpi": 105.96,
      "source": "snapshot"
    },
    {
      "geo": "BE",
      "period": "2025-Q2",
      "year": 2025,
      "quarter": 2,
      "hpi": {
        "total": 142.94,
        "new": 144.64,
        "existing": 143.36,
        "qoq": -0.1,
        "yoy": 2.86
      },
      "hicp": 134.93,
      "hicpYoy": 2.93,
      "realHpi": 105.94,
      "source": "snapshot"
    },
    {
      "geo": "BE",
      "period": "2025-Q3",
      "year": 2025,
      "quarter": 3,
      "hpi": {
        "total": 146.32,
        "new": 149.25,
        "existing": 146.28,
        "qoq": 2.36,
        "yoy": 3.66
      },
      "hicp": 135.37,
      "hicpYoy": 2.63,
      "realHpi": 108.09,
      "source": "snapshot"
    },
    {
      "geo": "BE",
      "period": "2025-Q4",
      "year": 2025,
      "quarter": 4,
      "hpi": {
        "total": 147.08,
        "new": 150.85,
        "existing": 146.71,
        "qoq": 0.52,
        "yoy": 3.45
      },
      "hicp": 136.64,
      "hicpYoy": 2.44,
      "realHpi": 107.64,
      "source": "snapshot"
    },
    {
      "geo": "BE",
      "period": "2026-Q1",
      "year": 2026,
      "quarter": 1,
      "hpi": {
        "total": 145.79,
        "new": 140.24,
        "existing": 148.68,
        "qoq": -0.88,
        "yoy": 1.89
      },
      "hicp": null,
      "hicpYoy": null,
      "realHpi": null,
      "source": "snapshot"
    },
    {
      "geo": "BE",
      "period": "2026-Q2",
      "year": 2026,
      "quarter": 2,
      "hpi": {
        "total": 145.99,
        "new": 140.06,
        "existing": 149.01,
        "qoq": 0.14,
        "yoy": 2.13
      },
      "hicp": null,
      "hicpYoy": null,
      "realHpi": null,
      "source": "snapshot"
    }
  ],
  "NL": [
    {
      "geo": "NL",
      "period": "2010-Q1",
      "year": 2010,
      "quarter": 1,
      "hpi": {
        "total": 111.67,
        "new": 105.9,
        "existing": 112.91,
        "qoq": null,
        "yoy": null
      },
      "hicp": 91.31,
      "hicpYoy": null,
      "realHpi": 122.3,
      "source": "snapshot"
    },
    {
      "geo": "NL",
      "period": "2010-Q2",
      "year": 2010,
      "quarter": 2,
      "hpi": {
        "total": 111.54,
        "new": 104.59,
        "existing": 113.05,
        "qoq": -0.12,
        "yoy": null
      },
      "hicp": 92.55,
      "hicpYoy": null,
      "realHpi": 120.52,
      "source": "snapshot"
    },
    {
      "geo": "NL",
      "period": "2010-Q3",
      "year": 2010,
      "quarter": 3,
      "hpi": {
        "total": 111.68,
        "new": 104.74,
        "existing": 113.2,
        "qoq": 0.13,
        "yoy": null
      },
      "hicp": 91.89,
      "hicpYoy": null,
      "realHpi": 121.54,
      "source": "snapshot"
    },
    {
      "geo": "NL",
      "period": "2010-Q4",
      "year": 2010,
      "quarter": 4,
      "hpi": {
        "total": 111.02,
        "new": 106.78,
        "existing": 111.9,
        "qoq": -0.59,
        "yoy": null
      },
      "hicp": 92.44,
      "hicpYoy": null,
      "realHpi": 120.1,
      "source": "snapshot"
    },
    {
      "geo": "NL",
      "period": "2011-Q1",
      "year": 2011,
      "quarter": 1,
      "hpi": {
        "total": 111.19,
        "new": 109.39,
        "existing": 111.33,
        "qoq": 0.15,
        "yoy": -0.43
      },
      "hicp": 93.05,
      "hicpYoy": 1.91,
      "realHpi": 119.49,
      "source": "snapshot"
    },
    {
      "geo": "NL",
      "period": "2011-Q2",
      "year": 2011,
      "quarter": 2,
      "hpi": {
        "total": 109.59,
        "new": 104.45,
        "existing": 110.75,
        "qoq": -1.44,
        "yoy": -1.75
      },
      "hicp": 94.61,
      "hicpYoy": 2.23,
      "realHpi": 115.83,
      "source": "snapshot"
    },
    {
      "geo": "NL",
      "period": "2011-Q3",
      "year": 2011,
      "quarter": 3,
      "hpi": {
        "total": 109.17,
        "new": 105.03,
        "existing": 110.03,
        "qoq": -0.38,
        "yoy": -2.25
      },
      "hicp": 94.77,
      "hicpYoy": 3.13,
      "realHpi": 115.19,
      "source": "snapshot"
    },
    {
      "geo": "NL",
      "period": "2011-Q4",
      "year": 2011,
      "quarter": 4,
      "hpi": {
        "total": 107.15,
        "new": 102.99,
        "existing": 108.02,
        "qoq": -1.85,
        "yoy": -3.49
      },
      "hicp": 94.87,
      "hicpYoy": 2.63,
      "realHpi": 112.94,
      "source": "snapshot"
    },
    {
      "geo": "NL",
      "period": "2012-Q1",
      "year": 2012,
      "quarter": 1,
      "hpi": {
        "total": 105.19,
        "new": 97.17,
        "existing": 106.72,
        "qoq": -1.83,
        "yoy": -5.4
      },
      "hicp": 95.73,
      "hicpYoy": 2.88,
      "realHpi": 109.88,
      "source": "snapshot"
    },
    {
      "geo": "NL",
      "period": "2012-Q2",
      "year": 2012,
      "quarter": 2,
      "hpi": {
        "total": 103.45,
        "new": 97.03,
        "existing": 104.71,
        "qoq": -1.65,
        "yoy": -5.6
      },
      "hicp": 97.05,
      "hicpYoy": 2.58,
      "realHpi": 106.59,
      "source": "snapshot"
    },
    {
      "geo": "NL",
      "period": "2012-Q3",
      "year": 2012,
      "quarter": 3,
      "hpi": {
        "total": 99.39,
        "new": 93.54,
        "existing": 100.54,
        "qoq": -3.92,
        "yoy": -8.96
      },
      "hicp": 97.2,
      "hicpYoy": 2.56,
      "realHpi": 102.25,
      "source": "snapshot"
    },
    {
      "geo": "NL",
      "period": "2012-Q4",
      "year": 2012,
      "quarter": 4,
      "hpi": {
        "total": 99.79,
        "new": 100.38,
        "existing": 99.82,
        "qoq": 0.4,
        "yoy": -6.87
      },
      "hicp": 97.97,
      "hicpYoy": 3.27,
      "realHpi": 101.86,
      "source": "snapshot"
    },
    {
      "geo": "NL",
      "period": "2013-Q1",
      "year": 2013,
      "quarter": 1,
      "hpi": {
        "total": 97.07,
        "new": 94.27,
        "existing": 97.52,
        "qoq": -2.73,
        "yoy": -7.72
      },
      "hicp": 98.81,
      "hicpYoy": 3.22,
      "realHpi": 98.24,
      "source": "snapshot"
    },
    {
      "geo": "NL",
      "period": "2013-Q2",
      "year": 2013,
      "quarter": 2,
      "hpi": {
        "total": 95.04,
        "new": 92.08,
        "existing": 95.5,
        "qoq": -2.09,
        "yoy": -8.13
      },
      "hicp": 99.96,
      "hicpYoy": 3.0,
      "realHpi": 95.08,
      "source": "snapshot"
    },
    {
      "geo": "NL",
      "period": "2013-Q3",
      "year": 2013,
      "quarter": 3,
      "hpi": {
        "total": 95.69,
        "new": 94.56,
        "existing": 95.94,
        "qoq": 0.68,
        "yoy": -3.72
      },
      "hicp": 99.88,
      "hicpYoy": 2.76,
      "realHpi": 95.8,
      "source": "snapshot"
    },
    {
      "geo": "NL",
      "period": "2013-Q4",
      "year": 2013,
      "quarter": 4,
      "hpi": {
        "total": 95.42,
        "new": 94.41,
        "existing": 95.65,
        "qoq": -0.28,
        "yoy": -4.38
      },
      "hicp": 99.24,
      "hicpYoy": 1.3,
      "realHpi": 96.15,
      "source": "snapshot"
    },
    {
      "geo": "NL",
      "period": "2014-Q1",
      "year": 2014,
      "quarter": 1,
      "hpi": {
        "total": 95.82,
        "new": 94.56,
        "existing": 96.08,
        "qoq": 0.42,
        "yoy": -1.29
      },
      "hicp": 99.24,
      "hicpYoy": 0.44,
      "realHpi": 96.55,
      "source": "snapshot"
    },
    {
      "geo": "NL",
      "period": "2014-Q2",
      "year": 2014,
      "quarter": 2,
      "hpi": {
        "total": 96.37,
        "new": 93.68,
        "existing": 96.8,
        "qoq": 0.57,
        "yoy": 1.4
      },
      "hicp": 100.31,
      "hicpYoy": 0.35,
      "realHpi": 96.07,
      "source": "snapshot"
    },
    {
      "geo": "NL",
      "period": "2014-Q3",
      "year": 2014,
      "quarter": 3,
      "hpi": {
        "total": 96.94,
        "new": 91.94,
        "existing": 97.66,
        "qoq": 0.59,
        "yoy": 1.31
      },
      "hicp": 100.17,
      "hicpYoy": 0.29,
      "realHpi": 96.78,
      "source": "snapshot"
    },
    {
      "geo": "NL",
      "period": "2014-Q4",
      "year": 2014,
      "quarter": 4,
      "hpi": {
        "total": 97.31,
        "new": 95.28,
        "existing": 97.66,
        "qoq": 0.38,
        "yoy": 1.98
      },
      "hicp": 99.44,
      "hicpYoy": 0.2,
      "realHpi": 97.86,
      "source": "snapshot"
    },
    {
      "geo": "NL",
      "period": "2015-Q1",
      "year": 2015,
      "quarter": 1,
      "hpi": {
        "total": 98.29,
        "new": 97.4,
        "existing": 98.45,
        "qoq": 1.01,
        "yoy": 2.58
      },
      "hicp": 98.77,
      "hicpYoy": -0.47,
      "realHpi": 99.51,
      "source": "snapshot"
    },
    {
      "geo": "NL",
      "period": "2015-Q2",
      "year": 2015,
      "quarter": 2,
      "hpi": {
        "total": 99.2,
        "new": 98.9,
        "existing": 99.25,
        "qoq": 0.93,
        "yoy": 2.94
      },
      "hicp": 100.69,
      "hicpYoy": 0.38,
      "realHpi": 98.52,
      "source": "snapshot"
    },
    {
      "geo": "NL",
      "period": "2015-Q3",
      "year": 2015,
      "quarter": 3,
      "hpi": {
        "total": 101.02,
        "new": 102.22,
        "existing": 100.8,
        "qoq": 1.83,
        "yoy": 4.21
      },
      "hicp": 100.68,
      "hicpYoy": 0.51,
      "realHpi": 100.34,
      "source": "snapshot"
    },
    {
      "geo": "NL",
      "period": "2015-Q4",
      "year": 2015,
      "quarter": 4,
      "hpi": {
        "total": 101.5,
        "new": 101.48,
        "existing": 101.5,
        "qoq": 0.48,
        "yoy": 4.31
      },
      "hicp": 99.86,
      "hicpYoy": 0.42,
      "realHpi": 101.64,
      "source": "snapshot"
    },
    {
      "geo": "NL",
      "period": "2016-Q1",
      "year": 2016,
      "quarter": 1,
      "hpi": {
        "total": 102.52,
        "new": 100.98,
        "existing": 102.78,
        "qoq": 1.0,
        "yoy": 4.3
      },
      "hicp": 99.12,
      "hicpYoy": 0.35,
      "realHpi": 103.43,
      "source": "snapshot"
    },
    {
      "geo": "NL",
      "period": "2016-Q2",
      "year": 2016,
      "quarter": 2,
      "hpi": {
        "total": 104.03,
        "new": 103.18,
        "existing": 104.18,
        "qoq": 1.47,
        "yoy": 4.87
      },
      "hicp": 100.49,
      "hicpYoy": -0.2,
      "realHpi": 103.52,
      "source": "snapshot"
    },
    {
      "geo": "NL",
      "period": "2016-Q3",
      "year": 2016,
      "quarter": 3,
      "hpi": {
        "total": 106.58,
        "new": 104.78,
        "existing": 106.89,
        "qoq": 2.45,
        "yoy": 5.5
      },
      "hicp": 100.49,
      "hicpYoy": -0.19,
      "realHpi": 106.06,
      "source": "snapshot"
    },
    {
      "geo": "NL",
      "period": "2016-Q4",
      "year": 2016,
      "quarter": 4,
      "hpi": {
        "total": 108.03,
        "new": 107.16,
        "existing": 108.18,
        "qoq": 1.36,
        "yoy": 6.43
      },
      "hicp": 100.32,
      "hicpYoy": 0.46,
      "realHpi": 107.69,
      "source": "snapshot"
    },
    {
      "geo": "NL",
      "period": "2017-Q1",
      "year": 2017,
      "quarter": 1,
      "hpi": {
        "total": 110.2,
        "new": 109.15,
        "existing": 110.38,
        "qoq": 2.01,
        "yoy": 7.49
      },
      "hicp": 100.42,
      "hicpYoy": 1.31,
      "realHpi": 109.74,
      "source": "snapshot"
    },
    {
      "geo": "NL",
      "period": "2017-Q2",
      "year": 2017,
      "quarter": 2,
      "hpi": {
        "total": 112.06,
        "new": 108.4,
        "existing": 112.64,
        "qoq": 1.69,
        "yoy": 7.72
      },
      "hicp": 101.53,
      "hicpYoy": 1.03,
      "realHpi": 110.37,
      "source": "snapshot"
    },
    {
      "geo": "NL",
      "period": "2017-Q3",
      "year": 2017,
      "quarter": 3,
      "hpi": {
        "total": 115.22,
        "new": 112.78,
        "existing": 115.61,
        "qoq": 2.82,
        "yoy": 8.11
      },
      "hicp": 101.98,
      "hicpYoy": 1.48,
      "realHpi": 112.98,
      "source": "snapshot"
    },
    {
      "geo": "NL",
      "period": "2017-Q4",
      "year": 2017,
      "quarter": 4,
      "hpi": {
        "total": 117.74,
        "new": 118.77,
        "existing": 117.59,
        "qoq": 2.19,
        "yoy": 8.99
      },
      "hicp": 101.68,
      "hicpYoy": 1.36,
      "realHpi": 115.79,
      "source": "snapshot"
    },
    {
      "geo": "NL",
      "period": "2018-Q1",
      "year": 2018,
      "quarter": 1,
      "hpi": {
        "total": 120.32,
        "new": 119.06,
        "existing": 120.53,
        "qoq": 2.19,
        "yoy": 9.18
      },
      "hicp": 101.67,
      "hicpYoy": 1.24,
      "realHpi": 118.34,
      "source": "snapshot"
    },
    {
      "geo": "NL",
      "period": "2018-Q2",
      "year": 2018,
      "quarter": 2,
      "hpi": {
        "total": 122.64,
        "new": 120.53,
        "existing": 122.99,
        "qoq": 1.93,
        "yoy": 9.44
      },
      "hicp": 103.08,
      "hicpYoy": 1.53,
      "realHpi": 118.98,
      "source": "snapshot"
    },
    {
      "geo": "NL",
      "period": "2018-Q3",
      "year": 2018,
      "quarter": 3,
      "hpi": {
        "total": 126.45,
        "new": 126.81,
        "existing": 126.41,
        "qoq": 3.11,
        "yoy": 9.75
      },
      "hicp": 103.8,
      "hicpYoy": 1.78,
      "realHpi": 121.82,
      "source": "snapshot"
    },
    {
      "geo": "NL",
      "period": "2018-Q4",
      "year": 2018,
      "quarter": 4,
      "hpi": {
        "total": 128.2,
        "new": 127.42,
        "existing": 128.35,
        "qoq": 1.38,
        "yoy": 8.88
      },
      "hicp": 103.54,
      "hicpYoy": 1.83,
      "realHpi": 123.82,
      "source": "snapshot"
    },
    {
      "geo": "NL",
      "period": "2019-Q1",
      "year": 2019,
      "quarter": 1,
      "hpi": {
        "total": 130.34,
        "new": 129.67,
        "existing": 130.47,
        "qoq": 1.67,
        "yoy": 8.33
      },
      "hicp": 104.18,
      "hicpYoy": 2.47,
      "realHpi": 125.11,
      "source": "snapshot"
    },
    {
      "geo": "NL",
      "period": "2019-Q2",
      "year": 2019,
      "quarter": 2,
      "hpi": {
        "total": 132.15,
        "new": 132.6,
        "existing": 132.09,
        "qoq": 1.39,
        "yoy": 7.75
      },
      "hicp": 105.87,
      "hicpYoy": 2.71,
      "realHpi": 124.82,
      "source": "snapshot"
    },
    {
      "geo": "NL",
      "period": "2019-Q3",
      "year": 2019,
      "quarter": 3,
      "hpi": {
        "total": 134.49,
        "new": 134.87,
        "existing": 134.45,
        "qoq": 1.77,
        "yoy": 6.36
      },
      "hicp": 106.72,
      "hicpYoy": 2.81,
      "realHpi": 126.02,
      "source": "snapshot"
    },
    {
      "geo": "NL",
      "period": "2019-Q4",
      "year": 2019,
      "quarter": 4,
      "hpi": {
        "total": 136.54,
        "new": 137.88,
        "existing": 136.34,
        "qoq": 1.52,
        "yoy": 6.51
      },
      "hicp": 106.36,
      "hicpYoy": 2.72,
      "realHpi": 128.38,
      "source": "snapshot"
    },
    {
      "geo": "NL",
      "period": "2020-Q1",
      "year": 2020,
      "quarter": 1,
      "hpi": {
        "total": 139.3,
        "new": 138.74,
        "existing": 139.36,
        "qoq": 2.02,
        "yoy": 6.87
      },
      "hicp": 105.57,
      "hicpYoy": 1.33,
      "realHpi": 131.95,
      "source": "snapshot"
    },
    {
      "geo": "NL",
      "period": "2020-Q2",
      "year": 2020,
      "quarter": 2,
      "hpi": {
        "total": 142.6,
        "new": 144.82,
        "existing": 142.27,
        "qoq": 2.37,
        "yoy": 7.91
      },
      "hicp": 107.18,
      "hicpYoy": 1.24,
      "realHpi": 133.05,
      "source": "snapshot"
    },
    {
      "geo": "NL",
      "period": "2020-Q3",
      "year": 2020,
      "quarter": 3,
      "hpi": {
        "total": 146.0,
        "new": 149.66,
        "existing": 145.48,
        "qoq": 2.38,
        "yoy": 8.56
      },
      "hicp": 107.75,
      "hicpYoy": 0.97,
      "realHpi": 135.5,
      "source": "snapshot"
    },
    {
      "geo": "NL",
      "period": "2020-Q4",
      "year": 2020,
      "quarter": 4,
      "hpi": {
        "total": 148.37,
        "new": 148.8,
        "existing": 148.29,
        "qoq": 1.62,
        "yoy": 8.66
      },
      "hicp": 107.33,
      "hicpYoy": 0.91,
      "realHpi": 138.24,
      "source": "snapshot"
    },
    {
      "geo": "NL",
      "period": "2021-Q1",
      "year": 2021,
      "quarter": 1,
      "hpi": {
        "total": 153.72,
        "new": 154.63,
        "existing": 153.56,
        "qoq": 3.61,
        "yoy": 10.35
      },
      "hicp": 107.45,
      "hicpYoy": 1.78,
      "realHpi": 143.06,
      "source": "snapshot"
    },
    {
      "geo": "NL",
      "period": "2021-Q2",
      "year": 2021,
      "quarter": 2,
      "hpi": {
        "total": 160.55,
        "new": 160.62,
        "existing": 160.53,
        "qoq": 4.44,
        "yoy": 12.59
      },
      "hicp": 109.11,
      "hicpYoy": 1.8,
      "realHpi": 147.15,
      "source": "snapshot"
    },
    {
      "geo": "NL",
      "period": "2021-Q3",
      "year": 2021,
      "quarter": 3,
      "hpi": {
        "total": 169.59,
        "new": 162.85,
        "existing": 170.71,
        "qoq": 5.63,
        "yoy": 16.16
      },
      "hicp": 110.29,
      "hicpYoy": 2.36,
      "realHpi": 153.77,
      "source": "snapshot"
    },
    {
      "geo": "NL",
      "period": "2021-Q4",
      "year": 2021,
      "quarter": 4,
      "hpi": {
        "total": 175.9,
        "new": 168.19,
        "existing": 177.19,
        "qoq": 3.72,
        "yoy": 18.55
      },
      "hicp": 113.07,
      "hicpYoy": 5.35,
      "realHpi": 155.57,
      "source": "snapshot"
    },
    {
      "geo": "NL",
      "period": "2022-Q1",
      "year": 2022,
      "quarter": 1,
      "hpi": {
        "total": 182.94,
        "new": 174.15,
        "existing": 184.42,
        "qoq": 4.0,
        "yoy": 19.01
      },
      "hicp": 116.96,
      "hicpYoy": 8.85,
      "realHpi": 156.41,
      "source": "snapshot"
    },
    {
      "geo": "NL",
      "period": "2022-Q2",
      "year": 2022,
      "quarter": 2,
      "hpi": {
        "total": 188.58,
        "new": 182.17,
        "existing": 189.62,
        "qoq": 3.08,
        "yoy": 17.46
      },
      "hicp": 120.5,
      "hicpYoy": 10.44,
      "realHpi": 156.5,
      "source": "snapshot"
    },
    {
      "geo": "NL",
      "period": "2022-Q3",
      "year": 2022,
      "quarter": 3,
      "hpi": {
        "total": 189.95,
        "new": 186.27,
        "existing": 190.5,
        "qoq": 0.73,
        "yoy": 12.01
      },
      "hicp": 125.86,
      "hicpYoy": 14.12,
      "realHpi": 150.92,
      "source": "snapshot"
    },
    {
      "geo": "NL",
      "period": "2022-Q4",
      "year": 2022,
      "quarter": 4,
      "hpi": {
        "total": 185.89,
        "new": 187.12,
        "existing": 185.53,
        "qoq": -2.14,
        "yoy": 5.68
      },
      "hicp": 127.79,
      "hicpYoy": 13.02,
      "realHpi": 145.47,
      "source": "snapshot"
    },
    {
      "geo": "NL",
      "period": "2023-Q1",
      "year": 2023,
      "quarter": 1,
      "hpi": {
        "total": 183.14,
        "new": 186.51,
        "existing": 182.45,
        "qoq": -1.48,
        "yoy": 0.11
      },
      "hicp": 125.43,
      "hicpYoy": 7.24,
      "realHpi": 146.01,
      "source": "snapshot"
    },
    {
      "geo": "NL",
      "period": "2023-Q2",
      "year": 2023,
      "quarter": 2,
      "hpi": {
        "total": 180.92,
        "new": 189.57,
        "existing": 179.42,
        "qoq": -1.21,
        "yoy": -4.06
      },
      "hicp": 128.12,
      "hicpYoy": 6.32,
      "realHpi": 141.21,
      "source": "snapshot"
    },
    {
      "geo": "NL",
      "period": "2023-Q3",
      "year": 2023,
      "quarter": 3,
      "hpi": {
        "total": 182.91,
        "new": 188.83,
        "existing": 181.83,
        "qoq": 1.1,
        "yoy": -3.71
      },
      "hicp": 129.32,
      "hicpYoy": 2.75,
      "realHpi": 141.44,
      "source": "snapshot"
    },
    {
      "geo": "NL",
      "period": "2023-Q4",
      "year": 2023,
      "quarter": 4,
      "hpi": {
        "total": 186.07,
        "new": 191.91,
        "existing": 185.0,
        "qoq": 1.73,
        "yoy": 0.1
      },
      "hicp": 128.36,
      "hicpYoy": 0.45,
      "realHpi": 144.96,
      "source": "snapshot"
    },
    {
      "geo": "NL",
      "period": "2024-Q1",
      "year": 2024,
      "quarter": 1,
      "hpi": {
        "total": 189.87,
        "new": 190.21,
        "existing": 189.38,
        "qoq": 2.04,
        "yoy": 3.67
      },
      "hicp": 129.15,
      "hicpYoy": 2.97,
      "realHpi": 147.02,
      "source": "snapshot"
    },
    {
      "geo": "NL",
      "period": "2024-Q2",
      "year": 2024,
      "quarter": 2,
      "hpi": {
        "total": 194.81,
        "new": 190.12,
        "existing": 194.84,
        "qoq": 2.6,
        "yoy": 7.68
      },
      "hicp": 131.8,
      "hicpYoy": 2.87,
      "realHpi": 147.81,
      "source": "snapshot"
    },
    {
      "geo": "NL",
      "period": "2024-Q3",
      "year": 2024,
      "quarter": 3,
      "hpi": {
        "total": 201.98,
        "new": 197.48,
        "existing": 201.97,
        "qoq": 3.68,
        "yoy": 10.43
      },
      "hicp": 133.65,
      "hicpYoy": 3.35,
      "realHpi": 151.13,
      "source": "snapshot"
    },
    {
      "geo": "NL",
      "period": "2024-Q4",
      "year": 2024,
      "quarter": 4,
      "hpi": {
        "total": 206.31,
        "new": 202.7,
        "existing": 206.19,
        "qoq": 2.14,
        "yoy": 10.88
      },
      "hicp": 133.08,
      "hicpYoy": 3.68,
      "realHpi": 155.03,
      "source": "snapshot"
    },
    {
      "geo": "NL",
      "period": "2025-Q1",
      "year": 2025,
      "quarter": 1,
      "hpi": {
        "total": 210.27,
        "new": 208.0,
        "existing": 209.96,
        "qoq": 1.92,
        "yoy": 10.74
      },
      "hicp": 133.4,
      "hicpYoy": 3.29,
      "realHpi": 157.62,
      "source": "snapshot"
    },
    {
      "geo": "NL",
      "period": "2025-Q2",
      "year": 2025,
      "quarter": 2,
      "hpi": {
        "total": 213.35,
        "new": 205.31,
        "existing": 213.83,
        "qoq": 1.46,
        "yoy": 9.52
      },
      "hicp": 136.04,
      "hicpYoy": 3.22,
      "realHpi": 156.83,
      "source": "snapshot"
    },
    {
      "geo": "NL",
      "period": "2025-Q3",
      "year": 2025,
      "quarter": 3,
      "hpi": {
        "total": 217.95,
        "new": 214.85,
        "existing": 217.73,
        "qoq": 2.16,
        "yoy": 7.91
      },
      "hicp": 137.18,
      "hicpYoy": 2.64,
      "realHpi": 158.88,
      "source": "snapshot"
    },
    {
      "geo": "NL",
      "period": "2025-Q4",
      "year": 2025,
      "quarter": 4,
      "hpi": {
        "total": 219.02,
        "new": 215.3,
        "existing": 218.88,
        "qoq": 0.49,
        "yoy": 6.16
      },
      "hicp": 136.82,
      "hicpYoy": 2.81,
      "realHpi": 160.08,
      "source": "snapshot"
    },
    {
      "geo": "NL",
      "period": "2026-Q1",
      "year": 2026,
      "quarter": 1,
      "hpi": {
        "total": 221.43,
        "new": 220.17,
        "existing": 220.98,
        "qoq": 1.1,
        "yoy": 5.31
      },
      "hicp": null,
      "hicpYoy": null,
      "realHpi": null,
      "source": "snapshot"
    },
    {
      "geo": "NL",
      "period": "2026-Q2",
      "year": 2026,
      "quarter": 2,
      "hpi": {
        "total": 222.62,
        "new": 215.42,
        "existing": 222.88,
        "qoq": 0.54,
        "yoy": 4.34
      },
      "hicp": null,
      "hicpYoy": null,
      "realHpi": null,
      "source": "snapshot"
    }
  ],
  "PT": [
    {
      "geo": "PT",
      "period": "2010-Q1",
      "year": 2010,
      "quarter": 1,
      "hpi": {
        "total": 107.74,
        "new": 105.06,
        "existing": 110.42,
        "qoq": null,
        "yoy": null
      },
      "hicp": 91.91,
      "hicpYoy": null,
      "realHpi": 117.22,
      "source": "snapshot"
    },
    {
      "geo": "PT",
      "period": "2010-Q2",
      "year": 2010,
      "quarter": 2,
      "hpi": {
        "total": 108.16,
        "new": 105.6,
        "existing": 110.72,
        "qoq": 0.39,
        "yoy": null
      },
      "hicp": 93.24,
      "hicpYoy": null,
      "realHpi": 116.0,
      "source": "snapshot"
    },
    {
      "geo": "PT",
      "period": "2010-Q3",
      "year": 2010,
      "quarter": 3,
      "hpi": {
        "total": 107.32,
        "new": 105.28,
        "existing": 109.38,
        "qoq": -0.78,
        "yoy": null
      },
      "hicp": 93.68,
      "hicpYoy": null,
      "realHpi": 114.56,
      "source": "snapshot"
    },
    {
      "geo": "PT",
      "period": "2010-Q4",
      "year": 2010,
      "quarter": 4,
      "hpi": {
        "total": 106.21,
        "new": 104.8,
        "existing": 107.68,
        "qoq": -1.03,
        "yoy": null
      },
      "hicp": 94.07,
      "hicpYoy": null,
      "realHpi": 112.91,
      "source": "snapshot"
    },
    {
      "geo": "PT",
      "period": "2011-Q1",
      "year": 2011,
      "quarter": 1,
      "hpi": {
        "total": 105.45,
        "new": 104.5,
        "existing": 106.52,
        "qoq": -0.72,
        "yoy": -2.13
      },
      "hicp": 95.27,
      "hicpYoy": 3.66,
      "realHpi": 110.69,
      "source": "snapshot"
    },
    {
      "geo": "PT",
      "period": "2011-Q2",
      "year": 2011,
      "quarter": 2,
      "hpi": {
        "total": 103.18,
        "new": 102.5,
        "existing": 104.0,
        "qoq": -2.15,
        "yoy": -4.6
      },
      "hicp": 96.67,
      "hicpYoy": 3.68,
      "realHpi": 106.73,
      "source": "snapshot"
    },
    {
      "geo": "PT",
      "period": "2011-Q3",
      "year": 2011,
      "quarter": 3,
      "hpi": {
        "total": 101.49,
        "new": 101.84,
        "existing": 101.38,
        "qoq": -1.64,
        "yoy": -5.43
      },
      "hicp": 96.57,
      "hicpYoy": 3.08,
      "realHpi": 105.09,
      "source": "snapshot"
    },
    {
      "geo": "PT",
      "period": "2011-Q4",
      "year": 2011,
      "quarter": 4,
      "hpi": {
        "total": 98.25,
        "new": 99.56,
        "existing": 97.29,
        "qoq": -3.19,
        "yoy": -7.49
      },
      "hicp": 97.64,
      "hicpYoy": 3.8,
      "realHpi": 100.62,
      "source": "snapshot"
    },
    {
      "geo": "PT",
      "period": "2012-Q1",
      "year": 2012,
      "quarter": 1,
      "hpi": {
        "total": 96.84,
        "new": 98.12,
        "existing": 95.91,
        "qoq": -1.44,
        "yoy": -8.17
      },
      "hicp": 98.45,
      "hicpYoy": 3.34,
      "realHpi": 98.36,
      "source": "snapshot"
    },
    {
      "geo": "PT",
      "period": "2012-Q2",
      "year": 2012,
      "quarter": 2,
      "hpi": {
        "total": 94.64,
        "new": 95.0,
        "existing": 94.4,
        "qoq": -2.27,
        "yoy": -8.28
      },
      "hicp": 99.36,
      "hicpYoy": 2.78,
      "realHpi": 95.25,
      "source": "snapshot"
    },
    {
      "geo": "PT",
      "period": "2012-Q3",
      "year": 2012,
      "quarter": 3,
      "hpi": {
        "total": 93.7,
        "new": 94.77,
        "existing": 92.92,
        "qoq": -0.99,
        "yoy": -7.68
      },
      "hicp": 99.42,
      "hicpYoy": 2.95,
      "realHpi": 94.25,
      "source": "snapshot"
    },
    {
      "geo": "PT",
      "period": "2012-Q4",
      "year": 2012,
      "quarter": 4,
      "hpi": {
        "total": 94.31,
        "new": 94.84,
        "existing": 93.94,
        "qoq": 0.65,
        "yoy": -4.01
      },
      "hicp": 99.64,
      "hicpYoy": 2.05,
      "realHpi": 94.65,
      "source": "snapshot"
    },
    {
      "geo": "PT",
      "period": "2013-Q1",
      "year": 2013,
      "quarter": 1,
      "hpi": {
        "total": 92.45,
        "new": 95.13,
        "existing": 90.72,
        "qoq": -1.97,
        "yoy": -4.53
      },
      "hicp": 98.88,
      "hicpYoy": 0.44,
      "realHpi": 93.5,
      "source": "snapshot"
    },
    {
      "geo": "PT",
      "period": "2013-Q2",
      "year": 2013,
      "quarter": 2,
      "hpi": {
        "total": 92.25,
        "new": 93.36,
        "existing": 91.51,
        "qoq": -0.22,
        "yoy": -2.53
      },
      "hicp": 100.2,
      "hicpYoy": 0.85,
      "realHpi": 92.07,
      "source": "snapshot"
    },
    {
      "geo": "PT",
      "period": "2013-Q3",
      "year": 2013,
      "quarter": 3,
      "hpi": {
        "total": 92.75,
        "new": 93.85,
        "existing": 92.01,
        "qoq": 0.54,
        "yoy": -1.01
      },
      "hicp": 99.83,
      "hicpYoy": 0.41,
      "realHpi": 92.91,
      "source": "snapshot"
    },
    {
      "geo": "PT",
      "period": "2013-Q4",
      "year": 2013,
      "quarter": 4,
      "hpi": {
        "total": 94.89,
        "new": 95.38,
        "existing": 94.55,
        "qoq": 2.31,
        "yoy": 0.61
      },
      "hicp": 99.71,
      "hicpYoy": 0.07,
      "realHpi": 95.17,
      "source": "snapshot"
    },
    {
      "geo": "PT",
      "period": "2014-Q1",
      "year": 2014,
      "quarter": 1,
      "hpi": {
        "total": 96.16,
        "new": 97.92,
        "existing": 95.02,
        "qoq": 1.34,
        "yoy": 4.01
      },
      "hicp": 98.74,
      "hicpYoy": -0.14,
      "realHpi": 97.39,
      "source": "snapshot"
    },
    {
      "geo": "PT",
      "period": "2014-Q2",
      "year": 2014,
      "quarter": 2,
      "hpi": {
        "total": 97.7,
        "new": 99.41,
        "existing": 96.6,
        "qoq": 1.6,
        "yoy": 5.91
      },
      "hicp": 99.98,
      "hicpYoy": -0.22,
      "realHpi": 97.72,
      "source": "snapshot"
    },
    {
      "geo": "PT",
      "period": "2014-Q3",
      "year": 2014,
      "quarter": 3,
      "hpi": {
        "total": 97.31,
        "new": 99.42,
        "existing": 95.95,
        "qoq": -0.4,
        "yoy": 4.92
      },
      "hicp": 99.57,
      "hicpYoy": -0.26,
      "realHpi": 97.73,
      "source": "snapshot"
    },
    {
      "geo": "PT",
      "period": "2014-Q4",
      "year": 2014,
      "quarter": 4,
      "hpi": {
        "total": 96.98,
        "new": 96.57,
        "existing": 97.19,
        "qoq": -0.34,
        "yoy": 2.2
      },
      "hicp": 99.69,
      "hicpYoy": -0.02,
      "realHpi": 97.28,
      "source": "snapshot"
    },
    {
      "geo": "PT",
      "period": "2015-Q1",
      "year": 2015,
      "quarter": 1,
      "hpi": {
        "total": 96.94,
        "new": 96.8,
        "existing": 97.01,
        "qoq": -0.04,
        "yoy": 0.81
      },
      "hicp": 98.74,
      "hicpYoy": 0.0,
      "realHpi": 98.18,
      "source": "snapshot"
    },
    {
      "geo": "PT",
      "period": "2015-Q2",
      "year": 2015,
      "quarter": 2,
      "hpi": {
        "total": 100.57,
        "new": 101.9,
        "existing": 99.89,
        "qoq": 3.74,
        "yoy": 2.94
      },
      "hicp": 100.72,
      "hicpYoy": 0.74,
      "realHpi": 99.85,
      "source": "snapshot"
    },
    {
      "geo": "PT",
      "period": "2015-Q3",
      "year": 2015,
      "quarter": 3,
      "hpi": {
        "total": 100.65,
        "new": 100.04,
        "existing": 100.96,
        "qoq": 0.08,
        "yoy": 3.43
      },
      "hicp": 100.32,
      "hicpYoy": 0.75,
      "realHpi": 100.33,
      "source": "snapshot"
    },
    {
      "geo": "PT",
      "period": "2015-Q4",
      "year": 2015,
      "quarter": 4,
      "hpi": {
        "total": 101.84,
        "new": 101.26,
        "existing": 102.14,
        "qoq": 1.18,
        "yoy": 5.01
      },
      "hicp": 100.23,
      "hicpYoy": 0.54,
      "realHpi": 101.61,
      "source": "snapshot"
    },
    {
      "geo": "PT",
      "period": "2016-Q1",
      "year": 2016,
      "quarter": 1,
      "hpi": {
        "total": 103.67,
        "new": 101.34,
        "existing": 104.66,
        "qoq": 1.8,
        "yoy": 6.94
      },
      "hicp": 99.18,
      "hicpYoy": 0.45,
      "realHpi": 104.53,
      "source": "snapshot"
    },
    {
      "geo": "PT",
      "period": "2016-Q2",
      "year": 2016,
      "quarter": 2,
      "hpi": {
        "total": 106.91,
        "new": 103.46,
        "existing": 108.34,
        "qoq": 3.13,
        "yoy": 6.3
      },
      "hicp": 101.25,
      "hicpYoy": 0.53,
      "realHpi": 105.59,
      "source": "snapshot"
    },
    {
      "geo": "PT",
      "period": "2016-Q3",
      "year": 2016,
      "quarter": 3,
      "hpi": {
        "total": 108.31,
        "new": 103.76,
        "existing": 110.18,
        "qoq": 1.31,
        "yoy": 7.61
      },
      "hicp": 101.06,
      "hicpYoy": 0.74,
      "realHpi": 107.17,
      "source": "snapshot"
    },
    {
      "geo": "PT",
      "period": "2016-Q4",
      "year": 2016,
      "quarter": 4,
      "hpi": {
        "total": 109.57,
        "new": 104.77,
        "existing": 111.53,
        "qoq": 1.16,
        "yoy": 7.59
      },
      "hicp": 101.05,
      "hicpYoy": 0.82,
      "realHpi": 108.43,
      "source": "snapshot"
    },
    {
      "geo": "PT",
      "period": "2017-Q1",
      "year": 2017,
      "quarter": 1,
      "hpi": {
        "total": 111.89,
        "new": 105.58,
        "existing": 114.34,
        "qoq": 2.12,
        "yoy": 7.93
      },
      "hicp": 100.59,
      "hicpYoy": 1.42,
      "realHpi": 111.23,
      "source": "snapshot"
    },
    {
      "geo": "PT",
      "period": "2017-Q2",
      "year": 2017,
      "quarter": 2,
      "hpi": {
        "total": 115.51,
        "new": 109.02,
        "existing": 118.03,
        "qoq": 3.24,
        "yoy": 8.04
      },
      "hicp": 102.99,
      "hicpYoy": 1.72,
      "realHpi": 112.16,
      "source": "snapshot"
    },
    {
      "geo": "PT",
      "period": "2017-Q3",
      "year": 2017,
      "quarter": 3,
      "hpi": {
        "total": 119.6,
        "new": 110.92,
        "existing": 122.82,
        "qoq": 3.54,
        "yoy": 10.42
      },
      "hicp": 102.39,
      "hicpYoy": 1.32,
      "realHpi": 116.81,
      "source": "snapshot"
    },
    {
      "geo": "PT",
      "period": "2017-Q4",
      "year": 2017,
      "quarter": 4,
      "hpi": {
        "total": 121.06,
        "new": 110.96,
        "existing": 124.72,
        "qoq": 1.22,
        "yoy": 10.49
      },
      "hicp": 102.85,
      "hicpYoy": 1.78,
      "realHpi": 117.71,
      "source": "snapshot"
    },
    {
      "geo": "PT",
      "period": "2018-Q1",
      "year": 2018,
      "quarter": 1,
      "hpi": {
        "total": 125.58,
        "new": 115.8,
        "existing": 129.18,
        "qoq": 3.73,
        "yoy": 12.24
      },
      "hicp": 101.45,
      "hicpYoy": 0.85,
      "realHpi": 123.79,
      "source": "snapshot"
    },
    {
      "geo": "PT",
      "period": "2018-Q2",
      "year": 2018,
      "quarter": 2,
      "hpi": {
        "total": 128.49,
        "new": 115.86,
        "existing": 132.9,
        "qoq": 2.32,
        "yoy": 11.24
      },
      "hicp": 104.27,
      "hicpYoy": 1.24,
      "realHpi": 123.23,
      "source": "snapshot"
    },
    {
      "geo": "PT",
      "period": "2018-Q3",
      "year": 2018,
      "quarter": 3,
      "hpi": {
        "total": 129.72,
        "new": 117.19,
        "existing": 134.11,
        "qoq": 0.96,
        "yoy": 8.46
      },
      "hicp": 104.22,
      "hicpYoy": 1.79,
      "realHpi": 124.47,
      "source": "snapshot"
    },
    {
      "geo": "PT",
      "period": "2018-Q4",
      "year": 2018,
      "quarter": 4,
      "hpi": {
        "total": 132.34,
        "new": 120.34,
        "existing": 136.6,
        "qoq": 2.02,
        "yoy": 9.32
      },
      "hicp": 103.65,
      "hicpYoy": 0.78,
      "realHpi": 127.68,
      "source": "snapshot"
    },
    {
      "geo": "PT",
      "period": "2019-Q1",
      "year": 2019,
      "quarter": 1,
      "hpi": {
        "total": 137.14,
        "new": 122.76,
        "existing": 142.08,
        "qoq": 3.63,
        "yoy": 9.21
      },
      "hicp": 102.24,
      "hicpYoy": 0.78,
      "realHpi": 134.14,
      "source": "snapshot"
    },
    {
      "geo": "PT",
      "period": "2019-Q2",
      "year": 2019,
      "quarter": 2,
      "hpi": {
        "total": 140.65,
        "new": 127.88,
        "existing": 145.19,
        "qoq": 2.56,
        "yoy": 9.46
      },
      "hicp": 104.91,
      "hicpYoy": 0.61,
      "realHpi": 134.07,
      "source": "snapshot"
    },
    {
      "geo": "PT",
      "period": "2019-Q3",
      "year": 2019,
      "quarter": 3,
      "hpi": {
        "total": 143.67,
        "new": 129.43,
        "existing": 148.63,
        "qoq": 2.15,
        "yoy": 10.75
      },
      "hicp": 103.85,
      "hicpYoy": -0.36,
      "realHpi": 138.34,
      "source": "snapshot"
    },
    {
      "geo": "PT",
      "period": "2019-Q4",
      "year": 2019,
      "quarter": 4,
      "hpi": {
        "total": 146.07,
        "new": 130.27,
        "existing": 151.48,
        "qoq": 1.67,
        "yoy": 10.37
      },
      "hicp": 103.82,
      "hicpYoy": 0.16,
      "realHpi": 140.7,
      "source": "snapshot"
    },
    {
      "geo": "PT",
      "period": "2020-Q1",
      "year": 2020,
      "quarter": 1,
      "hpi": {
        "total": 151.67,
        "new": 134.99,
        "existing": 157.37,
        "qoq": 3.83,
        "yoy": 10.6
      },
      "hicp": 102.74,
      "hicpYoy": 0.49,
      "realHpi": 147.63,
      "source": "snapshot"
    },
    {
      "geo": "PT",
      "period": "2020-Q2",
      "year": 2020,
      "quarter": 2,
      "hpi": {
        "total": 154.34,
        "new": 136.94,
        "existing": 160.28,
        "qoq": 1.76,
        "yoy": 9.73
      },
      "hicp": 104.72,
      "hicpYoy": -0.18,
      "realHpi": 147.38,
      "source": "snapshot"
    },
    {
      "geo": "PT",
      "period": "2020-Q3",
      "year": 2020,
      "quarter": 3,
      "hpi": {
        "total": 153.61,
        "new": 136.57,
        "existing": 159.44,
        "qoq": -0.47,
        "yoy": 6.92
      },
      "hicp": 103.47,
      "hicpYoy": -0.37,
      "realHpi": 148.46,
      "source": "snapshot"
    },
    {
      "geo": "PT",
      "period": "2020-Q4",
      "year": 2020,
      "quarter": 4,
      "hpi": {
        "total": 157.69,
        "new": 140.27,
        "existing": 163.64,
        "qoq": 2.66,
        "yoy": 7.96
      },
      "hicp": 103.38,
      "hicpYoy": -0.42,
      "realHpi": 152.53,
      "source": "snapshot"
    },
    {
      "geo": "PT",
      "period": "2021-Q1",
      "year": 2021,
      "quarter": 1,
      "hpi": {
        "total": 161.7,
        "new": 142.35,
        "existing": 168.4,
        "qoq": 2.54,
        "yoy": 6.61
      },
      "hicp": 102.94,
      "hicpYoy": 0.19,
      "realHpi": 157.08,
      "source": "snapshot"
    },
    {
      "geo": "PT",
      "period": "2021-Q2",
      "year": 2021,
      "quarter": 2,
      "hpi": {
        "total": 166.4,
        "new": 146.63,
        "existing": 173.24,
        "qoq": 2.91,
        "yoy": 7.81
      },
      "hicp": 104.66,
      "hicpYoy": -0.06,
      "realHpi": 158.99,
      "source": "snapshot"
    },
    {
      "geo": "PT",
      "period": "2021-Q3",
      "year": 2021,
      "quarter": 3,
      "hpi": {
        "total": 171.3,
        "new": 152.5,
        "existing": 177.71,
        "qoq": 2.94,
        "yoy": 11.52
      },
      "hicp": 104.74,
      "hicpYoy": 1.23,
      "realHpi": 163.55,
      "source": "snapshot"
    },
    {
      "geo": "PT",
      "period": "2021-Q4",
      "year": 2021,
      "quarter": 4,
      "hpi": {
        "total": 175.96,
        "new": 155.12,
        "existing": 183.18,
        "qoq": 2.72,
        "yoy": 11.59
      },
      "hicp": 105.87,
      "hicpYoy": 2.41,
      "realHpi": 166.2,
      "source": "snapshot"
    },
    {
      "geo": "PT",
      "period": "2022-Q1",
      "year": 2022,
      "quarter": 1,
      "hpi": {
        "total": 182.64,
        "new": 157.93,
        "existing": 191.26,
        "qoq": 3.8,
        "yoy": 12.95
      },
      "hicp": 107.49,
      "hicpYoy": 4.42,
      "realHpi": 169.91,
      "source": "snapshot"
    },
    {
      "geo": "PT",
      "period": "2022-Q2",
      "year": 2022,
      "quarter": 2,
      "hpi": {
        "total": 188.31,
        "new": 158.91,
        "existing": 198.66,
        "qoq": 3.1,
        "yoy": 13.17
      },
      "hicp": 113.2,
      "hicpYoy": 8.16,
      "realHpi": 166.35,
      "source": "snapshot"
    },
    {
      "geo": "PT",
      "period": "2022-Q3",
      "year": 2022,
      "quarter": 3,
      "hpi": {
        "total": 193.82,
        "new": 165.31,
        "existing": 203.82,
        "qoq": 2.93,
        "yoy": 13.15
      },
      "hicp": 114.73,
      "hicpYoy": 9.54,
      "realHpi": 168.94,
      "source": "snapshot"
    },
    {
      "geo": "PT",
      "period": "2022-Q4",
      "year": 2022,
      "quarter": 4,
      "hpi": {
        "total": 195.91,
        "new": 166.1,
        "existing": 206.38,
        "qoq": 1.08,
        "yoy": 11.34
      },
      "hicp": 116.68,
      "hicpYoy": 10.21,
      "realHpi": 167.9,
      "source": "snapshot"
    },
    {
      "geo": "PT",
      "period": "2023-Q1",
      "year": 2023,
      "quarter": 1,
      "hpi": {
        "total": 198.55,
        "new": 166.99,
        "existing": 209.72,
        "qoq": 1.35,
        "yoy": 8.71
      },
      "hicp": 116.52,
      "hicpYoy": 8.4,
      "realHpi": 170.4,
      "source": "snapshot"
    },
    {
      "geo": "PT",
      "period": "2023-Q2",
      "year": 2023,
      "quarter": 2,
      "hpi": {
        "total": 204.74,
        "new": 171.59,
        "existing": 216.5,
        "qoq": 3.12,
        "yoy": 8.72
      },
      "hicp": 119.6,
      "hicpYoy": 5.65,
      "realHpi": 171.19,
      "source": "snapshot"
    },
    {
      "geo": "PT",
      "period": "2023-Q3",
      "year": 2023,
      "quarter": 3,
      "hpi": {
        "total": 208.48,
        "new": 174.95,
        "existing": 220.36,
        "qoq": 1.83,
        "yoy": 7.56
      },
      "hicp": 120.25,
      "hicpYoy": 4.81,
      "realHpi": 173.37,
      "source": "snapshot"
    },
    {
      "geo": "PT",
      "period": "2023-Q4",
      "year": 2023,
      "quarter": 4,
      "hpi": {
        "total": 211.27,
        "new": 177.59,
        "existing": 223.19,
        "qoq": 1.34,
        "yoy": 7.84
      },
      "hicp": 119.53,
      "hicpYoy": 2.44,
      "realHpi": 176.75,
      "source": "snapshot"
    },
    {
      "geo": "PT",
      "period": "2024-Q1",
      "year": 2024,
      "quarter": 1,
      "hpi": {
        "total": 212.45,
        "new": 176.24,
        "existing": 225.65,
        "qoq": 0.56,
        "yoy": 7.0
      },
      "hicp": 119.39,
      "hicpYoy": 2.46,
      "realHpi": 177.95,
      "source": "snapshot"
    },
    {
      "geo": "PT",
      "period": "2024-Q2",
      "year": 2024,
      "quarter": 2,
      "hpi": {
        "total": 220.74,
        "new": 182.98,
        "existing": 234.52,
        "qoq": 3.9,
        "yoy": 7.81
      },
      "hicp": 123.28,
      "hicpYoy": 3.08,
      "realHpi": 179.06,
      "source": "snapshot"
    },
    {
      "geo": "PT",
      "period": "2024-Q3",
      "year": 2024,
      "quarter": 3,
      "hpi": {
        "total": 228.89,
        "new": 189.04,
        "existing": 243.53,
        "qoq": 3.69,
        "yoy": 9.79
      },
      "hicp": 123.06,
      "hicpYoy": 2.34,
      "realHpi": 186.0,
      "source": "snapshot"
    },
    {
      "geo": "PT",
      "period": "2024-Q4",
      "year": 2024,
      "quarter": 4,
      "hpi": {
        "total": 235.68,
        "new": 194.55,
        "existing": 250.82,
        "qoq": 2.97,
        "yoy": 11.55
      },
      "hicp": 122.89,
      "hicpYoy": 2.81,
      "realHpi": 191.78,
      "source": "snapshot"
    },
    {
      "geo": "PT",
      "period": "2025-Q1",
      "year": 2025,
      "quarter": 1,
      "hpi": {
        "total": 247.05,
        "new": 201.74,
        "existing": 264.0,
        "qoq": 4.82,
        "yoy": 16.29
      },
      "hicp": 122.18,
      "hicpYoy": 2.34,
      "realHpi": 202.2,
      "source": "snapshot"
    },
    {
      "geo": "PT",
      "period": "2025-Q2",
      "year": 2025,
      "quarter": 2,
      "hpi": {
        "total": 258.78,
        "new": 209.5,
        "existing": 277.45,
        "qoq": 4.75,
        "yoy": 17.23
      },
      "hicp": 125.7,
      "hicpYoy": 1.96,
      "realHpi": 205.87,
      "source": "snapshot"
    },
    {
      "geo": "PT",
      "period": "2025-Q3",
      "year": 2025,
      "quarter": 3,
      "hpi": {
        "total": 269.35,
        "new": 215.63,
        "existing": 290.0,
        "qoq": 4.08,
        "yoy": 17.68
      },
      "hicp": 125.9,
      "hicpYoy": 2.31,
      "realHpi": 213.94,
      "source": "snapshot"
    },
    {
      "geo": "PT",
      "period": "2025-Q4",
      "year": 2025,
      "quarter": 4,
      "hpi": {
        "total": 280.21,
        "new": 221.22,
        "existing": 303.23,
        "qoq": 4.03,
        "yoy": 18.89
      },
      "hicp": 125.55,
      "hicpYoy": 2.16,
      "realHpi": 223.19,
      "source": "snapshot"
    },
    {
      "geo": "PT",
      "period": "2026-Q1",
      "year": 2026,
      "quarter": 1,
      "hpi": {
        "total": 290.98,
        "new": 227.18,
        "existing": 316.07,
        "qoq": 3.84,
        "yoy": 17.78
      },
      "hicp": null,
      "hicpYoy": null,
      "realHpi": null,
      "source": "snapshot"
    },
    {
      "geo": "PT",
      "period": "2026-Q2",
      "year": 2026,
      "quarter": 2,
      "hpi": {
        "total": 301.43,
        "new": 235.19,
        "existing": 327.49,
        "qoq": 3.59,
        "yoy": 16.48
      },
      "hicp": null,
      "hicpYoy": null,
      "realHpi": null,
      "source": "snapshot"
    }
  ],
  "AT": [
    {
      "geo": "AT",
      "period": "2010-Q1",
      "year": 2010,
      "quarter": 1,
      "hpi": {
        "total": 75.05,
        "new": 75.25,
        "existing": 74.89,
        "qoq": null,
        "yoy": null
      },
      "hicp": 89.41,
      "hicpYoy": null,
      "realHpi": 83.94,
      "source": "snapshot"
    },
    {
      "geo": "AT",
      "period": "2010-Q2",
      "year": 2010,
      "quarter": 2,
      "hpi": {
        "total": 77.21,
        "new": 75.97,
        "existing": 77.66,
        "qoq": 2.88,
        "yoy": null
      },
      "hicp": 90.24,
      "hicpYoy": null,
      "realHpi": 85.56,
      "source": "snapshot"
    },
    {
      "geo": "AT",
      "period": "2010-Q3",
      "year": 2010,
      "quarter": 3,
      "hpi": {
        "total": 78.19,
        "new": 76.07,
        "existing": 79.02,
        "qoq": 1.27,
        "yoy": null
      },
      "hicp": 90.04,
      "hicpYoy": null,
      "realHpi": 86.84,
      "source": "snapshot"
    },
    {
      "geo": "AT",
      "period": "2010-Q4",
      "year": 2010,
      "quarter": 4,
      "hpi": {
        "total": 78.84,
        "new": 77.34,
        "existing": 79.41,
        "qoq": 0.83,
        "yoy": null
      },
      "hicp": 90.89,
      "hicpYoy": null,
      "realHpi": 86.74,
      "source": "snapshot"
    },
    {
      "geo": "AT",
      "period": "2011-Q1",
      "year": 2011,
      "quarter": 1,
      "hpi": {
        "total": 78.96,
        "new": 78.61,
        "existing": 79.04,
        "qoq": 0.15,
        "yoy": 5.21
      },
      "hicp": 92.1,
      "hicpYoy": 3.01,
      "realHpi": 85.73,
      "source": "snapshot"
    },
    {
      "geo": "AT",
      "period": "2011-Q2",
      "year": 2011,
      "quarter": 2,
      "hpi": {
        "total": 81.28,
        "new": 79.65,
        "existing": 81.89,
        "qoq": 2.94,
        "yoy": 5.27
      },
      "hicp": 93.58,
      "hicpYoy": 3.7,
      "realHpi": 86.86,
      "source": "snapshot"
    },
    {
      "geo": "AT",
      "period": "2011-Q3",
      "year": 2011,
      "quarter": 3,
      "hpi": {
        "total": 82.59,
        "new": 80.67,
        "existing": 83.32,
        "qoq": 1.61,
        "yoy": 5.63
      },
      "hicp": 93.48,
      "hicpYoy": 3.82,
      "realHpi": 88.35,
      "source": "snapshot"
    },
    {
      "geo": "AT",
      "period": "2011-Q4",
      "year": 2011,
      "quarter": 4,
      "hpi": {
        "total": 83.06,
        "new": 81.57,
        "existing": 83.61,
        "qoq": 0.57,
        "yoy": 5.35
      },
      "hicp": 94.23,
      "hicpYoy": 3.67,
      "realHpi": 88.15,
      "source": "snapshot"
    },
    {
      "geo": "AT",
      "period": "2012-Q1",
      "year": 2012,
      "quarter": 1,
      "hpi": {
        "total": 85.3,
        "new": 85.81,
        "existing": 85.0,
        "qoq": 2.7,
        "yoy": 8.03
      },
      "hicp": 94.6,
      "hicpYoy": 2.71,
      "realHpi": 90.17,
      "source": "snapshot"
    },
    {
      "geo": "AT",
      "period": "2012-Q2",
      "year": 2012,
      "quarter": 2,
      "hpi": {
        "total": 85.44,
        "new": 86.0,
        "existing": 85.12,
        "qoq": 0.16,
        "yoy": 5.12
      },
      "hicp": 95.69,
      "hicpYoy": 2.25,
      "realHpi": 89.29,
      "source": "snapshot"
    },
    {
      "geo": "AT",
      "period": "2012-Q3",
      "year": 2012,
      "quarter": 3,
      "hpi": {
        "total": 88.71,
        "new": 89.34,
        "existing": 88.35,
        "qoq": 3.83,
        "yoy": 7.41
      },
      "hicp": 95.72,
      "hicpYoy": 2.4,
      "realHpi": 92.68,
      "source": "snapshot"
    },
    {
      "geo": "AT",
      "period": "2012-Q4",
      "year": 2012,
      "quarter": 4,
      "hpi": {
        "total": 88.0,
        "new": 86.02,
        "existing": 88.76,
        "qoq": -0.8,
        "yoy": 5.95
      },
      "hicp": 96.97,
      "hicpYoy": 2.91,
      "realHpi": 90.75,
      "source": "snapshot"
    },
    {
      "geo": "AT",
      "period": "2013-Q1",
      "year": 2013,
      "quarter": 1,
      "hpi": {
        "total": 89.06,
        "new": 89.95,
        "existing": 88.5,
        "qoq": 1.2,
        "yoy": 4.41
      },
      "hicp": 97.07,
      "hicpYoy": 2.61,
      "realHpi": 91.75,
      "source": "snapshot"
    },
    {
      "geo": "AT",
      "period": "2013-Q2",
      "year": 2013,
      "quarter": 2,
      "hpi": {
        "total": 92.25,
        "new": 91.53,
        "existing": 92.42,
        "qoq": 3.58,
        "yoy": 7.97
      },
      "hicp": 97.84,
      "hicpYoy": 2.25,
      "realHpi": 94.29,
      "source": "snapshot"
    },
    {
      "geo": "AT",
      "period": "2013-Q3",
      "year": 2013,
      "quarter": 3,
      "hpi": {
        "total": 91.79,
        "new": 90.15,
        "existing": 92.38,
        "qoq": -0.5,
        "yoy": 3.47
      },
      "hicp": 97.61,
      "hicpYoy": 1.97,
      "realHpi": 94.04,
      "source": "snapshot"
    },
    {
      "geo": "AT",
      "period": "2013-Q4",
      "year": 2013,
      "quarter": 4,
      "hpi": {
        "total": 91.68,
        "new": 92.29,
        "existing": 91.24,
        "qoq": -0.12,
        "yoy": 4.18
      },
      "hicp": 98.57,
      "hicpYoy": 1.65,
      "realHpi": 93.01,
      "source": "snapshot"
    },
    {
      "geo": "AT",
      "period": "2014-Q1",
      "year": 2014,
      "quarter": 1,
      "hpi": {
        "total": 92.89,
        "new": 93.41,
        "existing": 92.5,
        "qoq": 1.32,
        "yoy": 4.3
      },
      "hicp": 98.51,
      "hicpYoy": 1.48,
      "realHpi": 94.29,
      "source": "snapshot"
    },
    {
      "geo": "AT",
      "period": "2014-Q2",
      "year": 2014,
      "quarter": 2,
      "hpi": {
        "total": 94.35,
        "new": 93.17,
        "existing": 94.82,
        "qoq": 1.57,
        "yoy": 2.28
      },
      "hicp": 99.41,
      "hicpYoy": 1.6,
      "realHpi": 94.91,
      "source": "snapshot"
    },
    {
      "geo": "AT",
      "period": "2014-Q3",
      "year": 2014,
      "quarter": 3,
      "hpi": {
        "total": 95.32,
        "new": 95.36,
        "existing": 95.17,
        "qoq": 1.03,
        "yoy": 3.85
      },
      "hicp": 99.08,
      "hicpYoy": 1.51,
      "realHpi": 96.21,
      "source": "snapshot"
    },
    {
      "geo": "AT",
      "period": "2014-Q4",
      "year": 2014,
      "quarter": 4,
      "hpi": {
        "total": 96.14,
        "new": 96.92,
        "existing": 95.61,
        "qoq": 0.86,
        "yoy": 4.86
      },
      "hicp": 99.81,
      "hicpYoy": 1.26,
      "realHpi": 96.32,
      "source": "snapshot"
    },
    {
      "geo": "AT",
      "period": "2015-Q1",
      "year": 2015,
      "quarter": 1,
      "hpi": {
        "total": 98.19,
        "new": 96.72,
        "existing": 99.18,
        "qoq": 2.13,
        "yoy": 5.71
      },
      "hicp": 99.13,
      "hicpYoy": 0.63,
      "realHpi": 99.05,
      "source": "snapshot"
    },
    {
      "geo": "AT",
      "period": "2015-Q2",
      "year": 2015,
      "quarter": 2,
      "hpi": {
        "total": 99.97,
        "new": 99.91,
        "existing": 100.01,
        "qoq": 1.81,
        "yoy": 5.96
      },
      "hicp": 100.38,
      "hicpYoy": 0.98,
      "realHpi": 99.59,
      "source": "snapshot"
    },
    {
      "geo": "AT",
      "period": "2015-Q3",
      "year": 2015,
      "quarter": 3,
      "hpi": {
        "total": 101.23,
        "new": 101.73,
        "existing": 100.89,
        "qoq": 1.26,
        "yoy": 6.2
      },
      "hicp": 99.96,
      "hicpYoy": 0.89,
      "realHpi": 101.27,
      "source": "snapshot"
    },
    {
      "geo": "AT",
      "period": "2015-Q4",
      "year": 2015,
      "quarter": 4,
      "hpi": {
        "total": 100.61,
        "new": 101.64,
        "existing": 99.92,
        "qoq": -0.61,
        "yoy": 4.65
      },
      "hicp": 100.54,
      "hicpYoy": 0.73,
      "realHpi": 100.07,
      "source": "snapshot"
    },
    {
      "geo": "AT",
      "period": "2016-Q1",
      "year": 2016,
      "quarter": 1,
      "hpi": {
        "total": 104.04,
        "new": 106.41,
        "existing": 102.84,
        "qoq": 3.41,
        "yoy": 5.96
      },
      "hicp": 100.14,
      "hicpYoy": 1.02,
      "realHpi": 103.89,
      "source": "snapshot"
    },
    {
      "geo": "AT",
      "period": "2016-Q2",
      "year": 2016,
      "quarter": 2,
      "hpi": {
        "total": 106.7,
        "new": 107.88,
        "existing": 105.93,
        "qoq": 2.56,
        "yoy": 6.73
      },
      "hicp": 101.0,
      "hicpYoy": 0.62,
      "realHpi": 105.64,
      "source": "snapshot"
    },
    {
      "geo": "AT",
      "period": "2016-Q3",
      "year": 2016,
      "quarter": 3,
      "hpi": {
        "total": 108.08,
        "new": 109.61,
        "existing": 107.18,
        "qoq": 1.29,
        "yoy": 6.77
      },
      "hicp": 100.72,
      "hicpYoy": 0.76,
      "realHpi": 107.31,
      "source": "snapshot"
    },
    {
      "geo": "AT",
      "period": "2016-Q4",
      "year": 2016,
      "quarter": 4,
      "hpi": {
        "total": 108.0,
        "new": 107.51,
        "existing": 107.83,
        "qoq": -0.07,
        "yoy": 7.35
      },
      "hicp": 102.02,
      "hicpYoy": 1.47,
      "realHpi": 105.86,
      "source": "snapshot"
    },
    {
      "geo": "AT",
      "period": "2017-Q1",
      "year": 2017,
      "quarter": 1,
      "hpi": {
        "total": 109.76,
        "new": 108.19,
        "existing": 109.92,
        "qoq": 1.63,
        "yoy": 5.5
      },
      "hicp": 102.33,
      "hicpYoy": 2.19,
      "realHpi": 107.26,
      "source": "snapshot"
    },
    {
      "geo": "AT",
      "period": "2017-Q2",
      "year": 2017,
      "quarter": 2,
      "hpi": {
        "total": 112.46,
        "new": 111.4,
        "existing": 112.46,
        "qoq": 2.46,
        "yoy": 5.4
      },
      "hicp": 103.18,
      "hicpYoy": 2.16,
      "realHpi": 108.99,
      "source": "snapshot"
    },
    {
      "geo": "AT",
      "period": "2017-Q3",
      "year": 2017,
      "quarter": 3,
      "hpi": {
        "total": 113.67,
        "new": 112.14,
        "existing": 113.82,
        "qoq": 1.08,
        "yoy": 5.17
      },
      "hicp": 102.94,
      "hicpYoy": 2.2,
      "realHpi": 110.42,
      "source": "snapshot"
    },
    {
      "geo": "AT",
      "period": "2017-Q4",
      "year": 2017,
      "quarter": 4,
      "hpi": {
        "total": 112.65,
        "new": 110.14,
        "existing": 113.1,
        "qoq": -0.9,
        "yoy": 4.31
      },
      "hicp": 104.44,
      "hicpYoy": 2.37,
      "realHpi": 107.86,
      "source": "snapshot"
    },
    {
      "geo": "AT",
      "period": "2018-Q1",
      "year": 2018,
      "quarter": 1,
      "hpi": {
        "total": 115.13,
        "new": 111.44,
        "existing": 116.06,
        "qoq": 2.2,
        "yoy": 4.89
      },
      "hicp": 104.34,
      "hicpYoy": 1.96,
      "realHpi": 110.34,
      "source": "snapshot"
    },
    {
      "geo": "AT",
      "period": "2018-Q2",
      "year": 2018,
      "quarter": 2,
      "hpi": {
        "total": 118.94,
        "new": 116.46,
        "existing": 119.35,
        "qoq": 3.31,
        "yoy": 5.76
      },
      "hicp": 105.38,
      "hicpYoy": 2.13,
      "realHpi": 112.87,
      "source": "snapshot"
    },
    {
      "geo": "AT",
      "period": "2018-Q3",
      "year": 2018,
      "quarter": 3,
      "hpi": {
        "total": 120.1,
        "new": 117.36,
        "existing": 120.61,
        "qoq": 0.98,
        "yoy": 5.66
      },
      "hicp": 105.25,
      "hicpYoy": 2.24,
      "realHpi": 114.11,
      "source": "snapshot"
    },
    {
      "geo": "AT",
      "period": "2018-Q4",
      "year": 2018,
      "quarter": 4,
      "hpi": {
        "total": 121.15,
        "new": 118.67,
        "existing": 121.56,
        "qoq": 0.87,
        "yoy": 7.55
      },
      "hicp": 106.67,
      "hicpYoy": 2.14,
      "realHpi": 113.57,
      "source": "snapshot"
    },
    {
      "geo": "AT",
      "period": "2019-Q1",
      "year": 2019,
      "quarter": 1,
      "hpi": {
        "total": 121.53,
        "new": 117.67,
        "existing": 122.5,
        "qoq": 0.31,
        "yoy": 5.56
      },
      "hicp": 106.01,
      "hicpYoy": 1.6,
      "realHpi": 114.64,
      "source": "snapshot"
    },
    {
      "geo": "AT",
      "period": "2019-Q2",
      "year": 2019,
      "quarter": 2,
      "hpi": {
        "total": 125.79,
        "new": 122.42,
        "existing": 126.53,
        "qoq": 3.51,
        "yoy": 5.76
      },
      "hicp": 107.14,
      "hicpYoy": 1.67,
      "realHpi": 117.41,
      "source": "snapshot"
    },
    {
      "geo": "AT",
      "period": "2019-Q3",
      "year": 2019,
      "quarter": 3,
      "hpi": {
        "total": 127.81,
        "new": 125.43,
        "existing": 128.13,
        "qoq": 1.61,
        "yoy": 6.42
      },
      "hicp": 106.67,
      "hicpYoy": 1.35,
      "realHpi": 119.82,
      "source": "snapshot"
    },
    {
      "geo": "AT",
      "period": "2019-Q4",
      "year": 2019,
      "quarter": 4,
      "hpi": {
        "total": 128.74,
        "new": 126.08,
        "existing": 129.17,
        "qoq": 0.73,
        "yoy": 6.26
      },
      "hicp": 108.11,
      "hicpYoy": 1.35,
      "realHpi": 119.08,
      "source": "snapshot"
    },
    {
      "geo": "AT",
      "period": "2020-Q1",
      "year": 2020,
      "quarter": 1,
      "hpi": {
        "total": 131.26,
        "new": 127.34,
        "existing": 132.31,
        "qoq": 1.96,
        "yoy": 8.01
      },
      "hicp": 108.11,
      "hicpYoy": 1.98,
      "realHpi": 121.41,
      "source": "snapshot"
    },
    {
      "geo": "AT",
      "period": "2020-Q2",
      "year": 2020,
      "quarter": 2,
      "hpi": {
        "total": 134.09,
        "new": 131.53,
        "existing": 134.44,
        "qoq": 2.16,
        "yoy": 6.6
      },
      "hicp": 108.27,
      "hicpYoy": 1.05,
      "realHpi": 123.85,
      "source": "snapshot"
    },
    {
      "geo": "AT",
      "period": "2020-Q3",
      "year": 2020,
      "quarter": 3,
      "hpi": {
        "total": 138.0,
        "new": 133.37,
        "existing": 139.34,
        "qoq": 2.92,
        "yoy": 7.97
      },
      "hicp": 108.21,
      "hicpYoy": 1.44,
      "realHpi": 127.53,
      "source": "snapshot"
    },
    {
      "geo": "AT",
      "period": "2020-Q4",
      "year": 2020,
      "quarter": 4,
      "hpi": {
        "total": 138.71,
        "new": 136.08,
        "existing": 139.06,
        "qoq": 0.51,
        "yoy": 7.74
      },
      "hicp": 109.28,
      "hicpYoy": 1.08,
      "realHpi": 126.93,
      "source": "snapshot"
    },
    {
      "geo": "AT",
      "period": "2021-Q1",
      "year": 2021,
      "quarter": 1,
      "hpi": {
        "total": 144.08,
        "new": 137.98,
        "existing": 146.27,
        "qoq": 3.87,
        "yoy": 9.77
      },
      "hicp": 109.71,
      "hicpYoy": 1.48,
      "realHpi": 131.33,
      "source": "snapshot"
    },
    {
      "geo": "AT",
      "period": "2021-Q2",
      "year": 2021,
      "quarter": 2,
      "hpi": {
        "total": 149.12,
        "new": 139.97,
        "existing": 152.93,
        "qoq": 3.5,
        "yoy": 11.21
      },
      "hicp": 111.05,
      "hicpYoy": 2.57,
      "realHpi": 134.28,
      "source": "snapshot"
    },
    {
      "geo": "AT",
      "period": "2021-Q3",
      "year": 2021,
      "quarter": 3,
      "hpi": {
        "total": 153.52,
        "new": 145.21,
        "existing": 156.84,
        "qoq": 2.95,
        "yoy": 11.25
      },
      "hicp": 111.55,
      "hicpYoy": 3.09,
      "realHpi": 137.62,
      "source": "snapshot"
    },
    {
      "geo": "AT",
      "period": "2021-Q4",
      "year": 2021,
      "quarter": 4,
      "hpi": {
        "total": 157.34,
        "new": 149.32,
        "existing": 160.48,
        "qoq": 2.49,
        "yoy": 13.43
      },
      "hicp": 113.53,
      "hicpYoy": 3.89,
      "realHpi": 138.59,
      "source": "snapshot"
    },
    {
      "geo": "AT",
      "period": "2022-Q1",
      "year": 2022,
      "quarter": 1,
      "hpi": {
        "total": 164.63,
        "new": 155.5,
        "existing": 168.33,
        "qoq": 4.63,
        "yoy": 14.26
      },
      "hicp": 115.78,
      "hicpYoy": 5.53,
      "realHpi": 142.19,
      "source": "snapshot"
    },
    {
      "geo": "AT",
      "period": "2022-Q2",
      "year": 2022,
      "quarter": 2,
      "hpi": {
        "total": 169.43,
        "new": 159.42,
        "existing": 173.57,
        "qoq": 2.92,
        "yoy": 13.62
      },
      "hicp": 119.78,
      "hicpYoy": 7.86,
      "realHpi": 141.45,
      "source": "snapshot"
    },
    {
      "geo": "AT",
      "period": "2022-Q3",
      "year": 2022,
      "quarter": 3,
      "hpi": {
        "total": 173.59,
        "new": 165.02,
        "existing": 176.88,
        "qoq": 2.46,
        "yoy": 13.07
      },
      "hicp": 122.59,
      "hicpYoy": 9.9,
      "realHpi": 141.6,
      "source": "snapshot"
    },
    {
      "geo": "AT",
      "period": "2022-Q4",
      "year": 2022,
      "quarter": 4,
      "hpi": {
        "total": 166.32,
        "new": 158.38,
        "existing": 169.33,
        "qoq": -4.19,
        "yoy": 5.71
      },
      "hicp": 126.12,
      "hicpYoy": 11.09,
      "realHpi": 131.87,
      "source": "snapshot"
    },
    {
      "geo": "AT",
      "period": "2023-Q1",
      "year": 2023,
      "quarter": 1,
      "hpi": {
        "total": 164.35,
        "new": 155.93,
        "existing": 167.6,
        "qoq": -1.18,
        "yoy": -0.17
      },
      "hicp": 128.05,
      "hicpYoy": 10.6,
      "realHpi": 128.35,
      "source": "snapshot"
    },
    {
      "geo": "AT",
      "period": "2023-Q2",
      "year": 2023,
      "quarter": 2,
      "hpi": {
        "total": 164.68,
        "new": 159.21,
        "existing": 166.47,
        "qoq": 0.2,
        "yoy": -2.8
      },
      "hicp": 130.12,
      "hicpYoy": 8.63,
      "realHpi": 126.56,
      "source": "snapshot"
    },
    {
      "geo": "AT",
      "period": "2023-Q3",
      "year": 2023,
      "quarter": 3,
      "hpi": {
        "total": 164.29,
        "new": 161.28,
        "existing": 164.87,
        "qoq": -0.24,
        "yoy": -5.36
      },
      "hicp": 130.84,
      "hicpYoy": 6.73,
      "realHpi": 125.57,
      "source": "snapshot"
    },
    {
      "geo": "AT",
      "period": "2023-Q4",
      "year": 2023,
      "quarter": 4,
      "hpi": {
        "total": 161.4,
        "new": 160.09,
        "existing": 161.15,
        "qoq": -1.76,
        "yoy": -2.96
      },
      "hicp": 132.59,
      "hicpYoy": 5.13,
      "realHpi": 121.73,
      "source": "snapshot"
    },
    {
      "geo": "AT",
      "period": "2024-Q1",
      "year": 2024,
      "quarter": 1,
      "hpi": {
        "total": 159.54,
        "new": 160.05,
        "existing": 158.78,
        "qoq": -1.15,
        "yoy": -2.93
      },
      "hicp": 133.33,
      "hicpYoy": 4.12,
      "realHpi": 119.66,
      "source": "snapshot"
    },
    {
      "geo": "AT",
      "period": "2024-Q2",
      "year": 2024,
      "quarter": 2,
      "hpi": {
        "total": 164.34,
        "new": 162.46,
        "existing": 164.24,
        "qoq": 3.01,
        "yoy": -0.21
      },
      "hicp": 134.37,
      "hicpYoy": 3.27,
      "realHpi": 122.3,
      "source": "snapshot"
    },
    {
      "geo": "AT",
      "period": "2024-Q3",
      "year": 2024,
      "quarter": 3,
      "hpi": {
        "total": 165.13,
        "new": 165.22,
        "existing": 164.47,
        "qoq": 0.48,
        "yoy": 0.51
      },
      "hicp": 133.95,
      "hicpYoy": 2.38,
      "realHpi": 123.28,
      "source": "snapshot"
    },
    {
      "geo": "AT",
      "period": "2024-Q4",
      "year": 2024,
      "quarter": 4,
      "hpi": {
        "total": 163.23,
        "new": 164.94,
        "existing": 162.1,
        "qoq": -1.15,
        "yoy": 1.13
      },
      "hicp": 135.18,
      "hicpYoy": 1.95,
      "realHpi": 120.75,
      "source": "snapshot"
    },
    {
      "geo": "AT",
      "period": "2025-Q1",
      "year": 2025,
      "quarter": 1,
      "hpi": {
        "total": 165.17,
        "new": 165.96,
        "existing": 164.28,
        "qoq": 1.19,
        "yoy": 3.53
      },
      "hicp": 137.74,
      "hicpYoy": 3.31,
      "realHpi": 119.91,
      "source": "snapshot"
    },
    {
      "geo": "AT",
      "period": "2025-Q2",
      "year": 2025,
      "quarter": 2,
      "hpi": {
        "total": 166.95,
        "new": 166.48,
        "existing": 166.4,
        "qoq": 1.08,
        "yoy": 1.59
      },
      "hicp": 138.6,
      "hicpYoy": 3.15,
      "realHpi": 120.45,
      "source": "snapshot"
    },
    {
      "geo": "AT",
      "period": "2025-Q3",
      "year": 2025,
      "quarter": 3,
      "hpi": {
        "total": 167.87,
        "new": 168.59,
        "existing": 167.0,
        "qoq": 0.55,
        "yoy": 1.66
      },
      "hicp": 139.19,
      "hicpYoy": 3.91,
      "realHpi": 120.6,
      "source": "snapshot"
    },
    {
      "geo": "AT",
      "period": "2025-Q4",
      "year": 2025,
      "quarter": 4,
      "hpi": {
        "total": 168.24,
        "new": 169.54,
        "existing": 167.2,
        "qoq": 0.22,
        "yoy": 3.07
      },
      "hicp": 140.51,
      "hicpYoy": 3.94,
      "realHpi": 119.74,
      "source": "snapshot"
    },
    {
      "geo": "AT",
      "period": "2026-Q1",
      "year": 2026,
      "quarter": 1,
      "hpi": {
        "total": 169.8,
        "new": 170.35,
        "existing": 168.98,
        "qoq": 0.93,
        "yoy": 2.8
      },
      "hicp": null,
      "hicpYoy": null,
      "realHpi": null,
      "source": "snapshot"
    },
    {
      "geo": "AT",
      "period": "2026-Q2",
      "year": 2026,
      "quarter": 2,
      "hpi": {
        "total": 175.42,
        "new": 174.57,
        "existing": 174.97,
        "qoq": 3.31,
        "yoy": 5.07
      },
      "hicp": null,
      "hicpYoy": null,
      "realHpi": null,
      "source": "snapshot"
    }
  ],
  "IE": [
    {
      "geo": "IE",
      "period": "2010-Q1",
      "year": 2010,
      "quarter": 1,
      "hpi": {
        "total": 111.53,
        "new": 123.93,
        "existing": 109.8,
        "qoq": null,
        "yoy": null
      },
      "hicp": 95.97,
      "hicpYoy": null,
      "realHpi": 116.21,
      "source": "snapshot"
    },
    {
      "geo": "IE",
      "period": "2010-Q2",
      "year": 2010,
      "quarter": 2,
      "hpi": {
        "total": 107.73,
        "new": 119.59,
        "existing": 106.1,
        "qoq": -3.41,
        "yoy": null
      },
      "hicp": 96.3,
      "hicpYoy": null,
      "realHpi": 111.87,
      "source": "snapshot"
    },
    {
      "geo": "IE",
      "period": "2010-Q3",
      "year": 2010,
      "quarter": 3,
      "hpi": {
        "total": 104.59,
        "new": 115.1,
        "existing": 103.41,
        "qoq": -2.91,
        "yoy": null
      },
      "hicp": 96.27,
      "hicpYoy": null,
      "realHpi": 108.64,
      "source": "snapshot"
    },
    {
      "geo": "IE",
      "period": "2010-Q4",
      "year": 2010,
      "quarter": 4,
      "hpi": {
        "total": 99.98,
        "new": 109.71,
        "existing": 98.98,
        "qoq": -4.41,
        "yoy": null
      },
      "hicp": 96.23,
      "hicpYoy": null,
      "realHpi": 103.9,
      "source": "snapshot"
    },
    {
      "geo": "IE",
      "period": "2011-Q1",
      "year": 2011,
      "quarter": 1,
      "hpi": {
        "total": 95.45,
        "new": 105.6,
        "existing": 94.23,
        "qoq": -4.53,
        "yoy": -14.42
      },
      "hicp": 96.77,
      "hicpYoy": 0.83,
      "realHpi": 98.64,
      "source": "snapshot"
    },
    {
      "geo": "IE",
      "period": "2011-Q2",
      "year": 2011,
      "quarter": 2,
      "hpi": {
        "total": 90.5,
        "new": 100.95,
        "existing": 89.1,
        "qoq": -5.19,
        "yoy": -15.99
      },
      "hicp": 97.53,
      "hicpYoy": 1.28,
      "realHpi": 92.79,
      "source": "snapshot"
    },
    {
      "geo": "IE",
      "period": "2011-Q3",
      "year": 2011,
      "quarter": 3,
      "hpi": {
        "total": 85.12,
        "new": 95.08,
        "existing": 83.75,
        "qoq": -5.94,
        "yoy": -18.62
      },
      "hicp": 97.37,
      "hicpYoy": 1.14,
      "realHpi": 87.42,
      "source": "snapshot"
    },
    {
      "geo": "IE",
      "period": "2011-Q4",
      "year": 2011,
      "quarter": 4,
      "hpi": {
        "total": 80.38,
        "new": 89.2,
        "existing": 79.27,
        "qoq": -5.57,
        "yoy": -19.6
      },
      "hicp": 97.77,
      "hicpYoy": 1.6,
      "realHpi": 82.21,
      "source": "snapshot"
    },
    {
      "geo": "IE",
      "period": "2012-Q1",
      "year": 2012,
      "quarter": 1,
      "hpi": {
        "total": 76.76,
        "new": 86.91,
        "existing": 75.44,
        "qoq": -4.5,
        "yoy": -19.58
      },
      "hicp": 98.37,
      "hicpYoy": 1.65,
      "realHpi": 78.03,
      "source": "snapshot"
    },
    {
      "geo": "IE",
      "period": "2012-Q2",
      "year": 2012,
      "quarter": 2,
      "hpi": {
        "total": 75.0,
        "new": 86.34,
        "existing": 73.5,
        "qoq": -2.29,
        "yoy": -17.13
      },
      "hicp": 99.33,
      "hicpYoy": 1.85,
      "realHpi": 75.51,
      "source": "snapshot"
    },
    {
      "geo": "IE",
      "period": "2012-Q3",
      "year": 2012,
      "quarter": 3,
      "hpi": {
        "total": 75.89,
        "new": 84.86,
        "existing": 74.75,
        "qoq": 1.19,
        "yoy": -10.84
      },
      "hicp": 99.63,
      "hicpYoy": 2.32,
      "realHpi": 76.17,
      "source": "snapshot"
    },
    {
      "geo": "IE",
      "period": "2012-Q4",
      "year": 2012,
      "quarter": 4,
      "hpi": {
        "total": 76.5,
        "new": 83.09,
        "existing": 75.72,
        "qoq": 0.8,
        "yoy": -4.83
      },
      "hicp": 99.5,
      "hicpYoy": 1.77,
      "realHpi": 76.88,
      "source": "snapshot"
    },
    {
      "geo": "IE",
      "period": "2013-Q1",
      "year": 2013,
      "quarter": 1,
      "hpi": {
        "total": 74.32,
        "new": 78.37,
        "existing": 73.86,
        "qoq": -2.85,
        "yoy": -3.18
      },
      "hicp": 99.47,
      "hicpYoy": 1.12,
      "realHpi": 74.72,
      "source": "snapshot"
    },
    {
      "geo": "IE",
      "period": "2013-Q2",
      "year": 2013,
      "quarter": 2,
      "hpi": {
        "total": 74.33,
        "new": 77.48,
        "existing": 73.99,
        "qoq": 0.01,
        "yoy": -0.89
      },
      "hicp": 99.87,
      "hicpYoy": 0.54,
      "realHpi": 74.43,
      "source": "snapshot"
    },
    {
      "geo": "IE",
      "period": "2013-Q3",
      "year": 2013,
      "quarter": 3,
      "hpi": {
        "total": 78.52,
        "new": 79.65,
        "existing": 78.43,
        "qoq": 5.64,
        "yoy": 3.47
      },
      "hicp": 99.93,
      "hicpYoy": 0.3,
      "realHpi": 78.58,
      "source": "snapshot"
    },
    {
      "geo": "IE",
      "period": "2013-Q4",
      "year": 2013,
      "quarter": 4,
      "hpi": {
        "total": 80.77,
        "new": 80.13,
        "existing": 80.9,
        "qoq": 2.87,
        "yoy": 5.58
      },
      "hicp": 99.67,
      "hicpYoy": 0.17,
      "realHpi": 81.04,
      "source": "snapshot"
    },
    {
      "geo": "IE",
      "period": "2014-Q1",
      "year": 2014,
      "quarter": 1,
      "hpi": {
        "total": 82.04,
        "new": 80.19,
        "existing": 82.33,
        "qoq": 1.57,
        "yoy": 10.39
      },
      "hicp": 99.67,
      "hicpYoy": 0.2,
      "realHpi": 82.31,
      "source": "snapshot"
    },
    {
      "geo": "IE",
      "period": "2014-Q2",
      "year": 2014,
      "quarter": 2,
      "hpi": {
        "total": 86.62,
        "new": 83.2,
        "existing": 87.11,
        "qoq": 5.58,
        "yoy": 16.53
      },
      "hicp": 100.27,
      "hicpYoy": 0.4,
      "realHpi": 86.39,
      "source": "snapshot"
    },
    {
      "geo": "IE",
      "period": "2014-Q3",
      "year": 2014,
      "quarter": 3,
      "hpi": {
        "total": 93.63,
        "new": 89.91,
        "existing": 94.16,
        "qoq": 8.09,
        "yoy": 19.24
      },
      "hicp": 100.43,
      "hicpYoy": 0.5,
      "realHpi": 93.23,
      "source": "snapshot"
    },
    {
      "geo": "IE",
      "period": "2014-Q4",
      "year": 2014,
      "quarter": 4,
      "hpi": {
        "total": 96.59,
        "new": 93.44,
        "existing": 97.05,
        "qoq": 3.16,
        "yoy": 19.59
      },
      "hicp": 99.77,
      "hicpYoy": 0.1,
      "realHpi": 96.81,
      "source": "snapshot"
    },
    {
      "geo": "IE",
      "period": "2015-Q1",
      "year": 2015,
      "quarter": 1,
      "hpi": {
        "total": 96.43,
        "new": 94.01,
        "existing": 96.79,
        "qoq": -0.17,
        "yoy": 17.54
      },
      "hicp": 99.33,
      "hicpYoy": -0.34,
      "realHpi": 97.08,
      "source": "snapshot"
    },
    {
      "geo": "IE",
      "period": "2015-Q2",
      "year": 2015,
      "quarter": 2,
      "hpi": {
        "total": 98.6,
        "new": 98.12,
        "existing": 98.67,
        "qoq": 2.25,
        "yoy": 13.83
      },
      "hicp": 100.37,
      "hicpYoy": 0.1,
      "realHpi": 98.24,
      "source": "snapshot"
    },
    {
      "geo": "IE",
      "period": "2015-Q3",
      "year": 2015,
      "quarter": 3,
      "hpi": {
        "total": 101.73,
        "new": 102.72,
        "existing": 101.58,
        "qoq": 3.17,
        "yoy": 8.65
      },
      "hicp": 100.53,
      "hicpYoy": 0.1,
      "realHpi": 101.19,
      "source": "snapshot"
    },
    {
      "geo": "IE",
      "period": "2015-Q4",
      "year": 2015,
      "quarter": 4,
      "hpi": {
        "total": 103.25,
        "new": 105.15,
        "existing": 102.97,
        "qoq": 1.49,
        "yoy": 6.9
      },
      "hicp": 99.77,
      "hicpYoy": 0.0,
      "realHpi": 103.49,
      "source": "snapshot"
    },
    {
      "geo": "IE",
      "period": "2016-Q1",
      "year": 2016,
      "quarter": 1,
      "hpi": {
        "total": 103.67,
        "new": 106.44,
        "existing": 103.25,
        "qoq": 0.41,
        "yoy": 7.51
      },
      "hicp": 99.07,
      "hicpYoy": -0.26,
      "realHpi": 104.64,
      "source": "snapshot"
    },
    {
      "geo": "IE",
      "period": "2016-Q2",
      "year": 2016,
      "quarter": 2,
      "hpi": {
        "total": 104.79,
        "new": 106.17,
        "existing": 104.59,
        "qoq": 1.08,
        "yoy": 6.28
      },
      "hicp": 100.27,
      "hicpYoy": -0.1,
      "realHpi": 104.51,
      "source": "snapshot"
    },
    {
      "geo": "IE",
      "period": "2016-Q3",
      "year": 2016,
      "quarter": 3,
      "hpi": {
        "total": 109.33,
        "new": 108.28,
        "existing": 109.51,
        "qoq": 4.33,
        "yoy": 7.47
      },
      "hicp": 100.33,
      "hicpYoy": -0.2,
      "realHpi": 108.97,
      "source": "snapshot"
    },
    {
      "geo": "IE",
      "period": "2016-Q4",
      "year": 2016,
      "quarter": 4,
      "hpi": {
        "total": 112.06,
        "new": 109.62,
        "existing": 112.46,
        "qoq": 2.5,
        "yoy": 8.53
      },
      "hicp": 99.5,
      "hicpYoy": -0.27,
      "realHpi": 112.62,
      "source": "snapshot"
    },
    {
      "geo": "IE",
      "period": "2017-Q1",
      "year": 2017,
      "quarter": 1,
      "hpi": {
        "total": 113.36,
        "new": 110.47,
        "existing": 113.85,
        "qoq": 1.16,
        "yoy": 9.35
      },
      "hicp": 99.43,
      "hicpYoy": 0.36,
      "realHpi": 114.01,
      "source": "snapshot"
    },
    {
      "geo": "IE",
      "period": "2017-Q2",
      "year": 2017,
      "quarter": 2,
      "hpi": {
        "total": 115.86,
        "new": 111.62,
        "existing": 116.65,
        "qoq": 2.21,
        "yoy": 10.56
      },
      "hicp": 100.3,
      "hicpYoy": 0.03,
      "realHpi": 115.51,
      "source": "snapshot"
    },
    {
      "geo": "IE",
      "period": "2017-Q3",
      "year": 2017,
      "quarter": 3,
      "hpi": {
        "total": 122.18,
        "new": 115.5,
        "existing": 123.49,
        "qoq": 5.45,
        "yoy": 11.75
      },
      "hicp": 100.47,
      "hicpYoy": 0.14,
      "realHpi": 121.61,
      "source": "snapshot"
    },
    {
      "geo": "IE",
      "period": "2017-Q4",
      "year": 2017,
      "quarter": 4,
      "hpi": {
        "total": 125.15,
        "new": 116.44,
        "existing": 126.89,
        "qoq": 2.43,
        "yoy": 11.68
      },
      "hicp": 100.0,
      "hicpYoy": 0.5,
      "realHpi": 125.15,
      "source": "snapshot"
    },
    {
      "geo": "IE",
      "period": "2018-Q1",
      "year": 2018,
      "quarter": 1,
      "hpi": {
        "total": 127.34,
        "new": 120.17,
        "existing": 128.61,
        "qoq": 1.75,
        "yoy": 12.33
      },
      "hicp": 99.93,
      "hicpYoy": 0.5,
      "realHpi": 127.43,
      "source": "snapshot"
    },
    {
      "geo": "IE",
      "period": "2018-Q2",
      "year": 2018,
      "quarter": 2,
      "hpi": {
        "total": 130.44,
        "new": 124.11,
        "existing": 131.43,
        "qoq": 2.43,
        "yoy": 12.58
      },
      "hicp": 100.73,
      "hicpYoy": 0.43,
      "realHpi": 129.49,
      "source": "snapshot"
    },
    {
      "geo": "IE",
      "period": "2018-Q3",
      "year": 2018,
      "quarter": 3,
      "hpi": {
        "total": 133.31,
        "new": 126.78,
        "existing": 134.35,
        "qoq": 2.2,
        "yoy": 9.11
      },
      "hicp": 101.5,
      "hicpYoy": 1.03,
      "realHpi": 131.34,
      "source": "snapshot"
    },
    {
      "geo": "IE",
      "period": "2018-Q4",
      "year": 2018,
      "quarter": 4,
      "hpi": {
        "total": 134.23,
        "new": 127.92,
        "existing": 135.2,
        "qoq": 0.69,
        "yoy": 7.26
      },
      "hicp": 100.9,
      "hicpYoy": 0.9,
      "realHpi": 133.03,
      "source": "snapshot"
    },
    {
      "geo": "IE",
      "period": "2019-Q1",
      "year": 2019,
      "quarter": 1,
      "hpi": {
        "total": 132.98,
        "new": 127.95,
        "existing": 133.52,
        "qoq": -0.93,
        "yoy": 4.43
      },
      "hicp": 100.8,
      "hicpYoy": 0.87,
      "realHpi": 131.92,
      "source": "snapshot"
    },
    {
      "geo": "IE",
      "period": "2019-Q2",
      "year": 2019,
      "quarter": 2,
      "hpi": {
        "total": 133.7,
        "new": 129.38,
        "existing": 133.97,
        "qoq": 0.54,
        "yoy": 2.5
      },
      "hicp": 102.0,
      "hicpYoy": 1.26,
      "realHpi": 131.08,
      "source": "snapshot"
    },
    {
      "geo": "IE",
      "period": "2019-Q3",
      "year": 2019,
      "quarter": 3,
      "hpi": {
        "total": 135.63,
        "new": 130.79,
        "existing": 136.07,
        "qoq": 1.44,
        "yoy": 1.74
      },
      "hicp": 102.07,
      "hicpYoy": 0.56,
      "realHpi": 132.88,
      "source": "snapshot"
    },
    {
      "geo": "IE",
      "period": "2019-Q4",
      "year": 2019,
      "quarter": 4,
      "hpi": {
        "total": 135.32,
        "new": 131.06,
        "existing": 135.56,
        "qoq": -0.23,
        "yoy": 0.81
      },
      "hicp": 101.73,
      "hicpYoy": 0.82,
      "realHpi": 133.02,
      "source": "snapshot"
    },
    {
      "geo": "IE",
      "period": "2020-Q1",
      "year": 2020,
      "quarter": 1,
      "hpi": {
        "total": 134.3,
        "new": 131.33,
        "existing": 134.12,
        "qoq": -0.75,
        "yoy": 0.99
      },
      "hicp": 101.63,
      "hicpYoy": 0.82,
      "realHpi": 132.15,
      "source": "snapshot"
    },
    {
      "geo": "IE",
      "period": "2020-Q2",
      "year": 2020,
      "quarter": 2,
      "hpi": {
        "total": 134.15,
        "new": 132.12,
        "existing": 133.66,
        "qoq": -0.11,
        "yoy": 0.34
      },
      "hicp": 101.43,
      "hicpYoy": -0.56,
      "realHpi": 132.26,
      "source": "snapshot"
    },
    {
      "geo": "IE",
      "period": "2020-Q3",
      "year": 2020,
      "quarter": 3,
      "hpi": {
        "total": 134.55,
        "new": 132.93,
        "existing": 133.91,
        "qoq": 0.3,
        "yoy": -0.8
      },
      "hicp": 101.1,
      "hicpYoy": -0.95,
      "realHpi": 133.09,
      "source": "snapshot"
    },
    {
      "geo": "IE",
      "period": "2020-Q4",
      "year": 2020,
      "quarter": 4,
      "hpi": {
        "total": 136.28,
        "new": 133.81,
        "existing": 135.91,
        "qoq": 1.29,
        "yoy": 0.71
      },
      "hicp": 100.57,
      "hicpYoy": -1.14,
      "realHpi": 135.51,
      "source": "snapshot"
    },
    {
      "geo": "IE",
      "period": "2021-Q1",
      "year": 2021,
      "quarter": 1,
      "hpi": {
        "total": 138.34,
        "new": 134.6,
        "existing": 138.37,
        "qoq": 1.51,
        "yoy": 3.01
      },
      "hicp": 101.5,
      "hicpYoy": -0.13,
      "realHpi": 136.3,
      "source": "snapshot"
    },
    {
      "geo": "IE",
      "period": "2021-Q2",
      "year": 2021,
      "quarter": 2,
      "hpi": {
        "total": 141.65,
        "new": 135.07,
        "existing": 142.57,
        "qoq": 2.39,
        "yoy": 5.59
      },
      "hicp": 102.97,
      "hicpYoy": 1.52,
      "realHpi": 137.56,
      "source": "snapshot"
    },
    {
      "geo": "IE",
      "period": "2021-Q3",
      "year": 2021,
      "quarter": 3,
      "hpi": {
        "total": 148.81,
        "new": 137.22,
        "existing": 151.3,
        "qoq": 5.05,
        "yoy": 10.6
      },
      "hicp": 104.1,
      "hicpYoy": 2.97,
      "realHpi": 142.95,
      "source": "snapshot"
    },
    {
      "geo": "IE",
      "period": "2021-Q4",
      "year": 2021,
      "quarter": 4,
      "hpi": {
        "total": 155.1,
        "new": 140.92,
        "existing": 158.38,
        "qoq": 4.23,
        "yoy": 13.81
      },
      "hicp": 105.97,
      "hicpYoy": 5.37,
      "realHpi": 146.36,
      "source": "snapshot"
    },
    {
      "geo": "IE",
      "period": "2022-Q1",
      "year": 2022,
      "quarter": 1,
      "hpi": {
        "total": 159.07,
        "new": 142.94,
        "existing": 162.85,
        "qoq": 2.56,
        "yoy": 14.98
      },
      "hicp": 107.5,
      "hicpYoy": 5.91,
      "realHpi": 147.97,
      "source": "snapshot"
    },
    {
      "geo": "IE",
      "period": "2022-Q2",
      "year": 2022,
      "quarter": 2,
      "hpi": {
        "total": 161.89,
        "new": 145.67,
        "existing": 165.69,
        "qoq": 1.77,
        "yoy": 14.29
      },
      "hicp": 111.6,
      "hicpYoy": 8.38,
      "realHpi": 145.06,
      "source": "snapshot"
    },
    {
      "geo": "IE",
      "period": "2022-Q3",
      "year": 2022,
      "quarter": 3,
      "hpi": {
        "total": 166.47,
        "new": 149.73,
        "existing": 170.39,
        "qoq": 2.83,
        "yoy": 11.87
      },
      "hicp": 113.53,
      "hicpYoy": 9.06,
      "realHpi": 146.63,
      "source": "snapshot"
    },
    {
      "geo": "IE",
      "period": "2022-Q4",
      "year": 2022,
      "quarter": 4,
      "hpi": {
        "total": 168.41,
        "new": 155.19,
        "existing": 171.39,
        "qoq": 1.17,
        "yoy": 8.58
      },
      "hicp": 115.33,
      "hicpYoy": 8.83,
      "realHpi": 146.02,
      "source": "snapshot"
    },
    {
      "geo": "IE",
      "period": "2023-Q1",
      "year": 2023,
      "quarter": 1,
      "hpi": {
        "total": 167.16,
        "new": 158.7,
        "existing": 168.72,
        "qoq": -0.74,
        "yoy": 5.09
      },
      "hicp": 115.6,
      "hicpYoy": 7.53,
      "realHpi": 144.6,
      "source": "snapshot"
    },
    {
      "geo": "IE",
      "period": "2023-Q2",
      "year": 2023,
      "quarter": 2,
      "hpi": {
        "total": 166.3,
        "new": 161.75,
        "existing": 166.7,
        "qoq": -0.51,
        "yoy": 2.72
      },
      "hicp": 117.7,
      "hicpYoy": 5.47,
      "realHpi": 141.29,
      "source": "snapshot"
    },
    {
      "geo": "IE",
      "period": "2023-Q3",
      "year": 2023,
      "quarter": 3,
      "hpi": {
        "total": 168.79,
        "new": 165.33,
        "existing": 168.84,
        "qoq": 1.5,
        "yoy": 1.39
      },
      "hicp": 119.03,
      "hicpYoy": 4.84,
      "realHpi": 141.8,
      "source": "snapshot"
    },
    {
      "geo": "IE",
      "period": "2023-Q4",
      "year": 2023,
      "quarter": 4,
      "hpi": {
        "total": 173.69,
        "new": 169.49,
        "existing": 173.94,
        "qoq": 2.9,
        "yoy": 3.14
      },
      "hicp": 118.93,
      "hicpYoy": 3.12,
      "realHpi": 146.04,
      "source": "snapshot"
    },
    {
      "geo": "IE",
      "period": "2024-Q1",
      "year": 2024,
      "quarter": 1,
      "hpi": {
        "total": 177.7,
        "new": 172.13,
        "existing": 178.34,
        "qoq": 2.31,
        "yoy": 6.31
      },
      "hicp": 118.2,
      "hicpYoy": 2.25,
      "realHpi": 150.34,
      "source": "snapshot"
    },
    {
      "geo": "IE",
      "period": "2024-Q2",
      "year": 2024,
      "quarter": 2,
      "hpi": {
        "total": 180.34,
        "new": 173.67,
        "existing": 181.3,
        "qoq": 1.49,
        "yoy": 8.44
      },
      "hicp": 119.7,
      "hicpYoy": 1.7,
      "realHpi": 150.66,
      "source": "snapshot"
    },
    {
      "geo": "IE",
      "period": "2024-Q3",
      "year": 2024,
      "quarter": 3,
      "hpi": {
        "total": 185.5,
        "new": 175.9,
        "existing": 187.32,
        "qoq": 2.86,
        "yoy": 9.9
      },
      "hicp": 120.07,
      "hicpYoy": 0.87,
      "realHpi": 154.49,
      "source": "snapshot"
    },
    {
      "geo": "IE",
      "period": "2024-Q4",
      "year": 2024,
      "quarter": 4,
      "hpi": {
        "total": 189.97,
        "new": 178.45,
        "existing": 192.34,
        "qoq": 2.41,
        "yoy": 9.37
      },
      "hicp": 119.57,
      "hicpYoy": 0.54,
      "realHpi": 158.88,
      "source": "snapshot"
    },
    {
      "geo": "IE",
      "period": "2025-Q1",
      "year": 2025,
      "quarter": 1,
      "hpi": {
        "total": 191.83,
        "new": 179.24,
        "existing": 194.54,
        "qoq": 0.98,
        "yoy": 7.95
      },
      "hicp": 120.13,
      "hicpYoy": 1.63,
      "realHpi": 159.69,
      "source": "snapshot"
    },
    {
      "geo": "IE",
      "period": "2025-Q2",
      "year": 2025,
      "quarter": 2,
      "hpi": {
        "total": 194.34,
        "new": 181.17,
        "existing": 197.23,
        "qoq": 1.31,
        "yoy": 7.76
      },
      "hicp": 121.7,
      "hicpYoy": 1.67,
      "realHpi": 159.69,
      "source": "snapshot"
    },
    {
      "geo": "IE",
      "period": "2025-Q3",
      "year": 2025,
      "quarter": 3,
      "hpi": {
        "total": 199.36,
        "new": 185.55,
        "existing": 202.42,
        "qoq": 2.58,
        "yoy": 7.47
      },
      "hicp": 122.53,
      "hicpYoy": 2.05,
      "realHpi": 162.7,
      "source": "snapshot"
    },
    {
      "geo": "IE",
      "period": "2025-Q4",
      "year": 2025,
      "quarter": 4,
      "hpi": {
        "total": 203.23,
        "new": 188.98,
        "existing": 206.41,
        "qoq": 1.94,
        "yoy": 6.98
      },
      "hicp": 123.03,
      "hicpYoy": 2.89,
      "realHpi": 165.19,
      "source": "snapshot"
    },
    {
      "geo": "IE",
      "period": "2026-Q1",
      "year": 2026,
      "quarter": 1,
      "hpi": {
        "total": 204.94,
        "new": 190.76,
        "existing": 208.07,
        "qoq": 0.84,
        "yoy": 6.83
      },
      "hicp": null,
      "hicpYoy": null,
      "realHpi": null,
      "source": "snapshot"
    },
    {
      "geo": "IE",
      "period": "2026-Q2",
      "year": 2026,
      "quarter": 2,
      "hpi": {
        "total": 205.94,
        "new": 192.08,
        "existing": 208.94,
        "qoq": 0.49,
        "yoy": 5.97
      },
      "hicp": null,
      "hicpYoy": null,
      "realHpi": null,
      "source": "snapshot"
    }
  ],
  "EU27_2020": [
    {
      "geo": "EU27_2020",
      "period": "2010-Q1",
      "year": 2010,
      "quarter": 1,
      "hpi": {
        "total": 99.3,
        "new": 100.55,
        "existing": 98.92,
        "qoq": null,
        "yoy": null
      },
      "hicp": 91.99,
      "hicpYoy": null,
      "realHpi": 107.95,
      "source": "snapshot"
    },
    {
      "geo": "EU27_2020",
      "period": "2010-Q2",
      "year": 2010,
      "quarter": 2,
      "hpi": {
        "total": 100.37,
        "new": 101.06,
        "existing": 100.19,
        "qoq": 1.08,
        "yoy": null
      },
      "hicp": 93.15,
      "hicpYoy": null,
      "realHpi": 107.75,
      "source": "snapshot"
    },
    {
      "geo": "EU27_2020",
      "period": "2010-Q3",
      "year": 2010,
      "quarter": 3,
      "hpi": {
        "total": 100.75,
        "new": 101.31,
        "existing": 100.62,
        "qoq": 0.38,
        "yoy": null
      },
      "hicp": 93.11,
      "hicpYoy": null,
      "realHpi": 108.21,
      "source": "snapshot"
    },
    {
      "geo": "EU27_2020",
      "period": "2010-Q4",
      "year": 2010,
      "quarter": 4,
      "hpi": {
        "total": 100.62,
        "new": 101.75,
        "existing": 100.28,
        "qoq": -0.13,
        "yoy": null
      },
      "hicp": 93.88,
      "hicpYoy": null,
      "realHpi": 107.18,
      "source": "snapshot"
    },
    {
      "geo": "EU27_2020",
      "period": "2011-Q1",
      "year": 2011,
      "quarter": 1,
      "hpi": {
        "total": 100.86,
        "new": 101.98,
        "existing": 100.53,
        "qoq": 0.24,
        "yoy": 1.57
      },
      "hicp": 94.46,
      "hicpYoy": 2.69,
      "realHpi": 106.78,
      "source": "snapshot"
    },
    {
      "geo": "EU27_2020",
      "period": "2011-Q2",
      "year": 2011,
      "quarter": 2,
      "hpi": {
        "total": 101.59,
        "new": 102.16,
        "existing": 101.44,
        "qoq": 0.72,
        "yoy": 1.22
      },
      "hicp": 95.9,
      "hicpYoy": 2.95,
      "realHpi": 105.93,
      "source": "snapshot"
    },
    {
      "geo": "EU27_2020",
      "period": "2011-Q3",
      "year": 2011,
      "quarter": 3,
      "hpi": {
        "total": 101.1,
        "new": 101.89,
        "existing": 100.87,
        "qoq": -0.48,
        "yoy": 0.35
      },
      "hicp": 95.7,
      "hicpYoy": 2.78,
      "realHpi": 105.64,
      "source": "snapshot"
    },
    {
      "geo": "EU27_2020",
      "period": "2011-Q4",
      "year": 2011,
      "quarter": 4,
      "hpi": {
        "total": 99.97,
        "new": 100.49,
        "existing": 99.83,
        "qoq": -1.12,
        "yoy": -0.65
      },
      "hicp": 96.69,
      "hicpYoy": 2.99,
      "realHpi": 103.39,
      "source": "snapshot"
    },
    {
      "geo": "EU27_2020",
      "period": "2012-Q1",
      "year": 2012,
      "quarter": 1,
      "hpi": {
        "total": 99.29,
        "new": 99.48,
        "existing": 99.24,
        "qoq": -0.68,
        "yoy": -1.56
      },
      "hicp": 97.09,
      "hicpYoy": 2.78,
      "realHpi": 102.27,
      "source": "snapshot"
    },
    {
      "geo": "EU27_2020",
      "period": "2012-Q2",
      "year": 2012,
      "quarter": 2,
      "hpi": {
        "total": 99.0,
        "new": 99.1,
        "existing": 98.97,
        "qoq": -0.29,
        "yoy": -2.55
      },
      "hicp": 98.37,
      "hicpYoy": 2.58,
      "realHpi": 100.64,
      "source": "snapshot"
    },
    {
      "geo": "EU27_2020",
      "period": "2012-Q3",
      "year": 2012,
      "quarter": 3,
      "hpi": {
        "total": 98.61,
        "new": 98.51,
        "existing": 98.64,
        "qoq": -0.39,
        "yoy": -2.46
      },
      "hicp": 98.28,
      "hicpYoy": 2.7,
      "realHpi": 100.34,
      "source": "snapshot"
    },
    {
      "geo": "EU27_2020",
      "period": "2012-Q4",
      "year": 2012,
      "quarter": 4,
      "hpi": {
        "total": 98.12,
        "new": 98.47,
        "existing": 98.02,
        "qoq": -0.5,
        "yoy": -1.85
      },
      "hicp": 99.03,
      "hicpYoy": 2.42,
      "realHpi": 99.08,
      "source": "snapshot"
    },
    {
      "geo": "EU27_2020",
      "period": "2013-Q1",
      "year": 2013,
      "quarter": 1,
      "hpi": {
        "total": 96.84,
        "new": 97.39,
        "existing": 96.69,
        "qoq": -1.3,
        "yoy": -2.47
      },
      "hicp": 98.91,
      "hicpYoy": 1.87,
      "realHpi": 97.91,
      "source": "snapshot"
    },
    {
      "geo": "EU27_2020",
      "period": "2013-Q2",
      "year": 2013,
      "quarter": 2,
      "hpi": {
        "total": 97.25,
        "new": 97.02,
        "existing": 97.31,
        "qoq": 0.42,
        "yoy": -1.77
      },
      "hicp": 99.72,
      "hicpYoy": 1.37,
      "realHpi": 97.52,
      "source": "snapshot"
    },
    {
      "geo": "EU27_2020",
      "period": "2013-Q3",
      "year": 2013,
      "quarter": 3,
      "hpi": {
        "total": 97.29,
        "new": 97.09,
        "existing": 97.34,
        "qoq": 0.04,
        "yoy": -1.34
      },
      "hicp": 99.55,
      "hicpYoy": 1.29,
      "realHpi": 97.73,
      "source": "snapshot"
    },
    {
      "geo": "EU27_2020",
      "period": "2013-Q4",
      "year": 2013,
      "quarter": 4,
      "hpi": {
        "total": 96.86,
        "new": 96.84,
        "existing": 96.87,
        "qoq": -0.44,
        "yoy": -1.28
      },
      "hicp": 99.79,
      "hicpYoy": 0.77,
      "realHpi": 97.06,
      "source": "snapshot"
    },
    {
      "geo": "EU27_2020",
      "period": "2014-Q1",
      "year": 2014,
      "quarter": 1,
      "hpi": {
        "total": 96.87,
        "new": 96.74,
        "existing": 96.91,
        "qoq": 0.01,
        "yoy": 0.03
      },
      "hicp": 99.51,
      "hicpYoy": 0.61,
      "realHpi": 97.35,
      "source": "snapshot"
    },
    {
      "geo": "EU27_2020",
      "period": "2014-Q2",
      "year": 2014,
      "quarter": 2,
      "hpi": {
        "total": 97.85,
        "new": 97.5,
        "existing": 97.94,
        "qoq": 1.01,
        "yoy": 0.62
      },
      "hicp": 100.24,
      "hicpYoy": 0.52,
      "realHpi": 97.62,
      "source": "snapshot"
    },
    {
      "geo": "EU27_2020",
      "period": "2014-Q3",
      "year": 2014,
      "quarter": 3,
      "hpi": {
        "total": 98.28,
        "new": 98.06,
        "existing": 98.34,
        "qoq": 0.44,
        "yoy": 1.02
      },
      "hicp": 99.88,
      "hicpYoy": 0.33,
      "realHpi": 98.4,
      "source": "snapshot"
    },
    {
      "geo": "EU27_2020",
      "period": "2014-Q4",
      "year": 2014,
      "quarter": 4,
      "hpi": {
        "total": 97.99,
        "new": 98.25,
        "existing": 97.93,
        "qoq": -0.3,
        "yoy": 1.17
      },
      "hicp": 99.93,
      "hicpYoy": 0.14,
      "realHpi": 98.06,
      "source": "snapshot"
    },
    {
      "geo": "EU27_2020",
      "period": "2015-Q1",
      "year": 2015,
      "quarter": 1,
      "hpi": {
        "total": 98.27,
        "new": 98.44,
        "existing": 98.23,
        "qoq": 0.29,
        "yoy": 1.45
      },
      "hicp": 99.16,
      "hicpYoy": -0.35,
      "realHpi": 99.1,
      "source": "snapshot"
    },
    {
      "geo": "EU27_2020",
      "period": "2015-Q2",
      "year": 2015,
      "quarter": 2,
      "hpi": {
        "total": 99.83,
        "new": 99.58,
        "existing": 99.89,
        "qoq": 1.59,
        "yoy": 2.02
      },
      "hicp": 100.59,
      "hicpYoy": 0.35,
      "realHpi": 99.24,
      "source": "snapshot"
    },
    {
      "geo": "EU27_2020",
      "period": "2015-Q3",
      "year": 2015,
      "quarter": 3,
      "hpi": {
        "total": 100.81,
        "new": 100.88,
        "existing": 100.8,
        "qoq": 0.98,
        "yoy": 2.57
      },
      "hicp": 100.15,
      "hicpYoy": 0.27,
      "realHpi": 100.66,
      "source": "snapshot"
    },
    {
      "geo": "EU27_2020",
      "period": "2015-Q4",
      "year": 2015,
      "quarter": 4,
      "hpi": {
        "total": 101.09,
        "new": 101.11,
        "existing": 101.08,
        "qoq": 0.28,
        "yoy": 3.16
      },
      "hicp": 100.1,
      "hicpYoy": 0.17,
      "realHpi": 100.99,
      "source": "snapshot"
    },
    {
      "geo": "EU27_2020",
      "period": "2016-Q1",
      "year": 2016,
      "quarter": 1,
      "hpi": {
        "total": 102.01,
        "new": 101.84,
        "existing": 102.05,
        "qoq": 0.91,
        "yoy": 3.81
      },
      "hicp": 99.15,
      "hicpYoy": -0.01,
      "realHpi": 102.88,
      "source": "snapshot"
    },
    {
      "geo": "EU27_2020",
      "period": "2016-Q2",
      "year": 2016,
      "quarter": 2,
      "hpi": {
        "total": 103.75,
        "new": 102.99,
        "existing": 103.93,
        "qoq": 1.71,
        "yoy": 3.93
      },
      "hicp": 100.42,
      "hicpYoy": -0.17,
      "realHpi": 103.32,
      "source": "snapshot"
    },
    {
      "geo": "EU27_2020",
      "period": "2016-Q3",
      "year": 2016,
      "quarter": 3,
      "hpi": {
        "total": 105.36,
        "new": 104.12,
        "existing": 105.65,
        "qoq": 1.55,
        "yoy": 4.51
      },
      "hicp": 100.35,
      "hicpYoy": 0.2,
      "realHpi": 104.99,
      "source": "snapshot"
    },
    {
      "geo": "EU27_2020",
      "period": "2016-Q4",
      "year": 2016,
      "quarter": 4,
      "hpi": {
        "total": 106.11,
        "new": 105.13,
        "existing": 106.33,
        "qoq": 0.71,
        "yoy": 4.97
      },
      "hicp": 100.8,
      "hicpYoy": 0.7,
      "realHpi": 105.27,
      "source": "snapshot"
    },
    {
      "geo": "EU27_2020",
      "period": "2017-Q1",
      "year": 2017,
      "quarter": 1,
      "hpi": {
        "total": 106.89,
        "new": 105.24,
        "existing": 107.26,
        "qoq": 0.74,
        "yoy": 4.78
      },
      "hicp": 100.84,
      "hicpYoy": 1.7,
      "realHpi": 106.0,
      "source": "snapshot"
    },
    {
      "geo": "EU27_2020",
      "period": "2017-Q2",
      "year": 2017,
      "quarter": 2,
      "hpi": {
        "total": 108.76,
        "new": 106.86,
        "existing": 109.2,
        "qoq": 1.75,
        "yoy": 4.83
      },
      "hicp": 101.95,
      "hicpYoy": 1.52,
      "realHpi": 106.68,
      "source": "snapshot"
    },
    {
      "geo": "EU27_2020",
      "period": "2017-Q3",
      "year": 2017,
      "quarter": 3,
      "hpi": {
        "total": 110.39,
        "new": 108.14,
        "existing": 110.91,
        "qoq": 1.5,
        "yoy": 4.77
      },
      "hicp": 101.86,
      "hicpYoy": 1.5,
      "realHpi": 108.37,
      "source": "snapshot"
    },
    {
      "geo": "EU27_2020",
      "period": "2017-Q4",
      "year": 2017,
      "quarter": 4,
      "hpi": {
        "total": 111.19,
        "new": 109.38,
        "existing": 111.61,
        "qoq": 0.72,
        "yoy": 4.79
      },
      "hicp": 102.32,
      "hicpYoy": 1.51,
      "realHpi": 108.67,
      "source": "snapshot"
    },
    {
      "geo": "EU27_2020",
      "period": "2018-Q1",
      "year": 2018,
      "quarter": 1,
      "hpi": {
        "total": 112.27,
        "new": 110.49,
        "existing": 112.68,
        "qoq": 0.97,
        "yoy": 5.03
      },
      "hicp": 102.19,
      "hicpYoy": 1.34,
      "realHpi": 109.86,
      "source": "snapshot"
    },
    {
      "geo": "EU27_2020",
      "period": "2018-Q2",
      "year": 2018,
      "quarter": 2,
      "hpi": {
        "total": 114.23,
        "new": 112.21,
        "existing": 114.69,
        "qoq": 1.75,
        "yoy": 5.03
      },
      "hicp": 103.75,
      "hicpYoy": 1.77,
      "realHpi": 110.1,
      "source": "snapshot"
    },
    {
      "geo": "EU27_2020",
      "period": "2018-Q3",
      "year": 2018,
      "quarter": 3,
      "hpi": {
        "total": 115.93,
        "new": 113.69,
        "existing": 116.46,
        "qoq": 1.49,
        "yoy": 5.02
      },
      "hicp": 104.06,
      "hicpYoy": 2.16,
      "realHpi": 111.41,
      "source": "snapshot"
    },
    {
      "geo": "EU27_2020",
      "period": "2018-Q4",
      "year": 2018,
      "quarter": 4,
      "hpi": {
        "total": 116.81,
        "new": 114.76,
        "existing": 117.29,
        "qoq": 0.76,
        "yoy": 5.05
      },
      "hicp": 104.27,
      "hicpYoy": 1.91,
      "realHpi": 112.03,
      "source": "snapshot"
    },
    {
      "geo": "EU27_2020",
      "period": "2019-Q1",
      "year": 2019,
      "quarter": 1,
      "hpi": {
        "total": 117.59,
        "new": 115.69,
        "existing": 118.02,
        "qoq": 0.67,
        "yoy": 4.74
      },
      "hicp": 103.76,
      "hicpYoy": 1.54,
      "realHpi": 113.33,
      "source": "snapshot"
    },
    {
      "geo": "EU27_2020",
      "period": "2019-Q2",
      "year": 2019,
      "quarter": 2,
      "hpi": {
        "total": 119.78,
        "new": 117.39,
        "existing": 120.34,
        "qoq": 1.86,
        "yoy": 4.86
      },
      "hicp": 105.42,
      "hicpYoy": 1.61,
      "realHpi": 113.62,
      "source": "snapshot"
    },
    {
      "geo": "EU27_2020",
      "period": "2019-Q3",
      "year": 2019,
      "quarter": 3,
      "hpi": {
        "total": 121.54,
        "new": 118.97,
        "existing": 122.14,
        "qoq": 1.47,
        "yoy": 4.84
      },
      "hicp": 105.34,
      "hicpYoy": 1.23,
      "realHpi": 115.38,
      "source": "snapshot"
    },
    {
      "geo": "EU27_2020",
      "period": "2019-Q4",
      "year": 2019,
      "quarter": 4,
      "hpi": {
        "total": 122.7,
        "new": 120.74,
        "existing": 123.15,
        "qoq": 0.95,
        "yoy": 5.04
      },
      "hicp": 105.62,
      "hicpYoy": 1.29,
      "realHpi": 116.17,
      "source": "snapshot"
    },
    {
      "geo": "EU27_2020",
      "period": "2020-Q1",
      "year": 2020,
      "quarter": 1,
      "hpi": {
        "total": 124.44,
        "new": 121.95,
        "existing": 125.01,
        "qoq": 1.42,
        "yoy": 5.83
      },
      "hicp": 105.31,
      "hicpYoy": 1.49,
      "realHpi": 118.17,
      "source": "snapshot"
    },
    {
      "geo": "EU27_2020",
      "period": "2020-Q2",
      "year": 2020,
      "quarter": 2,
      "hpi": {
        "total": 126.28,
        "new": 123.17,
        "existing": 127.01,
        "qoq": 1.48,
        "yoy": 5.43
      },
      "hicp": 106.06,
      "hicpYoy": 0.61,
      "realHpi": 119.06,
      "source": "snapshot"
    },
    {
      "geo": "EU27_2020",
      "period": "2020-Q3",
      "year": 2020,
      "quarter": 3,
      "hpi": {
        "total": 128.05,
        "new": 124.99,
        "existing": 128.77,
        "qoq": 1.4,
        "yoy": 5.36
      },
      "hicp": 105.83,
      "hicpYoy": 0.47,
      "realHpi": 121.0,
      "source": "snapshot"
    },
    {
      "geo": "EU27_2020",
      "period": "2020-Q4",
      "year": 2020,
      "quarter": 4,
      "hpi": {
        "total": 129.81,
        "new": 126.92,
        "existing": 130.48,
        "qoq": 1.37,
        "yoy": 5.79
      },
      "hicp": 105.84,
      "hicpYoy": 0.21,
      "realHpi": 122.65,
      "source": "snapshot"
    },
    {
      "geo": "EU27_2020",
      "period": "2021-Q1",
      "year": 2021,
      "quarter": 1,
      "hpi": {
        "total": 132.12,
        "new": 128.16,
        "existing": 133.07,
        "qoq": 1.78,
        "yoy": 6.17
      },
      "hicp": 106.76,
      "hicpYoy": 1.38,
      "realHpi": 123.75,
      "source": "snapshot"
    },
    {
      "geo": "EU27_2020",
      "period": "2021-Q2",
      "year": 2021,
      "quarter": 2,
      "hpi": {
        "total": 135.99,
        "new": 130.63,
        "existing": 137.29,
        "qoq": 2.93,
        "yoy": 7.69
      },
      "hicp": 108.37,
      "hicpYoy": 2.18,
      "realHpi": 125.49,
      "source": "snapshot"
    },
    {
      "geo": "EU27_2020",
      "period": "2021-Q3",
      "year": 2021,
      "quarter": 3,
      "hpi": {
        "total": 140.21,
        "new": 134.08,
        "existing": 141.71,
        "qoq": 3.1,
        "yoy": 9.5
      },
      "hicp": 109.1,
      "hicpYoy": 3.09,
      "realHpi": 128.52,
      "source": "snapshot"
    },
    {
      "geo": "EU27_2020",
      "period": "2021-Q4",
      "year": 2021,
      "quarter": 4,
      "hpi": {
        "total": 143.17,
        "new": 137.85,
        "existing": 144.46,
        "qoq": 2.11,
        "yoy": 10.29
      },
      "hicp": 111.07,
      "hicpYoy": 4.94,
      "realHpi": 128.9,
      "source": "snapshot"
    },
    {
      "geo": "EU27_2020",
      "period": "2022-Q1",
      "year": 2022,
      "quarter": 1,
      "hpi": {
        "total": 146.22,
        "new": 140.72,
        "existing": 147.55,
        "qoq": 2.13,
        "yoy": 10.67
      },
      "hicp": 113.75,
      "hicpYoy": 6.55,
      "realHpi": 128.55,
      "source": "snapshot"
    },
    {
      "geo": "EU27_2020",
      "period": "2022-Q2",
      "year": 2022,
      "quarter": 2,
      "hpi": {
        "total": 149.59,
        "new": 144.74,
        "existing": 150.76,
        "qoq": 2.3,
        "yoy": 10.0
      },
      "hicp": 117.94,
      "hicpYoy": 8.83,
      "realHpi": 126.84,
      "source": "snapshot"
    },
    {
      "geo": "EU27_2020",
      "period": "2022-Q3",
      "year": 2022,
      "quarter": 3,
      "hpi": {
        "total": 150.9,
        "new": 146.81,
        "existing": 151.88,
        "qoq": 0.88,
        "yoy": 7.62
      },
      "hicp": 120.32,
      "hicpYoy": 10.28,
      "realHpi": 125.42,
      "source": "snapshot"
    },
    {
      "geo": "EU27_2020",
      "period": "2022-Q4",
      "year": 2022,
      "quarter": 4,
      "hpi": {
        "total": 148.73,
        "new": 148.34,
        "existing": 148.79,
        "qoq": -1.44,
        "yoy": 3.88
      },
      "hicp": 123.28,
      "hicpYoy": 10.99,
      "realHpi": 120.64,
      "source": "snapshot"
    },
    {
      "geo": "EU27_2020",
      "period": "2023-Q1",
      "year": 2023,
      "quarter": 1,
      "hpi": {
        "total": 147.58,
        "new": 148.63,
        "existing": 147.28,
        "qoq": -0.77,
        "yoy": 0.93
      },
      "hicp": 124.45,
      "hicpYoy": 9.41,
      "realHpi": 118.59,
      "source": "snapshot"
    },
    {
      "geo": "EU27_2020",
      "period": "2023-Q2",
      "year": 2023,
      "quarter": 2,
      "hpi": {
        "total": 148.18,
        "new": 150.81,
        "existing": 147.49,
        "qoq": 0.41,
        "yoy": -0.94
      },
      "hicp": 126.45,
      "hicpYoy": 7.22,
      "realHpi": 117.18,
      "source": "snapshot"
    },
    {
      "geo": "EU27_2020",
      "period": "2023-Q3",
      "year": 2023,
      "quarter": 3,
      "hpi": {
        "total": 149.13,
        "new": 153.66,
        "existing": 147.97,
        "qoq": 0.64,
        "yoy": -1.17
      },
      "hicp": 127.15,
      "hicpYoy": 5.68,
      "realHpi": 117.29,
      "source": "snapshot"
    },
    {
      "geo": "EU27_2020",
      "period": "2023-Q4",
      "year": 2023,
      "quarter": 4,
      "hpi": {
        "total": 148.85,
        "new": 156.37,
        "existing": 146.94,
        "qoq": -0.19,
        "yoy": 0.08
      },
      "hicp": 127.46,
      "hicpYoy": 3.39,
      "realHpi": 116.78,
      "source": "snapshot"
    },
    {
      "geo": "EU27_2020",
      "period": "2024-Q1",
      "year": 2024,
      "quarter": 1,
      "hpi": {
        "total": 149.78,
        "new": 158.44,
        "existing": 147.59,
        "qoq": 0.62,
        "yoy": 1.49
      },
      "hicp": 127.98,
      "hicpYoy": 2.84,
      "realHpi": 117.03,
      "source": "snapshot"
    },
    {
      "geo": "EU27_2020",
      "period": "2024-Q2",
      "year": 2024,
      "quarter": 2,
      "hpi": {
        "total": 152.65,
        "new": 161.73,
        "existing": 150.36,
        "qoq": 1.92,
        "yoy": 3.02
      },
      "hicp": 129.79,
      "hicpYoy": 2.64,
      "realHpi": 117.61,
      "source": "snapshot"
    },
    {
      "geo": "EU27_2020",
      "period": "2024-Q3",
      "year": 2024,
      "quarter": 3,
      "hpi": {
        "total": 155.05,
        "new": 164.5,
        "existing": 152.66,
        "qoq": 1.57,
        "yoy": 3.97
      },
      "hicp": 130.25,
      "hicpYoy": 2.44,
      "realHpi": 119.04,
      "source": "snapshot"
    },
    {
      "geo": "EU27_2020",
      "period": "2024-Q4",
      "year": 2024,
      "quarter": 4,
      "hpi": {
        "total": 156.19,
        "new": 166.16,
        "existing": 153.67,
        "qoq": 0.74,
        "yoy": 4.93
      },
      "hicp": 130.66,
      "hicpYoy": 2.51,
      "realHpi": 119.54,
      "source": "snapshot"
    },
    {
      "geo": "EU27_2020",
      "period": "2025-Q1",
      "year": 2025,
      "quarter": 1,
      "hpi": {
        "total": 158.45,
        "new": 167.04,
        "existing": 156.23,
        "qoq": 1.45,
        "yoy": 5.79
      },
      "hicp": 131.4,
      "hicpYoy": 2.67,
      "realHpi": 120.59,
      "source": "snapshot"
    },
    {
      "geo": "EU27_2020",
      "period": "2025-Q2",
      "year": 2025,
      "quarter": 2,
      "hpi": {
        "total": 160.95,
        "new": 169.38,
        "existing": 158.75,
        "qoq": 1.58,
        "yoy": 5.44
      },
      "hicp": 132.8,
      "hicpYoy": 2.32,
      "realHpi": 121.2,
      "source": "snapshot"
    },
    {
      "geo": "EU27_2020",
      "period": "2025-Q3",
      "year": 2025,
      "quarter": 3,
      "hpi": {
        "total": 163.54,
        "new": 171.86,
        "existing": 161.36,
        "qoq": 1.61,
        "yoy": 5.48
      },
      "hicp": 133.45,
      "hicpYoy": 2.46,
      "realHpi": 122.55,
      "source": "snapshot"
    },
    {
      "geo": "EU27_2020",
      "period": "2025-Q4",
      "year": 2025,
      "quarter": 4,
      "hpi": {
        "total": 164.62,
        "new": 174.14,
        "existing": 162.18,
        "qoq": 0.66,
        "yoy": 5.4
      },
      "hicp": 133.8,
      "hicpYoy": 2.4,
      "realHpi": 123.03,
      "source": "snapshot"
    },
    {
      "geo": "EU27_2020",
      "period": "2026-Q1",
      "year": 2026,
      "quarter": 1,
      "hpi": {
        "total": 166.51,
        "new": 176.09,
        "existing": 164.04,
        "qoq": 1.15,
        "yoy": 5.09
      },
      "hicp": null,
      "hicpYoy": null,
      "realHpi": null,
      "source": "snapshot"
    },
    {
      "geo": "EU27_2020",
      "period": "2026-Q2",
      "year": 2026,
      "quarter": 2,
      "hpi": {
        "total": 168.56,
        "new": 178.21,
        "existing": 166.08,
        "qoq": 1.23,
        "yoy": 4.73
      },
      "hicp": null,
      "hicpYoy": null,
      "realHpi": null,
      "source": "snapshot"
    }
  ]
};
