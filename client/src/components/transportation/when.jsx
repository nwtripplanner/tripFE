import React, { Component } from 'react';
import { Box, DateInput, Grommet } from 'grommet';
import { grommet } from 'grommet/themes';

const When = ({keyword,setKeyword}) => {
    const [value, setValue] = React.useState();
  const onChange = event => {
    const nextValue = event.value;
    console.log('onChange', nextValue);
    setValue(nextValue);
  };
  return (
    <Grommet full theme={grommet}>
    <Box fill align="center" justify="start" pad="large">
      <Box width="medium" gap="medium">
        <DateInput format="dd/mm/yyyy" value={value} onChange={onChange} />
      </Box>
    </Box>
  </Grommet>
  );
}
 
export default When;
