import React from "react";
import "./Home.css";
import HeroImg from "../../assets/hero_main_img.svg";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const btnClicked = (e) => {
    e.preventDefault();
    navigate("/hotel");
  };
  return (
    <div className="home container">
      <img className="hero_img" src={HeroImg} />

      <h1 className="hero_heading text_style">Let’s Explore the Beauty</h1>
      <p className="hero_text text_style">Get Special offers and news</p>
      <div className="hero_btn_wrapper">
        <button className="hero_btn text_style" onClick={btnClicked}>
          Let’s get started!
        </button>
      </div>
    </div>
  );
}

export default Home;
