import React from "react";
import "../styles/download.css";
import { FaApple, FaGooglePlay } from "react-icons/fa";

function Download() {
  return (
    <div className="download">
      <h4>Get the app</h4>
      <div className="download-buttons">
        <div className="app-store">
          <div className="logo">
            <FaApple />
          </div>
          <div className="text">
            <p>Download on the</p>
            <h3>AppStore</h3>
          </div>
        </div>
        <div className="google-play">
          <div className="logo">
            <FaGooglePlay />
          </div>
          <div className="text">
            <p>Get it on</p>
            <h3>Google Play</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Download;
