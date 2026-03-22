import React from "react";
import "../../Styles/Home/Location.css";

const locations = [
  { name: "Mapleton metro station", time: "12 min", icon: "/location/loc1.svg" },
  { name: "Mapleton high school", time: "10 min", icon: "/location/loc2.svg" },
  { name: "Elmwood fitness club", time: "15 min", icon: "/location/loc3.svg" },
  { name: "Riverside shopping plaza", time: "15 min", icon: "/location/loc4.svg" },
  { name: "HV general hospital", time: "25 min", icon: "/location/loc5.svg" },
  { name: "Greenwood park", time: "5 min", icon: "/location/loc6.svg" }
];

const Location = () => {
  return (
    <div className="location-container">
      {/* LEFT SIDE */}
      <div className="location-content">
        <h1 className="location-heading">
          Conveniently located in the heart of the city
        </h1>

        <ul className="location-list">
          {locations.map((loc, index) => (
            <li key={index} className="location-item">
              <div className="left">
                <img src={loc.icon} alt={loc.name} className="icon" />
                <span className="name">{loc.name}</span>
              </div>
              <span className="time">{loc.time}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* RIGHT SIDE */}
      <div className="map-container">
        <img
          src="/location/map.avif"
          alt="Map"
          className="map-image"
        />
      </div>
    </div>
  );
};

export default Location;