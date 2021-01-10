import React, { Component } from 'react';

const Mode = ({keyword,setKeyword}) => {
  const BarStyling = {width:"10rem",background:"#F2F1F9", opacity: 0.80, border:"none", padding:"1.0rem"};
  return (
    <div>
    <div>
    <input 
   style={BarStyling}
   key="random1"
   value={keyword}
   placeholder={"Mode of transport"}
   onChange={(e) => setKeyword(e.target.value)}
  /> 
    </div>

<div>
<input 
   style={BarStyling}
   key="random1"
   value={keyword}
   placeholder={"Number of guests"}
   onChange={(e) => setKeyword(e.target.value)}
  />
</div>
  </div>
  );
}
 
export default Mode;
