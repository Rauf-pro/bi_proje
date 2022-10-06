import { React } from "react";
import ReactApexChart from "react-apexcharts";
import styled from "styled-components";


function LineChart({ sdata, years }) {
  // console.log("line chart", sdata);
  // console.log(sdata.length, "line");
  // console.log(years, "years")

 

  if (sdata.length !== 0) {
    let state = {
          
        series: [
          {
            name: "Russian Federation",
            data: [
              "66.72756",
              "64.918"
            ]
          },
          {
            name: "Fiji",
            data: ["66.362"]
          },
          {
            name: "Kazakhstan",
            data: ["66.15"]
          },
          {
            name: "Bhutan",
            data: ["66.031"]
          },
          {
            name: "Bolivia",
            data: ["65.853"]
          },
        ],
        options: {
          chart: {
            height: 350,
            type: 'line',
            zoom: {
              enabled: false
            },
          },
          dataLabels: {
            enabled: false
          },
          stroke: {
            width: [5, 7, 5],
            curve: 'straight',
            dashArray: [0, 8, 5]
          },
          title: {
            text: 'Page Statistics',
            align: 'left'
          },
          legend: {
            tooltipHoverFormatter: function(val, opts) {
              return val + ' - ' + opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] + ''
            }
          },
          markers: {
            size: 0,
            hover: {
              sizeOffset: 6
            }
          },
          xaxis: {
            categories: [...years.map((y) =>  (`${y.year}`))],
          },
          tooltip: {
            y: [
              {
                title: {
                  formatter: function (val) {
                    return val + " (mins)"
                  }
                }
              },
              {
                title: {
                  formatter: function (val) {
                    return val + " per session"
                  }
                }
              },
              {
                title: {
                  formatter: function (val) {
                    return val;
                  }
                }
              }
            ]
          },
          grid: {
            borderColor: '#f1f1f1',
          }
        },
      
      
      };


    

    console.log("state", state);

    return (
      <ApexChartStyled className="app">
        <div className="linechart-container" id='chart'>
        {sdata.length > 0 && sdata.length <= 5 ? 
        <ReactApexChart 
        options={state.options} 
        series={state.series} 
        type="line" 
        height={100}
        width="100%" /> :<ReactApexChart 
                    options={state.options} 
                    series={state.series} 
                    type="line" 
                    height={1000}
                    width="100%" />
        
        }   
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
  .apexcharts-toolbar {
    z-index: 0 !important;
  }
}


`;
export default LineChart;
