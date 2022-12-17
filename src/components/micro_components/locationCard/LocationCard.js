import React from "react";
import "./LocationCard.css";
import hotel from "../../../assets/hotel.svg";
import hotel_white from "../../../assets/hotel_white.svg";
import review_star from "../../../assets/review_star.svg";
import search_location_dark from "../../../assets/search_location_dark.svg";
import search_location from "../../../assets/search_location.svg";

function LocationCard({
  classname,
  hotel_img,
  hotel_location,
  reviews,
  location,
  price,
  active,
}) {
  return (
    <div
      className={`location_card bor_10 font_dark ${
        active ? "bg_dark font_white" : "bg_gray"
      }  ${classname}`}
    >
      <div className="location_card_wrapper flex_g_2">
        <img className="location_card_main_img" src={hotel_img} />
        <div className="location_card_detail_wrapper">
          <div className="location_card_detail">
            <div className="flex_g_1">
              <img src={active ? hotel_white : hotel} />
              <h1 className="font_small font_bolder">{hotel_location}</h1>
            </div>
          </div>
          <p className="mg_l_2 font_8">{reviews}</p>
          <div className="location_card_review_star_wrapper mg_b_2 mg_l_2">
            <img className="location_card_review_star" src={review_star} />
            <img className="location_card_review_star" src={review_star} />
            <img className="location_card_review_star" src={review_star} />
            <img className="location_card_review_star " src={review_star} />
          </div>
          <div className="location_card_review_locatoin_price">
            <div className="location_card_location">
              <div className="location_card_location_name flex_g_1">
                <img src={active ? search_location : search_location_dark} />
                <h2>{location}</h2>
              </div>
              <h1>{price}</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LocationCard;
