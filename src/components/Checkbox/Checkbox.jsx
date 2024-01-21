import React from "react";

const Checkbox = ({ checked, onChange }) => {
  const changeHandler = (event) => {
    console.log('onchange', onChange)
    onChange?.(!checked);
  };
  return (
    <input
      type="checkbox"
      className="check__input"
      сhecked={checked}
      onChange={changeHandler}
    />
  );
};

export default Checkbox;
