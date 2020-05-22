import React from "react";
import { allData } from "../../mockData";
import Category from "../Category/Category";

function List({ list}) {
  return <div style={{ border: "1px red solid", flex: 5, height: "100px", padding: "0 40px", marginLeft: "200px" }}>
    {list.map((category, i) => (
      <Category key={i} category={category} />
    ))}
  </div>;
}

export default List;