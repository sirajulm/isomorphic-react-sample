import React from 'react';
import ReactDOM from 'react-dom';
import App from 'components/app';
import Footer from 'components/footer';

ReactDOM.render(<App message="React App" />, document.querySelector('.app'));
ReactDOM.render(<Footer />, document.querySelector('.footer'));