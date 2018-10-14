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
            <h1>
              Currently employed as a part time developer here. My team and I made the decision on using React and Redux to develop a web application called Asset Information Model (AIM).
              This decision was made based on the fact that this application was planned out to be a single page application with multiple complexed features. The reason Redux was taken into 
              consideration was because we wanted to decrease unnecessary data transfer between components by centralizing state management. The back-end is being created with a NodeJs
              server and a PSQL Database.
            </h1>
            <a href='http://cims.carleton.ca/#/blogs/MappingEasternOntario'> Here is what's being developed.</a>
          </div>

          <div className='emp-bns'>
            <img alt='BNS' className='bns' src={require('../images/bns.png')} />
            <h1>I WORK AT BNS YAYYY</h1>
          </div>



        </div>
    </div>
  );
}
