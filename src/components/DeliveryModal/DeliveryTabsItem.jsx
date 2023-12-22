import React from "react";
const DeliveryTabsItem = ({ id, title, activeTab, setActiveTab }) => {
  const handleClick = () => {
    setActiveTab(id);
  };

  return (
    <li onClick={handleClick} className={activeTab === id ? "active tab-item text" : "tab-item text"}>
      {title}
    </li>
  );
};
export default DeliveryTabsItem;
