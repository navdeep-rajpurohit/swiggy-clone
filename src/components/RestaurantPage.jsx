import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MenuCategory from "./MenuCategory";

const RestaurantPage = () => {
  const [resInfo, setResInfo] = useState("");
  const [showIndex, setShowIndex] = useState(2);

  const resId = useParams()._id;
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=${resId}&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER`
    );
    const jsonData = await data.json();
    setResInfo(jsonData);
  };

  return (
    <div className="my-10 p-3">
      <div className=" my-0 mx-[calc(15%+52px)] ">
        <div>
          <h2 className="font-bold text-2xl ">
            {resInfo.data?.cards[0]?.card?.card?.text}
          </h2>
        </div>
        <div className="flex flex-col py-6">
          <div className="text-center p-4">
            <h3>Menu</h3>
          </div>
          {resInfo.data?.cards[4].groupedCard.cardGroupMap.REGULAR.cards.map(
            (list, index) =>
              list.card.card.title && index > 1 ? (
                <MenuCategory
                  key={index}
                  list={list}
                  showItem={index == showIndex && true}
                  setShowIndex={() =>
                    setShowIndex(showIndex == index ? null : index)
                  }
                />
              ) : (
                ""
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default RestaurantPage;
