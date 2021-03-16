
import React from 'react'
import useCollapse from 'react-collapsed';
import LineChart from './LineChart';
import Link from './Link';
import { CellRenderer, readoutRenderer, targetRenderer, valueRenderer } from './Renderers';
import { DT, NA, MS, TMS, KB } from './Formatters';
import {
    H3,
    H4,
    Table,
    TableBody,
    TH,
    SH,
    TR, 
    TD,
    TDTARGET,
    SD,
    VBox
} from './Styles';

function Page ({ data, title, page, rigor }) {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
  const TIME = 'time';
  const TTFB = 'median_first_byte_time_ms';
  const FCP = 'median_first_contentful_paint_time_ms';
  const LCP = 'median_largest_contentful_paint_time_ms';
  const SI = 'median_speed_index';
  const TTI = 'median_first_interactive_time_ms';
  const TBT = 'median_total_blocking_time_ms';
  const HTML = 'median_html_bytes';
  const CSS = 'median_css_bytes';
  const FONTS = 'median_font_bytes';
  const JS = 'median_javascript_bytes';
  const IMAGES = 'median_image_bytes';
  const VIDEOS = 'median_video_bytes';
  return (
    <>
        <H3>{title}</H3>
        <VBox>
            <Link label={'DEV [URL]'} url={data.URL.DEV}/>
            <Link label={'DEV [SRC]'} url={rigor.API.URL.DEV}/>
            <br />
            <Link label={'PRD [URL]'} url={data.URL.PRD}/>
            <Link label={'PRD [SRC]'} url={rigor.API.URL.PRD}/>
            <br />
            <button {...getToggleProps()}>
            {isExpanded ? 'data -' : 'data +'}
            </button>
            <br />
        </VBox>
        <section {...getCollapseProps()}>
          <H4>KPIs (seconds)</H4>
          <Table>
              <TableBody>
                  <TR>
                      <TH rowSpan="5"></TH>
                      <TH colSpan="4">BACKEND</TH>
                      <TH colSpan="12">FRONTEND (Rendering)</TH>
                      <TH colSpan="8">FRONTEND (Interactivity)</TH>
                  </TR>
                  <TR>
                      <SH colSpan="4">FIRST BYTE (TTFB)</SH>
                      <SH colSpan="4">FIRST CONTENTFUL PAINT (FCP)</SH>
                      <SH colSpan="4">LARGEST CONTENTFUL Paint (LCP)</SH>
                      <SH colSpan="4">SPEED INDEX (SI)</SH>
                      <SH colSpan="4">TIME TO INTERACTIVE (TTI)</SH>
                      <SH colSpan="4">TOTAL BLOCKING TIME (TBT)</SH>
                  </TR>
                  <TR>
                      <SH colSpan="4"><LineChart data={data.KPI.CRT[TTFB]} /></SH>
                      <SH colSpan="4"><LineChart data={data.KPI.CRT[FCP]} /></SH>
                      <SH colSpan="4"><LineChart data={data.KPI.CRT[LCP]} /></SH>
                      <SH colSpan="4"><LineChart data={data.KPI.CRT[SI]} /></SH>
                      <SH colSpan="4"><LineChart data={data.KPI.CRT[TTI]} /></SH>
                      <SH colSpan="4"><LineChart data={data.KPI.CRT[TBT]} /></SH>
                  </TR>
                  <TR>
                      <SH colSpan="4"><CellRenderer element={0} values={data.KPI.PRD} delta={data.KPI.DLT} value={TTFB} formatter={MS} renderer={readoutRenderer} /></SH>
                      <SH colSpan="4"><CellRenderer element={0} values={data.KPI.PRD} delta={data.KPI.DLT} value={FCP} formatter={MS} renderer={readoutRenderer} /></SH>
                      <SH colSpan="4"><CellRenderer element={0} values={data.KPI.PRD} delta={data.KPI.DLT} value={LCP} formatter={MS} renderer={readoutRenderer} /></SH>
                      <SH colSpan="4"><CellRenderer element={0} values={data.KPI.PRD} delta={data.KPI.DLT} value={SI} formatter={MS} renderer={readoutRenderer} /></SH>
                      <SH colSpan="4"><CellRenderer element={0} values={data.KPI.PRD} delta={data.KPI.DLT} value={TTI} formatter={MS} renderer={readoutRenderer} /></SH>
                      <SH colSpan="4"><CellRenderer element={0} values={data.KPI.PRD} delta={data.KPI.DLT} value={TBT} formatter={MS} renderer={readoutRenderer} /></SH>
                  </TR>
                  <TR>
                      <SH>DEV</SH>
                      <SH>PRD</SH>
                      <SH>TARGET</SH>
                      <SH>+/-</SH>
                      <SH>DEV</SH>
                      <SH>PRD</SH>
                      <SH>TARGET</SH>
                      <SH>+/-</SH>
                      <SH>DEV</SH>
                      <SH>PRD</SH>
                      <SH>TARGET</SH>
                      <SH>+/-</SH>
                      <SH>DEV</SH>
                      <SH>PRD</SH>
                      <SH>TARGET</SH>
                      <SH>+/-</SH>
                      <SH>DEV</SH>
                      <SH>PRD</SH>
                      <SH>TARGET</SH>
                      <SH>+/-</SH>
                      <SH>DEV</SH>
                      <SH>PRD</SH>
                      <SH>TARGET</SH>
                      <SH>+/-</SH>
                  </TR>
                  {data.KPI.DEV.map((kpi, index) => (
                    
                  <TR>
                    <CellRenderer element={index} values={data.KPI.DEV} delta={data.KPI.DLT} value={TIME} formatter={DT} />
                    <CellRenderer element={index} values={data.KPI.DEV} delta={data.KPI.DLT} value={TTFB} formatter={MS} />
                    <CellRenderer element={index} values={data.KPI.PRD} delta={data.KPI.DLT} value={TTFB} formatter={MS} />
                    <CellRenderer element={index} values={data.KPI.TGT} delta={data.KPI.DLT} value={TTFB} formatter={TMS} renderer={targetRenderer} />
                    <CellRenderer element={index} values={data.KPI.DLT} delta={data.KPI.DLT} value={TTFB} formatter={MS} renderer={targetRenderer} />
                    <CellRenderer element={index} values={data.KPI.DEV} delta={data.KPI.DLT} value={FCP} formatter={MS} />
                    <CellRenderer element={index} values={data.KPI.PRD} delta={data.KPI.DLT} value={FCP} formatter={MS} />
                    <CellRenderer element={index} values={data.KPI.TGT} delta={data.KPI.DLT} value={FCP} formatter={TMS} renderer={targetRenderer} />
                    <CellRenderer element={index} values={data.KPI.DLT} delta={data.KPI.DLT} value={FCP} formatter={MS} renderer={targetRenderer} />
                    <CellRenderer element={index} values={data.KPI.DEV} delta={data.KPI.DLT} value={LCP} formatter={MS} />
                    <CellRenderer element={index} values={data.KPI.PRD} delta={data.KPI.DLT} value={LCP} formatter={MS} />
                    <CellRenderer element={index} values={data.KPI.TGT} delta={data.KPI.DLT} value={LCP} formatter={TMS} renderer={targetRenderer} />
                    <CellRenderer element={index} values={data.KPI.DLT} delta={data.KPI.DLT} value={LCP} formatter={MS} renderer={targetRenderer} />
                    <CellRenderer element={index} values={data.KPI.DEV} delta={data.KPI.DLT} value={SI} formatter={MS} />
                    <CellRenderer element={index} values={data.KPI.PRD} delta={data.KPI.DLT} value={SI} formatter={MS} />
                    <CellRenderer element={index} values={data.KPI.TGT} delta={data.KPI.DLT} value={SI} formatter={TMS} renderer={targetRenderer} />
                    <CellRenderer element={index} values={data.KPI.DLT} delta={data.KPI.DLT} value={SI} formatter={MS} renderer={targetRenderer} />
                    <CellRenderer element={index} values={data.KPI.DEV} delta={data.KPI.DLT} value={TTI} formatter={MS} />
                    <CellRenderer element={index} values={data.KPI.PRD} delta={data.KPI.DLT} value={TTI} formatter={MS} />
                    <CellRenderer element={index} values={data.KPI.TGT} delta={data.KPI.DLT} value={TTI} formatter={TMS} renderer={targetRenderer} />
                    <CellRenderer element={index} values={data.KPI.DLT} delta={data.KPI.DLT} value={TTI} formatter={MS} renderer={targetRenderer} />
                    <CellRenderer element={index} values={data.KPI.DEV} delta={data.KPI.DLT} value={TBT} formatter={MS} />
                    <CellRenderer element={index} values={data.KPI.PRD} delta={data.KPI.DLT} value={TBT} formatter={MS} />
                    <CellRenderer element={index} values={data.KPI.TGT} delta={data.KPI.DLT} value={TBT} formatter={TMS} renderer={targetRenderer} />
                    <CellRenderer element={index} values={data.KPI.DLT} delta={data.KPI.DLT} value={TBT} formatter={MS} renderer={targetRenderer} />
                </TR>  
                ))}                 

              </TableBody>
          </Table>    

          <H4>Budgets (kilobytes)</H4>
          <Table>
              <TableBody>
                  <TR>
                      <TH rowSpan="5"></TH>
                      <TH colSpan="4">BACKEND</TH>
                      <TH colSpan="12">FRONTEND (Rendering)</TH>
                      <TH colSpan="8">FRONTEND (Interactivity)</TH>
                  </TR>
                  <TR>
                      <SH colSpan="4">HTML</SH>
                      <SH colSpan="4">CSS</SH>
                      <SH colSpan="4">FONTS</SH>
                      <SH colSpan="4">JS</SH>
                      <SH colSpan="4">IMAGES</SH>
                      <SH colSpan="4">VIDEOS</SH>
                  </TR>
                  <TR>
                      <SH colSpan="4"><LineChart data={data.BGT.CRT[HTML]} /></SH>
                      <SH colSpan="4"><LineChart data={data.BGT.CRT[CSS]} /></SH>
                      <SH colSpan="4"><LineChart data={data.BGT.CRT[FONTS]} /></SH>
                      <SH colSpan="4"><LineChart data={data.BGT.CRT[JS]} /></SH>
                      <SH colSpan="4"><LineChart data={data.BGT.CRT[IMAGES]} /></SH>
                      <SH colSpan="4"><LineChart data={data.BGT.CRT[VIDEOS]} /></SH>
                  </TR>
                  <TR>
                      <SH colSpan="4"><CellRenderer element={0} values={data.BGT.PRD} delta={data.BGT.DLT} value={HTML} formatter={KB} renderer={readoutRenderer} /></SH>
                      <SH colSpan="4"><CellRenderer element={0} values={data.BGT.PRD} delta={data.BGT.DLT} value={CSS} formatter={KB} renderer={readoutRenderer} /></SH>
                      <SH colSpan="4"><CellRenderer element={0} values={data.BGT.PRD} delta={data.BGT.DLT} value={FONTS} formatter={KB} renderer={readoutRenderer} /></SH>
                      <SH colSpan="4"><CellRenderer element={0} values={data.BGT.PRD} delta={data.BGT.DLT} value={JS} formatter={KB} renderer={readoutRenderer} /></SH>
                      <SH colSpan="4"><CellRenderer element={0} values={data.BGT.PRD} delta={data.BGT.DLT} value={IMAGES} formatter={KB} renderer={readoutRenderer} /></SH>
                      <SH colSpan="4"><CellRenderer element={0} values={data.BGT.PRD} delta={data.BGT.DLT} value={VIDEOS} formatter={KB} renderer={readoutRenderer} /></SH>
                  </TR>
                  <TR>
                      <SH>DEV</SH>
                      <SH>PRD</SH>
                      <SH>TARGET</SH>
                      <SH>+/-</SH>
                      <SH>DEV</SH>
                      <SH>PRD</SH>
                      <SH>TARGET</SH>
                      <SH>+/-</SH>
                      <SH>DEV</SH>
                      <SH>PRD</SH>
                      <SH>TARGET</SH>
                      <SH>+/-</SH>
                      <SH>DEV</SH>
                      <SH>PRD</SH>
                      <SH>TARGET</SH>
                      <SH>+/-</SH>
                      <SH>DEV</SH>
                      <SH>PRD</SH>
                      <SH>TARGET</SH>
                      <SH>+/-</SH>
                      <SH>DEV</SH>
                      <SH>PRD</SH>
                      <SH>TARGET</SH>
                      <SH>+/-</SH>
                  </TR>
                  {data.BGT.DEV.map((bgt, index) => (
                    
                  <TR>
                    <CellRenderer element={index} values={data.BGT.DEV} delta={data.BGT.DLT} value={TIME} formatter={DT} />
                    <CellRenderer element={index} values={data.BGT.DEV} delta={data.BGT.DLT} value={HTML} formatter={KB} />
                    <CellRenderer element={index} values={data.BGT.PRD} delta={data.BGT.DLT} value={HTML} formatter={KB} />
                    <CellRenderer element={index} values={data.BGT.TGT} delta={data.BGT.DLT} value={HTML} formatter={KB} renderer={targetRenderer} />
                    <CellRenderer element={index} values={data.BGT.DLT} delta={data.BGT.DLT} value={HTML} formatter={KB} renderer={targetRenderer} />
                    <CellRenderer element={index} values={data.BGT.DEV} delta={data.BGT.DLT} value={CSS} formatter={KB} />
                    <CellRenderer element={index} values={data.BGT.PRD} delta={data.BGT.DLT} value={CSS} formatter={KB} />
                    <CellRenderer element={index} values={data.BGT.TGT} delta={data.BGT.DLT} value={CSS} formatter={KB} renderer={targetRenderer} />
                    <CellRenderer element={index} values={data.BGT.DLT} delta={data.BGT.DLT} value={CSS} formatter={KB} renderer={targetRenderer} />
                    <CellRenderer element={index} values={data.BGT.DEV} delta={data.BGT.DLT} value={FONTS} formatter={KB} />
                    <CellRenderer element={index} values={data.BGT.PRD} delta={data.BGT.DLT} value={FONTS} formatter={KB} />
                    <CellRenderer element={index} values={data.BGT.TGT} delta={data.BGT.DLT} value={FONTS} formatter={KB} renderer={targetRenderer} />
                    <CellRenderer element={index} values={data.BGT.DLT} delta={data.BGT.DLT} value={FONTS} formatter={KB} renderer={targetRenderer} />
                    <CellRenderer element={index} values={data.BGT.DEV} delta={data.BGT.DLT} value={JS} formatter={KB} />
                    <CellRenderer element={index} values={data.BGT.PRD} delta={data.BGT.DLT} value={JS} formatter={KB} />
                    <CellRenderer element={index} values={data.BGT.TGT} delta={data.BGT.DLT} value={JS} formatter={KB} renderer={targetRenderer} />
                    <CellRenderer element={index} values={data.BGT.DLT} delta={data.BGT.DLT} value={JS} formatter={KB} renderer={targetRenderer} />
                    <CellRenderer element={index} values={data.BGT.DEV} delta={data.BGT.DLT} value={IMAGES} formatter={KB} />
                    <CellRenderer element={index} values={data.BGT.PRD} delta={data.BGT.DLT} value={IMAGES} formatter={KB} />
                    <CellRenderer element={index} values={data.BGT.TGT} delta={data.BGT.DLT} value={IMAGES} formatter={KB} renderer={targetRenderer} />
                    <CellRenderer element={index} values={data.BGT.DLT} delta={data.BGT.DLT} value={IMAGES} formatter={KB} renderer={targetRenderer} />
                    <CellRenderer element={index} values={data.BGT.DEV} delta={data.BGT.DLT} value={VIDEOS} formatter={KB} />
                    <CellRenderer element={index} values={data.BGT.PRD} delta={data.BGT.DLT} value={VIDEOS} formatter={KB} />
                    <CellRenderer element={index} values={data.BGT.TGT} delta={data.BGT.DLT} value={VIDEOS} formatter={KB} renderer={targetRenderer} />
                    <CellRenderer element={index} values={data.BGT.DLT} delta={data.BGT.DLT} value={VIDEOS} formatter={KB} renderer={targetRenderer} />
                </TR>  
                ))}                 

              </TableBody>
          </Table>                    
        </section>
  
    </>
  )
}


export default Page