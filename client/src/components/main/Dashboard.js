import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../login/actions/authActions";
import SearchBar from "./components/SearchBar";
import { Box, Grommet } from 'grommet'; 


class Dashboard extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };
render() {
    const { user } = this.props.auth;

    const theme = {
        global: {
          font: {
            family: 'Roboto',
            size: '18px',
            height: '20px',
          },
        },
      };

return (
      <Grommet theme={theme}>
        <div className="row">
          <Box>
            <h4>
              <b>Hey there,</b> {user.name.split(" ")[0]}
              <p>
                You are logged 
              </p>
            </h4>
            <SearchBar />
            <button
              style={{
                width: "150px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                marginTop: "1rem"
              }}
              onClick={this.onLogoutClick}
            >
              Logout
            </button>
          </Box>
        </div>
      </Grommet>
    );
  }
}
Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { logoutUser }
)(Dashboard);