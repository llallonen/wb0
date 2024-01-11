import React, { useContext, useMemo, useState } from "react";
import PaymentModal from "./PaymentModal";
import { AppContext } from "../AppContext";

const Payment = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { state } = useContext(AppContext);
  const savedCard = useMemo(() => {
    console.log(state)
    return state.payment;
  }, [state.payment]);

  return (
    <>
      <section className="payment contrast-container">
        <button className="title-btn">
          <h2>Способ оплаты</h2>
          <p className="title-btn__text h4" onClick={() => setIsOpen(true)}>
            Изменить
          </p>
        </button>
        <div className="payment__card">
          <img src=".src/assets/icons/mir.svg" alt="" />
          <p className="text card-number">{savedCard}</p>
          <p className="text">01/30</p>
        </div>
        <p className="text--small">Спишем оплату с карты при получении</p>
      </section>
      {isOpen && <PaymentModal setIsOpen={setIsOpen} />}
    </>
  );
};

export default Payment;
