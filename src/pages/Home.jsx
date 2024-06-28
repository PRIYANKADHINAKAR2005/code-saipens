import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import poster from '../images/background-DHeaefIu.svg'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='home'>

      <div className="title">
        <p>Code Sapiens Summer Of Code</p>
      </div>

      <div className="hero">
        <div className="left">
          <h1>The most</h1>
          <h1>BEGINNER FRIENDLY</h1>
          <h1>Open source event</h1>
          <h3>From being clueless to becoming timeless<br />
            Become busy with open source</h3>
          <div className="links">
            <Link to='/login'>
              Login <FontAwesomeIcon icon={faArrowRight} />
            </Link>
            <Link to='/'>
              Know More
            </Link>
          </div>
        </div>
        <div className="right">
          <img src={poster} alt={poster} />
        </div>
      </div>

      <section className="what-soc">
        <h1>What is Summer Of Code ?</h1>
        <p> <FontAwesomeIcon icon={faArrowRight} /> Summer of Code is a program where students work on open-source projects, learn coding skills, and get mentored by experts during the summer break.</p>
        <p> <FontAwesomeIcon icon={faArrowRight} /> Apart from the general internships, participating in Summer of Code actively adds value to students resume as they work on real time projects that are supervised by industry experts.</p>
        <p> <FontAwesomeIcon icon={faArrowRight} /> Students getting selected and participating are generally hired by the top companies as the competition is high.</p>
      </section>

    </div>
  )
}

export default Home