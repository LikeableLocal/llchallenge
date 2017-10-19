import React from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import {
  Toolbar,
  ToolbarGroup,
  ToolbarSeparator,
  ToolbarTitle
} from "material-ui/Toolbar";
import { Route, Link } from "react-router-dom";
import Home from "../home";
import Challenge from "../challenge";
import Solution from "../solution";
import "./App.css";

const App = () => (
  <MuiThemeProvider>
    <Toolbar>
      <ToolbarGroup
        style={{ justifyContent: "normal", margin: "0 auto", width: 1000 }}
      >
        <Link to="/" className="link">
          Home
        </Link>{" "}
        |
        <Link to="/challenge" className="link">
          Challenge
        </Link>{" "}
        |
        <Link to="/solution" className="link">
          Solution
        </Link>
      </ToolbarGroup>
    </Toolbar>

    <div className="container" style={{ marginBottom: 24 }}>
      <Route exact path="/" component={Home} />
      <Route exact path="/challenge" component={Challenge} />
      <Route exact path="/solution" component={Solution} />
    </div>
  </MuiThemeProvider>
);

export default App;
