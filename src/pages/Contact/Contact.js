import React from "react";
import MaterialTable from "material-table";

const Contact = () => {
  return (
    <div
      style={{
        padding: "2em",
        color: "#095B59",
        backgroundColor: "#F5F5F5",
      }}
    >
      <h4 className="p-4">All Agents</h4>
      <MaterialTable
        style={{
          color: "#095B59",
          fontFamily: "Roboto, sans-serif",
          fontSize: ".8em",
          border: "1px solid #e5e5e5",
        }}
        title="All agents"
        columns={[
          { title: "Name", field: "name" },
          { title: "Surname", field: "surname" },
          { title: "Birth Year", field: "birthYear", type: "numeric" },
          { title: "year joined", field: "dateJoined", type: "date" },
          { title: "is expert", field: "expert", type: "boolean" },
          {
            title: "region",
            field: "region",
            tooltip: "Click to filter",
          },
        ]}
        data={[
          {
            name: "Mehmet",
            surname: "Baran",
            birthYear: 1987,
            dateJoined: new Date().getFullYear(),
            region: "Bolu",
            expert: true,
          },
          {
            name: "Zerya Betül",
            surname: "Baran",
            birthYear: 2017,
            dateJoined: new Date().getFullYear(),
            region: "addis ababa",
            expert: false,
          },
        ]}
        options={{
          exportButton: true,
        }}
      />
    </div>
  );
};
export default Contact;
