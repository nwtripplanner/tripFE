import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Signup from './signup';
import Signin from './signin';
import SearchPage from './homepage/SearchPage';
import NavBar from './homepage/NavBar';
import TPage from './transportation/TransportPage';


ReactDOM.render(
  <React.StrictMode>
    {/* <NavBar /> */}
    <SearchPage />
    {/* <TPage /> */}
    {/* <Inputes /> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
