import MaterialTable from "material-table";
import React, { useEffect, useContext , useState } from "react";

import { Context } from "../../Context/DataContext";

const Reports = () => {
  const {  state,
    getReport,
    userData,
    getActiveAgents,
    activeAgents,
    langauge, } = useContext(Context);
    const [reports , setReports] = useState([])
    useEffect(async ()=>{
      const APILINK = "http://192.168.8.107:5000";
      const url = `${APILINK}/api/report/getForAdmin/0/${JSON.parse(localStorage.getItem("user")).token}`;
      const data = await fetch(url);
      const resp = await data.json();
      setReports(resp);
    },[])


  return (
    <div
      style={{
        padding: "2em",
        color: "#095B59",
        backgroundColor: "#F5F5F5",
      }}
    >
      <h4 className="p-4"> {langauge.Reports} </h4>
      <MaterialTable
        style={{
          color: "#095B59",
          fontFamily: "Roboto, sans-serif",
          fontSize: ".8em",
          border: "1px solid #e5e5e5",
        }}
        title={langauge.Reports}
        columns={[
          // { title: "id", field: "_id" },
          { title: "first name", field: "reporterId.FirstName" ,  editable: 'never'},
          { title: "last name", field: "reporterId.LastName" , editable: 'never'},
          { title: "locust", field: "DetectedLocust" ,  editable: 'never'},
          { title: "lattitude", field: "ReportLatitude" ,  editable: 'never' },
          { title: "longitude", field: "ReportLongitude" ,  editable: 'never' },

          { title: langauge.Onhold, field: "isHold", type: "boolean" },
          { title: langauge.Faultyreports, field: "faulty", type: "boolean" },
          { title: langauge.resolved, field: "resolved", type: "boolean" },
        ]}
        data={reports}
        editable={{
        
          onRowUpdate: async (newData, oldData) =>{
          
                const APILINK = "http://192.168.8.107:5000";
    
              const requestOptions2 = {
                method: "PUT",
                headers: {
                  Accept: "application/json",
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  id: newData._id,
                  faulty : newData.faulty,
                  isHold : newData.isHold,
                  resolved : newData.resolved,
                
                }),
              };
              let urlcath = `${APILINK}/api/report/update`;
              const data = await fetch(urlcath, requestOptions2)
              const json = await data.json()
               
              const url = `${APILINK}/api/report/getForAdmin/0/${JSON.parse(localStorage.getItem("user")).token}`;
              const dataURL = await fetch(url);
              const resp = await dataURL.json();
              setReports(resp);
              
              }
            
          }}
        options={{
          exportButton: true,
        }}
      />
    </div>
  );
};
export default Reports;
