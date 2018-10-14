import React from 'react';
import '../styles/About.css';

export const About = () => {
  return (
    <div className='about-container'>

        <div className='about-title'>
          <h1>About</h1>
          <hr></hr>
        </div>

      
        <div className='about-content'>
          <img className ='photo' alt='photo' src={require('../images/photo.png')} />
            <h1>To the person on my website, Hello! My name is Shane, and here is a summarized paragraph about me. </h1>
            <h1>I have a passion for web development. What keeps me going is the part where I get to develop and design unique features for various applications! For the most part, creating things with code is fun.</h1>
            <h1>I also do full-stack development. Creating a back-end, connecting it to the front-end and database is also part of what I do and what I love doing.</h1>
        </div>
    </div>
  );
}