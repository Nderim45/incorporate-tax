import React from "react";
import "./styles/imageSection.scss";
import { Link } from "react-router-dom";
import { Data } from "./featuresData.jsx";
import { FormattedMessage } from "react-intl";

const ImageSection = () => {
  return (
    <div className="mainContainer">
      <div className='banner-section'>
        <div className="image-container" >
          <div className="image" />
          <div className="background1" />
          <div className="background2" />
        </div>
        <div className="text-container">
          <div className="icon" />
          <h4><FormattedMessage id="ImageSection.Title"/></h4>
          <p>
          <FormattedMessage id="ImageDection.Description"/>
          </p>
          <div className="button">
            <Link to="/"><FormattedMessage id="ImageSection.Link"/></Link>
          </div>
        </div>
      </div>
      <div className="cards">
        {Data.map((item) => (
          <div className="card" data-aos='fade-left'>
            <div className="logo-container">
              <div className="logo" style={{ content: `url(${item.image})` }} />
            </div>
            <div className="text">
              <h6>{item.title}</h6>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSection;
