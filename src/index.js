import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import UpperLower from '../src/component/UpperLower'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<UpperLower />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
