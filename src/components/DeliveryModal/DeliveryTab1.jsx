import React, { useState } from "react";
import deliveryData from "../../../deliveryData.json";
import { changeDelivery, useAppContext } from "../../AppContext";

const DeliveryTab1 = ({ setIsOpen }) => {
  const { state, dispatch } = useAppContext();
  const [adress, setAdress] = useState("");

  return (
    <>
      <ul className="delivery-modal">
        {deliveryData.map((item) => {
          if (item.type === "pick-up")
            return (
              <li className="delivery-modal__item radio h3" key={item.address}>
                <input
                  type="radio"
                  id={"pick-radio-" + item.id}
                  name="pick-radio"
                  onChange={() => {
                    console.log(item.address);
                    setAdress(item);
                  }}
                />
                <label htmlFor={"pick-radio-" + item.id}>{item.address}</label>
                <div className="delivery-modal__pick text text--small">
                  <div className="stars">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M6.69769 1.14922C6.43817 0.528396 5.56198 0.528387 5.30244 1.14919L6.69769 1.14922ZM5.30244 1.14919L4.14719 3.90977L1.19202 4.16613C0.519264 4.22467 0.262282 5.05966 0.759713 5.49464L3.00514 7.45915L2.33207 10.3824C2.18436 11.0238 2.87792 11.5567 3.46133 11.2023L6.00032 9.65611L8.53797 11.2015C9.12269 11.5588 9.81568 11.0227 9.66861 10.3826L8.99549 7.45915L11.2402 5.49537C11.7385 5.05961 11.4793 4.22519 10.8083 4.16667L7.85294 3.91029L6.69769 1.14922"
                        fill="#FF970D"
                      />
                    </svg>{" "}
                    {item.rating}
                  </div>
                  <span>Пункт выдачи</span>
                </div>
              </li>
            );
        })}
      </ul>
      <button
        className="btn"
        type="button"
        onClick={() => {
          dispatch(changeDelivery(adress));
          setIsOpen(false);
        }}
      >
        Сохранить
      </button>
    </>
  );
};

export default DeliveryTab1;
