import React from "react";

function Restraunt({ restraunt }) {
  return <div style={{ border: "1px red solid", display: "flex", flexDirection: "column", margin: "20px", padding: "5px", flex: "0 0 25%" }}>
    <span>{restraunt.name}</span>
    <span>{restraunt.ratings}</span>
  </div>
}

export default Restraunt;