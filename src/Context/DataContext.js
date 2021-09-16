import React, { useState, createContext, useEffect } from "react";

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
  const [activeAgents , setActiveAgents] = useState({})

  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem("notes")) ?? []
  );
  const [inputNote, setInputNote] = useState("");

  function addNote(note) {
    setNotes((prev) => [note, ...prev]);
  }

  function removeNote(id) {
    setNotes(notes.filter((note) => note.id !== id));
  }
  function authenticate(response, json) {
    if (response === 200) {
      setLoggedIn(true);

      console.log("user user ", userData);
    } else return null;
  }

  function editNote(note) {
    const index = notes.indexOf(note);
    const tempArray = [...notes];
    tempArray[index] = note;
    setNotes(tempArray);
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
      console.log("login response ", response.status);
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

  async function getActiveAgents(token){
    try {
      const url = `${APILINK}/api/user/getAllExperts/0/${token}`;
      const data = await fetch(url);
      const resp = await data.json();
      setActiveAgents(resp);
      console.log("report data response ", resp);
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
        addNote,
        removeNote,
        inputNote,
        setInputNote,
        editNote,
        login,
        loggedIN,
        setLoggedIn,
      }}
    >
      {children}
    </Context.Provider>
  );
}
