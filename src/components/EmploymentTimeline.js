import React, { Component } from 'react';
import { VerticalTimeline, VerticalTimelineElement, SchoolIcon }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../styles/EmploymentTimeline.css';

export default class EmploymentTimeline extends Component {
    render() {
        return ( 
            
            <div className='projTL-container'>
                <div className='emp-title'>
                    <h1>Employment</h1>
                    <hr></hr>
                </div>
                
                <VerticalTimeline>
                    <VerticalTimelineElement className='vertical-timelime-element--work'>

                        <h3 className="vertical-timeline-element-title">Software Developer (RA)</h3>
                        <h4 className="vertical-timeline-element-subtitle">CIMS</h4>
                        <h4 className="vertical-timeline-element-subtitle">July 2018 - December 2018</h4>
                        <img className='cims-img' src={require('../images/cims.png')} />
                        <p>
                        Currently employed as a part time developer at CIMS. My team and I made the decision on using React and Redux to develop a web application called Asset Information Model (AIM).
                        This decision was made based on the fact that this application was planned out to be a single page application with multiple complexed features. The reason Redux was taken into 
                        consideration was because we wanted to decrease unnecessary data transfer between components by centralizing state management. The back-end is being created with a NodeJs
                        server and a PSQL Database.
                        </p>
                        <a href='http://cims.carleton.ca/#/blogs/MappingEasternOntario'> Here is what's being developed.</a>

                    </VerticalTimelineElement>

                    <VerticalTimelineElement className='vertical-timeline-element--work' >

                        <h3 className="vertical-timeline-element-title">Front-End Developer</h3>
                        <h4 className="vertical-timeline-element-subtitle">BNS</h4>
                        <h4 className="vertical-timeline-element-subtitle">May 2017 - July 2017</h4>
                        <img className='cims-img' src={require('../images/bns.png')} />
                        <p>
                        At the time I was employed at BNS, I was put in a team of developers who were responsible for refactoring the mobile application. It was refactored into a clean and responsive mobile website by using
                        the appropriate HTML and CSS structure. Part of my time here was participating in code reviews amongst the team to ensure code readibility. Weekly meetings were crucial for product demos and
                        discussions about design patterns for the website.
                        </p>

                    </VerticalTimelineElement>

                    <VerticalTimelineElement className='vertical-timeline-element--work' >

                        <h3 className="vertical-timeline-element-title">Computer Network Consultant</h3>
                        <h4 className="vertical-timeline-element-subtitle">CNG</h4>
                        <h4 className="vertical-timeline-element-subtitle">May 2017 - July 2017</h4>
                        <img className='cims-img' src={require('../images/carleton.png')} />
                        <p>
                        I worked as a Computer Network Consultant at Carleton University for almost half of my University life. My duties as a network consultant were to resolve network issues by
                        maintaining the server room and ethernet socket as well as repairing computers by dismantling, assembling and swapping out parts in computers. Apart from that, I've also helped
                        with inserting data into a SQL database using SQL queries. 
                        </p>

                    </VerticalTimelineElement>
                </VerticalTimeline>
            </div>
        )
    }

}