import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Dashboard from "./components/Dashboard";
import Home from "./components/Home";
import About from "./components/About";

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";


export default function App() {
  return (
    <Router>
		<Header />
		<Sidebar />

		<Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
        </Switch>

    </Router>
  );
}
