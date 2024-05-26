import React from "react";
import Header from "./Header";
import RestaurantList from "./RestaurantList";
const Body = () => {
  return (
    <div className="flex flex-col bg-gray-50">
      <RestaurantList></RestaurantList>
    </div>
  );
};

export default Body;
