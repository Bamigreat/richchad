import React from "react";
import chad_two_man_img from "../../Assets/images/chadman.png";
import chad_x_img from "../../Assets/images/chad-x.jpg";
import "./Chadter_2.css";

const chadter_2 = () => {
  return (
    <>
      <div id="chadter_2" className="chadter_2">
        <div className="wrapper">
          <div className="chadter_2_wrapper">
            <div className="chadter_2_man_image">
              <img src={chad_two_man_img} alt="Chad Two Man" />
              <div className="chadter_2_x_image">
                <img src={chad_x_img} alt="Chad X" />
              </div>
            </div>

            <div className="chadter_2_title_wrapper">
              <h4>CHADTER 2:</h4>
              <h2>ROBERT KIYOSAKI</h2>
              <div className="chadter_2_description_wrapper">
                <p>
                  Who is <span className="highlight">Robert Kiyosaki</span>?
                  Some of you may ask? Fire his name into Google and what you
                  will find is one of the Richest Chads of them all. A self-made
                  multi-millionaire who is here to share his story with new
                  up-and-comers craving to become{" "}
                  <span className="highlight">$RICH</span>. Kiyosaki is now
                  looking at the <span className="highlight">Crypto</span>{" "}
                  market as his next financial success and he has invited you to
                  come along for the ride!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default chadter_2;
