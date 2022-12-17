import React from "react";
import NavigationCard from "../../components/micro_components/navigation/NavigationCard";
import "./Hotels.css";
import navigation_bell from "../../assets/navigation_bell.svg";
import maldives_hotel from "../../assets/maldives_hotel.png";
import navigation_icon from "../../assets/navigation_icon.svg";
import search_icon_gray from "../../assets/search_icon_gray.svg";
import arrow_up_down from "../../assets/hotels_page_icon/akar-icons_arrow-up-down.svg";
import map_location_dot from "../../assets/hotels_page_icon/map_location_dot.svg";

import icon_wifi from "../../assets/hotels_page_icon/icon_wifi.svg";
import LocationCard from "../../components/micro_components/locationCard/LocationCard";
import HomeNavigation from "../../components/micro_components/homeNavigation/HomeNavigation";

function Hotels() {
  return (
    <div className="hotels container">
      <NavigationCard className="mg_b_2">
        <div className="navigation_item font_white">
          <div className="navigation_logo">LOGO</div>
          <div className="navigation_bell_img">
            <img className="navigation_bell" src={navigation_bell} />
            <img className="navigation_profile_img" src={navigation_icon} />
          </div>
        </div>
      </NavigationCard>
      <div className="padding_1">
        <div className="hotel_search_wrapper">
          <img src={search_icon_gray} />
          <input type="text" placeholder="Search for Hotels" />
        </div>
      </div>
      <div className="padding_2">
        <div className="hotel_search_wrapper flex flex_space_between flex_align_center padding_1">
          <div className="hotel_search_icon_wrapper">
            <img src={arrow_up_down} />
          </div>
          <div className="hotel_search_icon_wrapper">
            <img src={icon_wifi} />
          </div>
          <div className="hotel_search_icon_wrapper">
            <img src={map_location_dot} />
          </div>
        </div>
      </div>

      {/* hotels>> */}
      <LocationCard
        classname="mg_b_2 padding_1"
        hotel_img={maldives_hotel}
        hotel_location="Maldives Hotel"
        reviews="8.5/ 85 Reviews"
        location="Lorem ipsum"
        price="$200/Night"
        active
      />
      <LocationCard
        classname="mg_b_2 padding_1"
        hotel_img={maldives_hotel}
        hotel_location="Maldives Hotel"
        reviews="8.5/ 85 Reviews"
        location="Lorem ipsum"
        price="$200/Night"
      />
      <LocationCard
        classname="mg_b_2 padding_1"
        hotel_img={maldives_hotel}
        hotel_location="Maldives Hotel"
        reviews="8.5/ 85 Reviews"
        location="Lorem ipsum"
        price="$200/Night"
      />
      <HomeNavigation />
    </div>
  );
}

export default Hotels;
