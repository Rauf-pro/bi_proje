import { React } from "react";
import Chart from "react-apexcharts";


function ApexChart({ sdata }) {
  console.log("sdsdsd", sdata);
  console.log(sdata.length);

  if (sdata.length !== 0) {
    let state = {
      options: {
        
        dataLabels: {
          enabled: true,
          style: {
            fontSize: "140px",
            fontFamily: "Helvetica, Arial, sans-serif",
            fontWeight: "bold"
          }
        },
          // scales:{
          //   x:{

          //   },
          //   y:{
          //     show: false,
          //     ticks:{
          //       fontSize:"12px",
                
                
          //     }
          //   },
          // },
       
          colors: ['#3663B5', '#2E66DB', '#4A80D8', '#70A1EC', '#A8CCFD'],
       
       
       
       
       
        chart: {
          id: "basic-bar",
          background: '#F6F8FA',
          
        

         
        
        },

        plotOptions: {
          bar: {
            horizontal: true,
            
         
           
            dataLabels: {
              position: "top",
              enabled: true,
              
              
              
             
            
            },
          },
        },
        dataLabels: {
          enabled: false,
          
         
          
        },
      
        dataLabels: {
          enabled: true,
          offsetX: 60,
          offsetY:0,
          
          
          style: {
            fontWeight:"300",
            colors: ["#304758"],
          },
        
        },
        

        xaxis: {
          labels: {
            show: false,
            textAnchor: 'start',
            style:{
              fontSize:"12px",
              colors: ["#fff"]
            }
          },

          categories: [...sdata.map((count) => count.countries.name)],
          
          
          
         
          
         
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
      <div className="app">
        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={state.options}
              series={state.series}
              type="bar"
              height={"900"}      
            />
          </div>
        </div>
      </div>
    );
  }
}

export default ApexChart;
