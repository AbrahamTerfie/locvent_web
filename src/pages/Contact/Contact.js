
import MaterialTable from "material-table";
import React, { useEffect, useContext } from "react";

import { Context } from "../../Context/DataContext";


const Contact = () => {

  const {activeAgents , langauge } = useContext(Context)

  console.log('agents in Contact ',activeAgents)


 
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
        title={langauge.AllAgets}
        columns={[
          { title: "userName", field: "UserName" },
          { title: "Name", field: "FirstName" },
          { title: "Surname", field: "LastName" },
          { title: "gender", field: "Gender", },
          { title: "last logged in", field: "LastLogin" },
          { title: "phone number ", field: "PhoneNumber" },
          { title: "Type", field: "Role.RoleName",  },
        ]}
        data={activeAgents}
        options={{
          exportButton: true,
        }}
      />
    </div>
  );
};
export default Contact;
