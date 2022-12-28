import React, { Component } from "react";
import Loading from "../loading";

const withData = (View, renderLabel) => {
  return class extends Component {
    state = {
      data: null,
    };

    componentDidMount() {
      this.props.getAllData().then((data) => this.setState({ data }));
    }

    render() {
      if (!this.state.data) {
        return <Loading />;
      }
      return (
        <View
          {...this.props}
          data={this.state.data}
          renderLabel={renderLabel}
        />
      );
    }
  };
};

export default withData;
