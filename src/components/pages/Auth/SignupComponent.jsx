import React from "react";
import SignupForm from "./SignupForm";
import { Link } from "react-router-dom";
import { CgArrowRightO } from "react-icons/cg";
import Carousel from "react-elastic-carousel";
import { FeaturesData } from "../Home/featuresData";
import "./styles/signupComponent.scss";

const breakPoints = [{ width: 1, itemsToShow: 1 }];

const SignupComponent = () => {
  return (
    <div className="signup-component">
      <SignupForm />
      <div className="right-div">
        <div className="inner-right-side">
          <div className="background-image1" />
          <div className="background-image2" />
        </div>
        <div className="box1" />
        <div className="box2" />
        <div className="box3" />
        <div className="content">
          <div className="text">
            <h6>Transform your Tax process with IncorporateTax</h6>
            <p>
              Bring tax work in-house with technology. Gain control, speed, and
              efficiency, plus instant access to data for analytics and
              planning.
            </p>
          </div>
          <Carousel className="slider" breakPoints={breakPoints}>
            <div className="item">
              {FeaturesData.slice(0, 2).map((item) => (
                <div className="inner-item">
                  <div className="image">
                      {item.icon}
                  </div>
                  <div className="slider-text">
                    <h6>{item.title}</h6>
                    <p>{item.description}</p>
                      <Link to="/">
                        Learn More <CgArrowRightO />
                      </Link>
                  </div>
                </div>
              ))}
            </div>
            <div className="item">
              {FeaturesData.slice(2, 4).map((item) => (
                <div className="inner-item">
                  <div className="image">
                      {item.icon}
                  </div>
                  <div className="slider-text">
                    <h6>{item.title}</h6>
                    <p>{item.description}</p>
                      <Link to="/">
                        Learn More <CgArrowRightO />
                      </Link>
                  </div>
                </div>
              ))}
            </div>
            <div className="item">
              {FeaturesData.slice(4, 6).map((item) => (
                <div className="inner-item">
                  <div className="image">
                      {item.icon}
                  </div>
                  <div className="slider-text">
                    <h6>{item.title}</h6>
                    <p>{item.description}</p>
                      <Link to="/">
                        Learn More <CgArrowRightO />
                      </Link>
                  </div>
                </div>
              ))}
            </div>
            <div className="item">
              {FeaturesData.slice(6, 8).map((item) => (
                <div className="inner-item">
                  <div className="image">
                      {item.icon}
                  </div>
                  <div className="slider-text">
                    <h6>{item.title}</h6>
                    <p>{item.description}</p>
                      <Link to="/">
                        Learn More <CgArrowRightO />
                      </Link>
                  </div>
                </div>
              ))}
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default SignupComponent;
