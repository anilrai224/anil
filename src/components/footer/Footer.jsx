import React from 'react'
import './footer.css'
import {RiFacebookFill} from 'react-icons/ri'
import {BsInstagram} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'
import {ImLinkedin2} from 'react-icons/im'

const Footer = () => {
  return (
    <>
      <div className='footer'>
        <div className="container">
          <div className="footer_content">
            <div className="footer_logo">
              <h1>ANIL <span>RAI</span></h1>
            </div>
            <div className="header_links">
              <ul>
                <li><a href="#header-top">Home</a></li>
                <li><a href="#aboutMe__container">About me</a></li>
                <li><a href="#main-container">Skills</a></li>
                <li><a href="#contact_container">Contact</a></li>
                <li><a href="#/">Projects</a></li>
              </ul>
            </div>
            <div className="social_links">
              <div><RiFacebookFill  className="social_links-icon"/></div>
              <div><BsInstagram  className="social_links-icon"/></div>
              <div><ImLinkedin2  className="social_links-icon"/></div>
              <div><BsTwitter  className="social_links-icon"/></div>
            </div>
            <div className="copyright">&copy; <a href="https://www.linkedin.com/in/anil-rai-4a38ba232/" target='blank'>ANIL RAI</a>. All Rights Reserved.</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer