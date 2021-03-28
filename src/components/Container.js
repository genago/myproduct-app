//this is the container displaying one of three components; professional, amateur, about.
//must pass state and props from button.

import React from "react";
import Professional from "./Professional";
import Amateur from "./Amateur";
import About from "./About";


const divStyle = {
    backgroundColor: "lightgrey",
    height: "200px", 
    width: "200px",
    border: "15px green",
    padding: "30%",
    margin: "40px",
}

const Container = (props) => {
  if (props.lastButtonPressed === "Professional") {
    return (
      <div style={divStyle}>
        <Professional />
      </div>
    );
  } else if (props.lastButtonPressed === "Amateur") {
    return (
      <div style={divStyle}>
        <Amateur />
      </div>
    );
  } else
    return (
      <div style={divStyle}>
        <About />
      </div>
    );
};

export default Container;
