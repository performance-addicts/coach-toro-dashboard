
import React from 'react'
import { CellRenderer, targetRenderer, valueRenderer } from './Renderers';
import { MS, TMS } from './Formatters';
import {
    H2,
    Table,
    TableBody,
    TH,
    SH,
    TR, 
    TD,
    SD
} from './Styles';

function SummaryVitals ({ data }) {
  const TTFB = 'median_first_byte_time_ms';
  const FCP = 'median_first_contentful_paint_time_ms';
  const LCP = 'median_largest_contentful_paint_time_ms';
  const SI = 'median_speed_index';
  const TTI = 'median_first_interactive_time_ms';
  const TBT = 'median_total_blocking_time_ms';
  return (
    <>
        <H2>KPIs</H2>
        <Table>
            <TableBody>
                <TR>
                    <TH rowSpan="2"></TH>
                    <TH colSpan="4">HOME</TH>
                    <TH colSpan="4">PLP</TH>
                    <TH colSpan="4">PDP</TH>
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
                </TR>
                <TR>
                    <SD>TTFB</SD>
                    <CellRenderer element={0} values={data.PAGES.HP.KPI.DEV} delta={data.PAGES.HP.KPI.DLT} value={TTFB} formatter={MS} renderer={valueRenderer} />
                    <CellRenderer element={0} values={data.PAGES.HP.KPI.PRD} delta={data.PAGES.HP.KPI.DLT} value={TTFB} formatter={MS} renderer={valueRenderer} />
                    <CellRenderer element={0} values={data.PAGES.HP.KPI.TGT} delta={data.PAGES.HP.KPI.DLT} value={TTFB} formatter={TMS} renderer={targetRenderer} />
                    <CellRenderer element={0} values={data.PAGES.HP.KPI.DLT} delta={data.PAGES.HP.KPI.DLT} value={TTFB} formatter={MS} renderer={targetRenderer} />  
                    <CellRenderer element={0} values={data.PAGES.PLP.KPI.DEV} delta={data.PAGES.PLP.KPI.DLT} value={TTFB} formatter={MS} renderer={valueRenderer} />
                    <CellRenderer element={0} values={data.PAGES.PLP.KPI.PRD} delta={data.PAGES.PLP.KPI.DLT} value={TTFB} formatter={MS} renderer={valueRenderer} />
                    <CellRenderer element={0} values={data.PAGES.PLP.KPI.TGT} delta={data.PAGES.PLP.KPI.DLT} value={TTFB} formatter={TMS} renderer={targetRenderer} />
                    <CellRenderer element={0} values={data.PAGES.PLP.KPI.DLT} delta={data.PAGES.PLP.KPI.DLT} value={TTFB} formatter={MS} renderer={targetRenderer} />  
                    <CellRenderer element={0} values={data.PAGES.PDP.KPI.DEV} delta={data.PAGES.PDP.KPI.DLT} value={TTFB} formatter={MS} renderer={valueRenderer} />
                    <CellRenderer element={0} values={data.PAGES.PDP.KPI.PRD} delta={data.PAGES.PDP.KPI.DLT} value={TTFB} formatter={MS} renderer={valueRenderer} />
                    <CellRenderer element={0} values={data.PAGES.PDP.KPI.TGT} delta={data.PAGES.PDP.KPI.DLT} value={TTFB} formatter={TMS} renderer={targetRenderer} />
                    <CellRenderer element={0} values={data.PAGES.PDP.KPI.DLT} delta={data.PAGES.PDP.KPI.DLT} value={TTFB} formatter={MS} renderer={targetRenderer} />                                                         
                </TR> 
                <TR>
                    <SD>FCP</SD>
                    <CellRenderer element={0} values={data.PAGES.HP.KPI.DEV} delta={data.PAGES.HP.KPI.DLT} value={FCP} formatter={MS} renderer={valueRenderer} />
                    <CellRenderer element={0} values={data.PAGES.HP.KPI.PRD} delta={data.PAGES.HP.KPI.DLT} value={FCP} formatter={MS} renderer={valueRenderer} />
                    <CellRenderer element={0} values={data.PAGES.HP.KPI.TGT} delta={data.PAGES.HP.KPI.DLT} value={FCP} formatter={TMS} renderer={targetRenderer} />
                    <CellRenderer element={0} values={data.PAGES.HP.KPI.DLT} delta={data.PAGES.HP.KPI.DLT} value={FCP} formatter={MS} renderer={targetRenderer} />  
                    <CellRenderer element={0} values={data.PAGES.PLP.KPI.DEV} delta={data.PAGES.PLP.KPI.DLT} value={FCP} formatter={MS} renderer={valueRenderer} />
                    <CellRenderer element={0} values={data.PAGES.PLP.KPI.PRD} delta={data.PAGES.PLP.KPI.DLT} value={FCP} formatter={MS} renderer={valueRenderer} />
                    <CellRenderer element={0} values={data.PAGES.PLP.KPI.TGT} delta={data.PAGES.PLP.KPI.DLT} value={FCP} formatter={TMS} renderer={targetRenderer} />
                    <CellRenderer element={0} values={data.PAGES.PLP.KPI.DLT} delta={data.PAGES.PLP.KPI.DLT} value={FCP} formatter={MS} renderer={targetRenderer} />  
                    <CellRenderer element={0} values={data.PAGES.PDP.KPI.DEV} delta={data.PAGES.PDP.KPI.DLT} value={FCP} formatter={MS} renderer={valueRenderer} />
                    <CellRenderer element={0} values={data.PAGES.PDP.KPI.PRD} delta={data.PAGES.PDP.KPI.DLT} value={FCP} formatter={MS} renderer={valueRenderer} />
                    <CellRenderer element={0} values={data.PAGES.PDP.KPI.TGT} delta={data.PAGES.PDP.KPI.DLT} value={FCP} formatter={TMS} renderer={targetRenderer} />
                    <CellRenderer element={0} values={data.PAGES.PDP.KPI.DLT} delta={data.PAGES.PDP.KPI.DLT} value={FCP} formatter={MS} renderer={targetRenderer} />                                                         
                </TR>   
                <TR>
                    <SD>LCP</SD>
                    <CellRenderer element={0} values={data.PAGES.HP.KPI.DEV} delta={data.PAGES.HP.KPI.DLT} value={LCP} formatter={MS} renderer={valueRenderer} />
                    <CellRenderer element={0} values={data.PAGES.HP.KPI.PRD} delta={data.PAGES.HP.KPI.DLT} value={LCP} formatter={MS} renderer={valueRenderer} />
                    <CellRenderer element={0} values={data.PAGES.HP.KPI.TGT} delta={data.PAGES.HP.KPI.DLT} value={LCP} formatter={TMS} renderer={targetRenderer} />
                    <CellRenderer element={0} values={data.PAGES.HP.KPI.DLT} delta={data.PAGES.HP.KPI.DLT} value={LCP} formatter={MS} renderer={targetRenderer} />  
                    <CellRenderer element={0} values={data.PAGES.PLP.KPI.DEV} delta={data.PAGES.PLP.KPI.DLT} value={LCP} formatter={MS} renderer={valueRenderer} />
                    <CellRenderer element={0} values={data.PAGES.PLP.KPI.PRD} delta={data.PAGES.PLP.KPI.DLT} value={LCP} formatter={MS} renderer={valueRenderer} />
                    <CellRenderer element={0} values={data.PAGES.PLP.KPI.TGT} delta={data.PAGES.PLP.KPI.DLT} value={LCP} formatter={TMS} renderer={targetRenderer} />
                    <CellRenderer element={0} values={data.PAGES.PLP.KPI.DLT} delta={data.PAGES.PLP.KPI.DLT} value={LCP} formatter={MS} renderer={targetRenderer} />  
                    <CellRenderer element={0} values={data.PAGES.PDP.KPI.DEV} delta={data.PAGES.PDP.KPI.DLT} value={LCP} formatter={MS} renderer={valueRenderer} />
                    <CellRenderer element={0} values={data.PAGES.PDP.KPI.PRD} delta={data.PAGES.PDP.KPI.DLT} value={LCP} formatter={MS} renderer={valueRenderer} />
                    <CellRenderer element={0} values={data.PAGES.PDP.KPI.TGT} delta={data.PAGES.PDP.KPI.DLT} value={LCP} formatter={TMS} renderer={targetRenderer} />
                    <CellRenderer element={0} values={data.PAGES.PDP.KPI.DLT} delta={data.PAGES.PDP.KPI.DLT} value={LCP} formatter={MS} renderer={targetRenderer} />                                                         
                </TR>   
                <TR>
                    <SD>SI</SD>
                    <CellRenderer element={0} values={data.PAGES.HP.KPI.DEV} delta={data.PAGES.HP.KPI.DLT} value={SI} formatter={MS} renderer={valueRenderer} />
                    <CellRenderer element={0} values={data.PAGES.HP.KPI.PRD} delta={data.PAGES.HP.KPI.DLT} value={SI} formatter={MS} renderer={valueRenderer} />
                    <CellRenderer element={0} values={data.PAGES.HP.KPI.TGT} delta={data.PAGES.HP.KPI.DLT} value={SI} formatter={TMS} renderer={targetRenderer} />
                    <CellRenderer element={0} values={data.PAGES.HP.KPI.DLT} delta={data.PAGES.HP.KPI.DLT} value={SI} formatter={MS} renderer={targetRenderer} />  
                    <CellRenderer element={0} values={data.PAGES.PLP.KPI.DEV} delta={data.PAGES.PLP.KPI.DLT} value={SI} formatter={MS} renderer={valueRenderer} />
                    <CellRenderer element={0} values={data.PAGES.PLP.KPI.PRD} delta={data.PAGES.PLP.KPI.DLT} value={SI} formatter={MS} renderer={valueRenderer} />
                    <CellRenderer element={0} values={data.PAGES.PLP.KPI.TGT} delta={data.PAGES.PLP.KPI.DLT} value={SI} formatter={TMS} renderer={targetRenderer} />
                    <CellRenderer element={0} values={data.PAGES.PLP.KPI.DLT} delta={data.PAGES.PLP.KPI.DLT} value={SI} formatter={MS} renderer={targetRenderer} />  
                    <CellRenderer element={0} values={data.PAGES.PDP.KPI.DEV} delta={data.PAGES.PDP.KPI.DLT} value={SI} formatter={MS} renderer={valueRenderer} />
                    <CellRenderer element={0} values={data.PAGES.PDP.KPI.PRD} delta={data.PAGES.PDP.KPI.DLT} value={SI} formatter={MS} renderer={valueRenderer} />
                    <CellRenderer element={0} values={data.PAGES.PDP.KPI.TGT} delta={data.PAGES.PDP.KPI.DLT} value={SI} formatter={TMS} renderer={targetRenderer} />
                    <CellRenderer element={0} values={data.PAGES.PDP.KPI.DLT} delta={data.PAGES.PDP.KPI.DLT} value={SI} formatter={MS} renderer={targetRenderer} />                                                         
                </TR>   
                <TR>
                    <SD>TTI</SD>
                    <CellRenderer element={0} values={data.PAGES.HP.KPI.DEV} delta={data.PAGES.HP.KPI.DLT} value={TTI} formatter={MS} renderer={valueRenderer} />
                    <CellRenderer element={0} values={data.PAGES.HP.KPI.PRD} delta={data.PAGES.HP.KPI.DLT} value={TTI} formatter={MS} renderer={valueRenderer} />
                    <CellRenderer element={0} values={data.PAGES.HP.KPI.TGT} delta={data.PAGES.HP.KPI.DLT} value={TTI} formatter={TMS} renderer={targetRenderer} />
                    <CellRenderer element={0} values={data.PAGES.HP.KPI.DLT} delta={data.PAGES.HP.KPI.DLT} value={TTI} formatter={MS} renderer={targetRenderer} />  
                    <CellRenderer element={0} values={data.PAGES.PLP.KPI.DEV} delta={data.PAGES.PLP.KPI.DLT} value={TTI} formatter={MS} renderer={valueRenderer} />
                    <CellRenderer element={0} values={data.PAGES.PLP.KPI.PRD} delta={data.PAGES.PLP.KPI.DLT} value={TTI} formatter={MS} renderer={valueRenderer} />
                    <CellRenderer element={0} values={data.PAGES.PLP.KPI.TGT} delta={data.PAGES.PLP.KPI.DLT} value={TTI} formatter={TMS} renderer={targetRenderer} />
                    <CellRenderer element={0} values={data.PAGES.PLP.KPI.DLT} delta={data.PAGES.PLP.KPI.DLT} value={TTI} formatter={MS} renderer={targetRenderer} />  
                    <CellRenderer element={0} values={data.PAGES.PDP.KPI.DEV} delta={data.PAGES.PDP.KPI.DLT} value={TTI} formatter={MS} renderer={valueRenderer} />
                    <CellRenderer element={0} values={data.PAGES.PDP.KPI.PRD} delta={data.PAGES.PDP.KPI.DLT} value={TTI} formatter={MS} renderer={valueRenderer} />
                    <CellRenderer element={0} values={data.PAGES.PDP.KPI.TGT} delta={data.PAGES.PDP.KPI.DLT} value={TTI} formatter={TMS} renderer={targetRenderer} />
                    <CellRenderer element={0} values={data.PAGES.PDP.KPI.DLT} delta={data.PAGES.PDP.KPI.DLT} value={TTI} formatter={MS} renderer={targetRenderer} />                                                         
                </TR>   
                <TR>
                    <SD>TBT</SD>
                    <CellRenderer element={0} values={data.PAGES.HP.KPI.DEV} delta={data.PAGES.HP.KPI.DLT} value={TBT} formatter={MS} renderer={valueRenderer} />
                    <CellRenderer element={0} values={data.PAGES.HP.KPI.PRD} delta={data.PAGES.HP.KPI.DLT} value={TBT} formatter={MS} renderer={valueRenderer} />
                    <CellRenderer element={0} values={data.PAGES.HP.KPI.TGT} delta={data.PAGES.HP.KPI.DLT} value={TBT} formatter={TMS} renderer={targetRenderer} />
                    <CellRenderer element={0} values={data.PAGES.HP.KPI.DLT} delta={data.PAGES.HP.KPI.DLT} value={TBT} formatter={MS} renderer={targetRenderer} />  
                    <CellRenderer element={0} values={data.PAGES.PLP.KPI.DEV} delta={data.PAGES.PLP.KPI.DLT} value={TBT} formatter={MS} renderer={valueRenderer} />
                    <CellRenderer element={0} values={data.PAGES.PLP.KPI.PRD} delta={data.PAGES.PLP.KPI.DLT} value={TBT} formatter={MS} renderer={valueRenderer} />
                    <CellRenderer element={0} values={data.PAGES.PLP.KPI.TGT} delta={data.PAGES.PLP.KPI.DLT} value={TBT} formatter={TMS} renderer={targetRenderer} />
                    <CellRenderer element={0} values={data.PAGES.PLP.KPI.DLT} delta={data.PAGES.PLP.KPI.DLT} value={TBT} formatter={MS} renderer={targetRenderer} />  
                    <CellRenderer element={0} values={data.PAGES.PDP.KPI.DEV} delta={data.PAGES.PDP.KPI.DLT} value={TBT} formatter={MS} renderer={valueRenderer} />
                    <CellRenderer element={0} values={data.PAGES.PDP.KPI.PRD} delta={data.PAGES.PDP.KPI.DLT} value={TBT} formatter={MS} renderer={valueRenderer} />
                    <CellRenderer element={0} values={data.PAGES.PDP.KPI.TGT} delta={data.PAGES.PDP.KPI.DLT} value={TBT} formatter={TMS} renderer={targetRenderer} />
                    <CellRenderer element={0} values={data.PAGES.PDP.KPI.DLT} delta={data.PAGES.PDP.KPI.DLT} value={TBT} formatter={MS} renderer={targetRenderer} />                                                         
                </TR>                                                                                                               
            </TableBody>
        </Table>    
    </>
  )
}


export default SummaryVitals
