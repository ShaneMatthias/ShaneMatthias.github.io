import React, { Component } from 'react';
import Navbar from './Navbar';
import About from './About'; 
import '../style/App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <About />
      </div>
    );
  }
}

export default App;
