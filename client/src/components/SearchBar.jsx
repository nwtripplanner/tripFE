import React, { Component } from 'react';
// import React from 'react';

const SearchBar = ({keyword,setKeyword}) => {
    const BarStyling = {width:"35rem",background:"#F2F1F9", opacity: 0.80, border:"none", padding:"1.0rem"};
    return (
      <input 
       style={BarStyling}
       key="random1"
       value={keyword}
       placeholder={"Where to?"}
       onChange={(e) => setKeyword(e.target.value)}
      />
    );
  }
  
  export default SearchBar