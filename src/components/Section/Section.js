import React from 'react';
import Aux from '../HOC/Aux';
import Headline from './Headline';
import Summary from './Summary';

import imgSrc from '../../assets/images/refinery-article.png';

const Section = props => (
    <div className="section">
        <Headline
            headline={props.headline}
            imgSrc={props.image}  
        />
        <Summary summary={props.summary}
        />
    </div>
);

export default Section;