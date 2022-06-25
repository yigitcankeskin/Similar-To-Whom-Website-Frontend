import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import SignInSide from "./pages/SignInSide";
import SıgnUp from "./pages/SıgnUp";
import UserPanel from "./pages/UserPanel";
import { useState, useEffect } from "react";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/About" component={About} exact></Route>
        <Route path="/SignInSide" component={SignInSide} exact></Route>
        <Route path="/SıgnUp" component={SıgnUp} exact></Route>
        <Route path="/UserPanel" component={UserPanel} exact></Route>
      </Switch>
    </Router>
  );
}

export default App;
