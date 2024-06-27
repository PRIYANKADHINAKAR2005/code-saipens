import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../images/codesapiens.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Header = ({setIsAside}) => {

    const handleAside = () => {
        setIsAside(true);
    }

    return (
        <header>
            <div className="side-bar-open">
                <FontAwesomeIcon icon={faBars} className='aside-open' onClick={handleAside} />
            </div>
            <h1 className="title">
                <img src={logo} alt={logo} />
                CODE SAPIENS
            </h1>
            <ul className="nav">
                <li><NavLink to='/'>Home</NavLink></li>
                <li><NavLink to='/dashboard'>Dashboard</NavLink></li>
                <li><NavLink to='/leaderboard'>Leaderboard</NavLink></li>
                <li><NavLink to='/profile'>Profile</NavLink></li>
                <li><NavLink to='/contact-us'>Contact us</NavLink></li>
            </ul>
        </header>
    )
}

export default Header