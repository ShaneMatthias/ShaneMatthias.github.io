import React, { Component } from 'react';
import Navbar from './Navbar';
import About from './About';
import Banner from './Banner'; 
import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Banner />
        <About />
      </div>
    );
  }
}

export default App;
