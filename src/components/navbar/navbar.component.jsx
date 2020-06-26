import React from 'react';
import { Link } from 'react-router-dom';

import Avatar from '@material-ui/core/Avatar';

const NavBar = () => (
    <div className='header'>
        <div class="toggle">
            <i class="fa fa-bars menu" aria-hidden="true"></i>
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

export default NavBar;