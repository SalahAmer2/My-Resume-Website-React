import React from 'react';
import { Link } from 'react-router-dom';

import Avatar from '@material-ui/core/Avatar';

import './navbar.styles.scss';

const NavBar = () => (
    <div className='header'>
        <div className="toggle">
            <i className="fa fa-bars menu" aria-hidden="true"></i>
        </div>
        <h4 style={{fontWeight:'normal'}} className="navBar">
            <Link className='about-me-icon' to="/">
                <Avatar src="/broken-image.jpg" />
            </Link>
            <div className='projects-and-certificates-icons'>
            <Link className='navbarLink' to='/my-projects'>
                My Projects
            </Link>
            <Link className='navbarLink' to='/my-certificates'>
                My Certificates
            </Link>
            </div>
        </h4>
    </div>
)

export default NavBar;