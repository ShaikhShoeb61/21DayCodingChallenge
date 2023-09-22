import React from 'react';
import '../index.css';
import { FiUser} from 'react-icons/fi';
import { FiShoppingBag } from 'react-icons/fi'; 
import { FiMenu } from 'react-icons/fi'; 


const logo = "https://cdn.freebiesupply.com/images/large/2x/hm-logo-png-transparent.png"; // Corrected placement of the alt attribute

const Navbar = () => {
    
  return (
    <>
      <div className='navbar'>
        <div className="hamburger">
          <FiMenu  className='hamburger-icon'/> 
        </div>
        <div className="brand-logo-name">
          <img
            src={logo}
            alt="H&M Logo" 
          />
        </div>
        <div className="user-interaction"> 
          <FiUser />
          <FiShoppingBag />
        </div>
      </div>
    </>
  );
}

export default Navbar;
