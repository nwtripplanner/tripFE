import React, { Component, useState } from "react";

import {
  Box,
  FormField,
  Grommet,
  TextArea,
  DateInput,
  Grid,
  Button,
  Text,
  defaultProps,
} from "grommet";
import { grommet, ThemeType } from "grommet/themes";
import { deepMerge } from "grommet/utils";
import axios from "axios";

// const customTheme = {
//   global: {
//     font: {
//       size: "13px",
//     },
//     input: {
//       weight: 400,
//     },
//   },
//   formField: {
//     label: {
//       color: "dark-3",
//       size: "xsmall",
//       margin: { vertical: "0", bottom: "small", horizontal: "0" },
//       weight: 600,
//     },
//     border: false,
//     margin: "0",
//   },
// };

const When = (props) => {
  const [value, setValue] = React.useState();
  const onChange = (event) => {
    const nextValue = event.value;
    console.log("onChange", nextValue);
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
        <Button label="save" onClick={props.submit} />
      </Box>
    </Grommet>
  );
};

class Content extends Component {
  //   constructor(props) {
  //     super(props);
  //     this.state= {trans}
  //   }

  //   componentDidMount() {
  //     axios.get('/create/transportation')
  //         .then(response => {
  //             this.setState({ todos: response.data });
  //         })
  //         .catch(function (error){
  //             console.log(error);
  //         })
  // }

  state = {};

  onSave = (e) => {
    console.log("r");
    e.preventDefault();

    console.log(`Form submitted:`);
    // console.log(`Todo Description: ${this.state.todo_description}`);
    // console.log(`Todo Responsible: ${this.state.todo_responsible}`);
    // console.log(`Todo Priority: ${this.state.todo_priority}`);

    const newTransportation = {
        time: this.state.time,
        mode: this.state.mode,
        start: this.state.start,
        destination: this.state.destination,
        cost: this.state.cost
    };

    axios.post('/create/transportation', newTransportation)
        .then(res => console.log(res.data));

    this.setState({
        time: '',
        mode: '',
        start: '',
        destination: '',
        cost: 0,
    })
  };

  render() {
    return (
      <Grommet>
        <Box align="center">
          <h1>Name This Trip</h1>
          <h3>First, let's give this trip a name:</h3>
          <FormField horizontal="small">
            <TextArea
              id="text-area"
              size="large"
              placeholder="Trip with the girls!"
            />
          </FormField>
          <h1>Transportation</h1>
          <h3>Now let's get the basics down!</h3>

          <Box width="medium" direction="row-responsive">
            <FormField label="Mode of Transportation" htmlFor="text-area">
              <TextArea id="text-area" placeholder="plane or vehicle" />
            </FormField>
            <Box pad="medium"></Box>
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
          <When submit={this.onSave} />
        </Box>
      </Grommet>
    );
  }
}

export default Content;
