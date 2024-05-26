import React, { useEffect, useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import MenuItems from "./MenuItems";

const MenuCategory = ({ list, showItem, setShowIndex }) => {
  const showHideItemList = () => {
    console.log(setShowIndex);
    setShowIndex();
  };
  return (
    <>
      <div key="list.card.card.id">
        <div
          className="border bg-gray-100 flex justify-between cursor-pointer"
          onClick={showHideItemList}
        >
          <div>
            <h3 className="p-4 font-bold ">{list.card.card.title}</h3>
          </div>
          <div className="p-4">
            {showItem == false ? (
              <ChevronDownIcon className="h-6 w-6 text-gray-500" />
            ) : (
              <ChevronUpIcon className="h-6 w-6 text-gray-500" />
            )}
          </div>
        </div>
        {showItem &&
          list?.card?.card?.itemCards?.map((foodItem) => (
            <MenuItems key={foodItem.id} foodItem={foodItem} />
          ))}
      </div>
    </>
  );
};

export default MenuCategory;
