import React from "react";
import LeftBarOption from "../LeftBarOption/LeftBarOption";

function LeftBar({ options, onChange, selected }) {
  return <div style={{ border: "1px green solid", flex: 1, position: "fixed" }}>
    {options.map(e => (
      <LeftBarOption key={e.value} selected={selected} value={e.value} label={e.label} onChange={onChange} numberOfRestraunts={e.numberOfRestraunts} />
    ))}
  </div>;
}

export default LeftBar;