import React from 'react';
import { Link } from 'react-router-dom';

import Avatar from '@material-ui/core/Avatar';

const NavBar = () => {
    function myFunction(x) {
        x.classList.toggle("change");
    }

    return (
        <div className='header'>
            <div class="container" onClick={myFunction(this)}>
                <div class="bar1"></div>
                <div class="bar2"></div>
                <div class="bar3"></div>
            </div>
            <h4 style="font-weight:normal" class="navBar">
                <Link className='logo-container' to="/">
                    <Avatar src="/broken-image.jpg" />
                </Link>
                <Link className='option' to='/my-projects'>
                    SHOP
                </Link>
                <Link className='option' to='/my-certificates'>
                    CONTACT
                </Link>
            </h4>
        </div>
    )
}
export default NavBar;