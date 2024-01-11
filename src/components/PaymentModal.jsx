import React, { useState } from "react";
import { changePayment, useAppContext } from "../AppContext";

const PaymentModal = ({ setIsOpen }) => {
  const { state, dispatch } = useAppContext();
  const [card, setCard] = useState("");

  return (
    <>
      <div className="darkBG" onClick={() => setIsOpen(false)} />
      <div className="payment-modal modal">
        <h3>Способ оплаты</h3>

        <ul className="payment-list">
          <li className="payment-modal__item radio">
            <div className="payment-modal__icon">
              <img src="src/assets/icons/mir.svg" alt="icon" />
            </div>
            <div className="payment-modal__label">
              <input
                type="radio"
                id="radio-1"
                name="delivery-radio"
                onChange={() => setCard("1234 56•• •••• 1234")}
              />
              <label htmlFor="radio-1">1234 56•• •••• 1234</label>
            </div>
          </li>
          <li className="payment-modal__item radio">
            <div className="payment-modal__icon">
              <img src="src/assets/icons/visa.svg" alt="icon" />
            </div>
            <div className="payment-modal__label">
              <input
                type="radio"
                id="radio-2"
                name="delivery-radio"
                onChange={() => setCard("2345 67•• •••• 2341")}
              />
              <label htmlFor="radio-2">2345 67•• •••• 2341</label>
            </div>
          </li>
          <li className="payment-modal__item radio">
            <div className="payment-modal__icon">
              <img src="src/assets/icons/mastercard.svg" alt="icon" />
            </div>
            <div className="payment-modal__label">
              <input
                type="radio"
                id="radio-3"
                name="delivery-radio"
                onChange={() => setCard("3456 78•• •••• 3412")}
              />
              <label htmlFor="radio-3">3456 78•• •••• 3412</label>
            </div>
          </li>
        </ul>
        <button
          className="btn"
          type="button"
          onClick={() => {
            setCard;
            dispatch(changePayment(card));
            setIsOpen(false);
          }}
        >
          Сохранить
        </button>
      </div>
    </>
  );
};

export default PaymentModal;
