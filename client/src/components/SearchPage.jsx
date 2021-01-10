
import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import CountryList from './CountryList';
import NavBar from './NavBar';
import tree from './tree.png';

const SearchPage = (props) => {
  const [input, setInput] = useState('');
  const [countryListDefault, setCountryListDefault] = useState();
  const [countryList, setCountryList] = useState();

  const fetchData = async () => {
    return await fetch('https://restcountries.eu/rest/v2/all')
      .then(response => response.json())
      .then(data => {
         setCountryList(data) 
         setCountryListDefault(data)
       });}

  const updateInput = async (input) => {
     const filtered = countryListDefault.filter(country => {
      return country.name.toLowerCase().includes(input.toLowerCase())
     })
     setInput(input);
     setCountryList(filtered);
  }

  useEffect( () => {fetchData()},[]);
	
  return (
    <>
    <div className="App">
        <header className="App-header">

          {/* <div className="Nav-header">  */}

          {/* <img src={tree} className="App-logo" alt="tree" />*/}
          <div className="flexbox-container">
          <div className="spacer"><a href="link"><navwords>home</navwords></a></div>
          <div className="spacer"><a href="link"><navwords>explore</navwords></a></div>
          <div className="spacer"><a href="link"><navwords>my trips</navwords></a></div>
          <div className="spacer"><button className="Login-Btn">sign in</button> </div>

          </div>



        <h3>Vacationing</h3>

      <h1>Made easier.</h1>
      <SearchBar 
       input={input} 
       onChange={updateInput}
      />
      {/* <CountryList countryList={countryList}/> */}
      {/* </div> */}
      </header>
      </div>
    </>
   );
}

export default SearchPage