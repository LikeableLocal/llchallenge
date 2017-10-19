import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { asyncTest } from "../../modules/counter";

@connect(state => ({}), {
  asyncTest
})
class Histogram extends Component {
  static propTypes = {
    asyncTest: PropTypes.func
  };

  componentDidMount() {
    this.props.asyncTest();
  }
  render() {
    return <div>This is the not yet completed Histogram Component</div>;
  }
}

export default Histogram;
