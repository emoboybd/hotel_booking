import React from "react";
import "./HotelCard.css";
import review_star from "../../../assets/review_star.svg";

function HotelCard({ destination_img, card_title, card_details }) {
  return (
    <div className="hotel_card">
      <div className="hotel_card_wrapper">
        <div className="hotel_card_img_wrapper">
          <img className="hotel_card_img" src={destination_img} />
        </div>

        <p className="hotel_card_title">{card_title}</p>

        <div className="hotel_card_review">
          <h3>{card_details}</h3>
          <div className="hotel_card_review_star_wrapper">
            <img className="hotel_card_review_star" src={review_star} />
            <img className="hotel_card_review_star" src={review_star} />
            <img className="hotel_card_review_star" src={review_star} />
            <img className="hotel_card_review_star" src={review_star} />
            <img className="hotel_card_review_star" src={review_star} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HotelCard;
