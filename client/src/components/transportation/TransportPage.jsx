
import React, { useState, useEffect } from 'react';
import Mode from './mode';
import Title from './title';
import { Grommet, Header, Main, Text } from 'grommet';
import SidePanel from './components/sidebar';

import When from './when';

const TransportPage = (props) => {
  const [input, setInput] = useState('');
//   const [countryListDefault, setCountryListDefault] = useState();
//   const [countryList, setCountryList] = useState();

  const fetchData = async () => {
    return await fetch('https://restcountries.eu/rest/v2/all')
      .then(response => response.json())
      .then(data => {
        //  setCountryList(data) 
        //  setCountryListDefault(data)
       });}


  const updateInput = async (input) => {
    //  const filtered = countryListDefault.filter(country => {
    //   return country.name.toLowerCase().includes(input.toLowerCase())
    //  })
     setInput(input);
    //  setCountryList(filtered);
  }

  useEffect( () => {fetchData()},[]);




	
  return (
    <>
    <Main>
      <Grommet className="App">

        <SidePanel />

    
    {/* <Grommet className="App"> 
    
    <Header >
    <a href="link"><navwords>home</navwords></a>
          <a href="link"><navwords>explore</navwords></a>
          <a href="link"><navwords>my trips</navwords></a>
          <button className="Login-Btn">sign in</button> 
    </Header>
        <header className="App-header">
        <div className="flexbox-container">

          <div className="TopLeft">
            <Title
            input={input}
            onChange={updateInput}
            />
            </div>


      <div className="flexbox-container">
          <Mode 
       input={input} 
       onChange={updateInput}
      />
          </div>
          <When 
       input={input} 
       onChange={updateInput}
      />


      {/* <CountryList countryList={countryList}/> */}
      {/* </div> */}


      {/* </div>
      </header>
      </Grommet>  */}

      </Grommet>
      </Main>
    </>
   );
}

export default TransportPage