# Hamburger React Example

Just a quick example using the [Hamburger React](https://github.com/luukdv/hamburger-react) package.

```js
import React, { useState } from "react";
import Hamburger from "hamburger-react";
import Nav from "./Nav";

export default function App() {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="App">
      <Hamburger label="Show menu" toggled={isOpen} toggle={setOpen} />
      {isOpen ? <Nav /> : null}
    </div>
  );
};

```

[![Edit hamburger-react-example](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/hamburger-react-example-0ufsb?fontsize=14&hidenavigation=1&theme=dark)
