import { createContext, useContext, useReducer } from "react";
import data from "../data.json/";

export const AppContext = createContext();

export const initialItems = { sum: 0, data: data };

//добавить 1 единицу товара
//удалить 1 единицу товара
//удалить все единицы одного товара

export const ADD_ITEM = "ADD_ITEM";
export const REMOVE_ITEM = "REMOVE_ITEM";
export const CLEAR_ALL = "CLEAR_ALL";

export function addItem(price) {
  return { type: ADD_ITEM, price };
}

export function removeItem(index) {
  return { type: REMOVE_ITEM, index };
}

export function removeAll() {
  return { type: REMOVE_ALL };
}

export function itemsReducer(state, action) {
  switch (action.type) {
    case ADD_ITEM:
      state.sum += Number(action.price);
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
  const [items, dispatch] = useReducer(itemsReducer, initialItems);

  const appData = { items, dispatch};
  console.log(appData)

  return <AppContext.Provider value={appData} {...props} />;
}

export function useAppContext() {
  return useContext(AppContext);
}
