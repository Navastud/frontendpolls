import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import * as actions from "../../actions";
import Signin from "../../components/Signin";
import { notification } from "antd";

class SigninContainer extends Component {
  componentDidUpdate() {
    const { hasError, message } = this.props.authentication;
    console.log(this.props);

    if (hasError) {
      console.log("CALL componentDidUpdate");
      notification.error({ message: "Polling App", description: message });
    }
  }

  render() {
    const { handleSignin, authentication } = this.props;
    return <Signin handleSignin={handleSignin} {...authentication} />;
  }
}

SigninContainer.propTypes = {
  authentication: PropTypes.shape({
    currentUser: PropTypes.shape({
      id: PropTypes.number,
      username: PropTypes.string,
      name: PropTypes.string
    }),
    loading: PropTypes.bool.isRequired,
    hasError: PropTypes.bool.isRequired,
    message: PropTypes.string
  }).isRequired
};

const mapDispatchToProps = dispatch => ({
  handleSignin: payload => dispatch(actions.signin(payload))
});

const mapStateToProps = state => ({ authentication: state.authentication });

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SigninContainer);
