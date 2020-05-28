import React, { memo, useState, useRef, useEffect } from "react";
import cx from 'classnames';
import s from './Restraunt.module.scss';
import { images } from "../../mockData";

function Restraunt({ restraunt }) {
  const [showQuickView, setShowQuickView] = useState(false);
  const imageSrc = useRef(images[Math.floor(Math.random() * 11)]);
  const imageRef = useRef(null);
  const [image, setImage] = useState("");
  const [showImage, setShowImage] = useState(false);
  useEffect(() => {
    const imageRefCopy = imageRef.current;
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) setImage(imageSrc.current);
    }, { threshold: 0.1 });
    observer.observe(imageRefCopy);
    return () => {
      observer.unobserve(imageRefCopy);
    }
  }, []);
  return <div onMouseEnter={() => setShowQuickView(true)} onMouseLeave={() => setShowQuickView(false)} className={s.card}>
    <div className={cx({ [s.imagePlaceholder]: true, [s.placeholderBackground]: !showImage })}></div>
    <img onLoad={() => setShowImage(true)} ref={imageRef} alt="" src={image} height="250px" width="300px" />
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