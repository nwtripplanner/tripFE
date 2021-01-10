import React, { Component } from "react";
import { Link } from "react-router-dom";

class Sign extends Component {
  render() {
    return (
        <div>
        <div>   
            <Link to="/register">Register </Link>
        </div>
        <div>
             <Link to="/login"> Login </Link>
        </div>
        </div>
    )
  }
}

export default Sign 