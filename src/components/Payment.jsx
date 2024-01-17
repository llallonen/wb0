import React, { useContext, useMemo, useState } from "react";
import PaymentModal from "./PaymentModal";
import { AppContext } from "../AppContext";

const Payment = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { state } = useContext(AppContext);

  return (
    <>
      <section className="payment contrast-container">
        <button className="title-btn">
          <h2>Способ оплаты</h2>
          <p className="title-btn__text h4" onClick={() => setIsOpen(true)}>
            Изменить
          </p>
        </button>
        {state.payment !== "Выберите способ оплаты" ? (
          <div className="payment__card">
            <img src={state.payment.sys} alt="" />
            <p className="text card-number">{state.payment.number}</p>
            <p className="text">{state.payment.valid}</p>
          </div>
        ) : (
          <p className="text card-placeholder">{state.payment}</p>
        )}

        <p className="text--small">Спишем оплату с карты при получении</p>
      </section>
      {isOpen && <PaymentModal setIsOpen={setIsOpen} />}
    </>
  );
};

export default Payment;
