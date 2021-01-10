import React, { Component, useState } from 'react'

import { Box, FormField, Grommet, TextArea, DateInput, Grid, Button, Text } from 'grommet';
import { grommet, ThemeType } from 'grommet/themes';
import { deepMerge } from 'grommet/utils';
import  axios  from 'axios';

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

const When = ({ keyword, setKeyword }) => {
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



class Content extends Component {
  state = {}
  render() {
    return (
      <Grommet >
        <Box align="center">
          <h1>Name This Trip</h1>
          <h3>First, let's give this trip a name:</h3>
          <FormField horizontal="small" >
            <TextArea id="text-area" size="large" placeholder="Trip with the girls!" />
          </FormField>
          <h1>Transportation</h1>
          <h3>Now let's get the basics down!</h3>

          <Box width="medium" direction="row-responsive" >
            <FormField label="Mode of Transportation" htmlFor="text-area">
              <TextArea id="text-area" placeholder="plane or vehicle" />
            </FormField>
            <Box pad="medium">

            </Box>
            <FormField label="Number of Guests" htmlFor="text-area">
              <TextArea id="text-area" placeholder="#" />
            </FormField>
          </Box>

          <Box width="medium" direction="row-responsive">
            <FormField label="From" htmlFor="text-area">
              <TextArea id="text-area" placeholder="Current Location" />
            </FormField>
            <Box pad="medium" />
            <FormField label="To" htmlFor="text-area">
              <TextArea id="text-area" placeholder="Dream Destination" />
            </FormField>
          </Box>

          <When />

          <Button>

          </Button>




        </Box>
      </Grommet>

    );
  }
}


export default Content;