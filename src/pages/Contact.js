import React from 'react'
import ContactPizza from "../assets/contact-pizza.png"
import "../styles/Contact.css";
import { useInView } from "react-intersection-observer";

function Contact() {
    const {ref, inView} = useInView({});
    return (
        <div className='contact' ref={ref}>
            <div 
            className='leftSide' 
            style={{backgroundImage:`url(${ContactPizza})`}}
            ></div>
            <div className='rightSide' id={inView ? "fade" : ""}>
                <h1>CONTACT US</h1>
                <form id='contactForm' method='post'>
                    <label htmlFor='name'>FULL NAME</label>
                    <input name='name' autoFocus placeholder='Enter Full Name...' type="text"/>
                    <label htmlFor='email'>EMAIL</label>
                    <input name='email' placeholder='Enter Email...' type="email"/>
                    <label htmlFor='message'>MESSAGE</label>
                    <textarea name='message' rows="6" placeholder="Enter Message..." required></textarea> 
                    <button type='submit'>Send Message</button>           
                </form>
            </div>
            
        </div>
    )
}

export default Contact;
