import React from "react";
import { RingLoader } from "react-spinners";
import PropTypes from "prop-types";

class Loader extends React.Component {
  static propTypes = {
    loading: PropTypes.bool,
    message: PropTypes.string
  };
  render() {
    const { loading, message } = this.props;
    return (
      <div className="sweet-loading" style={{ display: "flex" }}>
        <RingLoader
          className="style"
          sizeUnit={"px"}
          size={150}
          color={"rgb(54, 215, 183)"}
          loading={loading}
        />
        <style jsx>{`
          .sweet-loading {
            position: fixed;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            width: 100%;
            height: 100%;
            justify-content: center;
            align-items: center;
            background-color: white;
            z-index: 99;
          }
          .style {
            display: block;
            margin: 0 auto;
            border-color: red;
          }
        `}</style>
      </div>
    );
  }
}

export default Loader;
