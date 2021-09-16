import React, { useContext } from "react";
import { Context } from "../../Context/DataContext";
import { Input, Button } from "reactstrap";
import { nanoid } from "nanoid";

import styles from "../../Styles/Form.module.css"

export function Form(props) {
  const { addNote, inputNote, setInputNote }= useContext(Context);

  function handleChange({ target }) {
    setInputNote(target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    addNote({ id: nanoid(), text: inputNote, isEditing: false });
    setInputNote("");
  }

  return (
    <form className={styles.inputContainer} onSubmit={handleSubmit}>
      <Input
        style={{
          border: "1px solid #ccc",
        }}
        type="text"
        value={inputNote}
        onChange={handleChange}
        required
      />
      {props.children}
    </form>
  );
}
