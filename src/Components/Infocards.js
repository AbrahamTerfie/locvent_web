import React from "react";

export default function Infocards({ title, value }) {
  return (
    <div
      style={{
        height: "6em",
        border: "1px solid #095B59",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: "#F7F8FC",
        padding: "0.8em",
        color: "#095B59",
        fontFamily: "sans-serif",
        borderRadius: "0.5em",
        margin: "0.5em",
      }}
    >
      <h6>{title}</h6>
      <h3>{value}</h3>
    </div>
  );
}
