import React, { memo, useState, useRef } from "react";
import cx from 'classnames';
import s from './Restraunt.module.scss';
import { images } from "../../mockData";

function Restraunt({ restraunt }) {
  const [showQuickView, setShowQuickView] = useState(false);
  const imageSrc = useRef(images[Math.floor(Math.random() * 11)]);
  return <div onMouseEnter={() => setShowQuickView(true)} onMouseLeave={() => setShowQuickView(false)} className={s.card}>
    <img alt="" src={imageSrc.current} height="250px" width="300px" />
    <div className={s.details}>
      <span className={s.name}>{restraunt.name}</span>
      <span className={s.foodType}>{restraunt.food_types.join(", ")}</span>
      <div>
        {restraunt.ratings ?
          <span className={s.rating}>&#9733; {restraunt.ratings}</span>
          : <span></span>
        }
        <span className={s.dot}></span>
        <span>{restraunt.delivery_time}</span>
        <span className={s.dot}></span>
        <span>&#8377;{restraunt.price_for_two} FOR TWO</span>
      </div>
      <div className={cx({ [s.quickView]: true, [s.quickViewHide]: !showQuickView })}>
        <span>QUICK VIEW</span>
      </div>
    </div>
  </div>
}

export default memo(Restraunt);