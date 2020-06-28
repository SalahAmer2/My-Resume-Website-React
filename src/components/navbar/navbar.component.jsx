import React from 'react';
import { Link } from 'react-router-dom';

import MenuIcon from '@material-ui/icons/Menu';
import Avatar from '@material-ui/core/Avatar';

import './navbar.styles.scss';

class NavBar extends React.Component {
    constructor() {
        super();

        // this.state = {
        //     iconIsOpen: false
        // }
    }

    // handleClick = () => {
    //     this.setState(prevState => ({
    //         iconIsOpen: !prevState.iconIsOpen
    //     }))
    // }

    render() {
        return (
            <div className='header'>
                {/* <div className={`container${this.state.iconIsOpen ? ' change' : ""}`} onClick={this.handleClick}>
                    <div className="bar1"></div>
                    <div className="bar2"></div>
                    <div className="bar3"></div>
                </div> */}
                {/* <MenuIcon className='toggle' /> */}
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
    }
}

export default NavBar;