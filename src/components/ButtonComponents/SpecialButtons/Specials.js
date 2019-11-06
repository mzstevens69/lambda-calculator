import React, { useState } from "react";
import SpecialButton from './SpecialButton';
import { specials } from "../../../data";

//import any components needed

//Import your array data to from the provided data file

const Specials = (props) => {
  // const [specialVal] = useState(specials);// STEP 2 - add the imported data to state

  return (
    <div className='special-container'>
  
       {specials.map(special => <SpecialButton text={special} />)}
            
    </div>
  );
};
export default Specials;
