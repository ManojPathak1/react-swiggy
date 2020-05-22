import React from "react";

function Restraunt({ restraunt }) {
  return <div style={{ border: "1px red solid", display: "flex", flexDirection: "column", margin: "5px", padding: "5px" }}>
    <span>{restraunt.name}</span>
    <span>{restraunt.ratings}</span>
  </div>
}

export default Restraunt;