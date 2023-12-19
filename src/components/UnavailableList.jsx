import React, { useContext } from "react";
import { AppContext } from "../AppContext";
import UnavailableItem from "./UnavailableItem";

const UnavailableList = () => {
  const appContext = useContext(AppContext);

  return (
    <ul>
      {appContext.items.map(
        (item) =>
          item.stock === 0 && <UnavailableItem item={item} key={item.id} />
      )}
    </ul>
  );
};

export default UnavailableList;
