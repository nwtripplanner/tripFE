import React, { Component, useState } from 'react'

import { Box, Select, FormField, Grommet, TextArea, DateInput, Grid, Button, Text } from 'grommet';
import { grommet, ThemeType, ThemeContext } from 'grommet/themes';
import { deepMerge } from 'grommet/utils';

import Filter from './filter';


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

  const When = ({keyword,setKeyword}) => {
    const [value, setValue] = React.useState();
  const onChange = event => {
    const nextValue = event.value;
    console.log('onChange', nextValue);
    setValue(nextValue);
  };
  
  return (
    <Grommet full theme={grommet}>
    <Box fill="horizontal" justify="start" align="center">
      <Box width="medium" direction="row-responsive">
            <FormField label="Departure Date" htmlFor="text-area">
            <DateInput format="dd/mm/yyyy" value={value} onChange={onChange} />
            </FormField>

            <Box pad="medium" />

            <FormField label="Return Date" htmlFor="text-area">
            <DateInput format="dd/mm/yyyy" value={value} onChange={onChange} />
            </FormField>
      </Box>
    </Box>
  </Grommet>
  );
}




const options = ['Hotel Choices......'];

const Hotel = () => {
  const [value, setValue] = useState();
  return (
    <Box fill align="center" justify="start" basis="xlarge">
      <Select
        placeholder="Hotels"
        multiple
        value={value}
        options={options}
        onChange={({ value: nextValue }) => setValue(nextValue)}
        clear
      />
    </Box>
  );
};




class Content extends Component {


    state = {  }
    render() { 
        return ( 
            <Grommet >
              <Box align="center" basis="xlarge">

              
              <h1>***Trip Name***</h1>
                <FormField horizontal="small" >
                        <TextArea id="text-area" size="large" placeholder="Trip Name"/>
                    </FormField>
                    <h1>Accomodation</h1>
                    <h3>Where will you stay? Skip this step if you already have a place!</h3>
                    <Filter/> 
                    
                    <Hotel /> 


                </Box>
            </Grommet>
            
         );
    }
}

 
export default Content;