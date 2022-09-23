import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function BarChart(props) {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Chart.js Bar Chart",
        
      },
    },
  };

    // const labels = [
    //   "January",
    //   "February",
    //   "March",
    //   "April",
    //   "May",
    //   "June",
    //   "July",
    // ];

  const data = {
    labels: props.labels,
    datasets: [
      {
        label: "Dataset",
        data: props.data,
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
      
    ],
  };
  return (
    <>
      <div style={{ width: "700px" }}>
        <Bar options={options} data={data} />
      </div>
    </>
  );
}

export default BarChart;