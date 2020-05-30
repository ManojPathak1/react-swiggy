import React, { useState, memo, useEffect, useRef } from "react";
import s from './Category.module.scss';
import Restraunt from "../Restraunt/Restraunt";
import { clip } from "../../utils";
import IRestaurant from '../../ts/interfaces/IRestaurant';

interface Props {
  category: {
    category: string,
    restaurantList: IRestaurant[]
  },
  showAll: boolean
}

const Category: React.FC<Props> = memo(({ category, showAll }) => {
  const [limit, setLimit] = useState(5);
  const paginationRef: any = useRef(null);
  useEffect(() => {
    setLimit(showAll ? 9 : 5);
    if (!showAll) return undefined;
    const paginationRefCopy: any = paginationRef.current;
    const paginationObserver = new IntersectionObserver(
      (entries) => {
        console.log(entries[0].isIntersecting);
        if (entries[0].isIntersecting) setLimit((l) => l + 9);
      },
      { threshold: 0.1 }
    );
    paginationObserver.observe(paginationRefCopy);
    return () => {
      paginationObserver.unobserve(paginationRefCopy);
    };
  }, [showAll]);
  const restaurantListLength: number = category.restaurantList.length;
  const showAddMore: boolean = !showAll && restaurantListLength > limit;
  const limitedRestraunts: IRestaurant[] = clip(category.restaurantList, limit);
  const addMoreCount: number = restaurantListLength - limit;
  return (
    <div id={category.category} className={s.container}>
      <h2>{category.category}</h2>
      <div className={s.restrauntList}>
        {limitedRestraunts.map((restraunt, i) => (
          <Restraunt key={i} restraunt={restraunt} />
        ))}
        {showAddMore && (
          <div className={s.showMore} onClick={() => setLimit(limit + 6)}>
            <span>+ {addMoreCount} More</span>
          </div>
        )}
      </div>
      {!showAddMore && <div ref={paginationRef}></div>}
    </div>
  );
});

export default Category;