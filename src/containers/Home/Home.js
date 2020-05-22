import React, { useState, useEffect } from "react";
import LeftBar from "../../components/LeftBar/LeftBar";
import List from "../../components/List/List";
import { allData } from "../../mockData";
import SeeAlList from "../../components/SeeAllList/SeeAllList";
import { flatten } from "../../utils";

function Home() {
  const [selectedCategory, setSelectedCategory] = useState("See All");
  const [data, setData] = useState(allData);
  useEffect(() => {
    console.log("changed");
    if (selectedCategory === "See All") {
      const _data = flatten(allData.map(category => category.restaurantList));
      console.log(_data);
      setData(_data);
    } else if (selectedCategory === "Only on Swiggy") {
      const swiggyRestraunts = flatten(allData.reduce((acc, e) => {
        const restaurantList = e.restaurantList.filter(e => e.isExlusive);
        acc.push(restaurantList);
        return acc;
      }, []));
      const updateData = [...allData, { category: "Swiggy", restaurantList: swiggyRestraunts }];
      setData(updateData);
    }
  }, [selectedCategory]);
  const categoryChange = () => {
    
  }
  const leftBarOptions = allData.map(category => ({ label: category.category, value: category.category, numberOfRestraunts: category.restaurantList.length }));
  const swiggyRestrauntsCount = allData.reduce((acc, e) => { acc += e.restaurantList.filter(restraunt => restraunt.isExlusive).length; return acc; }, 0);
  leftBarOptions.push({ label: "Only on Swiggy", value: "Only on Swiggy", numberOfRestraunts: swiggyRestrauntsCount });
  leftBarOptions.push({ label: "See All", value: "See All", numberOfRestraunts: "All restraunts" });
  return <div style={{ display: "flex", flex: 1 }}>
    <LeftBar onChange={setSelectedCategory} selected={selectedCategory} options={leftBarOptions} />
    {selectedCategory !== "See All" && <List list={data} />}
    {selectedCategory === "See All" && <SeeAlList list={data} />}
  </div>;
}

export default Home;