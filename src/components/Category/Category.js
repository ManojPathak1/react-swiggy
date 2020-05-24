import React, { useState, memo } from "react";
import s from './Category.module.scss';
import Restraunt from "../Restraunt/Restraunt";
import { clip } from "../../utils";

function Category({ category, showAll }) {
  const [limit, setLimit] = useState(5);
  const restaurantListLength = category.restaurantList.length;
  const showAddMore = !showAll && restaurantListLength > limit;
  const limitedRestraunts =
    clip(category.restaurantList, showAll ? restaurantListLength : limit);
  const addMoreCount = restaurantListLength - limit;
  return <div id={category.category} className={s.container}>
    <h2>{category.category}</h2>
    <div className={s.restrauntList}>
      {limitedRestraunts.map((restraunt, i) => (
        <Restraunt key={i} restraunt={restraunt} />
      ))}
      {showAddMore &&
        <div className={s.showMore} onClick={() => setLimit(limit + 6)}>
          <span>+ {addMoreCount} More</span>
        </div>}
    </div>
  </div>
}

export default memo(Category);