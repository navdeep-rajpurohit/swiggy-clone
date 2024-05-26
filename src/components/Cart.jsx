import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { MinusIcon, PlusIcon, TrashIcon } from "@heroicons/react/24/outline";
import { removeItem, clearCart } from "../redux/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleRemove = () => {
    dispatch(removeItem());
  };
  const handleClearCart = () => {
    dispatch(clearCart())
  }

  return (
    <div className="bg-[#e9ecee] flex w-[100%] px-14 py-7 justify-between">
      <div className=" w-[68%] bg-white h-screen p-8">ff</div>
      <div className=" w-[30%] bg-white p-8 flex flex-col">
        <div>
          <h2 className="text-lg">Pizza hut</h2>
        </div>
        <table className="text-sm text-left py-2">
          {cartItems.map((item) => (
            <tr key={item.id}>
              <td className="pr-1 overflow-hidden text-nowrap whitespace-nowrap py-2">
                {item.name}
              </td>
              <td className="border mr-2 py-2">
                <td className="cursor-pointer" onClick={handleRemove}>
                  <MinusIcon className="h-4 w-4 text-gray-500" />
                </td>
                <td className="px-2"> 1 </td>
                <td className="">
                  <PlusIcon className="h-4 w-4 text-gray-500" />
                </td>
              </td>
              <td className="pl-8 py-2">
                ₹{item.price / 100 || item.defaultPrice / 100}
              </td>
            </tr>
          ))}
        </table>
        <div>
          <button className="my-12 p-3 border border-black" onClick={handleClearCart}>
            Clear cart{" "}
            <TrashIcon className="h-4 w-4 text-gray-500 inline-block" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
