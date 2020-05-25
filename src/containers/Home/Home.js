import React, { useState, useEffect } from "react";
import s from './Home.module.scss';
import LeftBar from "../../components/LeftBar/LeftBar";
import List from "../../components/List/List";
import { allData } from "../../mockData";
import { flatten, debounce, findLast } from "../../utils";

function Home() {
  const [categoryWiseData, setCategoryWiseData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [allRestraunts, setAllRestraunts] = useState(allData);
  const [leftBarOptions, setLeftBarOptions] = useState([]);
  useEffect(() => {
    const swiggyRestraunts = flatten(allData.reduce((acc, e) => {
      const restaurantList = e.restaurantList.filter(e => e.isExlusive);
      acc.push(restaurantList);
      return acc;
    }, []));
    const _categoryWiseData =
      [...allData, { category: "Only on Swiggy", restaurantList: swiggyRestraunts }];
    const onScrollEvent = debounce(() => {
      const allCategories = _categoryWiseData.map(e => e.category);
      const _selectedCategory = findLast(allCategories, category => {
        const categoryElement = document.getElementById(category);
        if (categoryElement) {
          const bounding = categoryElement.getBoundingClientRect();
          const clientHeight = window.innerHeight || document.documentElement.clientHeight;
          return (bounding.top >= 0 && bounding.top <= clientHeight)
            || (bounding.bottom > 0 && bounding.bottom <= clientHeight)
            || (bounding.top <= 0 && bounding.bottom >= clientHeight);
        }
        return false;
      });
      _selectedCategory && setSelectedCategory(_selectedCategory);
    }, 100);
    onScrollEvent();
    window.onscroll = onScrollEvent;
    const _allRestraunts = flatten(allData.map(category => category.restaurantList));
    const _leftBarOptions =
      allData.map(category => ({
        label: category.category,
        value: category.category,
        numberOfRestraunts: `${category.restaurantList.length} Options`
      }));
    const swiggyRestrauntsCount =
      allData.reduce((acc, e) => {
        acc += e.restaurantList.filter(restraunt => restraunt.isExlusive).length;
        return acc;
      }, 0);
    _leftBarOptions.push({
      label: "Only on Swiggy",
      value: "Only on Swiggy",
      numberOfRestraunts: `${swiggyRestrauntsCount} Options`
    });
    _leftBarOptions.push({
      label: "See All",
      value: "See All",
      numberOfRestraunts: "All restraunts"
    });
    setCategoryWiseData(_categoryWiseData);
    setAllRestraunts([{ category: "All Restraunts", restaurantList: _allRestraunts }]);
    setLeftBarOptions(_leftBarOptions);
  }, []);
  const onChangeLeftBarOption = value => {
    setSelectedCategory(value);
    setTimeout(() => {
      if (value === "See All") window.scrollTo(0, 0);
      else {
        const element = document.getElementById(value);
        element.scrollIntoView({ behavior: "smooth" });
      }
    });
  };
  return <div className={s.container}>
    <LeftBar
      onChange={onChangeLeftBarOption}
      selected={selectedCategory}
      options={leftBarOptions}
    />
    <List
      showAll={selectedCategory === "See All"}
      list={selectedCategory === "See All" ? allRestraunts : categoryWiseData}
    />
  </div>;
}

export default Home;