import React from "react";
import '../../../App.css';


const NumberButton = (props) => {
  
  return (
    <>
      <button
        className='numButton' onClick={() => props.setDisplay(props.number)}>
       {props.number}   
      </button>
    </>
  );
};
export default NumberButton