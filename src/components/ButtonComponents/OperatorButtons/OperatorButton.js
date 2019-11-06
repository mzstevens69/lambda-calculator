import React from "react";

const OperatorButton = (props) => {
  return (
    <>
      {<button
        className='button' onClick={() => (props.button.value)}>
         
      </button>}
    </>
  );
};
export default OperatorButton;