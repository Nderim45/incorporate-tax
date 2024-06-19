import React from "react";
import Carousel from "react-elastic-carousel";
import './styles/slider.scss'
import { data } from "./sliderData";
import { FormattedMessage } from "react-intl";


const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 900, itemsToShow: 2 },
];

const Slider = () => {
  return (
    <div>
      <h6 className='slider-title'><FormattedMessage id='Slider.Title'/></h6>
      <Carousel className="slider" breakPoints={breakPoints}>
        {data.map((item) => (
          <div className="item">
            <div className='box'/>
            <div className='card'>
              <div className='rating'>
                <div className='stars' style={{content: `url(${item.stars})`}}/>
                <p>{item.rating}</p>
              </div>
              <p>{item.content}</p>
              <div className='user'>
                <div className='image' style={{content: `url(${item.image})`}}/>
                <div className='user-info'>
                  <div className='info'>
                    <p className='name'>{item.name}</p>
                    <p className='job'>{item.job}</p>
                  </div>
                  <p className='company'>{item.company}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Slider;
