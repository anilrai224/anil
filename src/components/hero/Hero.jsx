import React from 'react'
import './hero.css'

const Hero = () => {
  return (
    <div className='main_hero'>
        <div className="typing">
          <div className="wrapper">
              <div className="static-txt">I'm a</div>
              <ul className="dynamic-txts">
                  <li><span>Designer</span></li>
                  <li><span>Developer</span></li>
                  <li><span>Typer</span></li>
                  <li><span>Boss</span></li>
              </ul>
          </div>
        </div>
    </div>
  )
}

export default Hero