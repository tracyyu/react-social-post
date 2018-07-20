import React from 'react';
import Logo from './Logo';
import User from './User';
import Timestamp from './Timestamp';

const Header = props => (
    <div className="header">
        <div className="left">
            <Logo logo={props.logo} />
            <User user={props.user} />
        </div>
        <div className="right">
            <Timestamp timestamp={props.timestamp} />
        </div>
    </div>
);

export default Header;