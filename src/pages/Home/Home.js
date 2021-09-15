import React from "react";
import Cards from "../../Components/Cards";
import { Row, Col } from "reactstrap";
import ReportGraph from "../../Components/ReportGraph";
import Infocards from "../../Components/Infocards";
const Home = () => {
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
        <Cards title="new reports" value="89" />
        <Cards title="active agents" value="78" />
        <Cards title="faulty reports" value="2" />
        <Cards title="on hold" value="20" />
      </div>
      <div>
        <Row>
          <Col md="8">
            <ReportGraph />
          </Col>
          <Col md="4" className="mt-4">

              <Infocards title="resolved" value="30"  />
              <Infocards  title="recived" value="20" />
              <Infocards title="avg responce time" value="40" />
              <Infocards title="avg first response time" value="60" />
              <Infocards title="resolution with SLA" value="20"  />

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
