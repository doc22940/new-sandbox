import React from "react";
import { render } from "react-dom";
import Hello from "./Hello";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "right"
};

const App = () => (
  <div style={styles}>
    <Hello name="Christian" />
    <h2>Hello world!! {"\u2728"}</h2>
  </div>
);

render(<App />, document.body);
