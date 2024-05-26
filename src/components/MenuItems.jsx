import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/cartSlice";

const MenuItems = ({ foodItem }) => {
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div
      className="flex px-1 border-b-2 justify-between"
      key={foodItem.card.info.id}
    >
      <div className="py-4 gap-4 w-[75%]">
        <div>
          <h3 className="font-bold">{foodItem?.card?.info?.name}</h3>
        </div>
        <div>
          <h3 className="font-bold">
            ₹
            {foodItem?.card?.info?.price / 100 ||
              foodItem?.card?.info?.defaultPrice / 100}
          </h3>
        </div>
        <div>
          <h3 className="text-green-400 text-sm">
            {foodItem?.card?.info?.ratings?.aggregatedRating?.rating
              ? "★" + foodItem?.card?.info?.ratings?.aggregatedRating?.rating
              : ""}
          </h3>
        </div>
        <div>
          <h3 className="text-grey-100 text-sm">
            {foodItem?.card?.info?.description}
          </h3>
        </div>
      </div>
      <div className="w-[25%] flex justify-end overflow-hidden py-6">
        <div className="flex justify-center">
          <button
            onClick={() => handleAddItem(foodItem?.card?.info)}
            className="absolute border bg-white text-green-500 font-bold my-28 py-2 px-7 rounded-lg shadow-lg"
          >
            ADD
          </button>{" "}
          <img
            className="rounded-lg h-36 w-36 shadow-lg"
            src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${foodItem?.card?.info?.imageId}`}
          />
        </div>
      </div>
    </div>
  );
};

export default MenuItems;
