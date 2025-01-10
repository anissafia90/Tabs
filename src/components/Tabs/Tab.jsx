import React from "react";
import "./Tab.css";

const Tab = ({ label, isActive, onClick, icon }) => {
  return (
    <button className={`tab ${isActive ? "active" : ""}`} onClick={onClick}>
      {icon}-{label}
    </button>
  );
};

export default Tab;
