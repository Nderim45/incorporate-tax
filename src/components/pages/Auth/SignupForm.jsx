import React, { useState } from 'react'
import './styles/signupForm.scss'
import { Link } from 'react-router-dom'
import {IoPersonSharp, IoLocationSharp} from 'react-icons/io5'
import {IoIosMail} from 'react-icons/io'
import {GoGlobe} from 'react-icons/go'
import {AiOutlineMenu} from 'react-icons/ai'
import {RiLock2Fill} from 'react-icons/ri'

const SignupForm = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [country, setCountry] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className='signup-form'>
            <form action=''>
                <h1>Create New Account</h1>
                <p>Already have an account? <Link to='/Login'>Log In</Link></p>
                <div className='name'>
                    <div className='first-name'>
                        <span><IoPersonSharp /></span>
                        <input 
                            type='text'
                            name='first-name'
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            placeholder='First Name *'
                            className='signup-name'
                        />
                    </div>
                    <div className='last-name'>
                        <span><IoPersonSharp /></span>
                        <input 
                            type='text'
                            name='last-name'
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            placeholder='Last Name *'
                            className='signup-name'
                        />
                    </div>
                </div>
                <div className='signup-input-content'>
                    <span><IoIosMail /></span>
                    <input 
                        type='email'
                        name='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder='Email *'
                        className='email'
                    />
                </div>
                <div className='signup-phone-number'>
                    <div className='prefix'>
                        <div className='flag' />
                        <span></span>
                    </div>
                    <div className='phone-number'>
                        <span><IoIosMail /></span>
                        <input 
                            type='text'
                            name='phone-number'
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            placeholder='Phone Number *'
                            className='phone-number'
                        />
                    </div>
                </div>
                <div className='signup-input-content'>
                    <span><GoGlobe /></span>
                    <input 
                        type='text'
                        name='country'
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                        placeholder='Country *'
                        className='country'
                    />
                </div>
                <div className='signup-input-content'>
                    <span><AiOutlineMenu /></span>
                    <input 
                        type='text'
                        name='address'
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        placeholder='Address *'
                        className='address'
                    />
                </div>
                <div className='area'>
                    <div className='city'>
                        <span><IoLocationSharp /></span>
                        <input 
                            type='text'
                            name='city'
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                            placeholder='City'
                            className='signup-city'
                        />
                    </div>
                    <div className='zip-code'>
                        <span><IoLocationSharp /></span>
                        <input 
                            type='text'
                            name='zip-code'
                            value={zipCode}
                            onChange={(e) => setZipCode(e.target.value)}
                            placeholder='Zip Code'
                            className='signup-zip-code'
                        />
                    </div>
                </div>
                <div className='signup-input-content'>
                    <span><RiLock2Fill /></span>
                    <input 
                        type='password'
                        name='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder='Create a password *'
                        className='password'
                    />
                </div>
                <button type='submit' className='signup-button'>Create New Account</button>
                <p className='terms-condition'>By clicking Create New Account, you agree to our <Link to='/'>Terms and Conditions of Use</Link> and <Link to='/'>Privacy Statement</Link>.</p>
            </form>
            <div className='bottom-div'>
                <p>©2021 IncorporateTax Inc. All Rights Reserved</p>
                <div className='inline-div'>
                    <Link to=''>Privacy</Link>
                    <Link to='' className='security'>Security</Link>
                    <Link to=''>Accessibility</Link>
                </div>
            </div>
        </div>
    )
}

export default SignupForm
