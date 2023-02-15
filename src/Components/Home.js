import React from 'react';
import Sidebar from './Sidebar';
import './Home.css';

function Home() {
  return <div className='home'>
    <div className='home-container'>
        {/* SideBar */}
         <Sidebar />
        {/* a container with whatsapp-Logo */}
        <div className='home-bg'>
            <img src='./WhatsAppbg.png' alt='' />
        </div>
    </div>
  </div>;
}

export default Home;
