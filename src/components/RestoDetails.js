import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { SWIGGY_RESTO_DETAILS } from "../utils/constants";

const RestoDetails = () => {
  const { resId } = useParams();

  useEffect(() => {
    fetchRestoData();
  }, []);

  const fetchRestoData = async () => {
    try {
        console.log(`${SWIGGY_RESTO_DETAILS}${resId}&catalog_qa=undefined&submitAction=ENTER`,"String")
      const data = await fetch(
        `${SWIGGY_RESTO_DETAILS}${resId}&catalog_qa=undefined&submitAction=ENTER`
      );
      const resData = await data.json();
      console.log(resData,"RESTO DATA");
      // setResList(
      //     resData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
      // );
    } catch (error) {
      console.error("Failed to fetch restaurant details data:", error);
    } 
  };
  console.log(resId, "Res ID");
  return (<div>
    <div>
        Image and Title part
    </div>
    <div>
        
    </div>
  </div>)
};

export default RestoDetails;
