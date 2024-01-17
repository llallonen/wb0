import { changePayment, useAppContext } from "../AppContext";
import cardsData from "../../cardsData.json/";
import { useState } from "react";

const PaymentModal = ({ setIsOpen }) => {
  const { state, dispatch } = useAppContext();
  const [currCard, setCard] = useState(cardsData[0]);

  return (
    <>
      <div className="darkBG" onClick={() => setIsOpen(false)} />
      <div className="payment-modal modal">
        <h3>Способ оплаты</h3>
        <ul className="payment-list">
          {cardsData.map((card) => (
            <li className="payment-modal__item radio" key={card.number}>
              <div className="payment-modal__label">
                <input
                  type="radio"
                  id={"radio-" + card.id}
                  name="delivery-radio"
                  onChange={() => setCard(card)}
                />
                <label htmlFor={"radio-" + card.id}>
                <div className="payment-modal__icon">
                  <img src={card.sys} alt="icon" />
                </div>
                {card.number}
                <div>{card.valid}</div>
                </label>
              </div>
            </li>
          ))}
        </ul>
        <button
          className="btn"
          type="button"
          onClick={() => {
            dispatch(changePayment(currCard));
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
