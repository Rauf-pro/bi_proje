import Chart from "./BarChart";
import React, { useEffect } from "react";
import ApexChart from "./Chart";

function FinishData({ data }) {
  useEffect(() => {
    console.log("this is finish data", data);
  }, []);
  return (
    <div>
      <ApexChart />
    </div>
  );
}

export default FinishData;
