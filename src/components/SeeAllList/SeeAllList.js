import React from "react";
import Restraunt from "../Restraunt/Restraunt";

function SeeAllList({ list }) {
  return <div>
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {list.map((restraunt, i) => (
        <Restraunt key={i} restraunt={restraunt} />
      ))}
    </div>
  </div>
}

export default SeeAllList;