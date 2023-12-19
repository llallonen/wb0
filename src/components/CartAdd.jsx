import React from "react";
import Delivery from "./Delivery";
import Form from "./Form";
import Payment from "./Payment";

const CartAdd = () => {
  return (
    <div className="cart__add">
      <Delivery />
      <Payment />
      <Form />
    </div>
  );
};

export default CartAdd;
