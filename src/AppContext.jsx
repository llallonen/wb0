import { createContext, useContext, useReducer } from "react";
import data from "../data.json/";

export const AppContext = createContext();

export const initialItems = data;
let sum = 0;

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


export function itemsReducer(state, action) { //стейт тут что вообще
  switch (action.type) {
    case ADD_ITEM:
      sum += action.price;
      console.log(sum);
      //return sum += action.price;
    case REMOVE_ITEM:
      const copy = [...state];
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

  const appData = { items, dispatch };

  return <AppContext.Provider value={appData} {...props} />;
}

export function useAppContext() {
  return useContext(AppContext);
}
