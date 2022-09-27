import Chart from "./BarChart";
import React, { useEffect } from "react";
import ApexChart from "./Chart";
import styled from "styled-components";


function FinishData({ data }) {
  useEffect(() => {
    console.log("this is finish data", data);
  }, [data]);
  return (
    <FinishDataStyled>
    {/* <SimpleBarChart data={sdata} /> */}
      <ApexChart sdata={data} />
    </FinishDataStyled>
  );
}
const FinishDataStyled = styled.div`
  @media screen and (max-width:576px){
       height: 400px;
  }

`;
export default FinishData;
