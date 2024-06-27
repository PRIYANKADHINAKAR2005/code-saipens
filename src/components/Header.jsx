import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/codesapiens.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Header = ({isAside, setIsAside}) => {

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
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/dashboard'>Dashboard</Link></li>
                <li><Link to='/leaderboard'>Leaderboard</Link></li>
                <li><Link to='/profile'>Profile</Link></li>
                <li><Link to='/contact-us'>Contact us</Link></li>
            </ul>
        </header>
    )
}

export default Header