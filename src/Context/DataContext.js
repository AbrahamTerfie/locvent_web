import React, { useState, createContext, useEffect } from "react";
import { Redirect } from "react-router";
import lang from "../Language/lang.json";
const APILINK = "http://192.168.8.107:5000";

const initState = {
  activeStation: {},
  admin: false,
  activeRoute: "",
  showNavBar: true,
  loggedIn: false,
};

export const Context = createContext(initState);

export default function Store({ children }) {
  const [state, setState] = useState(initState);
  const [loggedIN, setLoggedIn] = useState(false);
  const [userData, setUserData] = useState({});
  const [reports, setReports] = useState({});
  const [activeAgents, setActiveAgents] = useState({});
  const [notes, setNotes] = useState([]);
  const [inputNote, setInputNote] = useState("");
  const [langauge, setLanguage] = useState(lang.English);

  function setAmharic() {
    setLanguage(lang.amharic);
  }

  function setOromifaa() {
    setLanguage(lang.oromifa);
  }

  function setTig() {
    setLanguage(lang.tig);
  }
  function setEnglish() {
    setLanguage(lang.English);
  }

  function addNote(note) {
    
    const requestOptions2 = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: note.text
      ,
      }),
    };
    let urlcath = `${APILINK}/api/broadCast/addBroadCast`;
     fetch(urlcath, requestOptions2).then((data)=>{
       if(data.status == 200){
        //setNotes(notes.filter((note) => note._id !== id));
        window.location.href = "http://localhost:3000/broadcast"
         setNotes((prev) => [note, ...prev]);
       }
     })

  }

  function removeNote(id) {
    const requestOptions2 = {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: id
      ,
      }),
    };
    let urlcath = `${APILINK}/api/broadCast/deleteBroadCast`;
     fetch(urlcath, requestOptions2).then((data)=>{
       if(data.status == 200){
        setNotes(notes.filter((note) => note._id !== id));
       }
     })
    
  }
  function authenticate(response, json) {
    if (response === 200) {
      setLoggedIn(true);

      console.log("user user ", userData);
    } else return null;
  }

  function editNote(note) {
    if(note.isEditing == false){
      console.log(note)
      //updateBroadCast
      const index = notes.indexOf(note);
      const tempArray = [...notes];
      tempArray[index] = note;
      const requestOptions2 = {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: note._id,
          text : note.text
        ,
        }),
      };
      let urlcath = `${APILINK}/api/broadCast/updateBroadCast`;
       fetch(urlcath, requestOptions2).then((data)=>{
         if(data.status == 200){
          setNotes(tempArray);
        }
       })
       
      
    }
    else{
      const index = notes.indexOf(note);
      const tempArray = [...notes];
      tempArray[index] = note;
      setNotes(tempArray);
    }
    
  }

  async function login(UserName, password) {
    try {
      const requestOptions2 = {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: "admin",
          password: "admin",
        }),
      };
      let urlcath = `${APILINK}/api/user/loginAdmin`;
      let response = await fetch(urlcath, requestOptions2);
      const json = await response.json();
      console.log("login data", json);
      authenticate(response.status, json);
      setUserData(json);
      localStorage.setItem("user", JSON.stringify(json));
      window.location.replace('http://localhost:3000')


      
    } catch (error) {
      console.log("login error from api  :", error);
    }
  }

  async function getReport(token) {
    try {
      const url = `${APILINK}/api/report/getForAdmin/0/${token}`;
      const data = await fetch(url);
      const resp = await data.json();
      setReports(resp);
      console.log("report data response ", resp);
    } catch (error) {
      console.log("reportsÎ error from api  :", error);
    }
  }

  async function getActiveAgents(token) {
    try {
      const url = `${APILINK}/api/user/getAllUsers/0/${token}`;
      const data = await fetch(url);
      const resp = await data.json();
      setActiveAgents(resp);
      console.log("get active agents   response ", resp);
    } catch (error) {
      console.log("reportsÎ error from api  :", error);
    }
  }

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  return (
    <Context.Provider
      value={{
        
        getActiveAgents,
        activeAgents,
        userData,
        reports,
        getReport,
        state,
        setState,
        notes,
        setNotes,
        addNote,
        removeNote,
        inputNote,
        setInputNote,
        editNote,
        login,
        loggedIN,
        setLoggedIn,
        langauge,
        setLanguage,
        setAmharic,
        setOromifaa,
        setTig,
        setEnglish
      }}
    >
      {children}
    </Context.Provider>
  );
}
