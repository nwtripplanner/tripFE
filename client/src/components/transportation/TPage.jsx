import React, { Component, useState, useEffect } from "react";
import {
  Grommet,
  Header,
  Main,
  Text,
  Box,
  Button,
  Grid,
  grommet,
  Avatar,
  Image,
} from "grommet";
import SidePanel from "./components/sidebar";
import NavBar from "./components/header";
import Content from "./components/content";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../login/actions/authActions";

// =======
// import { Grommet, Header, Main, Text, Box, Button, Grid, grommet, Avatar, Image } from 'grommet';
// // import SidePanel from './components/sidebar';
// import Content from './components/content';
// <<<<<<< HEAD:client/src/components/accomod/APage.jsx
// import NavBar from './components/header';
// =======

const AppGrid = (props) => {

  const [sidebar, setSidebar] = useState(true);

  return (
    <Grommet full theme={grommet}>
      <Grid
        fill
        rows={["auto", "flex"]}
        columns={["auto", "flex"]}
        areas={[
          { name: "header", start: [0, 0], end: [1, 0] },
          { name: "sidebar", start: [0, 1], end: [0, 1] },
          { name: "main", start: [1, 1], end: [1, 1] },
        ]}
      >
        <Box
          gridArea="header"
          direction="row"
          align="center"
          justify="between"
          pad={{ horizontal: "medium", vertical: "small" }}
          background="dark-2"
        >
          <Image src="//v2.grommet.io/logo.png" />

          <Button onClick={() => setSidebar(!sidebar)}>
            <Text size="large">TripSuite</Text>
          </Button>
          <NavBar />
          <Grommet>
            <Box direction="row-responsive">
            <Avatar
              border={{ size: "small", color: "accent-2" }}
              background="white"
              flex={true}
            >
    
            </Avatar>
            <Text>{props.user.name.split(" ")[0]}</Text>
            <Box pad="medium" direction="column" justify="center">
            <Button label="logout" onClick={props.logout}/>
            </Box>
            </Box>
          </Grommet>
        </Box>
        {sidebar && (
          <Box
            gridArea="sidebar"
            background="dark-3"
            width="small"
            animation={[
              { type: "fadeIn", duration: 500 },
              { type: "slideRight", size: "xlarge", duration: 150 },
            ]}
          >
            {[
              <Avatar
                border={{ size: "small", color: "accent-2" }}
                background="white"
                flex={false}
              >
                Logout
              </Avatar>,
              "Transportation",
              "Accomodation",
              "Lifestyle",
              "Costs",
              "Plan Trip!",
            ].map((name) => (
              <Button key={name} href="#" hoverIndicator>
                <Box pad={{ horizontal: "medium", vertical: "small" }}>
                  <Text>{name}</Text>
                </Box>
              </Button>
            ))}
          </Box>
        )}
        <Box gridArea="main" justify="left" align="left">
          <Content />
        </Box>
      </Grid>
    </Grommet>
  );
};

class TPage extends Component {
  
  state = {};

  onLogoutClick = (e) => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    const { user } = this.props.auth;
    console.log(user)
    return (
      <Grommet>
        <AppGrid user={user} logout={this.onLogoutClick} />
      </Grommet>
    );
  }
}

TPage.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { logoutUser }
)(TPage);

