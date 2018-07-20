import React from 'react';

const Headline = props => (
    <div className="headline">
        <h2>
            {props.headline}
        </h2>
        <img src={props.imgSrc}/>
    </div>
);

export default Headline;