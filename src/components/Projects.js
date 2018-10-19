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
                <div className='card'>

                    <div className='front'>
                        <img alt='Retrieve' src={require('../images/retrieve.png')} />
                    </div>

                    <div className='back'>
                        <div className='proj-back-content'>
                            <div className='proj-title'>
                                <h1>Retrieve</h1>
                            </div>

                            <div className='proj-desc'>
                                <h1>A Lost & Found application for iOS developed using React-Native. This iOS application acts as a ONLINE lost and found. Items that are lost or found
                                    can be seen on a map which uses the Google Maps API.
                                </h1>
                            </div>

                            <div className='link-button'><a href="https://github.com/ShaneMatthias/Retrieve" target="_blank" >
                                <button>Github</button>
                            </a></div>
                        </div>
                    </div>

                </div>
            </div>

            <div className='proj-youtube'>
                <div className='card'>

                    <div className='front'>
                        <img alt='Youtube' src={require('../images/youtube.png')} />
                    </div>

                    <div className='back'>
                        <div className='proj-back-content'>
                            <div className='proj-title'>
                                <h1>Youtube Browser</h1>
                            </div>

                            <div className='proj-desc'>
                                <h1>A Youtube browser developed using React that has a similar layout to Youtube itself. This web app fetches data using the Youtube API.</h1>
                            </div>
                            
                            <div className='link-button'><a href="https://github.com/ShaneMatthias/Youtube-Browser" target="_blank" >
                                <button>Github</button>
                            </a></div>
                        </div>                   
                    </div>

                </div>
            </div>

            <div className='proj-weather'>
                <div className='card'>

                    <div className='front'>
                        <img alt='Weather' src={require('../images/weather.png')} />
                    </div>

                    <div className='back'>
                        <div className='proj-back-content'>
                            <div className='proj-title'>
                                <h1>Weather Forecast</h1>
                            </div>

                            <div className='proj-desc'>
                                <h1>A weather forecast web application developed using React-Redux allowing users to retrieve real-time weather updates for various cities 
                                    across Canada. A Google Map implementation pin points users to searched cities.
                                </h1>
                            </div>

                            <div className='link-button'><a href="https://github.com/ShaneMatthias/Weather-Forecast" target="_blank" >
                                <button>Github</button>
                            </a></div>
                        </div>
                    </div>

                </div>
            </div>

            <div className='proj-bookstore'>
                <div className='card'>

                    <div className='front'>
                        <img alt='Bookstore' src={require('../images/bookstore.png')} />
                    </div>

                    <div className='back'>
                        <div className='proj-back-content'>
                            <div className='proj-title'>
                                <h1>Bookstore Management</h1>
                            </div>

                            <div className='proj-desc'>
                                <h1>Developed using C++, this program is a basic CRUD application used to store, edit, and delete personal student/bookstore data like courses,
                                    textbooks, and products.
                                </h1>
                            </div>

                            <div className='link-button'><a href="https://github.com/ShaneMatthias/BookStoreManagement" target="_blank" >
                                <button>Github</button>
                            </a></div>
                        </div>
                    </div>
            
                </div>
            </div>

        </div>
    </div>
  );
}