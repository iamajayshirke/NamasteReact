import { useState } from "react";
import RestoCard from "./RestoCard";

const RestaurantList = ({ restaurants }) => {
  const [search, setSearch] = useState("");
  return (
    <>
      <div style={{ margin: "20px 0" }}>
        <input onChange={(e) => setSearch(e.target.value)} value={search} />
        <button onClick={()=>{}}>Top Rated Restaurants</button>
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}
      >
        {restaurants.map((e, i) => {
          return <RestoCard key={i} restoData={e} />;
        })}
      </div>
    </>
  );
};

export default RestaurantList;
