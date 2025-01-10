import React, { useState } from "react";
import "./Header.css";
import Tab from "../Tabs/Tab";
import TabContent from "../Tabs/TabContent";

// Import SVGs as React components
import { ReactComponent as NewsIcon } from "../../assets/icons/news.svg";
import { ReactComponent as SportsIcon } from "../../assets/icons/sports.svg";
import { ReactComponent as HealthIcon } from "../../assets/icons/health.svg";

const Header = () => {
  const [activeTab, setActiveTab] = useState("News");

  const tabs = [
    { id: 1, label: "News", icon: <NewsIcon /> },
    { id: 2, label: "Sport", icon: <SportsIcon /> },
    { id: 3, label: "Health", icon: <HealthIcon /> },
  ];

  const handleTabClick = (tabLabel) => {
    setActiveTab(tabLabel);
  };

  return (
    <header className="header">
      <h1 className="cat">Categories</h1>

      <div className="tabs">
        {tabs.map((tab) => (
          <Tab
            key={tab.id}
            label={tab.label}
            isActive={activeTab === tab.label}
            onClick={() => handleTabClick(tab.label)}
            icon={tab.icon}
          />
        ))}
      </div>
      <TabContent Tab={activeTab} />
    </header>
  );
};

export default Header;
