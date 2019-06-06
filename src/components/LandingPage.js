import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => (
  <div className="jumbotron">
    <h1 className="display-3">David's Products page</h1>
    <p className="lead">This page create in react</p>
    <hr className="my-4" />
    <p>Amazing react page products</p>
    <p className="lead">
      <Link className="btn btn-primary btn-lg" to="/products" role="button">
        Products
      </Link>
    </p>
  </div>
);

export default LandingPage;
