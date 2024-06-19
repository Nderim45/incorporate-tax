import React from "react";
import { Link } from "react-router-dom";
import { data } from "./discoverMoreData.jsx";
import {HiOutlineArrowNarrowRight} from 'react-icons/hi'
import { CgArrowRightO } from "react-icons/cg";
import { FormattedMessage } from "react-intl";
import "./styles/discoverMore.scss";

const DiscoverMore = () => {
  return (
    <div className="discover-more">
      <div className="text">
        <div className="line" />
        <h6><FormattedMessage id="DiscoverMore.Title"/></h6>
      </div>
      <div className="cards" data-aos='zoom-in-down'>
        {data.map((item) => (
          <div className="card">
            <div className="image-div">
              <div className="image" style={{content: `url(${item.image})`}}/>
              <div className="float-icon">
                <div className="icon" style={{content: `url(${item.logo})`}}/>
              </div>
            </div>
            <div className="content-div">
              <h6>{item.title}</h6>
              <p>{item.content}</p>
              
            </div>
            <Link to="/"><FormattedMessage id='DiscoverMore.Card.Link'/> <HiOutlineArrowNarrowRight /></Link>
          </div>
        ))}
      </div>
      <div className="button">
              <Link to="/">
              <FormattedMessage id='DiscoverMore.Link'/> <CgArrowRightO />
              </Link>
            </div>
    </div>
  );
};

export default DiscoverMore;
