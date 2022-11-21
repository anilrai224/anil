import React from 'react'
import './header.css'

const Header = () => {
  return (
    <header id='header-top'>
        <nav className='navigation space-between'>
            {/* <div className="logo">LOGO</div> */}
            <ul className='flex'>
                <li><a href="#/nn">Home</a></li>
                <li><a href="#aboutMe__container">About</a></li>
                <li><a href="#main-container">Skills</a></li>
                <li><a href="#contact_container">Contact</a></li>
                <li><a href="#/">Projects</a></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header