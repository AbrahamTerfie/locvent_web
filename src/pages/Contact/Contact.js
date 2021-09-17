
import MaterialTable from "material-table";
import React, { useEffect, useContext , useState} from "react";

import { Context } from "../../Context/DataContext";


const Contact = () => {


  const {langauge } = useContext(Context);



  const [activeAgents , setActiveAgents] = useState([])
  useEffect(async ()=>{

    const APILINK = "http://192.168.8.107:5000";
    const url = `${APILINK}/api/user/getAllUsers/0/${JSON.parse(localStorage.getItem("user")).token}`;
    const data = await fetch(url);
    const resp = await data.json();
    setActiveAgents(resp);
    
  },[])
 
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
          { title: "userName", field: "UserName" , editable: 'never' },
          { title: langauge.FirstName, field: "FirstName" , editable: 'never' },
          { title: langauge.LastName, field: "LastName" , editable: 'never' },
          { title: langauge.Gender, field: "Gender", editable: 'never'},
          { title: langauge.DateJoined, field: "LastLogin" , editable: 'never' },
          { title: langauge.PhoneNumber, field: "PhoneNumber" , editable: 'never' },
          { title: "Type", field: "Role.RoleName", editable: 'never' },
          {title : "Blocked" , field : "blocked" , type: "boolean"}
        ]}
        data={activeAgents}
        editable={{
        
          onRowUpdate: async (newData, oldData) =>{
          
                const APILINK = "http://192.168.8.107:5000";
    
              const requestOptions2 = {
                method: "POST",
                headers: {
                  Accept: "application/json",
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  id: newData._id,
                  blocked : newData.blocked
                  
                }),
              };
              let urlcath = `${APILINK}/api/user/blockUser`;
              const data = await fetch(urlcath, requestOptions2)
              const json = await data.json()
              
              window.location.replace('http://localhost:3000/contacts')

              
              }
            
          }}
        options={{
          exportButton: true,
        }}
      />
    </div>
  );
};
export default Contact;
