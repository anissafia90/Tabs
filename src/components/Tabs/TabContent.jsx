import React from "react";
import "./Tab.css";

const TabContent = ({ Tab }) => (
  <div className="tab-content">
    <h2>{Tab}</h2>
    <p>This is the content for {Tab}.</p>
  </div>
);

export default TabContent;
