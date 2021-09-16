import React, { useContext, useEffect, useState } from "react";
import Cards from "../../Components/Cards";
import { Row, Col } from "reactstrap";
import ReportGraph from "../../Components/ReportGraph";
import Infocards from "../../Components/Infocards";
import { Context } from "../../Context/DataContext";

import  lang  from "../../Language/lang.json";
const Home = () => {
  const { state, getReport, userData, reports, getActiveAgents, activeAgents } =
    useContext(Context);

  const [faulty, setFaulty] = useState(0);
  const [onhold, setOnHold] = useState(0);
  const [newReport, setNewReport] = useState(0);
  const [agents, setAgents] = useState(0);

useEffect(()=>{
  console.log("after login" , JSON.parse(localStorage.getItem("user")).token)
} , [])
  useEffect(
    async () => (
      userData
        ? getActiveAgents(JSON.parse(localStorage.getItem("user")).token) && getReport( JSON.parse(localStorage.getItem("user")).token )
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
  console.log("langg", lang);

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
          Overview
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

      <div
        style={{
          display: "flex",
        }}
      >
        <Cards title="new reports" value={newReport} />
        <Cards title="active agents" value={agents} />
        <Cards title="faulty reports" value={faulty} />
        <Cards title="on hold" value={onhold} />
      </div>
      <div>
        <Row>
          <Col md="8">
            <ReportGraph />
          </Col>
          <Col md="4" className="mt-4">
            <Infocards title="resolved" value="30" />
            <Infocards title="recived" value="20" />
            <Infocards title="avg responce time" value="40" />
            <Infocards title="avg first response time" value="60" />
            <Infocards title="resolution with SLA" value="20" />
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
