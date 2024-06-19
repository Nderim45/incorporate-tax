import React from "react";
import { Link } from "react-router-dom";
import "./styles/videoInfo.scss";
import { CgArrowRightO } from "react-icons/cg";
import { FormattedMessage } from "react-intl";

const VideoInfo = () => {
  return (
    <div className="video-info">
      <div className="inner-div" data-aos='zoom-in-up'>
        <div className="wrapper">
          <div className="video" />
          <div className="color-image" />
          <div className="circle-button" />
          <div className="play-button" />
        </div>
      </div>
      <div className="info" data-aos='fade-right'>
        <h4>Improve taxes with technology</h4>
        <p>
          IncorporateTax answers the demand for a streamlined, end-to-end tax
          system that gives users the powers to reuse data from provision for
          compliance at year end without rekeying and rechecking.
        </p>
        <div className="inline">
          <div className="item">
            <div className="image image1" />
            <p>Reduce risk</p>
          </div>
          <div className="item">
            <div className="image image2" />
            <p>Increase efficiency</p>
          </div>
          <div className="item">
            <div className="image image3" />
            <p>Save time</p>
          </div>
        </div>
        <div className="last-section">
          <div className="button">
            <Link to="/">
              Learn More <CgArrowRightO />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoInfo;
