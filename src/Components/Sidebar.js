import React from 'react';
import TollIcon from '@mui/icons-material/Toll';
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import './Sidebar.css';
import UserProfile from './UserProfile';
import { useNavigate } from 'react-router-dom';
function Sidebar() {
  const navigate = useNavigate();

  const handleclick= () => {
    navigate("/ChatPage")



  } 
  return (
    <div className='sidebar'>
        <div className='sidebar-header'>
            <div className='sidebar-header-img'>
                <img src='./user.png' alt='' />
            </div>
            <div className='sidebar-header-btn'>
              <TollIcon />
              <InsertCommentIcon />
              <MoreVertIcon />
            </div>
        </div>

        <div className='sidebar-search'>
            <div className='sidebar-search-input'>
                <SearchIcon />
                <input type='text' name='search'
                placeholder='Search...' />
            </div>
        </div>

        <div className='sidebar-chat-list'>
          <div  onClick={handleclick}>

           <UserProfile name='John Cena' photoURL='./dj1.png' />
          </div>
          <div  onClick={handleclick}>
            <UserProfile name='The Rock' photoURL='./dj5.png' />
          </div>
          <div  onClick={handleclick}>
            <UserProfile name='Dwayne Johnson' photoURL='./dj2.png' />
          </div>
          <div  onClick={handleclick}>
            <UserProfile name='The Undertaker' photoURL='./dj3.png' />
          </div>
          <div  onClick={handleclick}>
            <UserProfile name='Stone Cold Steve Austin' photoURL='./dj4.png' />
          </div>
          <div  onClick={handleclick}>
            <UserProfile name='Shawn Michaels' photoURL='./dj6.png' />
          </div>
          <div  onClick={handleclick}>
            <UserProfile name='Robert Downey Jr.' photoURL='./dj7.png' />
          </div>
          <div  onClick={handleclick}>
            <UserProfile name='Justin Bieber' photoURL='./dj7.png' />
            </div>
            <div  onClick={handleclick}>
              <UserProfile name='Will Smith' photoURL='./dj1.png' />
            </div>
            <div  onClick={handleclick}>
              <UserProfile name='Cristiano Ronaldo' photoURL='./dj5.png' />
            </div>
            <div  onClick={handleclick}>
              <UserProfile name='Elon Musk' photoURL='./dj4.png' />
            </div>
           
           
        </div>
      </div>
  );
}

export default Sidebar;
