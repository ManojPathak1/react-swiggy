import React from "react";
import cx from 'classnames';
import s from "./LeftBarOption.module.scss";

interface LeftBarOptionProps {
  value: string,
  label: string,
  numberOfRestraunts: number,
  selected: string,
  onChange: (value: string) => void
}

function LeftBarOption({ value, label, numberOfRestraunts, selected, onChange } : LeftBarOptionProps) {
  return <div
    className={cx({ [s.container]: true, [s.selected]: selected === value })}
    onClick={() => onChange(value)}>
    <span>{label}</span>
    <span
      className={cx({ [s.number]: true, [s.selectedNumber]: selected === value })}>
      {numberOfRestraunts}
    </span>
  </div>;
}

export default LeftBarOption;