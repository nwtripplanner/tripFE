import React, { Component, useState, useEffect } from 'react';
import { Grommet, Header, Main, Text, Box, Button, Grid, grommet, Avatar, Image } from 'grommet';
// import SidePanel from './components/sidebar';
import Content from './components/content';
<<<<<<< HEAD:client/src/components/accomod/APage.jsx
import NavBar from './components/header';
=======

// import {
//     Image
//   } from './components/logo.png';
>>>>>>> 043df7edae55d8b3e82c0a4a38411419d4f5b0c7:client/src/components/transportation/TPage.jsx


const AppGrid = () => {
    const [sidebar, setSidebar] = useState(true);
  
    return (
      <Grommet full theme={grommet}>
        <Grid
          fill
          rows={['auto', 'flex']}
          columns={['auto', 'flex']}
          areas={[
            { name: 'header', start: [0, 0], end: [1, 0] },
            { name: 'sidebar', start: [0, 1], end: [0, 1] },
            { name: 'main', start: [1, 1], end: [1, 1] },
          ]}
        >
          <Box
            gridArea="header"
            direction="row"
            align="center"
            justify="between"
            pad={{ horizontal: 'medium', vertical: 'small' }}
            background="light-3"
          >
                <Image
                fallback="./components/logo.png"
                src="//v2.grommet.io/assets/logo_not_exists.png"
                />

            <Button onClick={() => setSidebar(!sidebar)}>
              <Text size="large">TripSuite</Text>
            </Button>
            <NavBar />
            <Grommet>
            <Avatar
    border={{ size: 'small', color: 'accent-2' }}
    background="white"
    flex={false}
  >
    SY
  </Avatar>
  <Text>Jane Doe</Text> 
            </Grommet>
            
          </Box>
          {sidebar && (
            <Box
              gridArea="sidebar"
              background="dark-3"
              width="small"
              animation={[
                { type: 'fadeIn', duration: 500 },
                { type: 'slideRight', size: 'xlarge', duration: 150 },
              ]}
            >

                
                
              {[  <Avatar
    border={{ size: 'small', color: 'accent-2' }}
    background="white"
    flex={false}
  >
    SY
  </Avatar>,
  'Transportation', 'Accomodation', 'Lifestyle', 'Costs', 'Plan Trip!'].map(name => (
                <Button key={name} href="#" hoverIndicator>
                  <Box pad={{ horizontal: 'medium', vertical: 'small' }}>
                    <Text>{name}</Text>
                  </Box>
                </Button>
              ))}
            </Box>
          )}
          <Box gridArea="main" justify="left" align="left" background="light-2" size="contain">
            <Content />
          </Box>
        </Grid>
      </Grommet>
    );
  };

class TPage extends Component {
    state = {  }
    render() { 
        return ( 
            <Grommet>
                <AppGrid />

            </Grommet>
         );
    }
}
 
export default TPage;