import React from "react";
import "./Hero.css";
import chad1 from "../../assets/images/chad 1.png";
import chad2 from "../../assets/images/Chad 2.png";
import logo from "../../assets/images/LOGO_1_1.png";
import social_icon1 from "../../assets/images/0_E1IshKUJE53qtr9C.png";
import social_icon2 from "../../assets/images/Dex screener DONE.png";
import social_icon3 from "../../assets/images/TG done.png";
import social_icon4 from "../../ssets/images/x white.png";

const Hero = () => {
  return (
    <>
      <div>
        {/* hero price widget */}
        <coingecko-coin-price-marquee-widget
          coin-ids="bitcoin,ethereum,eos,ripple,litecoin,solana,pepe,notcoin,dogecoin,tether"
          currency="usd"
          background-color="#f8cf03"
          locale="en"
          font-color="#000"
        ></coingecko-coin-price-marquee-widget>
      </div>

      <div className="hero">
        <div className="hero_content">
          <img src={chad1} alt="chad" className="left_chad_image" />
          <div className="middle_content">
            <img src={logo} alt="logo" className="logo" />
            <div className="social_icons">
              <img src={social_icon1} alt="" />
              <img src={social_icon2} alt="" />
              <img src={social_icon3} alt="" />
              <img src={social_icon4} alt="" />
            </div>
            <div className="hero_nav_box">
              <a href="#chadter_1">
                <h4>Chadter 1:</h4>
                <h2>INTRODUCTION</h2>
              </a>
              <a href="#chadter_2" class="nav-btn">
                <h4>Chadter 2:</h4>
                <h2>ROBERT KIYOSAKI</h2>
              </a>
              <a href="#chadter_3" class="nav-btn">
                <h4>Chadter 3:</h4>
                <h2>CHADENOMICS</h2>
              </a>
              <a href="#chadter_4" class="nav-btn">
                <h4>Chadter 4:</h4>
                <h2>CHAD RULES</h2>
              </a>
              <a href="#chadter_5" class="nav-btn" id="last-btn">
                <h4>Chadter 5:</h4>
                <h2>BUY $RICH</h2>
              </a>
            </div>
          </div>
          <img src={chad2} alt="chad" className="right_chad_image" />
        </div>
      </div>
    </>
  );
};

export default Hero;
