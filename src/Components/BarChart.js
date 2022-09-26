// import React from "react";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend,
// } from "chart.js";
// import { Bar } from "react-chartjs-2";
// import Chart from "react-apexcharts";
// import { useState } from "react";
// import { useEffect } from "react";

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend
// );

// function BarChart() {
//   const [chartData, setChartData] = useState([]);

//   useEffect(() => {});
//   const options = {
//     responsive: true,
//     plugins: {
//       legend: {
//         position: "top",
//       },
//       title: {
//         display: true,
//         text: "Chart.js Bar Chart",
//       },
//     },
//   };

//   const data = {
//     datasets: [
//       {
//         data: chartData,
//         backgroundColor: "rgba(53, 162, 235, 0.5)",
//       },
//     ],
//   };
//   return (
//     <>
//       <div style={{ width: "700px" }}>
//         <Chart options={options} data={data} />
//       </div>
//     </>
//   );
// }

// export default BarChart;
