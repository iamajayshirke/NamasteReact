import { useEffect, useState } from "react";
import RestoCard from "./RestoCard";
import { Link } from "react-router-dom";
import { RestoCardWithLabel } from "../utils/HOC";

const RestaurantList = ({ restaurants }) => {
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState(restaurants);

  const RestoCardWithLabelComp = RestoCardWithLabel(RestoCard);
  useEffect(() => {
    const filterData = restaurants.filter((e) => {
      return e?.info?.name?.toLowerCase().includes(search.toLowerCase());
    });
    setFilteredData(filterData);
  }, [search]);
  console.log(restaurants, "Restauarnts");

  return (
    <>
      <div className="w-8/12 m-auto my-3 gap-5 py-3 mt-[4rem]">
        <div className="text-center mb-4">
          <h1 className="text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl mb-[4rem]">
            Order food. Discover best restaurants. Order it Now!
          </h1>
        </div>
        <div className="flex justify-center gap-3 mb-[4rem]">
          <input
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            value={search}
            className="border border-solid border-b-black rounded-md px-3"
          />
          <button
            onClick={() => {
              setFilteredData(
                restaurants.filter((e) => e.info.avgRating > 4.5)
              );
            }}
            className="bg-gray-800 rounded-md text-blue-50 p-2 cursor-pointer"
          >
            Top Rated Restaurant's
          </button>
          <button
            onClick={() => {
              setFilteredData(restaurants);
              setSearch("");
            }}
            className="bg-red-600 rounded-md text-amber-50 p-2 cursor-pointer"
          >
            Clear
          </button>
        </div>
      </div>
      <div className="w-10/12 m-auto mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {filteredData.map((e, i) => {
          return (
            <Link key={i} to={`/resto/${e?.info?.id}`}>
              {e.info?.avgRating > 4.5 ? (
                <RestoCardWithLabelComp restoData={e} />
              ) : (
                <RestoCard restoData={e} />
              )}
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default RestaurantList;
