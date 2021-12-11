import React from 'react';
import "../styles/Home.css";
import { Link } from "react-router-dom";
import BannerImage from "../assets/pizza.jpg"

function Home() {
    return (
        <div className='home' style={{backgroundImage:`url(${BannerImage})`}}>
            <div className='headerContainer' >
                <h1>Welcome to Pizza Mania!</h1>
                <h1>myPizza</h1>
                <p>PIZZA FOR EVERYONE !</p>
                <Link to="/menu">
                    <button>OUR MENU</button>
                </Link>
            </div>
        </div>
    );
}

export default Home
