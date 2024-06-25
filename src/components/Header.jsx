import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faSliders, faDollarSign, faCartShopping, faBars } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-regular-svg-icons'

const Header = () => {
    return (
        <header>
            <FontAwesomeIcon icon={faBars} className='side-bar'/>
            <p className='title'>BUZZBAZAAR</p>
            <label htmlFor="search" className='light'>
                <FontAwesomeIcon icon={faSearch} />
                <input type="text" placeholder='Search' />
                <FontAwesomeIcon icon={faSliders} />
            </label>
            <div className="spacing"></div>
            <div className="options">
                <p>
                    <span className="light"><FontAwesomeIcon icon={faDollarSign} /></span>
                    Money: $4,123,290.000
                </p>
                <p>
                    <span className="light"><FontAwesomeIcon icon={faHeart} /></span>
                    Wishlist
                </p>
                <p>
                    <span className="light"><FontAwesomeIcon icon={faCartShopping} /></span>
                    My Cart
                </p>
            </div>
            <img src="https://kottke.org/plus/misc/images/ai-faces-01.jpg" alt="https://kottke.org/plus/misc/images/ai-faces-01.jpg" />
        </header>
    )
}

export default Header