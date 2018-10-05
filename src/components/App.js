import React, { Component } from 'react';
import Navbar from './Navbar';
import About from './About'; 
import Employment from './Employment';

import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <About />
        <Employment />
      </div>
    );
  }
}

export default App;
