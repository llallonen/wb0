import { useMemo, useContext, useState } from "react";
import DeliveryModal from "./DeliveryModal/DeliveryModal";
import PaymentModal from "./PaymentModal";
import { AppContext } from "../AppContext";

const Sidebar = () => {
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [isDeliveryModalOpen, setIsDeliveryModalOpen] = useState(false);
  const { state } = useContext(AppContext);

  const finalPrice = useMemo(() => {
    return state.basket.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
  }, [state.basket]);

  console.log("finalPrice", finalPrice);

  return (
    <>
      <div className="cart-sidebar contrast-container sidebar">
        <div className="total-table">
          <h2 className="cart-sidebar__title">
            Итого{" "}
            <div id="sidebar-total">
              {finalPrice}
              <span className="sidebar-toral__currency">сом</span>
            </div>
          </h2>
          <div className="total-table__item sum text">
            <div className="sum__count">203 товара</div>
            <div className="sum__total">2 101 063 сом</div>
          </div>
          <div className="total-table__item discount text">
            <div>Скидка</div>
            <div className="sum__dicount">−200 985 сом</div>
          </div>
          <div className="total-table__item delivery text">
            <div>Доставка</div>
            <div className="sum__count">Бесплатно</div>
          </div>
        </div>
        <div className="sidebar-delivery">
          <button
            className="title-btn"
            onClick={() => setIsDeliveryModalOpen(true)}
          >
            <h4 className="sidebar-delivery__title h4">
              Доставка в пункт выдачи
            </h4>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.1585 1.05991L14.9401 4.84154L4.72705 15.0546L0.735435 15.8529C0.385575 15.9229 0.0771149 15.6144 0.147087 15.2646L0.94541 11.273L11.1585 1.05991ZM2.17707 11.9321L11.1585 2.95072L13.0493 4.84154L4.06789 13.8229L1.70436 14.2956L2.17707 11.9321Z"
                fill="#CB11AB"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M13.9948 5.78715L10.2132 2.00552L11.6313 0.587402C12.4145 -0.195801 13.6843 -0.195801 14.4675 0.587402L15.4129 1.53281C16.1961 2.31601 16.1961 3.58584 15.4129 4.36904L13.9948 5.78715ZM14.4675 3.42363C14.7286 3.16256 14.7286 2.73929 14.4675 2.47822L13.5221 1.53281C13.261 1.27174 12.8378 1.27174 12.5767 1.53281L12.104 2.00552L13.9948 3.89634L14.4675 3.42363Z"
                fill="#CB11AB"
              />
            </svg>
          </button>
          <p className="sidebar-delivery__adress">
            Бишкек, улица Ахматбека Суюмбаева, 12/1
          </p>
          <p className="sidebar-delivery__date">5–8 фев</p>
          <div className="sidebar-delivery__add-info sidebar-badge">
            <div className="sidebar-delivery__check-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M1 10.9998C1 16.5226 5.47715 20.9998 11 20.9998C16.5228 20.9998 21 16.5226 21 10.9998C21 5.47691 16.5228 0.999756 11 0.999756C5.47715 0.999756 1 5.47691 1 10.9998ZM19.1818 10.9997C19.1818 15.5184 15.5187 19.1816 11 19.1816C6.48128 19.1816 2.81815 15.5184 2.81815 10.9997C2.81815 6.48103 6.48128 2.81791 11 2.81791C15.5187 2.81791 19.1818 6.48103 19.1818 10.9997Z"
                  fill="url(#paint0_linear_7_473)"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M6.98273 9.6548C7.40206 9.29538 8.03336 9.34394 8.39278 9.76327L10.6286 12.3717L14.6826 7.58061C15.0394 7.15901 15.6704 7.10643 16.092 7.46317C16.5136 7.81991 16.5662 8.45089 16.2094 8.8725L11.7761 14.1118C11.1795 14.817 10.0933 14.8204 9.49219 14.1191L6.87427 11.0648C6.51485 10.6455 6.56341 10.0142 6.98273 9.6548Z"
                  fill="url(#paint1_linear_7_473)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_7_473"
                    x1="4"
                    y1="1.99994"
                    x2="11"
                    y2="20.9998"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#0CD38B" />
                    <stop offset="1" stopColor="#0CB477" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_7_473"
                    x1="9"
                    y1="7.5"
                    x2="10.5089"
                    y2="15.8594"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#0CD38B" />
                    <stop offset="1" stopColor="#0CB477" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <p className="sidebar-delivery__refusal">
              Обратная доставка товаров на склад при отказе —
              <span>бесплатно</span>
            </p>
          </div>
        </div>
        <div className="sidebar-payment">
          <button
            className="delivery__button title-btn"
            onClick={() => setIsPaymentModalOpen(true)}
          >
            <h4 className="sidebar-payment__title h4">Оплата картой</h4>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.1585 1.05991L14.9401 4.84154L4.72705 15.0546L0.735435 15.8529C0.385575 15.9229 0.0771149 15.6144 0.147087 15.2646L0.94541 11.273L11.1585 1.05991ZM2.17707 11.9321L11.1585 2.95072L13.0493 4.84154L4.06789 13.8229L1.70436 14.2956L2.17707 11.9321Z"
                fill="#CB11AB"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M13.9948 5.78715L10.2132 2.00552L11.6313 0.587402C12.4145 -0.195801 13.6843 -0.195801 14.4675 0.587402L15.4129 1.53281C16.1961 2.31601 16.1961 3.58584 15.4129 4.36904L13.9948 5.78715ZM14.4675 3.42363C14.7286 3.16256 14.7286 2.73929 14.4675 2.47822L13.5221 1.53281C13.261 1.27174 12.8378 1.27174 12.5767 1.53281L12.104 2.00552L13.9948 3.89634L14.4675 3.42363Z"
                fill="#CB11AB"
              />
            </svg>
          </button>
          <div className="sidebar-payment__card">
            <div className="sidebar-payment__network">
              <img src="src/assets/icons/mir.svg" alt="MIR" />
              <p className="sidebar-payment__num">1234 12•• •••• 1234</p>
            </div>
            <div className="sidebar-payment__info sidebar-badge">
              <div>
                <label className="check">
                  <input type="checkbox" className="check__input" />
                  <span className="checkbox"></span>
                  Списать оплату сразу
                </label>
              </div>
              <p>Спишем оплату с карты при получении</p>
            </div>
          </div>
        </div>
        <div className="sidebar__order">
          <button className="order-btn btn" type="button">
            Заказать
          </button>
          <div className="sidebar__oferta">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="13"
                height="24"
                viewBox="0 0 13 24"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12.7656 4.68034L4.59581 13.4815L0.257278 8.66922L1.74272 7.33001L4.61735 10.5185L11.2998 3.31967L12.7656 4.68034Z"
                  fill="black"
                />
              </svg>
            </div>
            <p className="text--small">
              Соглашаюсь с правилами пользования торговой площадкой и возврата
            </p>
          </div>
        </div>
      </div>
      {isPaymentModalOpen && <PaymentModal setIsOpen={setIsPaymentModalOpen} />}
      {isDeliveryModalOpen && (
        <DeliveryModal setIsOpen={setIsDeliveryModalOpen} />
      )}
    </>
  );
};

export default Sidebar;
