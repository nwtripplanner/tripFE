import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App'
import reportWebVitals from './reportWebVitals';
// import Signup from './signup';
// import Signin from './signin';
import SearchPage from './components/SearchPage';
import TPage from './components/transportation/TPage';
import Login from './components/login/auth/Login';
import Reg from './components/login/auth/Register';

import APage from './components/accomod/APage';
import Filter from './components/accomod/components/filter';



ReactDOM.render(
  <React.StrictMode>
    {/* <Transport /> */}
    {/* <SearchPage /> */}
    {/* <App /> */}
    {/* <TPage /> */}
    {/* <Filter /> */}
    <APage />

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
