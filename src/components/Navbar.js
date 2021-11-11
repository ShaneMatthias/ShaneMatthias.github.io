import React, { Component } from 'react';
import { render } from 'react-dom'
import '../styles/Navbar.css';

export default class Navbar extends Component{
    constructor(props) {
        super(props)

        this.state = {
            isTop: true,
            hamburgerToggle: false,
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

    changeIcon = () => {
        this.setState({ hamburgerToggle: !this.state.hamburgerToggle })
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
                        <li><a href='https://drive.google.com/file/d/14V9J4YQXrLtaqGosJRpseIMZyiu_Aei4/view?usp=sharing' target="_blank">Resume</a></li>
                    </ul>
                </nav>
                
                <div className={this.state.hamburgerToggle ? 'hamburger-open' : 'hamburger-close'} onClick={this.changeIcon}>
                    <div className="bar1"></div>
                    <div className="bar2"></div>
                    <div className="bar3"></div>

                <div className={this.state.hamburgerToggle ? 'hamburger-menu-open' : 'hamburger-menu-close'}>
                    <ul>
                        <li><a href='#about-section'>About</a></li>
                        <li><a href='#employment-section'>Employment</a></li>
                        <li><a href='#projects-section'>Projects</a></li>
                        <li><a href='#skills-section'>Skills</a></li>
                        <li><a href='https://drive.google.com/file/d/14V9J4YQXrLtaqGosJRpseIMZyiu_Aei4/view?usp=sharing' target="_blank">Resume</a></li>
                    </ul>
                </div>
                </div>
            </div>
        );
    }
}