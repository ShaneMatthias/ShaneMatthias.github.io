import React, { Component } from 'react';
import '../styles/Navbar.css';

class Navbar extends Component {
    render() {
      return (
        <div className='navbarWrapper'>
            <ul className='navbar'>
                <li><a href='.about'>About</a></li>
                <li><a href='.employment'>Employment</a></li>
                <li><a href='.projects'>Projects</a></li>
                <li><a href='.contact'>Contact</a></li>
            </ul>
        </div>
      );
    }
  }
  
  export default Navbar;