import React, { Component } from "react";
import Loading from "../loading";

const withData = (View, getAllData, renderLabel) => {
  return class extends Component {
    state = {
      data: null,
    };

    componentDidMount() {
      getAllData().then((data) => this.setState({ data }));
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
