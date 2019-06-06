import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootswatch/dist/lux/bootstrap.css";

import Header from "./components/Header";
import LandingPage from "./components/LandingPage";
import NotFound from "./components/NotFound";
import Products from "./containers/Products";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/products" component={Products} />
        <Route path="*" component={NotFound} />
      </Switch>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Router>
    <App />
  </Router>,
  rootElement
);
