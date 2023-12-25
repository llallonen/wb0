import React from "react";
import CartAdd from "./CartAdd";
import CartList from "./CartList";
import Sidebar from "./Sidebar";
import UnavailableList from "./UnavailableList";
import Recommendation from "./Recommendation";

const Cart = () => {
  return (
    <div className="container app-container">
      <div className="cart-wrapper">
        <div className="cart">
          <section className="cart__list">
            <h1 className="title">Корзина</h1>
            <label className="check check-all">
              <input type="checkbox" className="check__input" />
              <span className="checkbox"></span>
              <h5>Выбрать все</h5>
            </label>
            <div className="ruler"></div>
            <CartList />
          </section>
          <section className="unavailable">
            <h5 className="unavailable__title">Отсутствуют · 3 товара</h5>
            <div className="ruler"></div>
            <UnavailableList />
          </section>
          <Recommendation />
          <CartAdd />
        </div>
        <Sidebar />
      </div>
    </div>
  );
};

export default Cart;
