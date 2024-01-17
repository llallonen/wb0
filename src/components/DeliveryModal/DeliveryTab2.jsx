import React, { useState } from "react";
import deliveryData from "../../../deliveryData.json";
import { changeDelivery, useAppContext } from "../../AppContext";

const DeliveryTab2 = ({ setIsOpen }) => {
  const { state, dispatch } = useAppContext();
  const [adress, setAdress] = useState("");

  return (
    <>
      <ul className="delivery-modal">
        {deliveryData.map((item) => {
          if (item.type === "courrier")
            return (
              <li className="delivery-modal__item radio h3" key={item.address}>
                <input
                  type="radio"
                  id={"courrier-radio-" + item.id}
                  name="courrier-radio"
                  onChange={() => {
                    console.log(item.address);
                    setAdress(item);
                  }}
                />
                <label htmlFor={"courrier-radio-" + item.id}>
                  {item.address}
                </label>
              </li>
            );
        })}
      </ul>
      <button
        className="btn"
        type="button"
        onClick={() => {
          setIsOpen(false);
          dispatch(changeDelivery(adress));
        }}
      >
        Сохранить
      </button>
    </>
  );
};

export default DeliveryTab2;
