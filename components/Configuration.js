
import React from 'react'
import {
    H2,
    Table,
    TableBody,
    TH,
    TR, 
    SH
} from './Styles';

function Configuration ({ data }) {
  return (
    <>
        <H2>Configuration</H2>
        <Table>
            <TableBody>
                <TR>
                    <TH>SPRINT</TH>
                    <TH>ACCEPTANCE PROFILE</TH>
                    <TH>NETWORK PROFILE</TH>
                    <TH>NETWORK THROTTLING</TH>
                    <TH>UA PROFILE</TH>
                    <TH>AVERAGE MEAN SCORE</TH>
                </TR>
                <TR>
                    <SH>{data['SPRINT']}</SH>
                    <SH>{data['ACCEPTANCE PROFILE']}</SH>
                    <SH>{data['NETWORK PROFILE']}</SH>
                    <SH>{data['NETWORK THROTTLING']}</SH>
                    <SH>{data['UA PROFILE']}</SH>
                    <SH>{data['AVERAGE MEAN SCORE']}</SH>
                </TR>
            </TableBody>
        </Table>    
    </>
  )
}


export default Configuration
