const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

//data
const data = [
  {
    labels: ["January", "February", "March", "April", "May", "June"],
    data: [
      {
        values: [20, 15, 30, 40, 25, 50],
      },
      {
        values: [10, 25, 35, 30, 40, 25],
      },
    ],
  },
];

const countryData = [
    {label:"United State"},
    {label: "China"},
    {label: "Japan"},
]

app.listen(5000, function () {
  console.log("Express server is running");
});

app.get("/data", (req, res) => {
    //   res.send("Express");
  //   console.log(data)
    // console.log("Hello")
    res.json(data);
  });

app.get("/country-list", (req, res) => {
//   res.send("Express");
//   console.log(data)
// console.log("Hello")
res.json(countryData);
});
