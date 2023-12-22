import React from "react";
import DeliveryTabs from "./DeliveryTabs";

const DeliveryModal = ({ setIsOpen }) => {
  return (
    <>
      <div className="darkBG" onClick={() => setIsOpen(false)} />
      <div className="delivery-modal modal">
        <h3>Способ доставки</h3>
        <DeliveryTabs />
      </div>
    </>
  );
};

export default DeliveryModal;
