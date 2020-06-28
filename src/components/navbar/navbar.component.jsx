import React from 'react';
import { Link } from 'react-router-dom';

import Avatar from '@material-ui/core/Avatar';

class NavBar extends React.Component {
    constructor() {
        super();

        this.state = {
            iconIsOpen: false
        }
    }

    handleClick = () => {
        this.setState(prevState => ({
            iconIsOpen: !prevState.iconIsOpen
        }))
    }
//${this.state.iconIsOpen ? 'change': null}
    render() {
        return (
            <div className='header'>
                <div className={`container ${this.state.iconIsOpen ? 'change' : null}`} onClick={this.handleClick}>
                    <div className="bar1"></div>
                    <div className="bar2"></div>
                    <div className="bar3"></div>
                </div>
                <h4 style={{fontWeight:'normal'}} className="navBar">
                    <Link className='logo-container' to="/">
                        <Avatar src="/broken-image.jpg" />
                    </Link>
                    <Link className='option' to='/my-projects'>
                        My Projects
                    </Link>
                    <Link className='option' to='/my-certificates'>
                        Certificates
                    </Link>
                </h4>
            </div>
        )
    }
}

export default NavBar;