import {  faCheck, faCircle, faLocationArrow } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Catalog from './Catalog'

const Content = () => {
  return (
    <div className='content'>
      <div className="upper">
        <p className='route'><span className="light">Homepage&nbsp; &gt; &nbsp; Gadget &nbsp; &gt; &nbsp; </span> Apple Official Store</p>
        <div className="upper-content">
        <div className="left">
          <div className="top">
            <img src="https://www.rxwallpaper.site/wp-content/uploads/black-and-white-apple-wallpapers-wallpaper-cave-1-800x800.jpg" alt="https://www.rxwallpaper.site/wp-content/uploads/black-and-white-apple-wallpapers-wallpaper-cave-1-800x800.jpg" />
            <div className='logo-dets'>
              <p>
                Apple Official Store <FontAwesomeIcon icon={faCheck} />
              </p>
              <p>
                <span className="green"><FontAwesomeIcon icon={faCircle} /> Online</span> <FontAwesomeIcon icon={faLocationArrow} /> Mumbai, India
              </p>
            </div>
          </div>
          <div className="bottom">
            <button className='active'>Follow</button>
            <button>Chat</button>
            <button>Shop Info</button>
          </div>
        </div>
        <div className="left-1">
          <p>Product: 560</p>
          <p>Following: 0</p>
          <p>Chat Performance: 78%</p>
        </div>
        <div className="right">
          <p>Followers: 435k</p>
          <p>Rating: 4.9</p>
          <p>Joined: 12/02/2011</p>
        </div>
        <div className="right-1">
          <p>Original Products</p>
          <p>Safe Packing</p>
          <p>Free Shipping</p>
        </div>
        <div className="right-2">
          <p>@appleofficial</p>
          <p>applesupport@gmail.com</p>
          <p>(800) 456-2345</p>
        </div>
        </div>
      </div>
      <h1 className='catalog'>Catalog</h1>
      <div className="catalogs">
        <Catalog />
        <Catalog />
        <Catalog />
        <Catalog />
        <Catalog />
        <Catalog />
        <Catalog />
        <Catalog />
        <Catalog />
      </div>
    </div>
  )
}

export default Content