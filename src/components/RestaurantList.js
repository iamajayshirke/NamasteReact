import { useEffect, useState } from "react";
import RestoCard from "./RestoCard";

const RestaurantList = ({ restaurants }) => {
  console.log(restaurants,"Restauarnats")
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState(restaurants);
  useEffect(()=>{
    console.log(filteredData)
  },[filteredData])
  useEffect(() => {
    const filterData = restaurants.filter((e) => {
              return e?.info?.name?.toLowerCase().includes(search.toLowerCase());
            });
            setFilteredData(filterData)
  }, [search]);
  console.log(filteredData,"Filtered Data")
  return (
    <>
      <div style={{ margin: "20px 0" }}>
        <input
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          value={search}
        />
        <button
          onClick={() => {
            setFilteredData(restaurants.filter((e) => e.info.avgRating > 4.3));
          }}
        >
          Top Rated Restaurant's
        </button>
        <button
          onClick={() => {
            setFilteredData(restaurants);
            setSearch("")
          }}
        >
          Reset
        </button>
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}
      >
        {filteredData.map((e, i) => {
          return <RestoCard key={i} restoData={e} />;
        })}
      </div>
    </>
  );
};

export default RestaurantList;
