import React, { Component, useState } from 'react';

import { Box, Grommet, RangeInput, Text, RadioButtonGroup, Collapsible } from 'grommet';

import { Add, Currency, Filter } from 'grommet-icons';

import { FormDown } from 'grommet-icons';

import {DropButton } from 'grommet';
import { grommet } from 'grommet/themes';

const FilterDropButton = () => {
  const [price, setPrice] = useState('');
  const [dist, setDist] = useState('');
  const [open, setOpen] = useState(false);

  const onSelect = selectedDst => {
    setDist(selectedDst);
    setOpen(false);
  };

  return (
    <Grommet theme={grommet}>
      <Box align="center" pad="large" background="light-2">
        <DropButton
          open={open}
          onClose={() => setOpen(false)}
          onOpen={() => setOpen(true)}
          
          dropContent={
          <Box>
            <Price onSelect={onSelect} />
            <Distance onSelect={onSelect} />
            </Box>
          }
        ><Box direction="row-responsive">
          <Filter/><Text>Filter</Text> 
          </Box>
          
          {/* <Box direction="row" gap="medium" align="center" pad="small">
            <Text>
              Hello
            </Text>
            <FormDown color="brand" />
          </Box> */}
        </DropButton>
      </Box>
    </Grommet>
  );
};

export const Distance = () => {
  const postMethods = [
    { label: '5km', value: '5km' },
    {
      label: '10km',
      value: '10km',
    },
    {
      label: 'Any',
      value: 'Any',
    },
  ];

  // Type arguments can only be used in TypeScript files.
  // Remove <string | object> if you are not using Typescript.
  const [value, setValue] = useState(postMethods[0]);

  return (
    <Box direction="row-responsive" background="light-2">
    <Text >Distance: </Text>
    
    <RadioButtonGroup
      name="radio"
      options={postMethods}
      value={value}
      onChange={event => setValue(event.target.value)}
      pad="small"
      direction="row-responsive"
    />
    </Box>
    
  );
};

// Type annotations can only be used in TypeScript files.
// Remove ': ThemeType' if you are not using Typescript.
const customThemeRangeInput = {
  global: {
    spacing: '12px',
  },
  rangeInput: {
    track: {
      color: 'accent-2',
      height: '12px',
      extend: () => `border-radius: 10px`,
      lower: {
        color: 'brand',
        opacity: 0.7,
      },
      upper: {
        color: 'dark-4',
        opacity: 0.3,
      },
    },
    thumb: {
      color: 'neutral-2',
    },
  },
};



export const Price = () => {
  const [value, setValue] = React.useState(0.4);

  const onChange = event => setValue(event.target.value);

  return (
    <Grommet theme={customThemeRangeInput}>
      <Box direction="row" align="center" pad="large" gap="small">
        <Currency color="neutral-2" />
        <Text>Price Range (CAD)</Text>
        <Box align="center" width="small">
          <RangeInput
            min={0}
            max={1000}
            step={10}
            value={value}
            onChange={onChange}
          />
        </Box>
      </Box>
    </Grommet>
  );
};



class FilterAction extends Component {
    state = {  }
    render() { 
        return ( 
          <>
          <Grommet>
            <Box align="center">

<FilterDropButton/>              
            {/* <Price />
            <Distance /> */}
            </Box>
            
          </Grommet>
          </>
         );
    }
}
 
export default FilterAction;