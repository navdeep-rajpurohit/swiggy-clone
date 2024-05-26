import React from "react";
import { Link } from "react-router-dom";
import {
  MagnifyingGlassIcon,
  ReceiptPercentIcon,
  LifebuoyIcon,
  UserIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";

import { useSelector } from "react-redux";

const Header = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  return (
    <header className="m-1 p-1 flex justify-start w-100% items-center bg-white shadow-md">
      <Link to="/">
        <div className="w-24 h-16 hover: transition ease-out-in delay-150  hover:-translate-1 hover:scale-110">
          <img src="/logo.png" />
        </div>
      </Link>
      <div className="flex flex-row gap-16 w-11/12 justify-between p-4">
        <div>Other</div>
        <ul className="flex flex-row items-center gap-14">
          <li>
            {" "}
            <div className="flex cursor-pointer gap-2">
              {" "}
              <MagnifyingGlassIcon className="h-6 w-6 text-gray-500" />
              Search
            </div>
          </li>
          <li>
            {" "}
            <div className="flex cursor-pointer gap-2">
              <ReceiptPercentIcon className="h-6 w-6 text-gray-500" />
              Offers
            </div>
          </li>
          <li>
            {" "}
            <div className="flex cursor-pointer gap-2">
              <LifebuoyIcon className="h-6 w-6 text-gray-500" />
              Help
            </div>
          </li>
          <li>
            {" "}
            <div className="flex cursor-pointer gap-2">
              <UserIcon className="h-6 w-6 text-gray-500" />
              Sign In
            </div>
          </li>
          <li>
            {" "}
            <Link to="/cart">
              <div className="flex cursor-pointer gap-2">
                <ShoppingCartIcon className="h-6 w-6 text-gray-500" />
                Cart {cartItems.length}
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
