import React, { Component } from 'react';
import { render } from 'react-dom'
import '../styles/Navbar.css';

export default class Navbar extends Component{
    constructor(props) {
        super(props)

        this.state = {
            isTop: true,
        };
    }
    
    componentDidMount() {
        document.addEventListener('scroll', () => {
            const isTop = window.scrollY < 100;
            if (isTop !== this.state.isTop) {
                this.setState({ isTop })
            }
        });
    }

    render() {
        return (
            <div>
                <nav className={this.state.isTop ? 'nav': 'nav-black'}>
                    <ul className="navbar">
                        <li><a href='#about-section'>About</a></li>
                        <li><a href='#employment-section'>Employment</a></li>
                        <li><a href='#projects-section'>Projects</a></li>
                        <li><a href='#skills-section'>Skills</a></li>
                        <li><a href='https://drive.google.com/open?id=1wUezNf7BUs8JM9lHcNJMCtatXYzRHXJD' target="_blank">Resume</a></li>
                    </ul>
                </nav>
            </div>
        );
    }
}