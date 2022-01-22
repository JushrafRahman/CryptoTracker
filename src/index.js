import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App'

ReactDOM.render(
<Router>
    <App />
</Router>    
,document.getElementById('root'));
//passing 'App' as first parameter
//document.get.ElementByID is hooking our 'App' to 'root' div