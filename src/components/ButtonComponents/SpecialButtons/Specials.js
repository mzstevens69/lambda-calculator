import React, {useState} from "react";
import SpecialButton from './SpecialButton';
import { specials } from "../../../data";

//import any components needed

//Import your array data to from the provided data file

const Specials = (props) => {
  const [specialVal] = useState(specials);// STEP 2 - add the imported data to state

  return (
    <div className='special-container'>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
      it any props needed by the child component*/}
       {specialVal.map((special, index) => {
         return (
         <SpecialButton key={index} special={special} 
         setDisplay={props.setDisplay}
         />
         )
     })}
    </div>
  );
};
export default Specials;
