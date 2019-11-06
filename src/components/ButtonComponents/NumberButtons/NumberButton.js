import React from "react";



const NumberButton = (props) => {
  console.log('NumbeButton', props);
  
  return (
    
      <button onClick={() => props.addNumber(props.text) }>
        
        {props.text}
         
      </button>
    
  );
};
export default NumberButton