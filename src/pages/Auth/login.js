import React from "react";
import {  FormGroup, Input, Button } from "reactstrap";
import LOGO from "../../Assets/LOGO.png";
import { routes } from "../../Routes/routes";
import { Link } from "react-router-dom";
export default function Login() {
  return (
    <div className="loginContainer">
      <img
        style={{
          marginLeft: "35%",
          //   height: "10em",
          width: "8em",
        }}
        src={LOGO}
        alt="Logo"
      />
      <h2
        className="text-center"
        style={{
          color: "#095B59",
          textAlign: "center",
          margin: "1.3em",
          letterSpacing: "0.2em",
          fontFamily: "Roboto, sans-serif",
          fontWeight: "lighter",
          alignContent: "space-around",
        }}
      >
        locvent - admin{" "}
      </h2>
      <div>
        <div>
          <FormGroup className=" mt-1 m-4 p-4">
            <Input
              style={{
                color: "#095B59",
                fontSize: "1.5em",

                border: "2px solid #095B59",
              }}
              type="text"
              name="userName"
              id="userName"
              placeholder="user name"
              bsSize="lg"
              color="secondary"
            />
          </FormGroup>
          <FormGroup className="m-4 p-4">
            <Input
              style={{
                color: "#095B59",
                fontSize: "1.5em",
                border: "2px solid #095B59",
              }}
              type="password"
              name="password"
              id="password"
              placeholder="password"
              placeholder="password"
              bsSize="lg"
            />
          </FormGroup>
          <div
            className="m-4 p-4"
            style={{
              color: "#095B59",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Link to={routes.login}>
              <Button
                style={{ width: "100%", margin: "0 auto" }}
                color="success"
                block
                outline
              >
                login
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
