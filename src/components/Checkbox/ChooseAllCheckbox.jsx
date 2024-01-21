import React, { useState } from "react";
import Checkbox from "./Checkbox";
import { useContext } from "react";
import { AppContext, checkAll } from "../../AppContext";

const ChooseAllCheckbox = () => {
  const { dispatch } = useContext(AppContext);
  const [areAllChecked, setAllChecked] = useState(false);

  return (
    <Checkbox
      checked={areAllChecked}
      onChange={(newState) => {
        setAllChecked((state) => !state);
        dispatch({ type: "CHECK_ALL", payload: newState });
      }}
    />
  );
};

export default ChooseAllCheckbox;
