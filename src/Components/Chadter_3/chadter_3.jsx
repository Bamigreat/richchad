import React from "react";
import "./chadter_3.css";
import man_stand from "../../assets/images/chad-png 1.png";

const chadter_3 = () => {
  return (
    <>
      <div id="chadter_3" className="chadter_3">
        <div className="wrapper">
          <div className="chadter_3_wrapper">
            <div className="chadter_3_title">
              <h4>CHADTER 3:</h4>
              <h2>CHADENOMICS</h2>

              <div className="chadter_3_list">
                <ul>
                  <li>
                    <p>
                      A total of{" "}
                      <span className="highlight-green">1,000,000,000</span>{" "}
                      $RICH will be created for Rich Chad Poor Chad.
                    </p>
                  </li>

                  <li>
                    <p>
                      All of the liquidity added to the pool will be{" "}
                      <span className="highlight-white">LOCKED</span>{" "}
                      <span className="highlight-green">via Unicrypt.</span>
                    </p>
                  </li>

                  <li>
                    <p>
                      There will be <span className="highlight-yellow">0%</span>{" "}
                      Tax as we want to give <br></br> everyone a fair chance of
                      becoming a Rich Chad.
                    </p>
                  </li>
                </ul>
              </div>
            </div>

            <div className="man_stand_img">
              <img src={man_stand} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default chadter_3;
