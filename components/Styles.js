import styled from "styled-components";

const Canvas = styled.section`
  padding: 0px;
  margin: 20px;
`;

const VBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const HBox = styled.div`
  display: flex;
  flex-direction: row;
`;

const H1 = styled.h1`
  font-size: 24px;
  font-family: Arial, Helvetica, sans-serif;
`;
const H2 = styled.h2`
  font-size: 18px;
  font-family: Arial, Helvetica, sans-serif;
`;

const H3 = styled.h3`
  font-size: 14px;
  font-family: Arial, Helvetica, sans-serif;
`;

const H4 = styled.h4`
  font-size: 14px;
  font-family: Arial, Helvetica, sans-serif;
`;

const Table = styled.table`
  width: 100%;
  font-size: 14px;
  border-collapse: collapse;
`;

const TableBody = styled.tbody`
  width: 100%;
  row-height: 33px;
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
`;

const TR = styled.tr`
  font-size: 14px;
  height: 33px;
  border-collapse: collapse;
`;

const TH = styled.th`
  font-size: 10px;
  font-weight: bold;
  height: 33px;
  border: 1px solid #c2c7cf;
  background-color: #f8dd4c;
`;

const SH = styled.th`
  font-size: 10px;
  font-weight: bold;
  height: 33px;
  border: 1px solid #c2c7cf;
  background-color: #f4f5f7;
`;

const SD = styled.td`
  font-size: 10px;
  font-weight: bold;
  background-color: #fae578;
  border: 1px solid #c2c7cf;
`;

const TD = styled.td`
  padding: 5px;
  font-size: 10px;
  background-color: #ffffff;
  border: 1px solid #c2c7cf;
  text-align: right;
`;
const TDTARGET = styled.td`
  padding: 5px;
  font-size: 10px;
  background-color: #f4f5f7;
  border: 1px solid #c2c7cf;
  text-align: right;
`;

const TDOVER = styled.td`
  padding: 5px;
  font-size: 10px;
  background-color: #fcece7;
  border: 1px solid #c2c7cf;
  text-align: right;
`;

const TDUNDER = styled.td`
  padding: 5px;
  font-size: 10px;
  background-color: #e8fbf0;
  border: 1px solid #c2c7cf;
  text-align: right;
`;

const TXTOVER = styled.span`
  font-size: 10px;
  color: #eb3323;
`;

const TXTUNDER = styled.span`
  font-size: 10px;
  color: #52966a;
`;

export {
  Canvas,
  H1,
  H2,
  H3,
  H4,
  Table,
  TableBody,
  TH,
  SH,
  TR,
  SD,
  TD,
  TDOVER,
  TDUNDER,
  TDTARGET,
  TXTOVER,
  TXTUNDER,
  VBox,
  HBox,
};
