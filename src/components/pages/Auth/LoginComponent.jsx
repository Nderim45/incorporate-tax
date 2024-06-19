import React from 'react'
import LoginForm from './LoginForm'
import './styles/loginComponent.scss'
import Carousel from "react-elastic-carousel";
import {data} from './LoginData'
import { Link } from 'react-router-dom';
import {CgArrowRightO} from 'react-icons/cg'


const breakPoints = [
    { width: 1, itemsToShow: 1 },
  ];


const LoginComponent = () => {
    return (
        <div className='shared-component'>
            <div className='left-side'>
                <div className='inner-left-side'>
                    <div className='background-image1'/>
                    <div className='background-image2'/>
                </div>
                <div className='box1'/>
                <div className='box2'/>
                <div className='box3'/>
                <div className='content'>
                    <div className='image' />
                    <Carousel className="slider" breakPoints={breakPoints}>
                        {data.map((item) => (
                            <div className='item'>
                                <h6>{item.title}</h6>
                                <p>{item.description}</p>
                            </div>
                        ))}
                    </Carousel>
                    <div className="button">
                        <Link to="/">
                            Learn More <CgArrowRightO />
                        </Link>
                    </div>
                </div>
            </div>
            <LoginForm />
        </div>
    )
}

export default LoginComponent
