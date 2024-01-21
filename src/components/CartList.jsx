import { useContext } from "react";
import { AppContext } from "../AppContext";
import CartItem from "./CartItem";

const CartList = () => {
  const { state } = useContext(AppContext);

  return (
    <ul>
      {state.basket.map((item) => {
        const idx = state.checkList.findIndex(
          (checkListItem) => checkListItem.id === item.id
        );
        const isThisItemChecked = state.checkList[idx].isChecked;
        console.log(`item ${item.id} was checked?`, isThisItemChecked)
        return (
          <CartItem item={item} key={item.id} checked={isThisItemChecked} />
        );
      })}
    </ul>
  );
};

export default CartList;
