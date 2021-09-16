import React from "react";
import { Col, Form, FormGroup, Input, Button } from "reactstrap";
import LOGO from "../../Assets/LOGO.png";
export default function Login() {
  return (
    <div
    className='loginContainer'
      style={{
        padding: "5em",
        height:'100vh',
        // width: "60em",
        backgroundColor: "#095B59",

        borderRadius: "5px",
        justifySelf: "center",

      }}
    >
      <img  
      style={{
          height: "7em",
          width: "7em",
      }}
      src={LOGO} alt="Logo" />
      <h2
        className="text-center"
        style={{
          color: "#fff",
          textAlign: "center",
          margin: "1.3em",
          fontFamily: "Roboto, sans-serif",
          fontWeight: "lighter",
          alignContent: "space-around",
        }}
      >
        locvent - admin{" "}
      </h2>
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <FormGroup>
            <Col sm={10} md={12}>
              <Input
                style={{
                  color: "#095B59",
                  fontSize: "1.5em",
                  height: "1em",
                  border: "2px solid #095B59",
                }}
                type="text"
                name="userName"
                id="userName"
                placeholder="lg"
                bsSize="lg"
                color="secondary"
              />
            </Col>
          </FormGroup>
          <FormGroup>
            <Col sm={10} md={12}>
              <Input
                style={{
                  color: "#095B59",
                  fontSize: "1.5em",
                  height: "1em",
                  border: "2px solid #095B59",
                }}
                type="password"
                name="password"
                id="password"
                placeholder="password"
                placeholder="lg"
                bsSize="lg"
              />
            </Col>
          </FormGroup>
          <div>
            <Col sm={10} md={12}>
              <Button
                style={{
                  width: "10em",
                  height: "4em",
                }}
                size="bg"
                color="success"
                block
                outline
              >
                login
              </Button>
            </Col>
          </div>
        </div>
      </div>
    </div>
  );
}
