import React, { useState } from "react";
import { changeDelivery, useAppContext } from "../../AppContext";

const DeliveryTab2 = ({ setIsOpen }) => {
  const { state, dispatch } = useAppContext();
  const [adress, setAdress] = useState("");

  return (
    <>
      <ul className="delivery-modal">
        <li className="delivery-modal__item radio h3">
          <input
            type="radio"
            id="courier-radio-1"
            name="courier-radio"
            onChange={() => setAdress("г. Бишкек, улица Табышалиева, 57")}
          />
          <label htmlFor="courier-radio-1">г. Бишкек, улица Табышалиева, 57</label>
        </li>
        <li className="delivery-modal__item radio">
          <input
            type="radio"
            id="courier-radio-2"
            name="courier-radio"
            onChange={() =>
              setAdress("г. Бишкек, улица Жукеева-Пудовкина, 77/1")
            }
          />
          <label htmlFor="courier-radio-2">
            г. Бишкек, улица Жукеева-Пудовкина, 77/1
          </label>
        </li>
        <li className="delivery-modal__item radio">
          <input
            type="radio"
            id="courier-radio-3"
            name="courier-radio"
            onChange={() =>
              setAdress("г. Бишкек, микрорайон Джал, улица Ахунбаева Исы, 67/1")
            }
          />
          <label htmlFor="courier-radio-3">
            г. Бишкек, микрорайон Джал, улица Ахунбаева Исы, 67/1
          </label>
        </li>
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
