import React from "react";
import "./HomeNavigation.css";
import home from "../../../assets/home.svg";
import love from "../../../assets/love.svg";
import brief_case from "../../../assets/brief_case.svg";
import person_single from "../../../assets/person_single.svg";

function HomeNavigation() {
  return (
    <div className="home_nav">
      <div className="home_nav_wrapper">
        <div className="home_icon_wrapper">
          <img className="home_icon" src={home} />
        </div>
        <img className="home_icon" src={love} />
        <img className="home_icon" src={brief_case} />
        <img className="home_icon" src={person_single} />
      </div>
    </div>
  );
}

export default HomeNavigation;
