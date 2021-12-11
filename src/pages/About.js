import React from 'react'
import AboutPizza from "../assets/about-pizza.jpg"
import "../styles/About.css";
import { useInView } from "react-intersection-observer";

function About() {
    const { ref, inView} = useInView({});
    return (
        <div className='about' ref={ref}>
            <div 
            className='aboutTop'
            style={{backgroundImage:`url(${AboutPizza})`}}
            ></div>
            <div className='aboutBottom' id={inView ? "fade" : ""}>
                <h1>ABOUT US</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum purus magna, blandit nec quam et, vulputate luctus sem. Proin sed tortor at odio condimentum rhoncus. Maecenas urna metus, laoreet nec bibendum ut, imperdiet a tellus. Mauris quis libero massa. Vivamus viverra libero in tellus ultrices pharetra. Aliquam nisi nunc, tristique id elit vel, euismod viverra metus. Sed eget odio molestie, dapibus libero sit amet, iaculis risus. Vestibulum commodo maximus est ut malesuada. Aenean mollis metus vel diam varius vestibulum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce a nulla laoreet est accumsan vestibulum. Nunc eu nunc ut orci venenatis interdum sit amet mattis risus. Nulla malesuada imperdiet commodo. Pellentesque quam erat, auctor accumsan tempor vitae, ultricies ac purus.</p>
            </div>
        </div>
    )
}

export default About;

