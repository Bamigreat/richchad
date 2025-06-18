import React from "react";
import icon1 from "../../Assets/images/0_E1IshKUJE53qtr9C.png";
import icon2 from "../../Assets/images/Dex screener DONE.png";
import icon3 from "../../Assets/images/TG done.png";
import icon4 from "../../Assets/images/x white.png";
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
