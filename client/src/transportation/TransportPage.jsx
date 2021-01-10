
import React, { useState, useEffect } from 'react';
import Mode from './mode';
import Ppl from './ppl';
import Title from './title';

import Destination from './destin';
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

//        var unirest = require("unirest");

// req.end(function (res) {
// 	if (res.error) throw new Error(res.error);

// 	console.log(res.body);
// });


// var unirest = require("unirest");

// var req = unirest("GET", "https://hotels4.p.rapidapi.com/locations/search");

// req.query({
// 	"query": "Japan",
// 	"locale": "en_US"
// });

// req.headers({
// 	"x-rapidapi-key": "ba060469e1msh1fa81b6fb168fe3p1c6ad6jsnc7d0769ba5be",
// 	"x-rapidapi-host": "hotels4.p.rapidapi.com",
// 	"useQueryString": true
// });


// req.end(function (res) {
// 	if (res.error) throw new Error(res.error);

// 	console.log(res.body);
// });




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
    <div className="App">
        <header className="App-header">
          <div className="TopLeft">
            <Title
            input={input}
            onChange={updateInput}
            />
            </div>

          {/* <div className="Nav-header">  */}

          {/* <img src={tree} className="App-logo" alt="tree" />*/}
          {/* <div className="flexbox-container">
          <div className="spacer"><a href="link"><navwords>home</navwords></a></div>
          <div className="spacer"><a href="link"><navwords>explore</navwords></a></div>
          <div className="spacer"><a href="link"><navwords>my trips</navwords></a></div>
          <div className="spacer"><button className="Login-Btn">sign in</button> </div>

          </div> */}

          



      <div className="flexbox-container">
          <div className="spacer">
          <Mode 
       input={input} 
       onChange={updateInput}
      />
          </div>
          <div className="spacer">
          <Ppl 
       input={input} 
       onChange={updateInput}
      />
          </div>


      {/* <CountryList countryList={countryList}/> */}
      {/* </div> */}


      </div>
      </header>
      </div>
    </>
   );
}

export default TransportPage