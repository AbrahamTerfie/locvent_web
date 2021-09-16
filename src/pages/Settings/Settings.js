import React, { useState, useContext } from "react";
import { Context } from "../../Context/DataContext";

import { Button } from "reactstrap";

const Settings = () => {
  const { langauge, setAmharic, setOromifaa, setTig, setEnglish } =
    useContext(Context);
  console.log("langguahess", langauge);

  return (
    <div className="container mt-4 pt-4">
      <h3>select langauge </h3>

      <div
        className="text-center  mt-4  pt-4"
        style={{
          display: "flex",
          width: "100%",

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
      <h1 className="text-center" style={{ paddingTop: "30%" }}>
        current active langauge : {langauge.LocventAdmin}
      </h1>
    </div>
  );
};
export default Settings;
