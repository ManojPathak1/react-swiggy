import React from "react";

function LeftBarOption({ value, label, numberOfRestraunts, selected, onChange }) {
  return <div onClick={() => onChange(value)} style={{ border: "1px red solid", padding: "10px", background: selected === value ? "red": "#fff" }}>
        <span>{label}</span>
        <span>{numberOfRestraunts}</span>
      </div>;
}

export default LeftBarOption;