import React from "react";
import "./NavigationCard.css";

function NavigationCard({ children, className }) {
  return <div className={`nav_card ${className}`}>{children}</div>;
}

export default NavigationCard;
