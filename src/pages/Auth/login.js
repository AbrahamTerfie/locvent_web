import React, { useContext, useState, useEffect } from "react";
import { FormGroup, Input, Button } from "reactstrap";
import LOGO from "../../Assets/LOGO.png";
import { Context } from "../../Context/DataContext";
import { routes } from "../../Routes/routes";
import { Link } from "react-router-dom";

async function callMeDaddy() {
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

  const APILINK = "http://localhost:5000/";
  let urlcath = `${APILINK}api/user/loginAdmin`;
  let response = await fetch(urlcath, requestOptions2);
  const json = await response.json();
}

export default function Login() {
  const { login, langauge, setAmharic, setOromifaa, setTig, setEnglish } =
    useContext(Context);

  const [UserName, setUserName] = useState("");
  const [password, setpassword] = useState("");
  const [uploaded, setUploadTrue] = useState(0);

  const onFormSubmit = (e) => {
    e.preventDefault(); // Stop form submit
    fileUpload(uploaded).then((response) => {
      console.log(response.data);
    });
  };

  const onChange = (e) => {
    setUploadTrue(e.target.files[0]);
  };

  // useEffect(() => {
  //   const fileInput = document.querySelector("#fileInput");
  //   const formData = new FormData();

  //   formData.append("file", fileInput.files[0]);
  //   formData.append("test", "StringValueTest");

  //   const options = {
  //
  //     body: formData,
  //     // If you add this, upload won't work
  //     // headers: {
  //     //   'Content-Type': 'multipart/form-data',
  //     // }
  //   };
  //   fetch("http://localhost:5000/ui/upload/file", options);
  // }, uploaded);

  const fileUpload = (file) => {
    const url = "http://localhost:5000/api/detect/detectLocust";
    const formData = new FormData();
    formData.append("profile_pic", file);
    formData.append("ReportLatitude", "8.8076");
    formData.append("ReportLongitude", "38.808080");
    formData.append("reporterId", "61346f039f3a0b2a19c9c147");

    const config = {
      method: "POST",
      // headers: {
      //   "content-type": "multipart/form-data",
      // },
      body: formData,
    };

    return fetch(url, config);
  };

  return (
    <div className="loginContainer">
      <form onSubmit={onFormSubmit}>
        <h1>File Upload</h1>
        <input type="file" onChange={onChange} />
        <button type="submit">Upload</button>
      </form>

      <img
        style={{
          marginLeft: "35%",
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
        {langauge.LocventAdmin}{" "}
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
              onChange={(e) => {
                setUserName(e.target.value);
              }}
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
              onChange={(e) => {
                setpassword(e.target.value);
              }}
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
            {/* <Link to={routes.login}> */}
            <Button
              onClick={() => login(UserName, password)}
              style={{ width: "100%", margin: "0 auto" }}
              color="success"
              block
              outline
            >
              {langauge.login}
            </Button>

            {/* </Link> */}
          </div>
          <p className="text-center" color="#095B59">
            change language{" "}
          </p>

          <div
            className="text-center  mt-4  pt-4"
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <Button onClick={() => setEnglish()} outline color="primary">
              english{" "}
            </Button>
            <Button onClick={() => setAmharic()} outline color="success">
              amharic{" "}
            </Button>
            <Button onClick={() => setTig()} outline color="warning">
              tigregna{" "}
            </Button>
            <Button onClick={() => setOromifaa()} outline color="danger">
              oromifaa{" "}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
