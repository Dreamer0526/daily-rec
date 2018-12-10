import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (!this.props.authenticated) return <div id="welcome" />;

    return <p> Home </p>;
  }
}

const mapStateToProps = state => ({
  authenticated: state.authentication.authenticated
});

const mapDispatchToProps = dispatch => ({
  dispatch: action => dispatch(action)
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Home)
);
