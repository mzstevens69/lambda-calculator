import React, { useState } from "react";
import  { numbers }  from '../../../data';
import  NumberButton  from './NumberButton'


//import any components needed
// example of import from data.js. Note all the ../   This is how we move through folders. 
/* 
import { numbers } from '../../../data' 
*/
//Import your array data to from the provided data file

const Numbers = (props) => {

  
  const [numState, setNumState] = useState(numbers);
  console.log('Numbers', props);// STEP 2 - add the imported data to state
  return (
    <div className='numContainer'>
      {numState.map(number => {
      return<NumberButton 
      key={number} 
      text={number}
      addNumber = {props.addNumber}/>
      })}
        
        </div> 

    
  );
};
export default Numbers