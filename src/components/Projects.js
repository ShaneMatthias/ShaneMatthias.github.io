import React from 'react';
import '../styles/Projects.css';

export const Projects = () => {
  return (
    <div className='projects-container'>
        <div className='projects-title'>
            <h1>Projects</h1>
            <hr></hr>
        </div>

        <div className='projects-content'>

            <div className='proj-retrieve'>
              <a href='https://github.com/ShaneMatthias/Retrieve'><img alt='Retrieve' src={require('../images/retrieve.png')} /></a>
              <h1>
                  Click for more info.
              </h1>
            </div>

            <div className='proj-bookstore'>
              <a href='https://github.com/ShaneMatthias/Retrieve'><img alt='Retrieve' src={require('../images/retrieve.png')} /></a>
              <h1>
                  Click for more info.
              </h1>
            </div>


        </div>



    </div>
  );
}