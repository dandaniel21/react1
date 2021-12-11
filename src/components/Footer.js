import React from 'react';
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedinIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from '@mui/icons-material/Email';
import "../styles/Footer.css";

function Footer() {
    return (
        <div className='footer'>
            <div className='footerContact'>
                <div className='footerLink'>
                    <h1>Got any question ?</h1>
                    <h2>Feel free to contact us !</h2>
                    <p className='emailContact'><EmailIcon/>mypizza-customercare@example.com</p>
                </div>
                <div className='socialMedia'>
                <InstagramIcon/>
                <TwitterIcon/>
                <FacebookIcon/>
                <LinkedinIcon/>
                </div>
            </div>
            <p className='copyright'>myPizza. | Created by Daniel Kristianto &copy; 2021</p>
        </div>
    )
}

export default Footer;
