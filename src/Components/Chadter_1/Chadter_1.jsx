import React, { useEffect, useRef } from "react";
import "./Chadter_1.css";
import headgif from "../../assets/images/giphy.gif";

const Chader_1 = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const imageRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const targets = [
              titleRef.current,
              descriptionRef.current,
              imageRef.current,
              contactRef.current,
            ];
            targets.forEach((target) => {
              if (target) {
                target.classList.add("animate-in");
                observer.unobserve(entry.target); // Unobserve after first trigger
              }
            });
          }
        });
      },
      { threshold: 0.1 } // Trigger when 50% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div>
      <div id="chadter_1" className="chadter_1" ref={sectionRef}>
        <div className="wrapper">
          <div className="chadter_1_title_wrapper" ref={titleRef}>
            <h4>CHADTER 1:</h4>
            <h2>INTRODUCTION</h2>
          </div>
          <div className="chadter_1_description_wrapper" ref={descriptionRef}>
            <p>
              Elevate your financial well-being with{" "}
              <span className="highlight">'Rich Chad Poor Chad'</span>, the
              ultimate Solana guide to financial freedom. With{" "}
              <span className="highlight">$RICH</span>, you have the opportunity
              to evolve from a nobody to a somebody. If you are tired of being
              trapped at the bottom end of the financial food chain and want to
              get <span className="highlight">$RICH</span>, becoming a{" "}
              <span className="highlight">$RICH</span> Chad is the only way.
              This is where we separate the{" "}
              <span className="highlight">$RICH</span> from the poor. So embrace
              your inner Chad, explore Solana with flair, and become a financial
              Don.
            </p>
          </div>
          <div className="chadter_1_image_wrapper" ref={imageRef}>
            <img src={headgif} alt="head gif" />
          </div>
          <div className="contact-add" ref={contactRef}>
            <p>CA: 0000000000000000000000000000000000000000000</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chader_1;
