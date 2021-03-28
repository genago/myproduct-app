// This navbar contains three buttons.

//import React, { useState } from "react";
import Button from "./Button";

const Navbar = (props) => {
  // stuff that useState returns = useState()
  //   const [lastButtonPressed, setLastButtonPressed] = useState();

  const onButtonClick = (label) => {
    // setLastButtonPressed(label);
    props.onLastButtonPressedChanged(label);
  };

  return (
    <div
      style={{
        border: "1px dashed red",
        display: "flex",
        justifyContent: "space-around",
      }}
    >
      <Button onButtonClick={onButtonClick} label="Professional" />
      <Button onButtonClick={onButtonClick} label="Amateur" />
      <Button onButtonClick={onButtonClick} label="About" />
    </div>
  );
};

export default Navbar;
