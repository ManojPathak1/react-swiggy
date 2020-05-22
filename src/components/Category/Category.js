import React, { Fragment, useState } from "react";
import Restraunt from "../Restraunt/Restraunt";
import { clip } from "../../utils";

function Category({ category }) {
  const [limit, setLimit] = useState(5);
  return <div>
    <h1>{category.category}</h1>
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {clip(category.restaurantList, limit).map(restraunt => (
        <Restraunt restraunt={restraunt} />
      ))}
      {category.restaurantList.length > limit && <Fragment>
        <div onClick={() => setLimit(limit + 5)} style={{ border: "1px red solid", display: "flex", flexDirection: "column", margin: "20px", padding: "5px", flex: "0 0 25%" }}>
          
        </div>
      </Fragment>}
    </div>
  </div>
}

export default Category;