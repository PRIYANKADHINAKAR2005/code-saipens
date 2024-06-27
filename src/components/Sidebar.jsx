import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

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
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/dashboard'>Dashboard</Link></li>
                <li><Link to='/leaderboard'>Leaderboard</Link></li>
                <li><Link to='/profile'>Profile</Link></li>
                <li><Link to='/contact-us'>Contact us</Link></li>
            </ul>
        </aside>
    );
}

export default Sidebar;
