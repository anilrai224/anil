import React from 'react'
import './header.css'
// import {FaBars} from 'react-icons/fa'
// import {RiCloseFill} from 'react-icons/ri'

const Header = () => {

  return (
    <header id='header-top'>
        <nav className='navigation space-between'>
        {/* <FaBars className='openBar'/> */}
            <div className="navbar">
              <ul className='flex'>
                  <li><a href="#/nn">Home</a></li>
                  <li><a href="#aboutMe__container">About</a></li>
                  <li><a href="#main-container">Skills</a></li>
                  <li><a href="#contact_container">Contact</a></li>
                  <li><a href="#/">Projects</a></li>
              </ul>
            </div>
            {/* <RiCloseFill className='closeBar'/> */}
        </nav>
    </header>
  )
}

export default Header