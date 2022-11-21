import React from 'react'
import './contact.css'
import {FaFacebookF} from 'react-icons/fa'
import {MdOutlineMailOutline} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_6t51whu', 'template_066lv9g', form.current, 'vXZljeWMxufKuS4Nb')
        
        e.target.reset()
      };
  return (
    <>
      <div className="container">
        <h1>Contact <span>Me</span></h1>
        <div id='contact_container'>
            <div className="left_contact">
                <div className="contact_list">
                    <FaFacebookF className='contact_icon'/>
                    <h4>Anil Rai</h4>
                    <a href="https://m.me/100014561719226" target='blank'>Send a message</a>
                </div>
                <div className="contact_list">
                    <MdOutlineMailOutline className='contact_icon'/>
                    <h4>Anil Rai</h4>
                    <a href="mailto:tw4empire04@gmail.com" target='blank'>Send a message</a>
                </div>
                <div className="contact_list">
                    <BsWhatsapp className='contact_icon'/>
                    <h4>Anil Rai</h4>
                    <a href="https://api.whatsapp.com/send?phone=+9779816731608" target='blank'>Send a message</a>
                </div>
            </div>
            <form ref={form} onSubmit={sendEmail}>
                <input type="text" name='name' placeholder='Your Name' required />
                <input type="email" name="email" placeholder='Your Email' required />
                <textarea name="message" cols="30" rows="10" placeholder='Your Message' required></textarea>
                <button type='submit'>Submit</button>
            </form>
        </div>
    </div>
    </>
  )
}

export default Contact