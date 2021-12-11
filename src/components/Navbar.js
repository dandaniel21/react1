import React, { useState } from 'react';
import Logo from "../assets/pizza-logo.png";
import "../styles/Navbar.css";
import ReorderIcon from '@mui/icons-material/Reorder';
import { Link } from "react-router-dom";

function Navbar() {
    const [openLinks, setOpenLinks] = useState(false);

    const toggleNavbar = () => {
        setOpenLinks(!openLinks);
    }

    return (
        <div className='Navbar'>
            <div className='leftSide' id={openLinks ? "open" : "close"}>
                <img src={Logo} alt=''></img>
                <div className='logoName'>myPizza.</div>
                <div className='hiddenLinks'>
                    <Link to="/"> Home </Link>
                    <Link to="/menu"> Menu </Link>
                    <Link to="/about"> About </Link>
                    <Link to="/contact"> Contact </Link>
                </div>
            </div>
            <div className='rightSide'>
                <Link to="/"> Home </Link>
                <Link to="/menu"> Menu </Link>
                <Link to="/about"> About </Link>
                <Link to="/contact"> Contact </Link>
                <button onClick={toggleNavbar}>
                    <ReorderIcon/>
                </button>                
            </div>
        </div>
    );
}

export default Navbar;
