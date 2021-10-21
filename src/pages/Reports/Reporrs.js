import MaterialTable from "material-table";
import React, { useEffect, useContext, useState } from "react";

import { Context } from "../../Context/DataContext";

const Reports = () => {
  const {
    state,
    getReport,
    userData,
    getActiveAgents,
    activeAgents,
    langauge,
  } = useContext(Context);
  const [reports, setReports] = useState([]);
  useEffect(async () => {
    const APILINK = "http://localhost:5000";
    const url = `${APILINK}/api/report/getForAdmin/0/${
      JSON.parse(localStorage.getItem("user")).token
    }`;
    console.log(url);
    const data = await fetch(url);

    const resp = await data.json();
    console.log(resp);
    setReports(resp);
  }, []);

  return (
    <div
      style={{
        padding: "2em",
        color: "#095B59",
        backgroundColor: "#F5F5F5",
      }}
    >
      <h4 className="p-4"> {langauge.Reports} </h4>
      <div></div>
      <MaterialTable
        style={{
          color: "#095B59",
          fontFamily: "Roboto, sans-serif",
          fontSize: ".8em",
          border: "1px solid #e5e5e5",
        }}
        title={langauge.Reports}
        columns={[
          {
            title: "Name",
            field: "re",
            editable: "never",
          },
          {
            title: "",
            field: "reporterId.LastName",
            editable: "never",
          },
          { title: "locust", field: "DetectedLocust", editable: "never" },
          { title: "lattitude", field: "ReportLatitude", editable: "never" },
          { title: "longitude", field: "ReportLongitude", editable: "never" },

          {
            title: langauge.Onhold,
            field: "isHold",
            type: "boolean",
            render: (rowData) => (rowData.isHold ? "True" : "False"),
          },

          {
            title: langauge.Faultyreports,
            field: "faulty",
            type: "boolean",
            render: (rowData) => (rowData.faulty ? "True" : "False"),
          },
          {
            title: langauge.resolved,
            field: "resolved",
            type: "boolean",

            render: (rowData) => (rowData.resolved ? "True" : "False"),
          },
        ]}
        data={reports}
        editable={{
          onRowUpdate: async (newData, oldData) => {
            //const APILINK = "http://localhost:5000";
            //const { id, isHold, faulty, resolved } = req.body;
          },
        }}
      />
    </div>
  );
};
export default Reports;
