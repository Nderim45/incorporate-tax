import React from "react";
import { Link } from "react-router-dom";
import { CgArrowRightO, CgArrowRight } from "react-icons/cg";
import { ImInfo } from "react-icons/im";
import "./styles/header.scss";
import { FormattedMessage } from "react-intl";

const Header = () => {
  return (
    <div className="header">
      <div className="left-section">
        <div className="line" />
        <div className="text">
          <h6><FormattedMessage id="Header.Title"/></h6>
          <p>
          <FormattedMessage id="Hader.Content"/>
          </p>
          <div className="buttons">
            <Link className="try-free" to="/">
            <FormattedMessage id="Header.Link.TryIt"/> <CgArrowRightO />
            </Link>
            <Link className="learn-more" to="/">
            <FormattedMessage id="Header.Link.LearnMore"/> <CgArrowRight />{" "}
            </Link>
          </div>
          <p className="trail">
            <ImInfo /> <FormattedMessage id="Header.p.Trail"/>
          </p>
        </div>
      </div>
      <div className="right-section">
        <div className="graph-image" />
        <div className="color-rectangle" />
        <div className="image" />
        <div className="image2" />
      </div>
    </div>
  );
};

export default Header;
