import React from "react";

export default function Cards({ title, value }) {
  return (
    <div
      style={{
        height: "7em",
        width: "15%",
        border: "1px solid #095B59",
        borderRadius: "5px",
        backgroundColor: "#F7F8FC",
        padding: "1em",
        margin: "4em",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <h6
        style={{
          color: "#095B59",
        }}
      >
        {title}
      </h6>
      <h2
        style={{
          color: "#095B59",
        }}
      >
        {value}
      </h2>
    </div>
  );
}
