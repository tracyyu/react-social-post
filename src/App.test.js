import React from 'react';
import ReactDOM from 'react-dom';
import SocialCard from './SocialCard';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SocialCard />, div);
  ReactDOM.unmountComponentAtNode(div);
});
