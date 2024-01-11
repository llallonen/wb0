import { useContext } from "react";
import { AppContext } from "../AppContext";
import CartItem from "./CartItem";

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
