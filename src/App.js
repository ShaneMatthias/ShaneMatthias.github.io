import React, { Component } from 'react';
import { Parallax } from 'react-parallax';
import { Banner, About, Employment, Projects } from "./components";
import Navbar from './components/Navbar'
import './styles/App.css';

class App extends Component {
  render() {
    return (

      <div className='appWrapper'>
        <Parallax className='parallax' bgImage={require('./images/background.png')} strength={1100}>
            <Navbar />
            <Banner />
        </Parallax>

        <span className='anchor' id='about-section'>
          <About />
        </span>

        <span className='anchor' id='employment-section'>
          <Employment />
        </span>

        <span className='anchor' id='projects-section'>
          <Projects />
        </span>
        
      </div>
    );
  }
}

export default App;
