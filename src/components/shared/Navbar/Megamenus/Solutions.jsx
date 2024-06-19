import React from 'react'
import { Link } from 'react-router-dom'
import {Solution} from '../data'
import './styles/solution.scss'

const Solutions = () => {
    return (
        <div className='megamenu solutions'>
            <div className='left-div'>
            {Solution.map((item) => (
                <Link to='/' className='solutions-links'>
                    <div className='image-div'>
                        <div className='circle1'/>
                            <div className='circle2'/>
                            <div className='inner-div'>
                                <div className='image'>
                                    {item.icon}    
                                </div>
                            </div>
                        </div>
                        <div className='block'>
                            <h4>{item.title}</h4>
                            <p>{item.description}</p>
                        </div>
                </Link>
            ))}
            </div>
            <div className='right-div'>
                <h4>Solutions by Tax Type</h4>
                <p>Sales & Use Tax</p>
                <p>Value Added Tax</p>
                <p>Consumer Use Tax</p>
                <p>Lease Tax</p>
                <p>Payroll Tax</p>
                <p>Communications Services Tax</p>
                <p>Lodging & Occupancy Tax</p>
            </div>
        </div>
    )
}

export default Solutions
