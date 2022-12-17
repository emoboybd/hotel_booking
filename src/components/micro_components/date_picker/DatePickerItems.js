import React from "react";
import "./DatePickerItems.css";

function DatePickerItems({ title, icon, content }) {
  return (
    <div className="date_picker_checkin_wrapper">
      <p className="date_picker_item_name">{title}</p>
      <div className="date_picker_Item date_picker_bg_black border_radius_13">
        <img src={icon} />
        <p className="date_picker_item_date">{content}</p>
      </div>
    </div>
  );
}

export default DatePickerItems;
