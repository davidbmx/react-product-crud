import React, { Component } from "react";

class Products extends Component {
  state = {
    isLoading: true,
    products: []
  };

  componentDidMount() {}

  render() {
    return <h1>Products container</h1>;
  }
}

export default Products;
