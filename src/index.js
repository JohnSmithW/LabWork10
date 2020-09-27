import React from 'react';
import ReactDom from 'react-dom';
import App from './app';

const rootDiv = document.createElement('div');
rootDiv.id = 'root';
document.body.appendChild(rootDiv);

ReactDom.render(<App />, document.querySelector('#root'));
