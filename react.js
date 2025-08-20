import React, { useEffect, useState } from "react";
import * as ReactDOM from "react-dom/client";
import Navbar from "./src/components/Navbar";
import RestaurantList from "./src/components/RestaurantList";

const ReactComp = () => {
const [resList,setResList] = useState([])

useEffect(()=>{
fetchData()
},[])
const fetchData = async () => {
  const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.9690247&lng=72.8205292&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
  let resData = await data.json()
  // Used Optional Chaining
  setResList(resData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
}

  return (
    <>
      <Navbar/>
      <RestaurantList restaurants={resList}/>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<ReactComp />);
