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
          <div>
            <img className ='photo' alt='photo' src={require('../images/photo.png')} />
          </div>

            <div className='about-desc'>
              <h1>I am Shane, and here is a summarized paragraph about me. </h1>
              <h1>I have a passion for web development. What keeps me going is being able to create and maintain new features, as well as planning out and designing the perfect flow of code. I take joy in being the prime of a specific feature of an app. It's like being important and impactful for a part of the company.</h1>
              <h1>Apart from taking joy for being impactful, I also take joy in constantly learning and improving myself. It just feels good! </h1>
            </div>

        </div>
    </div>
  );
}