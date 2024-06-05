import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='Nav'>
      <div className='Logo'>
      <a href='/'>Your.BookShelf</a>
      </div>
      <div className={`Headers ${isOpen ? 'open' : ''}`}>
        <a href='/Categories'>Categories</a>
        <a href='/Blogs'>Blogs</a>
        <a href='/About Us'>About Us</a>
      </div>
      <div className='SignIn'>
        SignIn
      </div>
      <div className='Hamburger' onClick={toggleSidebar}>
        &#9776;
      </div>
      {/* {isOpen && <div className='ToggleBtn' onClick={toggleSidebar}>Close</div>} */}
    </div>
  );
}

export default Navbar;
