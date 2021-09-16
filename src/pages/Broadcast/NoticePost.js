import React from "react";

import { Button, Row, Col, Input } from "reactstrap";
import { Form } from "../../Components/NoticeComponents/Form";
import { Note } from "../../Components/NoticeComponents/Note";
export default function NoticePost() {
  return (
    <div>
      <Form>
        <Button
          style={{
            width: "100%",
          }}
          outline
          color="success"
        >
          {" "}
          new note{" "}
        </Button>
      </Form>
      <Note />
    </div>
  );
}
