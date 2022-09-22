import React, { Component } from "react";
import { HorizontalBar } from "react-chartjs-2";

const dataHorBar = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      backgroundColor: "rgba(255,99,132,0.2)",
      borderColor: "rgba(255,99,132,1)",
      borderWidth: 1,
      hoverBackgroundColor: "rgba(255,99,132,0.4)",
      hoverBorderColor: "rgba(255,99,132,1)",
      data: [70, 60, 50, 40, 30, 20, 10]
    },
    {
      backgroundColor: "grey",
      borderColor: "grey",
      borderWidth: 1,
      data: [70, 70, 70, 70, 70, 70, 70]
    }
  ]
};

const options = {
  legend: {
    display: false
  },
  scales: {
    yAxes: [
      {
        id: "yAxis1",
        stacked: true,
        ticks: {
          fontSize: 11,
          fontColor: "black"
        },
        gridLines: {
          drawOnChartArea: false // only want the grid lines for one axis to show up
        }
      }
    ],
    xAxes: [
      {
        stacked: false,
        ticks: {
          fontSize: 7,
          fontColor: "black",
          beginAtZero: true
        },
        gridLines: {
          drawOnChartArea: false
        }
      }
    ]
  }
};

export default class Button extends Component {
  render() {
    return (
      <div>
        <HorizontalBar data={dataHorBar} options={options} />
      </div>
    );
  }
}