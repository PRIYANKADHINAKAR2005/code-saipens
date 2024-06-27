import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header>
            <h1 className="title">CODE SAIPENS</h1>
            <ul className="nav">
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/'>About</Link></li>
                <li><Link to='/'>Hall of fame</Link></li>
            </ul>
            <div className='login-btn'><Link to='/'>Login</Link></div>
        </header>
    )
}

export default Header