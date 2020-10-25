import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Login from "./pages/Login";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./assets/main.css";
import List from "./pages/MedicalRecord/List";
import New from "./pages/MedicalRecord/New";
import Patient from "./pages/Patient";

const Index = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact={true} component={App} />
      <Route path="/login" component={Login} />
      <Route path="/list" component={List} />
      <Route path="/new" component={New} />
      <Route path="/patient" component={Patient} />
    </Switch>
  </BrowserRouter>
);

export default Index;
