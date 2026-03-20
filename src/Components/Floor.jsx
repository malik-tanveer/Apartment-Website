import React, { useState } from "react";
import Studio from "./Floor/Studio";
import Bedroom2 from "./Floor/Bedroom2";
import Bedroom3 from "./Floor/Bedroom3";
import Penthouse from "./Floor/Penthouse";
import Double from "./Floor/Double";
import "../Styles/Main_Floor.css";

const Floor = () => {
  const [activeTab, setActiveTab] = useState("Studio");

  const tabs = {
    Studio: <Studio />,
    "2-Bedroom": <Bedroom2 />,
    "3-Bedroom": <Bedroom3 />,
    Penthouse: <Penthouse />,
    "Double Height": <Double />,
  };

  return (
    <>
      <div className="floor-contain">
        <h1 className="floor">Choose the perfect space for you</h1>
        <div className="floor-buttons">
          {Object.keys(tabs).map((tab) => (
            <button
              key={tab}
              className={`batn ${activeTab === tab ? "active" : ""}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="floor-content">{tabs[activeTab]}</div>
    </>
  );
};

export default Floor;