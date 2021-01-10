import { React, Component } from "react";
import { BrowserRouter, Route, Switch} from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./components/login/utils/setAuthToken";
import {
  setCurrentUser,
  logoutUser,
} from "./components/login/actions/authActions";

import {Provider}  from "react-redux";
import store from "./components/login/store";

import Sign from "./components/login/Sign";
import Login from "./components/login/auth/Login";
import Register from "./components/login/auth/Register";
import PrivateRoute from "./components/private-route/PrivateRoute";

import TPage from './components/transportation/TPage.jsx'

import "./App.css";

// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = "./login";
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <Route exact path="/" component={Sign} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Switch>
              <PrivateRoute exact path="/dashboard" component={TPage} />
            </Switch>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
