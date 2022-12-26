import React, { Component } from "react";

class ErrorBoundry extends Component {
  state = {
    hasError: false,
  };
  componentDidCatch() {
    console.log("***********************************");
    this.setState({
      hasError: true,
    });
  }
  render() {
    if (this.state.hasError) {
      return <h1>Something is wrong !!!</h1>;
    }
    return this.props.children;
  }
}

export default ErrorBoundry;
