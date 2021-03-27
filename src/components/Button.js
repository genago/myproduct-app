// This is a Button.

import React from "react";

const Button = (props) => {
  const onButtonClick = () => {
    props.onButtonClick(props.label);
  };

  return (
    <div style={{ border: "1px dashed blue" }}>
      <button type="button" onClick={onButtonClick}>
        {props.label}
      </button>
      {/* passing function onButtonClick to the prop onClick */}
    </div>
  );
};

export default Button;
