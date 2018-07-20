import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.scss';
import SocialCard from './components/SocialCard';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<SocialCard />, document.getElementById('root'));
registerServiceWorker();
