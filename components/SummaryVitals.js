
import React from 'react'
import { CellRenderer, targetRenderer, valueRenderer } from './Renderers';
import { NA, MS, TMS, LS } from './Formatters';
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
  const LCP = 'median_largest_contentful_paint_time_ms';
  const FID = 'median_total_blocking_time_ms';
  const CLS = 'median_cumulative_layout_shift';
  return (
    <>
        <H2>Vitals</H2>
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
                    <SD>FID</SD>
                    <CellRenderer element={0} values={data.PAGES.HP.KPI.DEV} delta={data.PAGES.HP.KPI.DLT} value={FID} formatter={MS} renderer={valueRenderer} />
                    <CellRenderer element={0} values={data.PAGES.HP.KPI.PRD} delta={data.PAGES.HP.KPI.DLT} value={FID} formatter={MS} renderer={valueRenderer} />
                    <CellRenderer element={0} values={data.PAGES.HP.KPI.TGT} delta={data.PAGES.HP.KPI.DLT} value={FID} formatter={TMS} renderer={targetRenderer} />
                    <CellRenderer element={0} values={data.PAGES.HP.KPI.DLT} delta={data.PAGES.HP.KPI.DLT} value={FID} formatter={MS} renderer={targetRenderer} />  
                    <CellRenderer element={0} values={data.PAGES.PLP.KPI.DEV} delta={data.PAGES.PLP.KPI.DLT} value={FID} formatter={MS} renderer={valueRenderer} />
                    <CellRenderer element={0} values={data.PAGES.PLP.KPI.PRD} delta={data.PAGES.PLP.KPI.DLT} value={FID} formatter={MS} renderer={valueRenderer} />
                    <CellRenderer element={0} values={data.PAGES.PLP.KPI.TGT} delta={data.PAGES.PLP.KPI.DLT} value={FID} formatter={TMS} renderer={targetRenderer} />
                    <CellRenderer element={0} values={data.PAGES.PLP.KPI.DLT} delta={data.PAGES.PLP.KPI.DLT} value={FID} formatter={MS} renderer={targetRenderer} />  
                    <CellRenderer element={0} values={data.PAGES.PDP.KPI.DEV} delta={data.PAGES.PDP.KPI.DLT} value={FID} formatter={MS} renderer={valueRenderer} />
                    <CellRenderer element={0} values={data.PAGES.PDP.KPI.PRD} delta={data.PAGES.PDP.KPI.DLT} value={FID} formatter={MS} renderer={valueRenderer} />
                    <CellRenderer element={0} values={data.PAGES.PDP.KPI.TGT} delta={data.PAGES.PDP.KPI.DLT} value={FID} formatter={TMS} renderer={targetRenderer} />
                    <CellRenderer element={0} values={data.PAGES.PDP.KPI.DLT} delta={data.PAGES.PDP.KPI.DLT} value={FID} formatter={MS} renderer={targetRenderer} />                                                            
                </TR>
                <TR>
                    <SD>CLS</SD>
                    <CellRenderer element={0} values={data.PAGES.HP.KPI.DEV} delta={data.PAGES.HP.KPI.DLT} value={CLS} formatter={LS} renderer={valueRenderer} />
                    <CellRenderer element={0} values={data.PAGES.HP.KPI.PRD} delta={data.PAGES.HP.KPI.DLT} value={CLS} formatter={LS} renderer={valueRenderer} />
                    <CellRenderer element={0} values={data.PAGES.HP.KPI.TGT} delta={data.PAGES.HP.KPI.DLT} value={CLS} formatter={NA} renderer={targetRenderer} />
                    <CellRenderer element={0} values={data.PAGES.HP.KPI.DLT} delta={data.PAGES.HP.KPI.DLT} value={CLS} formatter={LS} renderer={targetRenderer} />  
                    <CellRenderer element={0} values={data.PAGES.PLP.KPI.DEV} delta={data.PAGES.PLP.KPI.DLT} value={CLS} formatter={LS} renderer={valueRenderer} />
                    <CellRenderer element={0} values={data.PAGES.PLP.KPI.PRD} delta={data.PAGES.PLP.KPI.DLT} value={CLS} formatter={LS} renderer={valueRenderer} />
                    <CellRenderer element={0} values={data.PAGES.PLP.KPI.TGT} delta={data.PAGES.PLP.KPI.DLT} value={CLS} formatter={NA} renderer={targetRenderer} />
                    <CellRenderer element={0} values={data.PAGES.PLP.KPI.DLT} delta={data.PAGES.PLP.KPI.DLT} value={CLS} formatter={LS} renderer={targetRenderer} />  
                    <CellRenderer element={0} values={data.PAGES.PDP.KPI.DEV} delta={data.PAGES.PDP.KPI.DLT} value={CLS} formatter={LS} renderer={valueRenderer} />
                    <CellRenderer element={0} values={data.PAGES.PDP.KPI.PRD} delta={data.PAGES.PDP.KPI.DLT} value={CLS} formatter={LS} renderer={valueRenderer} />
                    <CellRenderer element={0} values={data.PAGES.PDP.KPI.TGT} delta={data.PAGES.PDP.KPI.DLT} value={CLS} formatter={NA} renderer={targetRenderer} />
                    <CellRenderer element={0} values={data.PAGES.PDP.KPI.DLT} delta={data.PAGES.PDP.KPI.DLT} value={CLS} formatter={LS} renderer={targetRenderer} />                                                        
                </TR>                                
            </TableBody>
        </Table>    
    </>
  )
}


export default SummaryVitals
