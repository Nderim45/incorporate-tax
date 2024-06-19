import React from "react";
import { iconsData } from "./iconsData.jsx";
import './styles/icons.scss';

const Icons = () => {
  return (
    <div className="icons-div">
      <div className="text">
        <p>Why choose IncorporateTax?</p>
      </div>
      <div className="icons">
        {iconsData.map((item) => (
          <div className="icon" data-aos='zoom-in-up' >
            <div className="image" style={{content: `url(${item.icon})`}}/>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Icons;
