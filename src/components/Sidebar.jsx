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
            <div className="side-bar-close" onClick={handleAside}>
                <FontAwesomeIcon icon={faTimes} className='aside-close'/>
            </div>
            <ul className="nav">
                <li onClick={handleAside}><NavLink to='/'>Home</NavLink></li>
                <li onClick={handleAside}><NavLink to='/dashboard'>Dashboard</NavLink></li>
                <li onClick={handleAside}><NavLink to='/leaderboard'>Leaderboard</NavLink></li>
                <li onClick={handleAside}><NavLink to='/profile/Jane'>My Pull Requests</NavLink></li>
                <li onClick={handleAside}><NavLink to='/contact-us'>Contact us</NavLink></li>
            </ul>
        </aside>
    );
}

export default Sidebar;
