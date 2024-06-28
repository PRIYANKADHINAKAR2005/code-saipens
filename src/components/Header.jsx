import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/codesapiens.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Header = ({setIsAside}) => {

    const handleAside = () => {
        setIsAside(true);
    }

    return (
        <header>
            <Link to='/' className="title">
                <img src={logo} alt={logo} />
                <h1>CODESAPIENS</h1>
            </Link>
            <div className="side-bar-open" onClick={handleAside}>
                <FontAwesomeIcon icon={faBars} className='aside-open' />
            </div>
            {/* <ul className="nav">
                <li><NavLink to='/'>Home</NavLink></li>
                <li><NavLink to='/dashboard'>Dashboard</NavLink></li>
                <li><NavLink to='/leaderboard'>Leaderboard</NavLink></li>
                <li><NavLink to='/profile'>Profile</NavLink></li>
                <li><NavLink to='/contact-us'>Contact us</NavLink></li>
            </ul> */}
        </header>
    )
}

export default Header