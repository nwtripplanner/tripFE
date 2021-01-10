import React, { Component, useState } from 'react'

import { Box, Select, FormField, Grommet, TextArea, DateInput, Grid, Button, Text } from 'grommet';
import { grommet, ThemeType, ThemeContext } from 'grommet/themes';
import { deepMerge } from 'grommet/utils';

const customTheme = {
    global: {
      font: {
        size: '13px',
      },
      input: {
        weight: 400,
      },
    },
    formField: {
      label: {
        color: 'dark-3',
        size: 'xsmall',
        margin: { vertical: '0', bottom: 'small', horizontal: '0' },
        weight: 600,
      },
      border: false,
      margin: '0',
    },
  };






const options = ['Plane, Vehicle, Shuttle'];

const Mode = () => {
  const [value, setValue] = useState();
  return (
    <Box fill align="center" justify="start" basis="xlarge" pad="xsmall">
      <Select
        placeholder="Mode of Transportation"
        multiple
        value={value}
        options={options}
        onChange={({ value: nextValue }) => setValue(nextValue)}
        clear
      />
    </Box>
  );
};
const optionsG = ['0, 1, 2, 3, 4, 5, 6, 7+']
const Guests = () => {
  const [value, setValue] = useState();
  return (
    <Box fill align="center" justify="start" basis="xlarge" pad="xsmall">
      <Select
        placeholder="Number of Guests"
        multiple
        value={value}
        options={optionsG}
        onChange={({ value: nextValue }) => setValue(nextValue)}
        // clear={{ position: 'bottom' }}
      />
    </Box>
  );
};





class Content extends Component {


    state = {  }
    render() { 
        return ( 
            <Grommet >
              <Box basis="xlarge">

              
              <h1>Name This Trip</h1>
                    <h3>First, let's give this trip a name:</h3>
                <FormField horizontal="small" >
                        <TextArea id="text-area" size="large" placeholder="Trip with the girls!"/>
                    </FormField>
                    <h1>Transportation</h1>
                    <h3>Now let's get the basics down!</h3>
                    <Box width="medium" direction="row-responsive"  >
                    <Mode />
                    <Guests />
                    </Box>


                    
                    {/* <FormField label="Mode of Transportation" htmlFor="text-area">
                        <TextArea id="text-area" placeholder="plane or vehicle" />
                    </FormField>
                    <Box pad="medium">

                    </Box>
                    <FormField label="Number of Guests" htmlFor="text-area">
                        <TextArea id="text-area" placeholder="#" />
                    </FormField> */}
                    

                    
              <Box width="medium" direction="row-responsive">
              <FormField label="From" htmlFor="text-area">
                        <TextArea id="text-area" placeholder="Current Location" />
                    </FormField>
                    <Box pad="medium"/>
                    <FormField label="To" htmlFor="text-area">
                        <TextArea id="text-area" placeholder="Dream Destination" />
                    </FormField>

                </Box>      
                




                </Box>
            </Grommet>
            
         );
    }
}

 
export default Content;