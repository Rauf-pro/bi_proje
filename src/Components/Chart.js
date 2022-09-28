import { React } from "react";
import Chart from "react-apexcharts";
import styled from "styled-components";


function ApexChart({ sdata }) {
  console.log("sdsdsd", sdata);
  console.log(sdata.length);
  

  if (sdata.length !== 0) {
    let state = {
      options: {
        dataLabels: {
          enabled: true,
          
        },
       

        colors: ["#3663B5", "#2E66DB", "#4A80D8", "#70A1EC", "#A8CCFD"],
      
        chart: {
          id: "basic-bar",
          background: "#F6F8FA",
          
         
         
         
        },

        plotOptions: {
          bar: {
            horizontal: true,
            // ...(sdata.length === 1 ? 
            //   {
            //     barHeight: '10%',
            //   } : {
            //     barHeight: '70%',
                  
            //   }),
          
            

            dataLabels: {
              position: "top",
              enabled: true,
              // hideOverflowingLabels: true,
            },
          },
        },
       

        dataLabels: {
          enabled: true,
          offsetX: 65,
          offsetY: 0,

          style: {
            fontWeight: "300",
            colors: ["#304758"],
          },
        },

        xaxis: {
          labels: {
            show: false,
            textAnchor: "start",
            verticalAlign:"middle",
           
          },

          categories: [...sdata.map((count) =>   (count.countries.name))],
        },
      
        
      },
      series: [
        {
          name: "Series 1",
          data: [...sdata.map((a) => a.amount_)],
          
        },
      ],
    };
   

    console.log("state", state);
    return (
      <ApexChartStyled className="app">
          <div className="graphic-container">

          {sdata.length > 0 && sdata.length <= 5 ?  
            <Chart
              options={state.options}
              series={state.series}
              type="bar"
              height="100"
              width="100%"
            /> : <Chart
              options={state.options}
              series={state.series}
              type="bar"
              height="1000"
              width="100%"
            />}
          </div>
        
      </ApexChartStyled>
    );
  }
}
const ApexChartStyled = styled.div`
 
.graphic-container{
  /* overflow-y: auto; */
  overflow-x: hidden;
  /* min-height: 100px;
  max-height: 400px; */
}


`;
export default ApexChart;
