
import MaterialTable from "material-table";
import React, { useEffect, useContext } from "react";

import { Context } from "../../Context/DataContext";


const Contact = () => {


  const { activeAgents, langauge } = useContext(Context);


  console.log('agents in Contact ',activeAgents)


 
  return (
    <div
      style={{
        padding: "2em",
        color: "#095B59",
        backgroundColor: "#F5F5F5",
      }}
    >
      <h4 className="p-4">{langauge.Agents}</h4>
      <MaterialTable
        style={{
          color: "#095B59",
          fontFamily: "Roboto, sans-serif",
          fontSize: ".8em",
          border: "1px solid #e5e5e5",
        }}
        title={langauge.Agents}
        columns={[
          { title: "userName", field: "UserName" },
          { title: langauge.FirstName, field: "FirstName" },
          { title: langauge.LastName, field: "LastName" },
          { title: langauge.Gender, field: "Gender", },
          { title: langauge.DateJoined, field: "LastLogin" },
          { title: langauge.PhoneNumber, field: "PhoneNumber" },
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
