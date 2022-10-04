import { React } from "react";
import ReactApexChart from "react-apexcharts";
import styled from "styled-components";


function LineChart({ linedata, years }) {
  console.log("line chart", linedata);
  console.log(linedata.length, "line");
  console.log(years, "years")

 

  if (linedata.length !== 0) {
    // let state = {
    //     series: [
    //       {
    //         name: "Russian Federation",
    //         data: [
    //           "66.72756",
    //           "64.918"
    //         ]
    //       },
    //       {
    //         name: "Fiji",
    //         data: ["66.362"]
    //       },
    //       {
    //         name: "Kazakhstan",
    //         data: ["66.15"]
    //       },
    //       {
    //         name: "Bhutan",
    //         data: ["66.031"]
    //       },
    //       {
    //         name: "Bolivia",
    //         data: ["65.853"]
    //       },
    //     ],
    //     options: {
    //       chart: {
    //         height: 350,
    //         type: 'line',
    //         zoom: {
    //           enabled: false
    //         },
    //       },
    //       dataLabels: {
    //         enabled: false
    //       },
    //       stroke: {
    //         width: [5, 7, 5],
    //         curve: 'straight',
    //         dashArray: [0, 8, 5]
    //       },
    //       title: {
    //         text: 'Page Statistics',
    //         align: 'left'
    //       },
    //       legend: {
    //         tooltipHoverFormatter: function(val, opts) {
    //           return val + ' - ' + opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] + ''
    //         }
    //       },
    //       markers: {
    //         size: 0,
    //         hover: {
    //           sizeOffset: 6
    //         }
    //       },
    //       xaxis: {
            
    //         categories: [...years.map((y) =>  (`${y.year}`))],
    //       },
    //       tooltip: {
    //         y: [
    //           {
    //             title: {
    //               formatter: function (val) {
    //                 return val + " (mins)"
    //               }
    //             }
    //           },
    //           {
    //             title: {
    //               formatter: function (val) {
    //                 return val + " per session"
    //               }
    //             }
    //           },
    //           {
    //             title: {
    //               formatter: function (val) {
    //                 return val;
    //               }
    //             }
    //           }
    //         ]
    //       },
    //       grid: {
    //         borderColor: '#f1f1f1',
    //       }
    //     },
      
      
    //   };
    let state = {
          
      series: [{
        name: "Desktops",
        data: [
          "51717.5",
          "409000000000.0",
          "3.5",
          "79.18049"
        ]
    }],
      options: {
        chart: {
          height: 350,
          type: 'line',
          zoom: {
            enabled: false
          }
        },
        dataLabels: {
          enabled: true
        },
        stroke: {
          curve: 'straight'
        },
        title: {
          text: 'Product Trends by Month',
          align: 'left'
        },
        grid: {
          row: {
            colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
            opacity: 0.5
          },
        },
        xaxis: {
          categories: [...years.map((y) =>  (`${y.year}`))],
        },
        yaxis: {
          labels: {
            show: false,
           
          },
        }
      },
    
    
    };


    

    console.log("state", state);

    return (
      <ApexChartStyled className="app">
        <div className="linechart-container" id='chart'>
        {linedata.length > 0 && linedata.length <= 5 ? 
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
