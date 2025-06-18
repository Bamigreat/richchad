import React, { useState, useEffect } from "react";
import "./chadter_5.css";

const Chadter_5 = () => {
  const [showIframes, setShowIframes] = useState(false);

  useEffect(() => {
    // Delay iframe load by 1 second to allow page to render
    const timer = setTimeout(() => {
      setShowIframes(true);
    }, 2000);

    // Cleanup timer on unmount
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div id="chadter_5" className="chadter_5">
        <div className="wrapper">
          <div className="chadter_5_wrapper">
            <div className="chadter_5_title">
              <h4>CHADTER 5:</h4>
              <h2>BUY $RICH</h2>
            </div>

            <div className="chadter_5_chart_content">
              <div className="uniswap_wrapper">
                <div className="uniswap_article">
                  <p className="rich-buy-prompt">
                    Don’t miss out on getting{" "}
                    <span className="highlight-yellow">$RICH</span>! Simply
                    connect your{" "}
                    <span className="highlight-orange">Metamask</span>
                    wallet and <span className="highlight-green">BUY</span>{" "}
                    using the tool below. Keep up to date with the{" "}
                    <span className="highlight-yellow">$RICH</span> price using
                    our live chart.
                  </p>
                  {!showIframes && (
                    <p className="loading-message">Loading trading tools...</p>
                  )}
                </div>
                {showIframes && (
                  <div className="uniswap_chart">
                    <iframe
                      className="frame-chart"
                      src="https://app.uniswap.org/#/swap?theme=dark&inputCurrency=0x8802269D1283cdB2a5a329649E5cB4CdcEE91ab6&outputCurrency=0x6982508145454Ce325dDbE47a25d4ec3d2311933"
                      title="Uniswap Swap Interface"
                      width="100%"
                      style={{ aspectRatio: "16 / 15" }}
                      sandbox="allow-same-origin allow-scripts"
                    ></iframe>
                  </div>
                )}
              </div>

              <div className="trading_view">
                {showIframes && (
                  <iframe
                    className="frame-chart-2"
                    src="https://www.tradingview.com/widgetembed/?frameElementId=tradingview_12345&symbol=BINANCE:PEPEUSDT&interval=1D&hidesidetoolbar=1&hideideas=1&theme=dark"
                    title="TradingView Chart"
                    width="100%"
                    style={{ aspectRatio: "16 / 20" }}
                    sandbox="allow-same-origin allow-scripts"
                  ></iframe>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chadter_5;
