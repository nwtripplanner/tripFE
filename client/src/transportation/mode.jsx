import React, { Component } from 'react';

const Mode = ({keyword,setKeyword}) => {
  const BarStyling = {width:"10rem",background:"#F2F1F9", opacity: 0.80, border:"none", padding:"1.0rem"};
  return (
    <input 
     style={BarStyling}
     key="random1"
     value={keyword}
     placeholder={"Mode of transportation?"}
     onChange={(e) => setKeyword(e.target.value)}
    />
  );
}
 
export default Mode;
