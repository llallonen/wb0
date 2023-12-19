import React, { useContext } from "react";
import CartItem from "./CartItem";
import { AppContext } from "../AppContext";

const CartList = () => {
  const appContext = useContext(AppContext);

  return (
    <ul>
      {appContext.items.map((item) => (
        <CartItem item={item} key={item.id} />
      ))}
    </ul>
  );
};

export default CartList;

