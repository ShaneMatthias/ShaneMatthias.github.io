import React from 'react';
import '../styles/Footer.css';

export const Footer = () => {
    return (
        <div className='footer-container'>

            <div className='footer-title'>
                <h1>Get In Touch</h1>
                <hr></hr>
            </div>
            
            <div className='footer-content'>
                <a href="mailto:shanematthiasloong@hotmail.com" target="_blank"><i className="fa fa-envelope-square fa-2x"></i></a>
                <a href="https://www.linkedin.com/in/shaneloong/" target="_blank"><i className="fab fa-linkedin fa-2x"></i></a>
                <a href="https://github.com/ShaneMatthias" target="_blank"><i className="fab fa-github-square fa-2x"></i></a>
                <a href="https://twitter.com/ShaneMatthias" target="_blank"><i className="fab fa-twitter-square fa-2x"></i></a>
            </div>
        </div>
    )
}