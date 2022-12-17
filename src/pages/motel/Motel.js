import React from "react";
import "./Motel.css";
import hotel_blue_dreams from "../../assets/hotel_blue_dreams.png";
import love_outline from "../../assets/love_outline.svg";
import review_star from "../../assets/review_star.svg";
import right_icon from "../../assets/right_icon.svg";
import animities_car from "../../assets/animities_icon/animities_car.svg";
import shower_animities from "../../assets/animities_icon/shower_animities.svg";
import drink_animities from "../../assets/animities_icon/drink_animities.svg";
import dumbell_animities from "../../assets/animities_icon/dumbell_animities.svg";
import wifi_animities from "../../assets/animities_icon/wifi_animities.svg";
import more_animities from "../../assets/animities_icon/more_animities.svg";
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import { Icon } from "leaflet";

function Motel() {
  return (
    <div className="motel container">
      <div className="motel_img_wrapper">
        <img className="love_outline_icon" src={love_outline} />
        <img className="motel_hero_img" src={hotel_blue_dreams} />
      </div>
      <div className="motel_details_container ">
        <div className="motel_details_wrapper ">
          <div className="motal_main_heading_wrapper mg_b_1">
            <h1 className="font_24 b_400">Hotel Blue Dreams</h1>
            <h2 className="font_24 b_400">$200</h2>
          </div>
          <div className="motel_minor_details_wrapper flex flex_space_between font_13 font_gray mg_b_1">
            <div className="motel_minor_details flex flex_align_center flex_g_1 ">
              <p>2 Guests</p>
              <p>.</p>
              <p>1 Bedroom</p>
              <p>.</p>
              <p>1 Bath</p>
            </div>
            <p>Per Night</p>
          </div>

          {/*  */}
          <div className="motel_details_text font_13 padding_1">
            <p className="mg_b_1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
              turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
              nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
              tellus elit sed risus.
            </p>
            {/*  star*/}
            <div className="hotel_review_star">
              <img src={review_star} />
              <img src={review_star} />
              <img src={review_star} />
              <img src={review_star} />
            </div>
          </div>

          {/*  */}
          <div className="hotel_review_person_wrapper flex flex_space_between mg_b_2">
            <div className="flex flex_g_1 flex_align_center">
              <p>200 Reviews</p>
              <img src={right_icon} />
            </div>
            <div className="flex hotel_review_person_img_wrapper">
              <img
                className="hotel_review_person_img"
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80"
              />
              <img
                className="hotel_review_person_img"
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80"
              />
              <img
                className="hotel_review_person_img"
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80"
              />
              <img
                className="hotel_review_person_img"
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80"
              />
            </div>
          </div>
          <h1 className="font_24 b_400 mg_b_2">Aminities</h1>

          <div className="hotel_review_icons_wrapper flex flex_align_center flex_space_between font_13 mg_b_2">
            <div className="hotel_review_icon flex flex_dir_col">
              <img
                className="hotel_review_animities_icon"
                src={animities_car}
              />
              <p>Parking</p>
            </div>
            <div className="hotel_review_icon flex flex_dir_col">
              <img
                className="hotel_review_animities_icon"
                src={shower_animities}
              />
              <p>Bath</p>
            </div>
            <div className="hotel_review_icon flex flex_dir_col">
              <img
                className="hotel_review_animities_icon"
                src={drink_animities}
              />
              <p>Bar</p>
            </div>
            <div className="hotel_review_icon flex flex_dir_col">
              <img
                className="hotel_review_animities_icon"
                src={dumbell_animities}
              />
              <p>Gym</p>
            </div>
            <div className="hotel_review_icon flex flex_dir_col">
              <img
                className="hotel_review_animities_icon"
                src={wifi_animities}
              />
              <p>WiFi</p>
            </div>
            <div className="hotel_review_icon flex flex_dir_col">
              <img
                className="hotel_review_animities_icon"
                src={more_animities}
              />
              <p>More</p>
            </div>
          </div>

          {/* map */}
          <div className="motel_map">
            <MapContainer
              center={[24.0243454, 90.4337212]}
              zoom={10}
              style={{ width: "41.4rem", height: "15rem" }}
            >
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              <Marker
                position={[24.0243454, 90.4337212]}
                icon={new Icon({ iconUrl: markerIconPng, iconSize: [25, 41] })}
              >
                <Popup>Hotel blue dreams</Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Motel;
