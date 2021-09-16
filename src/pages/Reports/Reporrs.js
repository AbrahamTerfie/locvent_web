import React from "react";
import MaterialTable from "material-table";

const Reports = () => {
  return (
    <div
      style={{
        padding: "2em",
        color: "#095B59",
        backgroundColor: "#F5F5F5",
      }}
    >
      {/*


report schema 
report id 
first name 
last name 
lattitude  longitude
locust 
is hold 
faluty report 
resolved e
*/}

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
          { title: "id", field: "id" },
          { title: "first name", field: "firstName" },
          { title: "last name", field: "lastName" },
          { title: "on hold", field: "ohHold", type: "boolean" },
          { title: "faulty", field: "faulty", type: "boolean" },
          { title: "resolved", field: "resolved", type: "boolean" },
        ]}
        data={[
          {
            id: 1,
            firstName: "John",
            lastName: "Doe",
            ohHold: true,
            faulty: true,
            resolved: true,
          },
          {
            id: 2,
            firstName: "Jane",
            lastName: "Doe",
            ohHold: false,
            faulty: false,
            resolved: false,
          },
          {
            id: 3,
            firstName: "John",
            lastName: "Doe",
            ohHold: false,
            faulty: false,
            resolved: false,
          },
          //   {
          //     name: "Mehmet",
          //     surname: "Baran",
          //     birthYear: 1987,
          //     dateJoined: new Date().getFullYear(),
          //     region: "Bolu",
          //     expert: true,
          //   },
          //   {
          //     name: "Zerya Betül",
          //     surname: "Baran",
          //     birthYear: 2017,
          //     dateJoined: new Date().getFullYear(),
          //     region: "addis ababa",
          //     expert: false,
          //   },
        ]}
        options={{
          exportButton: true,
        }}
      />
    </div>
  );
};
export default Reports;
