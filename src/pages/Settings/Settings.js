import React from "react";

import { Button } from "reactstrap";

const Settings = () => {
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
        <Button outline color="success">
          amharic{" "}
        </Button>
        <Button outline color="warning">
          tigregna{" "}
        </Button>
        <Button outline color="danger">
          oromifaa{" "}
        </Button>
      </div>
      <h1 className="text-center" style={{ paddingTop: "30%" }}>
        current active langauge : Settings
      </h1>
    </div>
  );
};
export default Settings;
