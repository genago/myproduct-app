// This is a Button.

import React from "react";

const Button = () => {
  const onButtonClick = () => {
      console.log('button')
      
  };

  return (
    <div style={{border: '1px dashed blue'}}>
      <button type="button" onClick={onButtonClick}>This is a button!</button> {/* passing function onButtonClick to the prop onClick */}
    </div>
  );
};

export default Button;
