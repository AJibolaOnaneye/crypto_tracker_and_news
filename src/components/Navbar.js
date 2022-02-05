import React, { useState } from 'react';
// import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { FaBars, FaTimes } from 'react-icons/fa'
import  Logo  from '../assets/Dc-logo.png'

function Navbar() {
  const [click, setClick] = useState(false);
  // const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  // const showButton = () => {
  //   if (window.innerWidth <= 960) {
  //     setButton(false);
  //   } else {
  //     setButton(true);
  //   }
  // };

  // useEffect(() => {
  //   showButton();
  // }, []);

  // window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
           <img src={Logo} className='logo' alt='logo img' />
          </Link>
          {/* <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            TRVL
            <i className='fab fa-typo3' />
          </Link> */}
          {/* <div className='menu-icon' onClick={handleClick}>
            <i className={click ? <FaTimes /> : <FaBars className='hamb-color' />} />
          </div> */}
          <div className='menu-icon' onClick={handleClick}>
            {/* <i className={click ? 'fas fa-times' : 'fas fa-bars'} /> */}
           {click ? <FaTimes /> : <FaBars />}
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/coins' className='nav-links' onClick={closeMobileMenu}>
                Market
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/blogs'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Blog
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/about'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                About
              </Link>
            </li>

            <li>
              {/* <Link
                to='/sign-up'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link> */}
          {/* <button className='btn'>Sign Up</button> */}

            </li>
          </ul>
          {/* {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>} */}
          {/* <button className='btn'>Sign Up</button> */}
         
          {/* {button &&  <button className='btn'>Sign Up</button>} */}
        </div>
      </nav>
    </>
  );
}

export default Navbar;