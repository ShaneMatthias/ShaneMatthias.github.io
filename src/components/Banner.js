import React, { Component } from 'react';
import '../styles/Banner.css';

export default class Banner extends Component  {
    render() {
        return (
            <div className='bannerwrapper'>
                <div className='h2wrapper'>
                    <h2>SHANE LOONG</h2>
                </div>
                <div className="imgwrapper'">
                    <img id='bannerImg' src={require('../images/background.png')} />
                </div>
            </div>
        );
    }
}