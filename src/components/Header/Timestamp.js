import React from 'react';
import Moment from 'react-moment';

const Timestamp = props => (
    <p className="timestamp">
        <Moment parse="YYYY-MM-DD HH:mm">
            1976-04-19 12:59
        </Moment>
    </p>
);

export default Timestamp;