import Chart from "./BarChart";
import React, { useEffect } from "react";
import ApexChart from "./Chart";
import SimpleBarChart from "./BarChart";

function FinishData({ data }) {
  useEffect(() => {
    console.log("this is finish data", data);
  }, [data]);
  return (
    <div>
    {/* <SimpleBarChart data={sdata} /> */}
      <ApexChart sdata={data} />
    </div>
  );
}

export default FinishData;
