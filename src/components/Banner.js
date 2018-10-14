import React, { Component } from 'react';
import '../styles/Banner.css';

export const Banner = () =>  {
    return (
        <div className='banner-container'>
            <div className='banner-title'>
                <div>
                    <p id='name'>Shane Loong</p>
                </div>
                <div>
                    <p>Software Developer</p>
                </div>
            </div>
        </div>
    );
}