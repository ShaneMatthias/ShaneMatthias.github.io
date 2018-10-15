import React from 'react';
import '../styles/Employment.css'

export const Employment = () => {
  return (
    <div className='emp-container'>

      <div className='emp-title'>
          <h1>Employment</h1>
          <hr></hr>
        </div>

        <div className='emp-content'>

          <div className='emp-cims'>
            <div className='emp-img-container'><img alt='CIMS' className='cims' src={require('../images/cims.png')} /></div>
              <div className='cims-desc'><h1>
                  Currently employed as a part time developer at CIMS. My team and I made the decision on using React and Redux to develop a web application called Asset Information Model (AIM).
                  This decision was made based on the fact that this application was planned out to be a single page application with multiple complexed features. The reason Redux was taken into 
                  consideration was because we wanted to decrease unnecessary data transfer between components by centralizing state management. The back-end is being created with a NodeJs
                  server and a PSQL Database.
                  </h1>
                  <a href='http://cims.carleton.ca/#/blogs/MappingEasternOntario'> Here is what's being developed.</a>
              </div>
          </div>
          <hr></hr>

          <div className='emp-bns'>
            <div className='emp-img-container'><img alt='BNS' className='bns' src={require('../images/bns.png')} /></div>
              <h1>
              At the time I was employed at BNS, I was put in a team of developers who were responsible for refactoring the mobile application. It was refactored into a clean and responsive mobile website by using
              the appropriate HTML and CSS structure. Part of my time here was participating in code reviews amongst the team to ensure code readibility. Weekly meetings were crucial for product demos and
              discussions about design patterns for the website.
            </h1>
          </div>
          <hr></hr>

          <div className='emp-cng'>
            <img alt='CNG' className='cng' src={require('../images/carleton.png')} />
            <h1>
              I worked as a Computer Network Consultant at Carleton University for almost half of my University life. My duties as a network consultant were to resolve network issues by
              maintaining the server room and ethernet socket as well as repairing computers by dismantling, assembling and swapping out parts in computers. Apart from that, I've also helped
              with inserting data into a SQL database using SQL queries. 
            </h1>
          </div>



        </div>
    </div>
  );
}
