import React from "react";
import s from './Restraunt.module.scss';
import { images } from "../../mockData";

function Restraunt({ restraunt }) {
  const count = Math.floor(Math.random() * 11);
  console.log(count);
  return <div className={s.card}>
    <img src={images[count]} height="250px" width="300px" />
    <div className={s.details}>
      <span className={s.name}>{restraunt.name}</span>
      <span className={s.foodType}>{restraunt.food_types.join(", ")}</span>
      <div>
        <span className={s.rating}>&#9733; {restraunt.ratings}</span>
        <span>-</span>
        <span>{restraunt.delivery_time}</span>
        <span>-</span>
        <span>&#8377;{restraunt.price_for_two} FOR TWO</span>
      </div>
    </div>
  </div>
}

export default Restraunt;