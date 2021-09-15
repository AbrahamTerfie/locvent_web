import React from "react";

export default function Cards({ title, value }) {
  return (
    <div className="cardItem">
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
