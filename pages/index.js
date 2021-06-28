import React from "react";
import Title from "../components/Title";
import Configuration from "../components/Configuration";
import SummaryVitals from "../components/SummaryVitals";
import SummaryKPIs from "../components/SummaryKPIs";
import SummaryBudgets from "../components/SummaryBudgets";
import Pages from "../components/Pages";
import { Canvas } from "../components/Styles";

function Dashboard({ data }) {
  return (
    <Canvas>
      <Title>Performance Dashboard</Title>
      <Configuration data={data.CONFIGURATION} />
      <SummaryVitals data={data} />
      <SummaryKPIs data={data} />
      <SummaryBudgets data={data} />
      <Pages data={data} />
    </Canvas>
  );
}

export async function getStaticProps() {
  const headers = {
    method: "GET",
    headers: {
      "API-KEY": process.env.DATA.RIGOR.API.KEY,
      "Content-Type": "application/json",
    },
  };

  const createKpiChart = (dev, prd, kpi, key) => {
    const headers = [["x", "DEV", "PRD", "KPI"]];
    const data = dev.map((v, i) => {
      return [i, dev[i][key] / 1000, prd[i][key] / 1000, kpi[i][key] / 1000];
    });
    return headers.concat(data);
  };

  const createBgtChart = (dev, prd, bgt, key) => {
    const headers = [["x", "DEV", "PRD", "BGT"]];
    const data = dev.map((v, i) => {
      return [i, dev[i][key] / 1000, prd[i][key] / 1000, bgt[i][key] / 1000];
    });
    return headers.concat(data);
  };

  const mapTargetKPI = () => {
    const KPI = process.env.DATA.METRICS.KPI;
    return {
      median_first_byte_time_ms: KPI.median_first_byte_time_ms.VALUE,
      median_first_contentful_paint_time_ms:
        KPI.median_first_contentful_paint_time_ms.VALUE,
      median_largest_contentful_paint_time_ms:
        KPI.median_largest_contentful_paint_time_ms.VALUE,
      median_speed_index: KPI.median_speed_index.VALUE,
      median_first_interactive_time_ms:
        KPI.median_first_interactive_time_ms.VALUE,
      median_total_blocking_time_ms: KPI.median_total_blocking_time_ms.VALUE,
      median_cumulative_layout_shift: KPI.median_cumulative_layout_shift.VALUE,
    };
  };

  const mapDeltaKPI = (value) => {
    const KPI = process.env.DATA.METRICS.KPI;
    return {
      median_first_byte_time_ms:
        value.median_first_byte_time_ms - KPI.median_first_byte_time_ms.VALUE,
      median_first_contentful_paint_time_ms:
        value.median_first_contentful_paint_time_ms -
        KPI.median_first_contentful_paint_time_ms.VALUE,
      median_largest_contentful_paint_time_ms:
        value.median_largest_contentful_paint_time_ms -
        KPI.median_largest_contentful_paint_time_ms.VALUE,
      median_speed_index:
        value.median_speed_index - KPI.median_speed_index.VALUE,
      median_first_interactive_time_ms:
        value.median_first_interactive_time_ms -
        KPI.median_first_interactive_time_ms.VALUE,
      median_total_blocking_time_ms:
        value.median_total_blocking_time_ms -
        KPI.median_total_blocking_time_ms.VALUE,
      median_cumulative_layout_shift:
        value.median_cumulative_layout_shift -
        KPI.median_cumulative_layout_shift.VALUE,
    };
  };

  const mapTargetBGT = () => {
    const BGT = process.env.DATA.METRICS.BGT;
    return {
      median_html_bytes: BGT.median_html_bytes.VALUE,
      median_css_bytes: BGT.median_css_bytes.VALUE,
      median_font_bytes: BGT.median_font_bytes.VALUE,
      median_javascript_bytes: BGT.median_javascript_bytes.VALUE,
      median_image_bytes: BGT.median_image_bytes.VALUE,
      median_video_bytes: BGT.median_video_bytes.VALUE,
    };
  };

  const mapDeltaBGT = (value) => {
    const BGT = process.env.DATA.METRICS.BGT;
    return {
      median_html_bytes: value.median_html_bytes - BGT.median_html_bytes.VALUE,
      median_css_bytes: value.median_css_bytes - BGT.median_css_bytes.VALUE,
      median_font_bytes: value.median_font_bytes - BGT.median_font_bytes.VALUE,
      median_javascript_bytes:
        value.median_javascript_bytes - BGT.median_javascript_bytes.VALUE,
      median_image_bytes:
        value.median_image_bytes - BGT.median_image_bytes.VALUE,
      median_video_bytes:
        value.median_video_bytes - BGT.median_video_bytes.VALUE,
    };
  };

  const createKpiCharts = (dev, prd, kpi) => {
    return {
      median_first_byte_time_ms: createKpiChart(
        dev,
        prd,
        kpi,
        "median_first_byte_time_ms"
      ),
      median_first_contentful_paint_time_ms: createKpiChart(
        dev,
        prd,
        kpi,
        "median_first_contentful_paint_time_ms"
      ),
      median_largest_contentful_paint_time_ms: createKpiChart(
        dev,
        prd,
        kpi,
        "median_largest_contentful_paint_time_ms"
      ),
      median_speed_index: createKpiChart(dev, prd, kpi, "median_speed_index"),
      median_first_interactive_time_ms: createKpiChart(
        dev,
        prd,
        kpi,
        "median_first_interactive_time_ms"
      ),
      median_total_blocking_time_ms: createKpiChart(
        dev,
        prd,
        kpi,
        "median_total_blocking_time_ms"
      ),
    };
  };

  const createBgtCharts = (dev, prd, bgt) => {
    return {
      median_html_bytes: createBgtChart(dev, prd, bgt, "median_html_bytes"),
      median_css_bytes: createBgtChart(dev, prd, bgt, "median_css_bytes"),
      median_font_bytes: createBgtChart(dev, prd, bgt, "median_font_bytes"),
      median_javascript_bytes: createBgtChart(
        dev,
        prd,
        bgt,
        "median_javascript_bytes"
      ),
      median_image_bytes: createBgtChart(dev, prd, bgt, "median_image_bytes"),
      median_video_bytes: createBgtChart(dev, prd, bgt, "median_video_bytes"),
    };
  };

  const CONFIGURATION = process.env.DATA.CONFIGURATION;
  const METRICS = process.env.DATA.METRICS;
  const PAGES = process.env.DATA.PAGES;
  const RIGOR = process.env.DATA.RIGOR;

  const pagesHmKpiDevResult = await fetch(
    process.env.DATA.PAGES.HP.KPI.DEV,
    headers
  );
  const pagesHmKpiPrdResult = await fetch(
    process.env.DATA.PAGES.HP.KPI.PRD,
    headers
  );
  const pagesHmBgtDevResult = await fetch(
    process.env.DATA.PAGES.HP.BGT.DEV,
    headers
  );
  const pagesHmBgtPrdResult = await fetch(
    process.env.DATA.PAGES.HP.BGT.PRD,
    headers
  );
  const pagesPlpKpiDevResult = await fetch(
    process.env.DATA.PAGES.PLP.KPI.DEV,
    headers
  );
  const pagesPlpKpiPrdResult = await fetch(
    process.env.DATA.PAGES.PLP.KPI.PRD,
    headers
  );
  const pagesPlpBgtDevResult = await fetch(
    process.env.DATA.PAGES.PLP.BGT.DEV,
    headers
  );
  const pagesPlpBgtPrdResult = await fetch(
    process.env.DATA.PAGES.PLP.BGT.PRD,
    headers
  );
  const pagesPdpKpiDevResult = await fetch(
    process.env.DATA.PAGES.PDP.KPI.DEV,
    headers
  );
  const pagesPdpKpiPrdResult = await fetch(
    process.env.DATA.PAGES.PDP.KPI.PRD,
    headers
  );
  const pagesPdpBgtDevResult = await fetch(
    process.env.DATA.PAGES.PDP.BGT.DEV,
    headers
  );
  const pagesPdpBgtPrdResult = await fetch(
    process.env.DATA.PAGES.PDP.BGT.PRD,
    headers
  );

  const pagesHmKpiDev = await pagesHmKpiDevResult.json();

  const pagesHmKpiPrd = await pagesHmKpiPrdResult.json();

  const pagesHmBgtDev = await pagesHmBgtDevResult.json();
  const pagesHmBgtPrd = await pagesHmBgtPrdResult.json();
  const pagesPlpKpiDev = await pagesPlpKpiDevResult.json();
  const pagesPlpKpiPrd = await pagesPlpKpiPrdResult.json();
  const pagesPlpBgtDev = await pagesPlpBgtDevResult.json();
  const pagesPlpBgtPrd = await pagesPlpBgtPrdResult.json();
  const pagesPdpKpiDev = await pagesPdpKpiDevResult.json();
  const pagesPdpKpiPrd = await pagesPdpKpiPrdResult.json();
  const pagesPdpBgtDev = await pagesPdpBgtDevResult.json();
  const pagesPdpBgtPrd = await pagesPdpBgtPrdResult.json();

  const dataHmKpiDev = pagesHmKpiDev.series[0].data.reverse();
  const dataHmKpiPrd = pagesHmKpiPrd.series[0].data.reverse();
  console.log(dataHmKpiPrd);
  const dataHmBgtDev = pagesHmBgtDev.series[0].data.reverse();
  const dataHmBgtPrd = pagesHmBgtPrd.series[0].data.reverse();
  const dataPlpKpiDev = pagesPlpKpiDev.series[0].data.reverse();
  const dataPlpKpiPrd = pagesPlpKpiPrd.series[0].data.reverse();
  const dataPlpBgtDev = pagesPlpBgtDev.series[0].data.reverse();
  const dataPlpBgtPrd = pagesPlpBgtPrd.series[0].data.reverse();
  const dataPdpKpiDev = pagesPdpKpiDev.series[0].data.reverse();
  const dataPdpKpiPrd = pagesPdpKpiPrd.series[0].data.reverse();
  const dataPdpBgtDev = pagesPdpBgtDev.series[0].data.reverse();
  const dataPdpBgtPrd = pagesPdpBgtPrd.series[0].data.reverse();

  const targetHmKpi = dataHmKpiPrd.map(mapTargetKPI);
  const deltaHmKpi = dataHmKpiPrd.map(mapDeltaKPI);
  const targetHmBgt = dataHmBgtPrd.map(mapTargetBGT);
  const deltaHmBgt = dataHmBgtPrd.map(mapDeltaBGT);
  const targetPlpKpi = dataPlpKpiPrd.map(mapTargetKPI);
  const deltaPlpKpi = dataPlpKpiPrd.map(mapDeltaKPI);
  const targetPlpBgt = dataPlpBgtPrd.map(mapTargetBGT);
  const deltaPlpBgt = dataPlpBgtPrd.map(mapDeltaBGT);
  const targetPdpKpi = dataPdpKpiPrd.map(mapTargetKPI);
  const deltaPdpKpi = dataPdpKpiPrd.map(mapDeltaKPI);
  const targetPdpBgt = dataPdpBgtPrd.map(mapTargetBGT);
  const deltaPdpBgt = dataPdpBgtPrd.map(mapDeltaBGT);

  const chartHmKpi = createKpiCharts(dataHmKpiDev, dataHmKpiPrd, targetHmKpi);
  const chartPlpKpi = createKpiCharts(
    dataPlpKpiDev,
    dataPlpKpiPrd,
    targetPlpKpi
  );
  const chartPdpKpi = createKpiCharts(
    dataPdpKpiDev,
    dataPdpKpiPrd,
    targetPdpKpi
  );
  const chartHmBgt = createBgtCharts(dataHmBgtDev, dataHmBgtPrd, targetHmBgt);
  const chartPlpBgt = createBgtCharts(
    dataPlpBgtDev,
    dataPlpBgtPrd,
    targetPlpBgt
  );
  const chartPdpBgt = createBgtCharts(
    dataPdpBgtDev,
    dataPdpBgtPrd,
    targetPdpBgt
  );

  const data = {
    CONFIGURATION,
    METRICS,
    RIGOR,
    PAGES: {
      HP: {
        URL: {
          DEV: PAGES.HP.URL.DEV,
          PRD: PAGES.HP.URL.PRD,
        },
        KPI: {
          DEV: dataHmKpiDev,
          PRD: dataHmKpiPrd,
          TGT: targetHmKpi,
          DLT: deltaHmKpi,
          CRT: chartHmKpi,
        },
        BGT: {
          DEV: dataHmBgtDev,
          PRD: dataHmBgtPrd,
          TGT: targetHmBgt,
          DLT: deltaHmBgt,
          CRT: chartHmBgt,
        },
      },
      PLP: {
        URL: {
          DEV: PAGES.PLP.URL.DEV,
          PRD: PAGES.PLP.URL.PRD,
        },
        KPI: {
          DEV: dataPlpKpiDev,
          PRD: dataPlpKpiPrd,
          TGT: targetPlpKpi,
          DLT: deltaPlpKpi,
          CRT: chartPlpKpi,
        },
        BGT: {
          DEV: dataPlpBgtDev,
          PRD: dataPlpBgtPrd,
          TGT: targetPlpBgt,
          DLT: deltaPlpBgt,
          CRT: chartPlpBgt,
        },
      },
      PDP: {
        URL: {
          DEV: PAGES.PDP.URL.DEV,
          PRD: PAGES.PDP.URL.PRD,
        },
        KPI: {
          DEV: dataPdpKpiDev,
          PRD: dataPdpKpiPrd,
          TGT: targetPdpKpi,
          DLT: deltaPdpKpi,
          CRT: chartPdpKpi,
        },
        BGT: {
          DEV: dataPdpBgtDev,
          PRD: dataPdpBgtPrd,
          TGT: targetPdpBgt,
          DLT: deltaPdpBgt,
          CRT: chartPdpBgt,
        },
      },
    },
  };

  return {
    props: {
      data,
    },
  };
}

export default Dashboard;
