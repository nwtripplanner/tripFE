import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Grommet, Button, Box } from "grommet";
import Background from '../../assets/rece1080.jpg'; 

var sectionStyle = {
  backgroundImage: `url(${Background})`,
  "opacity": true,
};

class Sign extends Component {
  render() {
    return (
      <Grommet style={sectionStyle} full>
        <Box alignContent="center">
          <Box pad="xlarge">
            <Box alignContent="center" align="center" justify="center">
              <Box pad="xlarge" flex align="center" justify="center">
                <Box pad="xlarge" flex align="center" justify="center">
                  <Box pad="xlarge" flex align="center" justify="center">
                    <Box>TripSuite</Box>
                    <Box
                      align="center"
                      justify="center"
                      margin="medium"
                      pad="small"
                    >
                      <Link to="/register">
                        <Button label="register" />
                      </Link>
                    </Box>
                    <Box>----- or -----</Box>
                    <Box
                      align="center"
                      justify="center"
                      margin="medium"
                      pad="small"
                    >
                      <Link to="/login">
                        <Button label="login" />
                      </Link>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Grommet>
    );
  }
}

export default Sign;
