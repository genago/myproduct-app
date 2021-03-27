//this is the container displaying one of three components; professional, amateur, about.
//must pass state and props from button.

import React from "react";
import Professional from "./Professional";
import Amateur from "./Amateur";
import About from "./About";

const Container = (props) => {
  if (props.lastButtonPressed === "Professional") {
    return (
      <div style={{ backgroundColor: "lightslategrey" }}>
        <Professional />
      </div>
    );
  } else if (props.lastButtonPressed === "Amateur") {
    return (
      <div style={{ backgroundColor: "lightslategrey" }}>
        <Amateur />
      </div>
    );
  } else
    return (
      <div style={{ backgroundColor: "lightslategrey" }}>
        <About />
      </div>
    );
};

export default Container;
