import React from "react";
import { Link } from "react-router-dom";
import { FeaturesData } from "./featuresData.jsx";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { FormattedMessage } from "react-intl";
import "./styles/featuresCard.scss";

const FeaturesCard = () => {
  return (
    <div className="features">
      <div className="features-header">
        <h6 data-aos='fade-left'><FormattedMessage id="FeaturesCard.Title"/></h6>
        <p data-aos='fade-right'>
        <FormattedMessage id="FeaturesCard.Description"/>
        </p>
      </div>
      <div className="cards">
        {FeaturesData.map((item) => (
          <div className="card" data-aos='zoom-in-down'>
              <div className='image1'/>
              <div className='image2'/>
            <div className='card-content'>
              <div className="image" >
                {item.icon}
              </div>
              <div className="info">
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </div>
              <div className="button">
                <Link to="/">
                  <FormattedMessage id='FeaturesCard.Link.LearnMore'/> <HiOutlineArrowNarrowRight />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesCard;
