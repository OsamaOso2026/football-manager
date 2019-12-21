import React from "react";
import Loader from "../Loader";
const withLoader = WrappedComponent => {
  return class extends WrappedComponent {
    render() {
      const { loading } = this.props;
      if (loading) {
        return <Loader />;
      }
      return super.render();
    }
  };
};

export default withLoader;
