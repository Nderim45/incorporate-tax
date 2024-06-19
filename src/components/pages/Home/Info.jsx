import React from "react";
import { Link } from "react-router-dom";
import "./styles/info.scss";
import { CgArrowRightO } from "react-icons/cg";
import { FormattedMessage } from "react-intl";

const Info = () => {
  return (
    <div className="info">
      <div className="first-section">
        <div className="text-div">
          <h4><FormattedMessage id="Info.FirstSection.Title"/></h4>
          <p>
          <FormattedMessage id="Info.FirstSection.Description"/>
          </p>
          <div className="button">
            <Link to="/">
            <FormattedMessage id="Info.FirstSection.Link"/> <CgArrowRightO />
            </Link>
          </div>
        </div>
        <div className="image-div">
          <div className="inner-div">
            <div className="box" data-aos='fade-down'/>
            <div className="image1"  data-aos='fade-left'/>
            <div className="image2" data-aos='fade-right'/>
            <div className="floating-box" data-aos='fade-up'>
              <div className="icon" />
              <p><FormattedMessage id="Info.FirstSection.FloatCard"/></p>
            </div>
          </div>
        </div>
      </div>
      <div className="second-section">
        <div className="image-div" data-aos='fade-right'>
          <div className="image" />
        </div>
        <div className="text-div" data-aos='fade-left'>
          <h4>
          <FormattedMessage id="Info.SecondSection.Title"/>
          </h4>
          <p>
          <FormattedMessage id="Info.SecondtSection.Description"/>
          </p>
          <div className="button">
            <Link to="/">
            <FormattedMessage id="Info.SecondSection.Link"/> <CgArrowRightO />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
