import React from "react";
import { Link } from "react-router-dom";

const RestaurantCard = (props) => {
  return (
    <Link to={`restaurant/${props.item.id}`}>
      <div className="flex flex-col justify-stretch cursor-pointer w-[205px] h-[250.59px] transition ease-out-in delay-150  hover:-translate-x-1 hover:scale-110  duration-300">
        <div className="w-[100%] h-[50%] overflow-hidden">
          <img
            className="rounded-xl object-cover w-[100%] h-[100%]"
            src={
              "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
              props.item.cloudinaryImageId
            }
          />
        </div>
        <div className="p-3">
          <h1 className="text-l font-bold text-nowrap truncate">
            {props.item.name}
          </h1>
          <p className="text-sm font-bold">
            {props.item.avgRatingString} • {props.item.sla.slaString}
          </p>
          <p className="text-sm text-nowrap truncate">
            {props.item.cuisines.join(", ")}
          </p>
          <p className="text-sm">{props.item.areaName}</p>
        </div>
      </div>
    </Link>
  );
};

export default RestaurantCard;
