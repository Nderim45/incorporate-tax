import React from 'react'
import './styles/resources.scss'
import {Resource} from '../data'
import { Link } from 'react-router-dom'

const Services = () => {
    return (
        <div className='megamenu services'>
            {Resource.map((item) => (
                <Link to='/' className='services-item'>
                    <div className='image-div'>
                        <div className='circle1'/>
                            <div className='circle2'/>
                            <div className='inner-div'>
                                <div className='image'>
                                    {item.icon}
                                </div>
                            </div>
                        </div>
                    <h6>{item.title}</h6>
                </Link>
            ))}
            
        </div>
    )
}

export default Services
