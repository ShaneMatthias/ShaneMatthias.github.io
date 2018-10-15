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

              <div className='proj-title'>
                <h1>Retrieve</h1>
              </div>

              <div className='proj-desc'>
                <h1>A Lost & Found application for iOS developed using React-Native. This iOS app allows users to create and view posts based on location. This is done using the Google Maps API.</h1>
                <h1>Click on the thumbnail for more info.</h1>
              </div>

            </div>

            <div className='proj-youtube'>
              <a href='https://github.com/ShaneMatthias/Youtube-Browser'><img alt='Youtube' src={require('../images/youtube.png')} /></a>

              <div className='proj-title'>
                <h1>Youtube Browser</h1>
              </div>

              <div className='proj-desc'>
                <h1>A youtube browser developed using React that has a similar layout to Youtube itself. This web app fetches data using the Youtube API.</h1>
                <h1>Click on the thumbnail for more info.</h1>
              </div>

            </div>

            <div className='proj-weather'>
              <a href='https://github.com/ShaneMatthias/Weather-Forecast'><img alt='Weather' src={require('../images/weather.png')} /></a>

              <div className='proj-title'>
                <h1>Weather Forecast</h1>
              </div>

              <div className='proj-desc'>
                <h1>A weather forecast web app developed using React-Redux.</h1>
                <h1>Click on the thumbnail for more info.</h1>
              </div>

            </div>

            <div className='proj-bookstore'>
              <a href='https://github.com/ShaneMatthias/BookStoreManagement'><img alt='Bookstore' src={require('../images/bookstore.png')} /></a>

              <div className='proj-title'>
                <h1>Bookstore Management</h1>
              </div>

              <div className='proj-desc'>
                <h1>A weather forecast web app developed using React-Redux.</h1>
                <h1>Click on the thumbnail for more info.</h1>
              </div>

            </div>


        </div>



    </div>
  );
}