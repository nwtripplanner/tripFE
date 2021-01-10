import React, { Component, useState, useEffect } from 'react';
<<<<<<< HEAD
import { Grommet, Header, Main, Text, Box, Button, Grid, grommet, Avatar, Image, DateInput, FormField } from 'grommet';
import SidePanel from './components/sidebar';
import NavBar from './components/header';
import Content from './components/content';

=======
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
>>>>>>> 043df7edae55d8b3e82c0a4a38411419d4f5b0c7


const AppGrid = () => {
    const [sidebar, setSidebar] = useState(true);
<<<<<<< HEAD

    const When = ({keyword,setKeyword}) => {
      const [value, setValue] = React.useState();
    const onChange = event => {
      const nextValue = event.value;
      console.log('onChange', nextValue);
      setValue(nextValue);
    };
    
    return (
      <Grommet full theme={grommet}>
      <Box fill="horizontal" justify="start" align="center" background="light-2">
        <Box width="medium" direction="row-responsive"background="light-2">
              <FormField label="Departure Date" htmlFor="text-area">
              <DateInput format="dd/mm/yyyy" value={value} onChange={onChange} />
              </FormField>
  
              <Box pad="medium" background="light-2"/>
  
              <FormField label="Return Date" htmlFor="text-area">
              <DateInput format="dd/mm/yyyy" value={value} onChange={onChange} />
              </FormField>
        </Box>
      </Box>
    </Grommet>
    );
  }
=======
>>>>>>> 043df7edae55d8b3e82c0a4a38411419d4f5b0c7
  
    return (
      <Grommet full theme={grommet}>
        <Grid
          fill
          rows={['auto', 'flex']}
          columns={['auto', 'flex']}
          areas={[
            { name: 'header', start: [0, 0], end: [1, 0] },
            { name: 'sidebar', start: [0, 1], end: [0, 1] },
<<<<<<< HEAD
            { name: 'when', start: [1, 1], end: [1, 1] },
=======
            { name: 'main', start: [1, 1], end: [1, 1] },
>>>>>>> 043df7edae55d8b3e82c0a4a38411419d4f5b0c7
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
<<<<<<< HEAD
          <Box gridArea="when" justify="left" align="center" size="contain" background="light-2">
            <Content />
            <When />
=======
          <Box gridArea="main" justify="left" align="left" background="light-2" size="contain">
            <Content />
>>>>>>> 043df7edae55d8b3e82c0a4a38411419d4f5b0c7
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