import React from "react";
import "./Hotel.css";
import NavigationCard from "../../components/micro_components/navigation/NavigationCard";
import navigation_bell from "../../assets/navigation_bell.svg";
import profile_img from "../../assets/profile_img.png";
import Date_picker from "../../components/micro_components/date_picker/Date_picker";
import HotelCard from "../../components/micro_components/hotelCard/HotelCard";
import boat_img from "../../assets/boat_img.png";
import sydny_img from "../../assets/sydny_img.png";
import indian_fort from "../../assets/indian_fort.png";
import maldives_hotel from "../../assets/maldives_hotel.png";

import LocationCard from "../../components/micro_components/locationCard/LocationCard";
import HomeNavigation from "../../components/micro_components/homeNavigation/HomeNavigation";

function Hotel() {
  return (
    <div className="hotel container">
      <NavigationCard>
        <div className="navigation_item ">
          <div className="navigation_logo">LOGO</div>
          <div className="navigation_bell_img">
            <img className="navigation_bell" src={navigation_bell} />
            <img className="navigation_profile_img" src={profile_img} />
          </div>
        </div>
      </NavigationCard>
      <div className="hotel_navigation">
        <ul className="hotel_navigation_items">
          <li className="hotel_navigation_item ">Hotel</li>
          <li className="hotel_navigation_item ">AirBnb</li>
          <li className="hotel_navigation_item nav_active">Villa</li>
          <li className="hotel_navigation_item">Home</li>
        </ul>
      </div>

      <Date_picker />

      <div className="date_picker_search_btn">
        <NavigationCard className="date_picker_btn_border">
          <div className="date_picker_btn_text">Search</div>
        </NavigationCard>
      </div>

      <div className="latest_hotel_wrapper mg_b_2">
        <h1 className="latest_searches_heading">Latest Searches</h1>
        <div className="latest_hotel_items">
          <HotelCard
            destination_img={boat_img}
            card_title="Lorem Ipsum"
            card_details="lorem ipsum"
          />
          <HotelCard
            destination_img={sydny_img}
            card_title="Lorem Ipsum"
            card_details="lorem ipsum"
          />
          <HotelCard
            destination_img={indian_fort}
            card_title="Lorem Ipsum"
            card_details="lorem ipsum"
          />
        </div>
      </div>

      <div className="flex flex_space_between font_dark mg_b_2">
        <h1>Near me</h1>
        <a>See all</a>
      </div>
      <div className="padding_1">
        <LocationCard
          classname="mg_b_2"
          hotel_img={maldives_hotel}
          hotel_location="Maldives Hotel"
          reviews="8.5/ 85 Reviews"
          location="Lorem ipsum"
          price="$200/Night"
          active
        />
        <LocationCard
          classname="mg_b_2"
          hotel_img={maldives_hotel}
          hotel_location="Maldives Hotel"
          reviews="8.5/ 85 Reviews"
          location="Lorem ipsum"
          price="$200/Night"
        />
      </div>

      <HomeNavigation />
    </div>
  );
}

export default Hotel;
