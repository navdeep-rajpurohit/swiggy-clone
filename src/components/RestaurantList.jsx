import React, { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";

const RestaurantList = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const jsonData = await data.json();
    const restaurantsList =
      jsonData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants;
    setRestaurants(restaurantsList);
  };

  return (
    <div className="my-10">
      <div className=" my-0 mx-[calc(10%+52px)]">
        <div>
          <h2 className="font-bold text-2xl">
            Restaurants with online food delivery in Bangalore
          </h2>
        </div>
        <div className="grid grid-cols-4 mt-8 gap-6">
          {restaurants.map((item) => (
            <RestaurantCard key={item.info.id} item={item.info} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RestaurantList;
