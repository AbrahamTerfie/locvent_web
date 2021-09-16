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
  function authenticate(response) {
    if (response === 200) {
      setLoggedIn(true);
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
      // const json = await response.json();
      authenticate(response.status);
      console.log("login response ", response.status);
    } catch (error) {
      console.log("login error from api  :", error);
    }
  }

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  return (
    <Context.Provider
      value={{
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
        setLoggedIn
      }}
    >
      {children}
    </Context.Provider>
  );
}
