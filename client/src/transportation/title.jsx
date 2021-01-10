import React, { Component } from 'react'

// class Title extends Component {
//     state = {  }

//     render() { 
//         return ( 
//             <div className="TopLeft">
//             <input className="LargeTitle" placeholder="Enter Trip Name" type="text" />
//             </div>
//          );
//     }
// }
 
// export default Title;

const Title = ({keyword,setKeyword}) => {
    const BarStyling = {width:"10rem",background:"#F2F1F9", opacity: 0.80, border:"none", padding:"1.0rem"};
    return (
      <input 
       style={BarStyling}
       key="random1"
       value={keyword}
       placeholder={"Name This Trip"}
       onChange={(e) => setKeyword(e.target.value)}
      />
    );
  }
   
  export default Title;