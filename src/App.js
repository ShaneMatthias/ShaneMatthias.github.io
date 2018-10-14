import React, { Component } from 'react';
import { Parallax } from 'react-parallax';
import { Banner, About, Employment } from "./components";
import Navbar from './components/Navbar'
import './styles/App.css';

class App extends Component {
  render() {
    return (
      <div className='appWrapper'>
        <Parallax className='parallax' bgImage={require('./images/background2.png')} strength={1100}>
            <Navbar />
            <Banner />
        </Parallax>
        <About />
        <Employment />
      </div>
    );
  }
}

export default App;
