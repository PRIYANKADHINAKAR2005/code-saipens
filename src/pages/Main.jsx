import React, { useState } from 'react';
import Header from '../components/Header';
import Home from './Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '../css/header.css';
import '../css/style.css';
import '../css/home.css';
import '../css/side-bar.css';
import Leaderboard from './Leaderboard';
import ContactUs from './ContactUs';
import Profile from './Profile';
import RepoDets from './RepoDets';
import UserDets from './UserDets';
import Sidebar from '../components/Sidebar';

const Main = () => {

  const [isAside, setIsAside] = useState(false);

  return (
    <BrowserRouter>
      <Header isAside={isAside} setIsAside={setIsAside} />
      <Sidebar isAside={isAside} setIsAside={setIsAside} />
      <div className='main'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/dashboard' element={<RepoDets />} />  {/* All repos will be shown*/}
          <Route path='/dashboard/:repoName' element={<RepoDets />} /> {/*when i click any specific repo, pull reqs of that repo will be shown*/}
          <Route path='/dashboard/user' element={<UserDets />} /> {/* Display All users only */}
          <Route path='/dashboard/user/:userName' element={<UserDets />} /> {/* when i click specific user, all pull reqs made by him will be shown */}
          <Route path='/leaderboard' element={<Leaderboard />} /> {/* leaderboard */}
          <Route path='/profile' element={<Profile />} /> {/* profile */}
          <Route path='/contact-us' element={<ContactUs />} /> {/* contact-us */}


          <Route path='*' element={<h1 style={{ width: '100vw', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Sorry Sapiend, There's no content ahead🙌</h1>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default Main;
