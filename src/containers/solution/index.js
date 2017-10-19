import React from "react";
import Histogram from "../../components/Histogram";
import RaisedButton from "material-ui/RaisedButton";

const Solution = () => (
  <div>
    <h1>The Histogram Challenge Demonstration</h1>
    <h2>Input</h2>
    <textarea style={{ width: "500px" }} />
    <div>
      <RaisedButton label="load remote file" primary />
    </div>
    <h2>Output</h2>
    <Histogram />
  </div>
);

export default Solution;
