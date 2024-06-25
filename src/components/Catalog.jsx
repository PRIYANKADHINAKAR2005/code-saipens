import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

const Catalog = () => {
    return (
        <div className="catalog-comp">
            <img src="https://th.bing.com/th/id/OIP.rqCXcmrcVSibq9nKKJJEzQAAAA?rs=1&pid=ImgDetMain" alt="https://th.bing.com/th/id/OIP.rqCXcmrcVSibq9nKKJJEzQAAAA?rs=1&pid=ImgDetMain" />
            <p className='title'>MacBook Pro M1 (2022)</p>
            <small className='desc light'>Superfast M1 chip & beautiful retina display</small>
            <p className="rupees">$ 1200.50 &nbsp; <span className="light strike">$ 1250</span></p>
            <div className="buttons">
                <button><FontAwesomeIcon icon={faCartShopping} /> Add to cart</button>
                <button className='active'>Buy Now</button>
            </div>
        </div>
    )
}

export default Catalog