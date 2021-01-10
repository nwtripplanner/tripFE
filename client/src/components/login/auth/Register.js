import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../actions/authActions";
import classnames from "classnames";
import { Grommet, Box, Form, Button, TextInput } from "grommet";

import Background from '../../../assets/rece1080.jpg'; 

var sectionStyle = {
  backgroundImage: `url(${Background})`,
  "opacity": true,
};

class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
      errors: {},
    };
  }

  componentDidMount() {
    // If logged in and user navigates to Register page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors,
      });
    }
  }

  onChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };
  onSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2,
    };
    console.log(newUser);
    this.props.registerUser(newUser, this.props.history);
  };

  render() {
    const { errors } = this.state;
    return (
      <Grommet style={sectionStyle} full>
        <Box justify="center" direction="row-responsive">
          <Box direction="column">
            <Link to="/">
              <i>keyboard_backspace</i> Back to home
            </Link>
            <div>
              <h4>
                <b>Register</b> below
              </h4>
              <p>
                Already have an account? <Link to="/login">Log in</Link>
              </p>
            </div>
            <Form noValidate onSubmit={this.onSubmit}>
              <Box pad="small">
                <TextInput
                  onChange={this.onChange}
                  value={this.state.name}
                  error={errors.name}
                  id="name"
                  placeholder="name"
                  textAlign="center"
                  type="text"
                  className={classnames("", {
                    invalid: errors.name
                  })}
                />
                <span className="red-text">{errors.name}</span>
                </Box>
                <Box pad="small">
                <TextInput
                  onChange={this.onChange}
                  value={this.state.email}
                  error={errors.email}
                  id="email"
                  placeholder="email"
                  textAlign="center"
                  type="email"
                  className={classnames("", {
                    invalid: errors.email
                  })}
                />
                <span className="red-text">{errors.email}</span>
                </Box>
                <Box pad="small">
                <TextInput
                  onChange={this.onChange}
                  value={this.state.password}
                  error={errors.password}
                  id="password"
                  type="password"
                  placeholder="password"
                  textAlign="center"
                  className={classnames("", {
                    invalid: errors.password
                  })}
                />
                </Box>
                <span className="red-text">{errors.password}</span>
                <Box pad='small'>
                <TextInput
                  onChange={this.onChange}
                  value={this.state.password2}
                  error={errors.password2}
                  id="password2"
                  type="password"
                  textAlign="center"
                  placeholder="confirm password"
                  className={classnames("", {
                    invalid: errors.password2
                  })}
                />
                  </Box>
                <span className="red-text">{errors.password2}</span>
              <Box pad="medium">
                <Button onClick={this.onSubmit}
                   noValidate label="Register Now" pad="xlarge" />
              </Box>
            </Form>
          </Box>
        </Box>
      </Grommet>
    );
  }
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});

export default connect(mapStateToProps, { registerUser })(withRouter(Register));
