import React, { useState } from "react";
import OperatorButton from './OperatorButton';
import { operators } from '../../../data';

//import any components needed

//Import your array data to from the provided data file

const Operators = () => {
  const [ops] = useState(operators);// STEP 2 - add the imported data to state
  return (
    <div className='operators'>
      
      {ops.map(operator => 
        <OperatorButton operator={operator} />
      )}
    </div>
  );
};
export default Operators;