import React from "react";


const PaymentModal = ({ setIsOpen }) => {
  return (
    <>
      <div className="darkBG" onClick={() => setIsOpen(false)} />
      <div className="payment-modal modal">
        <h3>Способ оплаты</h3>

      </div>
    </>
  );
};

export default PaymentModal;
