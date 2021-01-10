import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App'
import reportWebVitals from './reportWebVitals';
// import Signup from './signup';
// import Signin from './signin';
// import SearchPage from './components/SearchPage';
// import NavBar from './components/NavBar';
// import Transport from './components/transportation/TransportPage';
import App from './App'
import TPage from './components/transportation/TPage.jsx';


ReactDOM.render(
  <React.StrictMode>
    {/* <Transport /> */}
    {/* <SearchPage /> */}
    {/* <App /> */}
    <App />

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
