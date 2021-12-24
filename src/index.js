import React from 'react';
import ReactDOM  from 'react-dom';

import App from './App';
import Advisor from './api/index'

const advisor = new Advisor();
ReactDOM.render(<App />, document.getElementById('root'));