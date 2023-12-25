import { createContext, useContext, useReducer } from "react";
import data from "../data.json/";

const initialBasket = [
  {
    id: 1,
    title: "Футболка UZcotton мужская11",
    color: "белый",
    size: 56,
    store: "Коледино WB",
    provider: "OOO Вайлдберриз",
    price: 522,
    fullPrice: 1051,
    stock: 2,
    img: "src/assets/goods/uzcotton.png",
    quantity: 1,
  },
  {
    id: 2,
    title:
      "Силиконовый чехол картхолдер (отверстия) для карт, прозрачный кейс бампер на Apple iPhone XR, MobiSafe",
    color: "прозрачный",
    store: "Коледино WB",
    provider: "OOO Мегапрофстиль",
    price: 10500,
    fullPrice: 11500,
    stock: 200,
    img: "src/assets/goods/mobisafe.png",
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
    stock: 2,
    img: "src/assets/goods/fiber.png",
    quantity: 1,
  },
];

export const AppContext = createContext();

export const initialItems = { sum: 0, basket: initialBasket, data: data };

//добавить 1 единицу товара
//удалить 1 единицу товара
//удалить все единицы одного товара

export const ADD_ITEM = "ADD_ITEM";
export const REMOVE_ITEM = "REMOVE_ITEM";
export const CLEAR_ALL = "CLEAR_ALL";
export const CHANGE_QUANTITY = "CHANGE_QUANTITY";

export function addItem(price) {
  return { type: ADD_ITEM, price };
}

export function changeQuantity(id) {
  return { type: CHANGE_QUANTITY, id };
}

export function removeItem(index) {
  return { type: REMOVE_ITEM, index };
}

export function removeAll() {
  return { type: REMOVE_ALL };
}

export function itemsReducer(state, action) {
  switch (action.type) {
    case CHANGE_QUANTITY:
      state.basket[action.id - 1].quantity += 1
      state.sum += state.basket[action.id - 1].price
      return state;
    case ADD_ITEM:
      state.sum = state.sum * payload.quantity;
      //state.sum += Number(action.price);
      return state;
    case REMOVE_ITEM:
      const copy = [...state.data.items];
      copy.splice(action.index, 1);
      return copy;
    case REMOVE_ALL:
      return [];
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
