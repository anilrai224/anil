import React from 'react'
import './aboutme.css'
import me from '../../assets/me.jpg'

const Aboutme = () => {
  return (
  <>
    <div id='aboutMe__container'>
      <h1>About <span>Me</span></h1>
      <div className="aboutMe-content">
        <div className="aboutMe-avatar">
          <img src={me} alt="Me" />
        </div>
        <div className="aboutMe-description">
          <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor quam porro minus consectetur! Reprehenderit, voluptatem praesentium! Optio reprehenderit, exercitationem nemo, non sapiente ad temporibus ducimus fugiat, libero adipisci possimus distinctio.
          </p>
          <a href="#contact_container" className="lets-talk">Let's Talk</a>
        </div>
      </div>
    </div>
    </>
  )
}

export default Aboutme