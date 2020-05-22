import React, { useState, useEffect, useRef } from "react";
import LeftBar from "../../components/LeftBar/LeftBar";
import List from "../../components/List/List";
import { allData } from "../../mockData";
import SeeAllList from "../../components/SeeAllList/SeeAllList";
import { flatten } from "../../utils";

function Home() {
  const [categoryWiseData, setCategoryWiseData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("dasd");
  const [allRestraunts, setAllRestraunts] = useState(allData);
  const [leftBarOptions, setLeftBarOptions] = useState([]);
  useEffect(() => {
    const swiggyRestraunts = flatten(allData.reduce((acc, e) => {
      const restaurantList = e.restaurantList.filter(e => e.isExlusive);
      acc.push(restaurantList);
      return acc;
    }, []));
    const __categoryWiseData = [...allData, { category: "Swiggy", restaurantList: swiggyRestraunts }];
    const _allRestraunts = flatten(allData.map(category => category.restaurantList));
    const _leftBarOptions = allData.map(category => ({ label: category.category, value: category.category, numberOfRestraunts: category.restaurantList.length }));
    const swiggyRestrauntsCount = allData.reduce((acc, e) => { acc += e.restaurantList.filter(restraunt => restraunt.isExlusive).length; return acc; }, 0);
    _leftBarOptions.push({ label: "Only on Swiggy", value: "Only on Swiggy", numberOfRestraunts: swiggyRestrauntsCount });
    _leftBarOptions.push({ label: "See All", value: "See All", numberOfRestraunts: "All restraunts" });
    setCategoryWiseData(__categoryWiseData);
    setAllRestraunts(_allRestraunts);
    setLeftBarOptions(_leftBarOptions);
  }, []);
  return <div style={{ display: "flex", flex: 1 }}>
    <LeftBar onChange={setSelectedCategory} selected={selectedCategory} options={leftBarOptions} />
    {selectedCategory !== "See All" && <List list={categoryWiseData} />}
    {selectedCategory === "See All" && <SeeAllList list={allRestraunts} />}
  </div>;
}

export default Home;