import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = ({isAside,setIsAside}) => {

    const handleAside = () => {
        setIsAside(false);
    }

    return (
        <aside className={isAside ? 'open' : 'closed'}>
            <div className="side-bar-close">
                <FontAwesomeIcon icon={faTimes} className='aside-close' onClick={handleAside}/>
            </div>
            <ul className="nav">
                <li><NavLink to='/'>Home</NavLink></li>
                <li><NavLink to='/dashboard'>Dashboard</NavLink></li>
                <li><NavLink to='/leaderboard'>Leaderboard</NavLink></li>
                <li><NavLink to='/profile'>Profile</NavLink></li>
                <li><NavLink to='/contact-us'>Contact us</NavLink></li>
            </ul>
        </aside>
    );
}

export default Sidebar;
