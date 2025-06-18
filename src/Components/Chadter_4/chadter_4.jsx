import React from "react";
import "./chadter_4.css";
import openBook from "../../Assets/Images/book-rules (2).webp";
import closeBook from "../../Assets/Images/book-redo.png";
import chadter4Video from "../../Assets/Images/money-fall.mp4";

const chadter_4 = () => {
  return (
    <>
      <div id="chadter_4" className="chadter_4">
        <div className="wrapper">
          <div className="chadter_4_wrapper">
            <div className="chadter_4_video">
              <video autoPlay loop muted>
                <source src={chadter4Video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="chadter_4_title">
              <h4>CHADTER 4:</h4>
              <h2>CHAD RULES</h2>
            </div>
            <div className="chadter_4_books">
              <div className="open_book">
                <img src={openBook} alt="Open Book" />
              </div>

              <div className="close_book">
                <img src={closeBook} className="close_book" alt="Close Book" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default chadter_4;
