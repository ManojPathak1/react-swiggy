import React from "react";
import s from "./LeftBar.module.scss";
import LeftBarOption from "../LeftBarOption/LeftBarOption";

function LeftBar({ options, onChange, selected }) {
  return <div className={s.container}>
    {options.map(e => (
      <LeftBarOption key={e.value} selected={selected} value={e.value} label={e.label} onChange={onChange} numberOfRestraunts={e.numberOfRestraunts} />
    ))}
  </div>;
}

export default LeftBar;