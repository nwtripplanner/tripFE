import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../actions/authActions";
import classnames from "classnames";
import { Grommet, Box, FormField, Form, Button, TextInput } from "grommet";
import Background from '../../../assets/rece1080.jpg'; 

var sectionStyle = {
  backgroundImage: `url(${Background})`,
  "opacity": true,
};

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {},
    };
  }

  componentDidMount() {
    // If logged in and user navigates to Login page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/dashboard"); // push user to dashboard when they login
    }

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
    const userData = {
      email: this.state.email,
      password: this.state.password,
    };
    console.log(userData);
    this.props.loginUser(userData);
  };

  render() {
    const { errors } = this.state;
    return (
      <Grommet style={sectionStyle} full>
        <Box justify="center" direction="row-responsive">
          <Box direction="column" justify="center">
            <Link to="/">
              <i>keyboard_backspace</i> Back to home
            </Link>
            <div>
              <h4>
                <b>Login</b> below
              </h4>
              <p>
                Don't have an account? <Link to="/register">Register</Link>
              </p>
            </div>
            <Box justify="center">
            <Form>
              <FormField name="email">
                <TextInput
                  onChange={this.onChange}
                  value={this.state.email}
                  error={errors.email}
                  id="email"
                  placeholder="email"
                  type="email"
                  textAlign="center"
                  className={classnames("", {
                    invalid: errors.email || errors.emailnotfound,
                  })}
                />
                <label htmlFor="email"></label>
                <span className="red-text">
                  {errors.email}
                  {errors.emailnotfound}
                </span>
              </FormField>
                <TextInput
                  onChange={this.onChange}
                  value={this.state.password}
                  error={errors.password}
                  id="password"
                  type="password"
                  placeholder="password"
                  textAlign="center"
                  className={classnames("", {
                    invalid: errors.password || errors.passwordincorrect,
                  })}
                />
                <label htmlFor="password"></label>
                <span className="red-text">
                  {errors.password}
                  {errors.passwordincorrect}
                </span>
            </Form>
            <Box pad="medium">
            <Button noValidate label="login" pad="xlarge" type="submit" onClick={this.onSubmit}/>
            </Box>
            </Box>
          </Box>
        </Box>
      </Grommet>
    );
  }
}
Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});
export default connect(mapStateToProps, { loginUser })(Login);
