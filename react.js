import React, { useEffect, useState } from "react";
import * as ReactDOM from "react-dom/client";
import Navbar from "./src/components/Navbar";
import RestaurantList from "./src/components/RestaurantList";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import RestoDetails from "./src/components/RestoDetails";

const ReactComp = () => {
  const [resList, setResList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.9690247&lng=72.8205292&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const resData = await data.json();
      setResList(
        resData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    } catch (error) {
      console.error("Failed to fetch restaurant data:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div style={{ margin: "30px 50px" }}>
        <h1>Loading....</h1>
      </div>
    );
  }

  return (
    <div className="px-3 px-md-5">
      <RestaurantList restaurants={resList} />
    </div>
  );
};

const AppLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <ReactComp />,
      },
      {
        path: "/offer",
        element: <>Offers</>,
      },
      {
        path: "/resto/:resId",
        element: <RestoDetails />,
      },
    ],
    errorElement: <>Not Found</>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
