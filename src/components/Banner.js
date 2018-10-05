import React, { Component } from 'react';
import '../styles/Banner.css';
import background from '../images/background.png';

export default class Banner extends Component  {
    render() {
        return (
            <div className='bannerWrapper'>
                <div className='h2wrapper'><h2>SHANE LOONG</h2></div>
                <img id='bannerImg' src={require('../images/background.png')} />
            </div>
        );
    }
}