import React from "react";
import "./Date_picker.css";
import Search_icon from "../../../assets/search_icon.svg";
import search_location from "../../../assets/search_location.svg";
import DatePickerItems from "./DatePickerItems";
import calender from "../../../assets/calendar.svg";
import person_icon from "../../../assets/person_icon.svg";
import door_icon from "../../../assets/door_icon.svg";

function Date_picker() {
  return (
    <div className="date_picker">
      <div className="date_picker_wrapper ">
        {/* search */}
        <div className="date_picker_search date_picker_bg_black border_radius_13">
          <div className="date_picker_search_icon_name">
            <img src={Search_icon} />
            <p className="date_picker_search_name">Search</p>
          </div>
          <img src={search_location} />
        </div>
        {/* search */}
        <div className="date_picker_checkin_checkout_wrapper">
          <DatePickerItems
            icon={calender}
            title="Check-in"
            content="25 March"
          />
          <DatePickerItems
            icon={calender}
            title="Check-out"
            content="30 March"
          />
        </div>
        <div className="date_picker_checkin_checkout_wrapper">
          <DatePickerItems
            icon={person_icon}
            title="Guests"
            content="2 Guests"
          />
          <DatePickerItems icon={door_icon} title="Rooms" content="1 Room" />
        </div>
      </div>
    </div>
  );
}

export default Date_picker;
