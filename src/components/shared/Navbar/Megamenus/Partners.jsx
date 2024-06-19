import React from 'react'
import './styles/partners.scss'
import {Partner} from '../data'
import { Link } from 'react-router-dom'

const Partners = () => {
    return (
        <div className='megamenu partners'>
            {Partner.map((item) => (
                <Link to='/' className='partners-item'>
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

export default Partners
