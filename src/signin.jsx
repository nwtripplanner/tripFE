import React, { Component } from 'react';


class Signin extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="App">
            <header className="SU-header">
              <b>
              <p>
                <code>trip app name</code>
              </p>
              <div className="rectangle">
                  <p> login </p>
                  <div className="info">
                
           <smallwords><p>email</p></smallwords>
           <input
                type="text"
                value={this.state.value}
                onChange={this.handleEmail}
            />
           <smallwords><p>password</p></smallwords>
           <input
                type="text"
                value={this.state.value}
                onChange={this.handleEmail}
            />
            <p> </p>
            <a href="https://www.youtube.com/">
                <smalllinks>forgot password</smalllinks>
            </a>
            <p> </p>
            <a href="https://www.google.ca/">
            <smalllinks>sign up</smalllinks>
            </a>
            <p> </p>

            <a href="https://www.youtube.com/">
                start planning
            </a>
                
              </div>
        </div>
              
              </b>
            </header>
          </div>
         );
    }
}
 
export default Signin;