import React from "react";
import s from './List.module.scss';
import Category from "../Category/Category";

function List({ list, showAll }) {
  return <div className={s.container}>
    {list.map((category, i) => (
      <Category key={i} showAll={showAll} category={category} />
    ))}
  </div>;
}

export default List;