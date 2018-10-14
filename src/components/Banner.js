import React, { Component } from 'react';
import '../styles/Banner.css';

export const Banner = () =>  {
    return (
        <div className='bannerWrapper'>
            <div className='bannerTitle'>
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