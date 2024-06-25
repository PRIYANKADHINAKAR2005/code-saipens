import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';

const SideMenu = () => {
  const [openSections, setOpenSections] = useState({
    category: false,
    price: false,
    location: false,
    rating: false,
    shipping: false,
    city: false,
  });

  const toggleSection = (section) => {
    setOpenSections((prevSections) => ({
      ...prevSections,
      [section]: !prevSections[section],
    }));
  };

  return (
    <div className='side-menu'>
      <ul>
        <li className='open' onClick={() => toggleSection('category')}>Category <FontAwesomeIcon icon={faAngleDown} /></li>
        <li className={`category ${openSections.category ? 'open' : ''}`}>
          <p className='light'><div className="circle"></div>Living</p>
          <p className='light'><div className="circle"></div>Gadget</p>
          <p className='light'><div className="circle"></div>Electronics</p>
          <p className='light'><div className="circle"></div>Fashion</p>
          <p className='see-more+'>See More +</p>
        </li>
        <li className='open' onClick={() => toggleSection('price')}>Price <FontAwesomeIcon icon={faAngleDown} /></li>
        <li className={`price ${openSections.price ? 'open' : ''}`}>
          <p className='light'><div className="circle"></div>High to low</p>
          <p className='light'><div className="circle"></div>Low to high</p>
        </li>
        <li className='open' onClick={() => toggleSection('location')}>Location <FontAwesomeIcon icon={faAngleDown} /></li>
        <li className={`location ${openSections.location ? 'open' : ''}`}>
          <p className='light'><div className="circle"></div>Nearest</p>
          <p className='light'><div className="circle"></div>Farthest</p>
        </li>
        <li className='open' onClick={() => toggleSection('rating')}>Rating <FontAwesomeIcon icon={faAngleDown} /></li>
        <li className={`rating ${openSections.rating ? 'open' : ''}`}>
          <p className='light'><div className="circle"></div>Highest</p>
          <p className='light'><div className="circle"></div>Lowest</p>
        </li>
        <li className='open' onClick={() => toggleSection('shipping')}>Shipping <FontAwesomeIcon icon={faAngleDown} /></li>
        <li className={`shipping ${openSections.shipping ? 'open' : ''}`}>
          <p className='light'><div className="circle"></div>Regular</p>
          <p className='light'><div className="circle"></div>Same day</p>
          <p className='light'><div className="circle"></div>Next day</p>
          <p className='light'><div className="circle"></div>Instant</p>
          <p className='see-more+'>See More +</p>
        </li>
        <li className='open' onClick={() => toggleSection('city')}>City <FontAwesomeIcon icon={faAngleDown} /></li>
        <li className={`city ${openSections.city ? 'open' : ''}`}>
          <p className='light'><div className="circle"></div>Pune</p>
          <p className='light'><div className="circle"></div>Mumbai</p>
          <p className='light'><div className="circle"></div>Nashik</p>
          <p className='see-more+'>See More +</p>
        </li>
      </ul>
    </div>
  );
};

export default SideMenu;
