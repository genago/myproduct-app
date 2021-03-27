import "./App.css";
import Header from "./components/Header";
import Container from "./components/Container";
import Navbar from "./components/Navbar";
import { useState } from "react";

function App() {
  const [lastButtonPressed, setLastButtonPressed] = useState();

  const onLastButtonPressedChanged = (label) => {
    console.log("onLastButtonPressedChanged", label);
    setLastButtonPressed(label);
  };

  return (
    <div style={{ border: "1px dashed green" }}>
      <Header />
      <Navbar onLastButtonPressedChanged={onLastButtonPressedChanged} />
      <Container lastButtonPressed={lastButtonPressed} />
    </div>
  );
}

export default App;
