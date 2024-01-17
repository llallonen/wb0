import { createContext, useContext, useReducer } from "react";
import data from "../data.json/";

const initialBasket = [
  {
    id: 1,
    title: "Футболка UZcotton мужская",
    color: "белый",
    size: 56,
    store: "Коледино WB",
    provider: "OOO Вайлдберриз",
    price: 522,
    fullPrice: 1051,
    totalSum: 522,
    stock: 2,
    img: "/goods/uzcotton.png",
    quantity: 1,
  },
  {
    id: 2,
    title:
      "Силиконовый чехол картхолдер (отверстия) для карт, прозрачный кейс бампер на Apple iPhone XR, MobiSafe",
    color: "прозрачный",
    store: "Коледино WB",
    provider: "OOO Мегапрофстиль",
    price: 105,
    fullPrice: 115,
    totalSum: 105,
    stock: 200,
    img: "/goods/mobisafe.png",
    quantity: 1,
  },
  {
    id: 3,
    title:
      'Карандаши цветные Faber-Castell "Замок", набор 24 цвета, заточенные, шестигранные, Faber-Castell',
    store: "Коледино WB",
    provider: "OOO Вайлдберриз",
    price: 247,
    fullPrice: 475,
    totalSum: 247,
    stock: 2,
    img: "/goods/fiber.png",
    quantity: 1,
  },
];

export const AppContext = createContext()

export const initialItems = {
  sum: 0,
  basket: initialBasket,
  delivery: "Выберите способ доставки",
  payment: "Выберите способ оплаты",
  data: data,
};

export const ADD_ITEM = "ADD_ITEM";
export const REMOVE_ITEM = "REMOVE_ITEM";
export const CLEAR_ALL = "CLEAR_ALL";
export const MINUS_QUANTITY = "MINUS_QUANTITY";
export const PLUS_QUANTITY = "PLUS_QUANTITY";
export const CHANGE_TOTAL = "CHANGE_TOTAL";
export const CHANGE_DELIVERY = "CHANGE_DELIVERY";
export const CHANGE_PAYMENT = "CHANGE_PAYMENT";

export function addItem(item) {
  return { type: ADD_ITEM, item };
}

export function minusQuantity(id) {
  return { type: MINUS_QUANTITY, id };
}

export function plusQuantity(id) {
  return { type: PLUS_QUANTITY, id };
}

export function removeItem(index) {
  return { type: REMOVE_ITEM, index };
}

export function changeTotal() {
  return { type: CHANGE_TOTAL };
}

export function changeDelivery(adress) {
  return { type: CHANGE_DELIVERY, adress };
}
export function changePayment(card) {
  return { type: CHANGE_PAYMENT, card };
}

export function itemsReducer(state, action) {
  switch (action.type) {
    case MINUS_QUANTITY:
      const oldBasket = [...state.basket];
      const item = oldBasket.find((el) => el.id === action.payload);
      const idx = oldBasket.findIndex((el) => el.id === item.id);
      Object.assign(item, {
        quantity: item.quantity - 1,
      });
      Object.assign(item, {
        totalSum: item.quantity * item.price,
      });
      oldBasket.splice(idx, 1, item);
      return {
        ...state,
        basket: oldBasket,
      };
    case PLUS_QUANTITY:
      // Копируем то что в корзине
      const oldBasket1 = [...state.basket];
      const item1 = oldBasket1.find((el) => el.id === action.payload);
      const idx1 = oldBasket1.findIndex((el) => el.id === item1.id);
      Object.assign(item1, {
        quantity: item1.quantity + 1,
      });
      Object.assign(item1, { totalSum: item1.quantity * item1.price });
      oldBasket1.splice(idx1, 1, item1);
      return {
        ...state,
        basket: oldBasket1,
      };
    case CHANGE_TOTAL:
      state.sum += action.payload;
      return state;
    case ADD_ITEM:
      const basket2 = [...state.basket];
      const item2 = basket2.find((el) => el.id === action.item.id);
      const idx2 = basket2.findIndex((el) => el.id === action.item.id);
      if (item2) {
        Object.assign(item2, {
          quantity: (item2.quantity += 1),
        });
        Object.assign(item2, { totalSum: item2.quantity * item2.price });
        basket2.splice(idx2, 1, item2);
        return {
          ...state,
          basket: basket2,
        };
      } else {
        action.item.quantity = 1;
        basket2.push(action.item);
        return {
          ...state,
          basket: basket2,
        };
      }

    case REMOVE_ITEM:
      let basket3 = [...state.basket];
      basket3 = basket3.filter((item) => item.id !== action.index);
      return {
        ...state,
        basket: basket3,
      };
    case CHANGE_DELIVERY:
      return {
        ...state,
        delivery: action.adress,
      };
    case CHANGE_PAYMENT:
      return {
        ...state,
        payment: action.card,
      };
    default:
      return state;
  }
}

export function AppProvider(props) {
  const [state, dispatch] = useReducer(itemsReducer, initialItems);

  const appData = { state, dispatch };

  return <AppContext.Provider value={appData} {...props} />;
}

export function useAppContext() {
  return useContext(AppContext);
}
