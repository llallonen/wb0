import React, { useContext } from "react";
import CartItem from "./CartItem";
import { AppContext } from "../AppContext";

const CartList = () => {
  const { items, dispatch, sum } = useContext(AppContext);

  return (
    <ul>
      {items.data.map((item) => (
        <CartItem item={item} key={item.id} />
      ))}
    </ul>
  );
};

export default CartList;

