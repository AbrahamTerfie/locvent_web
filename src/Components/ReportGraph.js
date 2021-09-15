import React from "react";
import { Line } from "react-chartjs-2";

const data = {
  labels: ["1", "2", "3", "4", "5", "6"],
  datasets: [
    {
      label: "today",
      data: [12, 19, 3, 5, 2, 3],
      fill: true,
      backgroundColor: "rgba(75, 192, 192, 0.2)",
      borderColor: "#095B59",

      yAxisID: "y-axis-1",
    },
    {
      label: "yesterday",
      data: [1, 2, 1, 1, 2, 2],
      fill: false,
      backgroundColor: "rgba(255, 206, 86, 0.2)",
      borderColor: "silver",
      yAxisID: "y-axis-2",
    },
  ],
};

const options = {
  scales: {
    yAxes: [
      {
        type: "linear",
        display: true,
        position: "left",
        id: "y-axis-1",
      },
      {
        type: "linear",
        display: true,
        position: "right",
        id: "y-axis-2",
        gridLines: {
          drawOnArea: false,
        },
      },
    ],
  },
};

export default function ReportGraph() {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
        className="header"
      >
        <h4 className="title">today's report </h4>
        <div className="links">
          <a className="btn btn-gh">as of {new Date().toLocaleDateString()}</a>
        </div>
      </div>
      <Line
        style={{
          height: "20px",
          width: "20px",
        }}
        data={data}
        options={options}
      />
    </>
  );
}
