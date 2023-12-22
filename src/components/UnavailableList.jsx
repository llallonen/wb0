import React, { useContext } from "react";
import { AppContext } from "../AppContext";
import UnavailableItem from "./UnavailableItem";

const UnavailableList = () => {
  const { items, dispatch, sum } = useContext(AppContext);

  return (
    <ul>
      {items.data.map(
        (item) =>
          item.stock === 0 && <UnavailableItem item={item} key={item.id} />
      )}
    </ul>
  );
};

export default UnavailableList;
