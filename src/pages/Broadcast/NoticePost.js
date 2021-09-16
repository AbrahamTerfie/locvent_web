import React from "react";

import { Button, Row, Col, Input } from "reactstrap";
import { Form } from "../../Components/NoticeComponents/Form";
import { Note } from "../../Components/NoticeComponents/Note";
export default function NoticePost() {
  return (
    <div
      style={{
        maxWidth: "100%",
        marginTop: "2em",
        overflow: "auto"
      }}
    >
      <h4
        style={{
          textAlign: "center",
          marginBottom: "1em",
          color: "#095B59",
          fontSize: "1.5em",
          fontWeight: "300",
        }}
      >
        {" "}
        write a notice to broadcast{" "}
      </h4>
      <Form>
        <Button
          style={{
            width: "100%",
          }}
          outline
          color="success"
        >
          {" "}
          post notice{" "}
        </Button>
      </Form>
      <Note />
    </div>
  );
}
