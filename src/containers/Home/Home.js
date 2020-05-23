import React, { useState, useEffect } from "react";
import s from './Home.module.scss';
import LeftBar from "../../components/LeftBar/LeftBar";
import List from "../../components/List/List";
import { allData } from "../../mockData";
import { flatten } from "../../utils";

function Home() {
  const [categoryWiseData, setCategoryWiseData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [allRestraunts, setAllRestraunts] = useState(allData);
  const [leftBarOptions, setLeftBarOptions] = useState([]);
  useEffect(() => {
    window.onscroll = event => {
      console.log(event);
    };
    const swiggyRestraunts = flatten(allData.reduce((acc, e) => {
      const restaurantList = e.restaurantList.filter(e => e.isExlusive);
      acc.push(restaurantList);
      return acc;
    }, []));
    const __categoryWiseData = [...allData, { category: "Only on Swiggy", restaurantList: swiggyRestraunts }];
    const _allRestraunts = flatten(allData.map(category => category.restaurantList));
    const _leftBarOptions = allData.map(category => ({ label: category.category, value: category.category, numberOfRestraunts: `${category.restaurantList.length} Options` }));
    const swiggyRestrauntsCount = allData.reduce((acc, e) => { acc += e.restaurantList.filter(restraunt => restraunt.isExlusive).length; return acc; }, 0);
    _leftBarOptions.push({ label: "Only on Swiggy", value: "Only on Swiggy", numberOfRestraunts: `${swiggyRestrauntsCount} Options` });
    _leftBarOptions.push({ label: "See All", value: "See All", numberOfRestraunts: "All restraunts" });
    setCategoryWiseData(__categoryWiseData);
    setAllRestraunts([{ category: "All Restraunts", restaurantList: _allRestraunts }]);
    setLeftBarOptions(_leftBarOptions);
    setSelectedCategory(__categoryWiseData[0].category);
    window.scrollTo(0, 0);
  }, []);
  const onChangeLeftBarOption = value => {
    setSelectedCategory(value);
    setTimeout(() => {
      if (value === "See All") {
        window.scrollTo(0, 0);
      } else {
        const element = document.getElementById(value);
        var headerOffset = 15;
        var elementPosition = element.getBoundingClientRect().top;
        var offsetPosition = elementPosition - headerOffset;
        element.scrollIntoView({ top: offsetPosition, behavior: "smooth" });
      }
    });
  };
  return <div className={s.container}>
    <LeftBar onChange={onChangeLeftBarOption} selected={selectedCategory} options={leftBarOptions} />
    {selectedCategory !== "See All" && <List list={categoryWiseData} />}
    {selectedCategory === "See All" && <List showAll list={allRestraunts} />}
  </div>;
}

export default Home;