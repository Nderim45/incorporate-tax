import React from "react";
import "./styles/banner.scss";
import { FormattedMessage } from "react-intl";

const Banner = () => {
  return (
    <div className="banner">
      <div className="image1" />
      <div className="image2" />
      <div className="arrows" data-aos="zoom-in-down" />
      <div className="text" data-aos="fade-right">
        <h6>
          <FormattedMessage id="Banner.Title" />
        </h6>
        <p>
          <FormattedMessage id="Banner.Description" />
        </p>
      </div>
    </div>
  );
};

export default Banner;
