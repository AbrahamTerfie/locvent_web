import React, { useState, createContext, useEffect } from "react";

const initState = {
  activeStation: {},
  admin: false,
  activeRoute: "",
  showNavBar: true,
};
export const Context = createContext(initState);
export default function Store({ children }) {
  const [state, setState] = useState(initState);

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

  function editNote(note) {
    const index = notes.indexOf(note);
    const tempArray = [...notes];
    tempArray[index] = note;
    setNotes(tempArray);
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
      }}
    >
      {children}
    </Context.Provider>
  );
}
