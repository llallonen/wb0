import React, { useState } from "react";
import DeliveryTab1 from "./DeliveryTab1";
import DeliveryTabsItem from "./DeliveryTabsItem";
import DeliveryTabsContent from "./DeliveryTabsContent";
import DeliveryTab2 from "./DeliveryTab2";

const DeliveryTabs = ({setIsOpen}) => {
  const [activeTab, setActiveTab] = useState("tab1");

  return (
    <div className="tabs">
      <ul className="tabs__nav">
        <DeliveryTabsItem
          title="В пункт выдачи"
          id="tab1"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <DeliveryTabsItem
          title="Курьером"
          id="tab2"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      </ul>

      <div className="outlet">
        <DeliveryTabsContent id="tab1" activeTab={activeTab}>
          <DeliveryTab1 setIsOpen={setIsOpen} />
        </DeliveryTabsContent>
        <DeliveryTabsContent id="tab2" activeTab={activeTab}>
          <DeliveryTab2 setIsOpen={setIsOpen} />
        </DeliveryTabsContent>
      </div>
    </div>
  );
};

export default DeliveryTabs;
