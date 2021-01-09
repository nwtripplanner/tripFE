import React, { Component } from 'react';


class Signup extends Component {
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
                  <p> create account </p>
                  <div className="info">
                <smallwords><p>first name</p></smallwords>
                  <input
                type="text"
                value={this.state.value}
                onChange={this.handleFN}
                name="first name"
            />
            
            <smallwords><p>last name</p></smallwords>

              <input
                type="text"
                value={this.state.value}
                onChange={this.handleLN}
            />
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
           <smallwords><p>confirm password</p></smallwords>
           <input
                type="text"
                value={this.state.value}
                onChange={this.handleEmail}
            />
            <p> </p>
            <button>
                submit
            </button>
                
              </div>
        </div>
              
              </b>
            </header>
          </div>
         );
    }
}
 
export default Signup;