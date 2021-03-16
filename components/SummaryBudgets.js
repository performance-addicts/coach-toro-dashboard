
import React from 'react'
import { CellRenderer, targetRenderer, valueRenderer } from './Renderers';
import { KB } from './Formatters';
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
  const HTML = 'median_html_bytes';
  const CSS = 'median_css_bytes';
  const FONTS = 'median_font_bytes';
  const JS = 'median_javascript_bytes';
  const IMAGES = 'median_image_bytes';
  const VIDEOS = 'median_video_bytes';
  return (
    <>
        <H2>Budgets</H2>
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
                    <SD>HTML</SD>
                    <CellRenderer element={0} values={data.PAGES.HP.BGT.DEV} delta={data.PAGES.HP.BGT.DLT} value={HTML} formatter={KB} renderer={valueRenderer} />
                    <CellRenderer element={0} values={data.PAGES.HP.BGT.PRD} delta={data.PAGES.HP.BGT.DLT} value={HTML} formatter={KB} renderer={valueRenderer} />
                    <CellRenderer element={0} values={data.PAGES.HP.BGT.TGT} delta={data.PAGES.HP.BGT.DLT} value={HTML} formatter={KB} renderer={targetRenderer} />
                    <CellRenderer element={0} values={data.PAGES.HP.BGT.DLT} delta={data.PAGES.HP.BGT.DLT} value={HTML} formatter={KB} renderer={targetRenderer} />  
                    <CellRenderer element={0} values={data.PAGES.PLP.BGT.DEV} delta={data.PAGES.PLP.BGT.DLT} value={HTML} formatter={KB} renderer={valueRenderer} />
                    <CellRenderer element={0} values={data.PAGES.PLP.BGT.PRD} delta={data.PAGES.PLP.BGT.DLT} value={HTML} formatter={KB} renderer={valueRenderer} />
                    <CellRenderer element={0} values={data.PAGES.PLP.BGT.TGT} delta={data.PAGES.PLP.BGT.DLT} value={HTML} formatter={KB} renderer={targetRenderer} />
                    <CellRenderer element={0} values={data.PAGES.PLP.BGT.DLT} delta={data.PAGES.PLP.BGT.DLT} value={HTML} formatter={KB} renderer={targetRenderer} />  
                    <CellRenderer element={0} values={data.PAGES.PDP.BGT.DEV} delta={data.PAGES.PDP.BGT.DLT} value={HTML} formatter={KB} renderer={valueRenderer} />
                    <CellRenderer element={0} values={data.PAGES.PDP.BGT.PRD} delta={data.PAGES.PDP.BGT.DLT} value={HTML} formatter={KB} renderer={valueRenderer} />
                    <CellRenderer element={0} values={data.PAGES.PDP.BGT.TGT} delta={data.PAGES.PDP.BGT.DLT} value={HTML} formatter={KB} renderer={targetRenderer} />
                    <CellRenderer element={0} values={data.PAGES.PDP.BGT.DLT} delta={data.PAGES.PDP.BGT.DLT} value={HTML} formatter={KB} renderer={targetRenderer} />                                                         
                </TR> 
                <TR>
                    <SD>CSS</SD>
                    <CellRenderer element={0} values={data.PAGES.HP.BGT.DEV} delta={data.PAGES.HP.BGT.DLT} value={CSS} formatter={KB} renderer={valueRenderer} />
                    <CellRenderer element={0} values={data.PAGES.HP.BGT.PRD} delta={data.PAGES.HP.BGT.DLT} value={CSS} formatter={KB} renderer={valueRenderer} />
                    <CellRenderer element={0} values={data.PAGES.HP.BGT.TGT} delta={data.PAGES.HP.BGT.DLT} value={CSS} formatter={KB} renderer={targetRenderer} />
                    <CellRenderer element={0} values={data.PAGES.HP.BGT.DLT} delta={data.PAGES.HP.BGT.DLT} value={CSS} formatter={KB} renderer={targetRenderer} />  
                    <CellRenderer element={0} values={data.PAGES.PLP.BGT.DEV} delta={data.PAGES.PLP.BGT.DLT} value={CSS} formatter={KB} renderer={valueRenderer} />
                    <CellRenderer element={0} values={data.PAGES.PLP.BGT.PRD} delta={data.PAGES.PLP.BGT.DLT} value={CSS} formatter={KB} renderer={valueRenderer} />
                    <CellRenderer element={0} values={data.PAGES.PLP.BGT.TGT} delta={data.PAGES.PLP.BGT.DLT} value={CSS} formatter={KB} renderer={targetRenderer} />
                    <CellRenderer element={0} values={data.PAGES.PLP.BGT.DLT} delta={data.PAGES.PLP.BGT.DLT} value={CSS} formatter={KB} renderer={targetRenderer} />  
                    <CellRenderer element={0} values={data.PAGES.PDP.BGT.DEV} delta={data.PAGES.PDP.BGT.DLT} value={CSS} formatter={KB} renderer={valueRenderer} />
                    <CellRenderer element={0} values={data.PAGES.PDP.BGT.PRD} delta={data.PAGES.PDP.BGT.DLT} value={CSS} formatter={KB} renderer={valueRenderer} />
                    <CellRenderer element={0} values={data.PAGES.PDP.BGT.TGT} delta={data.PAGES.PDP.BGT.DLT} value={CSS} formatter={KB} renderer={targetRenderer} />
                    <CellRenderer element={0} values={data.PAGES.PDP.BGT.DLT} delta={data.PAGES.PDP.BGT.DLT} value={CSS} formatter={KB} renderer={targetRenderer} />                                                         
                </TR>   
                <TR>
                    <SD>FONTS</SD>
                    <CellRenderer element={0} values={data.PAGES.HP.BGT.DEV} delta={data.PAGES.HP.BGT.DLT} value={FONTS} formatter={KB} renderer={valueRenderer} />
                    <CellRenderer element={0} values={data.PAGES.HP.BGT.PRD} delta={data.PAGES.HP.BGT.DLT} value={FONTS} formatter={KB} renderer={valueRenderer} />
                    <CellRenderer element={0} values={data.PAGES.HP.BGT.TGT} delta={data.PAGES.HP.BGT.DLT} value={FONTS} formatter={KB} renderer={targetRenderer} />
                    <CellRenderer element={0} values={data.PAGES.HP.BGT.DLT} delta={data.PAGES.HP.BGT.DLT} value={FONTS} formatter={KB} renderer={targetRenderer} />  
                    <CellRenderer element={0} values={data.PAGES.PLP.BGT.DEV} delta={data.PAGES.PLP.BGT.DLT} value={FONTS} formatter={KB} renderer={valueRenderer} />
                    <CellRenderer element={0} values={data.PAGES.PLP.BGT.PRD} delta={data.PAGES.PLP.BGT.DLT} value={FONTS} formatter={KB} renderer={valueRenderer} />
                    <CellRenderer element={0} values={data.PAGES.PLP.BGT.TGT} delta={data.PAGES.PLP.BGT.DLT} value={FONTS} formatter={KB} renderer={targetRenderer} />
                    <CellRenderer element={0} values={data.PAGES.PLP.BGT.DLT} delta={data.PAGES.PLP.BGT.DLT} value={FONTS} formatter={KB} renderer={targetRenderer} />  
                    <CellRenderer element={0} values={data.PAGES.PDP.BGT.DEV} delta={data.PAGES.PDP.BGT.DLT} value={FONTS} formatter={KB} renderer={valueRenderer} />
                    <CellRenderer element={0} values={data.PAGES.PDP.BGT.PRD} delta={data.PAGES.PDP.BGT.DLT} value={FONTS} formatter={KB} renderer={valueRenderer} />
                    <CellRenderer element={0} values={data.PAGES.PDP.BGT.TGT} delta={data.PAGES.PDP.BGT.DLT} value={FONTS} formatter={KB} renderer={targetRenderer} />
                    <CellRenderer element={0} values={data.PAGES.PDP.BGT.DLT} delta={data.PAGES.PDP.BGT.DLT} value={FONTS} formatter={KB} renderer={targetRenderer} />                                                         
                </TR>   
                <TR>
                    <SD>JS</SD>
                    <CellRenderer element={0} values={data.PAGES.HP.BGT.DEV} delta={data.PAGES.HP.BGT.DLT} value={JS} formatter={KB} renderer={valueRenderer} />
                    <CellRenderer element={0} values={data.PAGES.HP.BGT.PRD} delta={data.PAGES.HP.BGT.DLT} value={JS} formatter={KB} renderer={valueRenderer} />
                    <CellRenderer element={0} values={data.PAGES.HP.BGT.TGT} delta={data.PAGES.HP.BGT.DLT} value={JS} formatter={KB} renderer={targetRenderer} />
                    <CellRenderer element={0} values={data.PAGES.HP.BGT.DLT} delta={data.PAGES.HP.BGT.DLT} value={JS} formatter={KB} renderer={targetRenderer} />  
                    <CellRenderer element={0} values={data.PAGES.PLP.BGT.DEV} delta={data.PAGES.PLP.BGT.DLT} value={JS} formatter={KB} renderer={valueRenderer} />
                    <CellRenderer element={0} values={data.PAGES.PLP.BGT.PRD} delta={data.PAGES.PLP.BGT.DLT} value={JS} formatter={KB} renderer={valueRenderer} />
                    <CellRenderer element={0} values={data.PAGES.PLP.BGT.TGT} delta={data.PAGES.PLP.BGT.DLT} value={JS} formatter={KB} renderer={targetRenderer} />
                    <CellRenderer element={0} values={data.PAGES.PLP.BGT.DLT} delta={data.PAGES.PLP.BGT.DLT} value={JS} formatter={KB} renderer={targetRenderer} />  
                    <CellRenderer element={0} values={data.PAGES.PDP.BGT.DEV} delta={data.PAGES.PDP.BGT.DLT} value={JS} formatter={KB} renderer={valueRenderer} />
                    <CellRenderer element={0} values={data.PAGES.PDP.BGT.PRD} delta={data.PAGES.PDP.BGT.DLT} value={JS} formatter={KB} renderer={valueRenderer} />
                    <CellRenderer element={0} values={data.PAGES.PDP.BGT.TGT} delta={data.PAGES.PDP.BGT.DLT} value={JS} formatter={KB} renderer={targetRenderer} />
                    <CellRenderer element={0} values={data.PAGES.PDP.BGT.DLT} delta={data.PAGES.PDP.BGT.DLT} value={JS} formatter={KB} renderer={targetRenderer} />                                                         
                </TR>   
                <TR>
                    <SD>IMAGES</SD>
                    <CellRenderer element={0} values={data.PAGES.HP.BGT.DEV} delta={data.PAGES.HP.BGT.DLT} value={IMAGES} formatter={KB} renderer={valueRenderer} />
                    <CellRenderer element={0} values={data.PAGES.HP.BGT.PRD} delta={data.PAGES.HP.BGT.DLT} value={IMAGES} formatter={KB} renderer={valueRenderer} />
                    <CellRenderer element={0} values={data.PAGES.HP.BGT.TGT} delta={data.PAGES.HP.BGT.DLT} value={IMAGES} formatter={KB} renderer={targetRenderer} />
                    <CellRenderer element={0} values={data.PAGES.HP.BGT.DLT} delta={data.PAGES.HP.BGT.DLT} value={IMAGES} formatter={KB} renderer={targetRenderer} />  
                    <CellRenderer element={0} values={data.PAGES.PLP.BGT.DEV} delta={data.PAGES.PLP.BGT.DLT} value={IMAGES} formatter={KB} renderer={valueRenderer} />
                    <CellRenderer element={0} values={data.PAGES.PLP.BGT.PRD} delta={data.PAGES.PLP.BGT.DLT} value={IMAGES} formatter={KB} renderer={valueRenderer} />
                    <CellRenderer element={0} values={data.PAGES.PLP.BGT.TGT} delta={data.PAGES.PLP.BGT.DLT} value={IMAGES} formatter={KB} renderer={targetRenderer} />
                    <CellRenderer element={0} values={data.PAGES.PLP.BGT.DLT} delta={data.PAGES.PLP.BGT.DLT} value={IMAGES} formatter={KB} renderer={targetRenderer} />  
                    <CellRenderer element={0} values={data.PAGES.PDP.BGT.DEV} delta={data.PAGES.PDP.BGT.DLT} value={IMAGES} formatter={KB} renderer={valueRenderer} />
                    <CellRenderer element={0} values={data.PAGES.PDP.BGT.PRD} delta={data.PAGES.PDP.BGT.DLT} value={IMAGES} formatter={KB} renderer={valueRenderer} />
                    <CellRenderer element={0} values={data.PAGES.PDP.BGT.TGT} delta={data.PAGES.PDP.BGT.DLT} value={IMAGES} formatter={KB} renderer={targetRenderer} />
                    <CellRenderer element={0} values={data.PAGES.PDP.BGT.DLT} delta={data.PAGES.PDP.BGT.DLT} value={IMAGES} formatter={KB} renderer={targetRenderer} />                                                         
                </TR>   
                <TR>
                    <SD>VIDEOS</SD>
                    <CellRenderer element={0} values={data.PAGES.HP.BGT.DEV} delta={data.PAGES.HP.BGT.DLT} value={VIDEOS} formatter={KB} renderer={valueRenderer} />
                    <CellRenderer element={0} values={data.PAGES.HP.BGT.PRD} delta={data.PAGES.HP.BGT.DLT} value={VIDEOS} formatter={KB} renderer={valueRenderer} />
                    <CellRenderer element={0} values={data.PAGES.HP.BGT.TGT} delta={data.PAGES.HP.BGT.DLT} value={VIDEOS} formatter={KB} renderer={targetRenderer} />
                    <CellRenderer element={0} values={data.PAGES.HP.BGT.DLT} delta={data.PAGES.HP.BGT.DLT} value={VIDEOS} formatter={KB} renderer={targetRenderer} />  
                    <CellRenderer element={0} values={data.PAGES.PLP.BGT.DEV} delta={data.PAGES.PLP.BGT.DLT} value={VIDEOS} formatter={KB} renderer={valueRenderer} />
                    <CellRenderer element={0} values={data.PAGES.PLP.BGT.PRD} delta={data.PAGES.PLP.BGT.DLT} value={VIDEOS} formatter={KB} renderer={valueRenderer} />
                    <CellRenderer element={0} values={data.PAGES.PLP.BGT.TGT} delta={data.PAGES.PLP.BGT.DLT} value={VIDEOS} formatter={KB} renderer={targetRenderer} />
                    <CellRenderer element={0} values={data.PAGES.PLP.BGT.DLT} delta={data.PAGES.PLP.BGT.DLT} value={VIDEOS} formatter={KB} renderer={targetRenderer} />  
                    <CellRenderer element={0} values={data.PAGES.PDP.BGT.DEV} delta={data.PAGES.PDP.BGT.DLT} value={VIDEOS} formatter={KB} renderer={valueRenderer} />
                    <CellRenderer element={0} values={data.PAGES.PDP.BGT.PRD} delta={data.PAGES.PDP.BGT.DLT} value={VIDEOS} formatter={KB} renderer={valueRenderer} />
                    <CellRenderer element={0} values={data.PAGES.PDP.BGT.TGT} delta={data.PAGES.PDP.BGT.DLT} value={VIDEOS} formatter={KB} renderer={targetRenderer} />
                    <CellRenderer element={0} values={data.PAGES.PDP.BGT.DLT} delta={data.PAGES.PDP.BGT.DLT} value={VIDEOS} formatter={KB} renderer={targetRenderer} />                                                         
                </TR>                                                                                                               
            </TableBody>
        </Table>    
    </>
  )
}


export default SummaryVitals
