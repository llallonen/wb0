import CartAdd from "./CartAdd";
import CartList from "./CartList";
import Sidebar from "./Sidebar";
import UnavailableList from "./UnavailableList";
import Recommendation from "./Recommendation";
import { useContext } from "react";
import { AppContext } from "../AppContext";

const Cart = () => {
  const { state } = useContext(AppContext);
  const goodsInBasket = state.basket.length;

  return (
    <div className="container app-container">
      <div className="cart-wrapper">
        <div className="cart">
          <section className="cart__list">
            <h1 className="title">Корзина</h1>
            {goodsInBasket ? (
              <>
                <label className="check check-all">
                  <input type="checkbox" className="check__input" />
                  <span className="checkbox"></span>
                  <h5>Выбрать все</h5>
                </label>
                <div className="ruler"></div>
                <CartList />
              </>
            ) : (
              <div className="basket-empty">
                <h2>Корзина пока пуста</h2>
                <p className="text">Добавьте понравившиеся товары</p>
              </div>
            )}
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
