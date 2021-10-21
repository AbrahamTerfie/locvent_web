import React, { useContext, useEffect, useState } from "react";
import Cards from "../../Components/Cards";
import { Row, Col } from "reactstrap";
import ReportGraph from "../../Components/ReportGraph";
import Infocards from "../../Components/Infocards";
import { Context } from "../../Context/DataContext";

import lang from "../../Language/lang.json";
const Home = () => {
  const {
    state,
    getReport,
    userData,
    reports,
    getActiveAgents,
    activeAgents,
    langauge,
  } = useContext(Context);

  const [faulty, setFaulty] = useState(0);
  const [onhold, setOnHold] = useState(0);
  const [newReport, setNewReport] = useState(0);
  const [agents, setAgents] = useState(0);

  const [uploaded, setUploadTrue] = useState(0);

  const onFormSubmit = (e) => {
    e.preventDefault(); // Stop form submit

    fileUpload(uploaded).then((response) => {
      if (response.status == 200) {
        alert("Image Uploaded Succesfully");
      } else {
        alert("Error in Uploading Image");
      }
    });
  };

  const onChange = (e) => {
    setUploadTrue(e.target.files[0]);
  };

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

  useEffect(
    async () => (
      userData
        ? getActiveAgents(JSON.parse(localStorage.getItem("user")).token) &&
          getReport(JSON.parse(localStorage.getItem("user")).token)
        : null,
      console.log("user Agents asdf ", activeAgents)
    ),
    [userData]
  );

  useEffect(async () => {
    if (reports) {
      let faulty = 0;
      let onhold = 0;
      let newReports = 0;
      for (let i = 0; i < reports.length; i++) {
        if (reports[i].faulty) faulty = faulty + 1;
        if (reports[i].isHold) onhold = onhold + 1;
        if (reports[i].resolved == false) newReports = newReports + 1;
      }
      setFaulty(faulty);
      setOnHold(onhold);
      setNewReport(newReports);
    }
  }, [reports]);

  useEffect(async () => {
    setAgents(activeAgents.length);
    console.log("langg", lang.amharic);
  }, [activeAgents]);
  return (
    <div className="container">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <h2
          style={{
            textAlign: "left",
            fontSize: "2.5rem",
            fontFamily: "Roboto, sans-serif",
            fontWeight: "bold",
            margin: "25px",
            color: "#095B59",
          }}
        >
          {langauge.Overview}
        </h2>

        <h4
          style={{
            color: "#095B59",
            fontFamily: "Roboto, sans-serif",
            margin: "25px",
          }}
        >
          Abrham Terfie
        </h4>
      </div>

      <div className="card pmd-card bg-dark text-white">
        <div className="card-body">
          <div className="form-group">
            <div className="custom-file pmd-custom-file-outline">
              <form onSubmit={onFormSubmit}>
                <input
                  type="file"
                  onChange={onChange}
                  className="custom-file-input"
                  id="inverse_customOutlineFile"
                />
                <button type="submit">Upload</button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          display: "flex",
        }}
      >
        <Cards title={langauge.todaysreport} value={newReport} />
        <Cards title={langauge.ActiveAgents} value={agents} />
        <Cards title={langauge.Faultyreports} value={faulty} />
        <Cards title={langauge.Onhold} value={onhold} />
      </div>
      <div>
        <Row>
          <Col md="8">
            <ReportGraph />
          </Col>
          <Col md="4" className="mt-4">
            <Infocards title={langauge.resolved} value="30" />
            <Infocards title={langauge.received} value="20" />
            <Infocards title={langauge.Averagefirstresponsetime} value="40" />
            <Infocards title={langauge.Averageresponsetime} value="60" />
            <Infocards title={langauge.resolutionwithinSLA} value="20" />
          </Col>
        </Row>
      </div>
      {/* <h1 className="text-center" style={{paddingTop: "30%"}}>
      Home page
    </h1> */}
    </div>
  );
};
export default Home;
