// import logo from './logo.svg';
import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Consultation from "./pages/Consultation";
import Appointment from "./pages/Appointment";
import PatientsDashboard from "./pages/PatientsDashboard";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Welcome />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/register">
          <Register />
        </Route>
        <Route exact path="/dashboard">
          <Dashboard />
        </Route>
        <Route exact path="/consultation">
          <Consultation />
        </Route>
        <Route exact path="/appointment">
          <Appointment />
        </Route>
        <Route exact path="/patient">
          <PatientsDashboard />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
