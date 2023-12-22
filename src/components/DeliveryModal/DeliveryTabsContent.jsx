import React from "react";
 
const DeliveryTabsContent = ({id, activeTab, children}) => {
 return (
   activeTab === id ? <div className="TabContent">
     { children }
   </div>
   : null
 );
};
 
export default DeliveryTabsContent;