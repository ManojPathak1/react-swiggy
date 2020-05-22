import React from "react";
import Restraunt from "../Restraunt/Restraunt";

function Category({ category }) {
  return <div>
    <h1>{category.category}</h1>
    <div style={{ display: "flex", flexWrap:"wrap" }}>
      {category.restaurantList.map(restraunt => (
        <Restraunt restraunt={restraunt} />
      ))}
    </div>
  </div>
}

export default Category;