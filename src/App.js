import React, { Component } from 'react';
import { Parallax } from 'react-parallax';
import ScrollableAnchor from 'react-scrollable-anchor'
import { Banner, About, Projects, Footer, Skills } from "./components";
import Navbar from './components/Navbar';
import EmploymentTimeline from './components/EmploymentTimeline';
import './styles/App.css';


export default class App extends Component {
  render() {
    return (

      <div className='appWrapper'>
        <Parallax className='parallax' bgImage={require('./images/background.png')} strength={1100}>
            <Navbar />
            <Banner />
        </Parallax>

        <ScrollableAnchor className='anchor' id='about-section'>
          <div><About /></div>
        </ScrollableAnchor>

        <ScrollableAnchor className='anchor' id='employment-section'>
          <div><EmploymentTimeline /></div>
        </ScrollableAnchor>

        <ScrollableAnchor className='anchor' id='projects-section'>
          <div><Projects /></div>
        </ScrollableAnchor>

        <ScrollableAnchor id='skills-section'>
          <div><Skills /></div>
        </ScrollableAnchor>

        <Footer />

      </div>
    );
  }
}