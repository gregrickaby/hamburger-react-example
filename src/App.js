import React, { useState } from "react";
import Hamburger from "hamburger-react";
import Nav from "./Nav";
import "./styles.css";

const App = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="App">
      <h1>Hamburger React Example</h1>
      <p>Click the hamburger</p>
      <Hamburger label="Show menu" toggled={isOpen} toggle={setOpen} />
      {isOpen ? <Nav /> : null}
    </div>
  );
};

export default App;
