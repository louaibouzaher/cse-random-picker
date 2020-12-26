import React, { useState } from "react";
import "./App.css";
import Home from "./Screens/Home";
import Winner from "./Screens/Winner";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [names, setNames] = useState([]);
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home namesP={names} setNamesP={setNames} />
        </Route>
        <Route exact path="/winner">
          <Winner />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
