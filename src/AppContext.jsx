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
export const MINUS_QUANTITY = "MINUS_QUANTITY";
export const PLUS_QUANTITY = "PLUS_QUANTITY";
export const CHANGE_TOTAL = "CHANGE_TOTAL";

export function addItem(price) {
  return { type: ADD_ITEM, price };
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

export function itemsReducer(state, action) {
  switch (action.type) {
    case MINUS_QUANTITY:
      const oldBasket = [...state.basket];
      const item = oldBasket.find((_, index) => action.payload - 1 === index);
      Object.assign(item, { quantity: item.quantity - 1 });
      oldBasket.splice(action.payload - 1, 1, item);
      return {
        ...state,
        basket: oldBasket,
      };
    case PLUS_QUANTITY:
      // Копируем то что в корзине
      const oldBasket1 = [...state.basket];
      // Ищем наш айтем (там где мы кликнули +)
      const item1 = oldBasket1.find((_, index) => action.payload - 1 === index);
      // Изменяем куантити
      Object.assign(item1, { quantity: item1.quantity + 1 });
      // Заменяем в массиве старый айтем на новый
      oldBasket1.splice(action.payload - 1, 1, item1);

      // Возвращаем новый стейт (так нужно делать всегда)
      return {
        ...state,
        basket: oldBasket1,
      };
    case CHANGE_TOTAL:
      state.sum += action.payload;
      return state;
    case REMOVE_ITEM:
      const copy = [...state.data.items];
      copy.splice(action.index, 1);
      return copy;
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
