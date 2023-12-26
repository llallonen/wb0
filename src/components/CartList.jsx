import { useContext } from "react";
import CartItem from "./CartItem";
import { AppContext } from "../AppContext";

const CartList = () => {
  const { state } = useContext(AppContext);

  return (
    <ul>
      {state.basket.map((item) => (
        <CartItem item={item} key={item.id} />
      ))}
    </ul>
  );
};

export default CartList;
