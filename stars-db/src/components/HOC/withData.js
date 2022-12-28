import React, { Component } from "react";
import Loading from "../loading";

const withData = (View, renderLabel) => {
  return class extends Component {
    state = {
      data: null,
      loading: true,
      hasError: false,
    };

    componentDidMount() {
      this.props
        .getAllData()
        .then((data) => {
          this.setState({ data }, () => {
            this.setState({
              loading: false,
            });
          });
        })
        .catch(() => {
          this.setState({
            loading: false,
            hasError: true,
          });
        });
    }

    render() {
      const { loading, data, hasError } = this.state;
      if (loading) {
        return <Loading />;
      }
      if (hasError) {
        return <div>ERROR!! Somethis went wrong</div>;
      }
      return <View {...this.props} data={data} renderLabel={renderLabel} />;
    }
  };
};

export default withData;
