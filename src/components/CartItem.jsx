import { useState } from "react";
import { removeItem, useAppContext } from "../AppContext";

const CartItem = ({ item }) => {
  const { state, dispatch } = useAppContext();
  const [qua, setQua] = useState(item.quantity);
  const [price, setPrice] = useState(item.price);

  function decrement() {
    if (qua > 0) {
      setQua(qua - 1);
      setPrice(price - item.price);
      dispatch({ type: "MINUS_QUANTITY", payload: item.id });
      dispatch({ type: "CHANGE_TOTAL", payload: -(item.price) });
    }
  }

  function increment() {
    if (qua < item.stock) {
      setQua(qua + 1);
      setPrice(price + item.price);
      dispatch({ type: "PLUS_QUANTITY", payload: item.id });
      dispatch({ type: "CHANGE_TOTAL", payload: item.price });
    }
  }

  if (item.stock > 0)
    return (
      <li className="cart__item" key={item.id}>
        <label className="check">
          <div className="cart-item__wr">
            <div className="cart-item__good good">
              <input type="checkbox" className="check__input" />
              <span className="checkbox"></span>
              <img className="good__pic" src={item.img} alt="" />
              <div className="good__description">
                <div className="subtotal subtotal--mob">
                  <h4 className="subtotal__discount">
                    {price} <span className="h4">сом</span>
                  </h4>
                  <div className="subtotal__full">{item.fullPrice} сом</div>
                </div>
                <h5 className="good__title">{item.title}</h5>
                <div className="good__info">
                  {item.color && (
                    <div className="good__color">Цвет: {item.color}</div>
                  )}
                  {item.size && (
                    <div className="good__size😗">Размер: {item.size}</div>
                  )}
                </div>
                <div className="good__store">
                  <span>{item.store}</span>
                </div>
                <div className="good__provider">
                  {item.provider}
                  <span className="provider-info"></span>
                </div>
              </div>
            </div>
            <div className="cart-item-col">
              <div className="cart-item__choose">
                <div className="cart-item__count count">
                  <button
                    className="count__btn count__minus"
                    type="button"
                    onClick={() => {
                      decrement();
                    }}
                  >
                    –
                  </button>
                  <input className="count__input" type="text" value={qua} />
                  <button
                    className="count__btn count__plus"
                    type="button"
                    onClick={() => {
                      increment();
                    }}
                  >
                    +
                  </button>
                </div>
                {item.stock < 10 && (
                  <p className="stock">Осталось {item.stock} шт.</p>
                )}
                <div className="choose-panel">
                  <button className="choose-panel__button" type="button">
                    <svg
                      width="20"
                      height="16"
                      viewBox="0 0 20 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M3.03396 2.05857C2.26589 2.75224 1.76684 3.83284 1.99493 5.42928C2.22332 7.02783 3.26494 8.68522 4.80436 10.3478C6.25865 11.9184 8.10962 13.4437 9.99996 14.874C11.8903 13.4437 13.7413 11.9184 15.1956 10.3478C16.735 8.68521 17.7766 7.02783 18.005 5.4293C18.233 3.83285 17.734 2.75224 16.9659 2.05856C16.1766 1.34572 15.055 1 14 1C12.1319 1 11.0923 2.08479 10.5177 2.68443C10.4581 2.7466 10.4035 2.80356 10.3535 2.85355C10.1582 3.04882 9.84166 3.04882 9.6464 2.85355C9.59641 2.80356 9.54182 2.7466 9.48224 2.68443C8.90757 2.08479 7.86797 1 5.99995 1C4.94495 1 3.82325 1.34573 3.03396 2.05857ZM2.36371 1.31643C3.37369 0.404274 4.75202 0 5.99995 0C8.07123 0 9.34539 1.11257 9.99996 1.77862C10.6545 1.11257 11.9287 0 14 0C15.2479 0 16.6262 0.404275 17.6362 1.31644C18.6674 2.24776 19.2668 3.66715 18.9949 5.5707C18.7233 7.47217 17.5149 9.31479 15.9294 11.0272C14.3355 12.7486 12.3064 14.3952 10.3 15.9C10.1222 16.0333 9.87773 16.0333 9.69995 15.9C7.69353 14.3952 5.66443 12.7485 4.0706 11.0272C2.48503 9.31478 1.27665 7.47217 1.00498 5.57072C0.733012 3.66716 1.33249 2.24776 2.36371 1.31643Z"
                        fill="black"
                      />
                    </svg>
                  </button>
                  <button
                    className="choose-panel__button"
                    type="button"
                    onClick={() => dispatch(removeItem(item.index))}
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0.5 3C0.5 2.72386 0.723858 2.5 1 2.5H15C15.2761 2.5 15.5 2.72386 15.5 3C15.5 3.27614 15.2761 3.5 15 3.5H1C0.723858 3.5 0.5 3.27614 0.5 3Z"
                        fill="black"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M1.4584 2.5H14.5059L13.6411 13.6926C13.5405 14.9947 12.4546 16 11.1486 16H4.84639C3.54299 16 2.45829 14.9986 2.35435 13.6994L1.4584 2.5ZM2.5416 3.5L3.35117 13.6196C3.41353 14.3992 4.06435 15 4.84639 15H11.1486C11.9322 15 12.5837 14.3968 12.6441 13.6155L13.4256 3.5H2.5416Z"
                        fill="black"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M11 3.5H5V1.46875C5 0.657582 5.65758 0 6.46875 0H9.53125C10.3424 0 11 0.657582 11 1.46875V3.5ZM6.46875 1C6.20987 1 6 1.20987 6 1.46875V2.5H10V1.46875C10 1.20987 9.79013 1 9.53125 1H6.46875Z"
                        fill="black"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="cart-item__subtotal subtotal subtotal--desktop">
                <h3 className="subtotal__discount">
                  {price} <span className="h4">сом</span>
                </h3>
                <div className="subtotal__full">{item.fullPrice} сом</div>
              </div>
            </div>
          </div>
        </label>
      </li>
    );
};

export default CartItem;
