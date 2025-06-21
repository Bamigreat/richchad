import React from "react";
import icon1 from "../../assets/images/0_E1IshKUJE53qtr9C.png";
import icon2 from "../../assets/images/Dex.png";
import icon3 from "../../assets/images/TG.png";
import icon4 from "../../assets/images/White.png";
import footBgImg from "../../assets/images/rich_chad_banner.png";
import "./footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer_bg_img">
          <img src={footBgImg} alt="" />
        </div>

        <div className="footer-content">
          <div className="footer_icons">
            <img src={icon1} alt="" />
            <img src={icon2} alt="" />
            <img src={icon3} alt="" />
            <img src={icon4} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
