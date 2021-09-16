import MaterialTable from "material-table";
import React, { useEffect, useContext } from "react";

import { Context } from "../../Context/DataContext";

const Reports = () => {
  const { reports } = useContext(Context);
  console.log("reportss form reports ", reports);
  // useEffect(async () => {
  //   // this fetch the reports

  //   const url = `http://192.168.8.107:5000/api/report/getForAdmin/0/${userData.token}`
  //    const data = await fetch(url)
  //   const resp = await data.json()
  //   console.log( "report data response ", resp)
  // }, [])

  return (
    <div
      style={{
        padding: "2em",
        color: "#095B59",
        backgroundColor: "#F5F5F5",
      }}
    >
      <h4 className="p-4"> All Reports </h4>
      <MaterialTable
        style={{
          color: "#095B59",
          fontFamily: "Roboto, sans-serif",
          fontSize: ".8em",
          border: "1px solid #e5e5e5",
        }}
        title="All Reports"
        columns={[
          // { title: "id", field: "_id" },
          { title: "first name", field: "reporterId.FirstName" },
          { title: "last name", field: "reporterId.LastName" },
          { title: "locust", field: "DetectedLocust" },
          { title: "lattitude", field: "ReportLatitude" },
          { title: "longitude", field: "ReportLongitude" },

          { title: "on hold", field: "isHold", type: "boolean" },
          { title: "faulty", field: "faulty", type: "boolean" },
          { title: "resolved", field: "resolved", type: "boolean" },
        ]}
        data={reports}
        options={{
          exportButton: true,
        }}
      />
    </div>
  );
};
export default Reports;
