import React, { Component } from 'react';
import { Banner, About, Employment } from "./components";
import Navbar from './components/Navbar'
import './styles/App.css';

class App extends Component {
  render() {
    return (
      <div className='appWrapper'>
        <header>
          <Navbar />
          <Banner />
        </header>

        <About />
        <Employment />
      </div>
    );
  }
}

export default App;
