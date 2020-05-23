import React, { Fragment, useState } from "react";
import s from './Category.module.scss';
import Restraunt from "../Restraunt/Restraunt";
import { clip } from "../../utils";

function Category({ category, showAll }) {
  const [limit, setLimit] = useState(5);
  return <div id={category.category} className={s.container}>
    <h2>{category.category}</h2>
    <div className={s.restrauntList}>
      {clip(category.restaurantList, showAll ? category.restaurantList.length : limit).map((restraunt, i) => (
        <Restraunt key={i} restraunt={restraunt} />
      ))}
      {!showAll && category.restaurantList.length > limit && <Fragment>
        <div className={s.showMore} onClick={() => setLimit(limit + 6)}>
          <span>+ {category.restaurantList.length - limit} More</span>
        </div>
      </Fragment>}
    </div>
  </div>
}

export default Category;