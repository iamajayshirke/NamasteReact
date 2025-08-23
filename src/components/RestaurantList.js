import { useEffect, useState } from "react";
import RestoCard from "./RestoCard";
import { Link } from "react-router-dom";

const RestaurantList = ({ restaurants }) => {
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState(restaurants);
  
  useEffect(() => {
    const filterData = restaurants.filter((e) => {
              return e?.info?.name?.toLowerCase().includes(search.toLowerCase());
            });
            setFilteredData(filterData)
  }, [search]);
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
          return (
          <Link key={i} to={`/resto/${e?.info?.id}`}>
          <RestoCard  restoData={e} />
          </Link>)
        })}
      </div>
    </>
  );
};

export default RestaurantList;
