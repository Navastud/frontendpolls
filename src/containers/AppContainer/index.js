import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { signin } from "../../actions";
import Loading from "../../util/Loading";
import App from "../../components/App";

class AppContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: true
    };
  }

  toggleCollapsed = () => this.setState({ collapsed: !this.state.collapsed });

  render() {
    const { authentication } = this.props;
    const { collapsed } = this.state;
    console.log(this.props);

    return (
      <Loading loading={authentication.loading}>
        <App
          {...this.props}
          collapsed={collapsed}
          onToggleCollapsed={this.toggleCollapsed}
        />
      </Loading>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onHandleSignin: payload => dispatch(signin(payload))
});

const mapStateToProps = state => ({ authentication: state.authentication });

AppContainer.propTypes = {
  authentication: PropTypes.shape({
    currentUser: PropTypes.shape({
      id: PropTypes.number.isRequired,
      username: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired
    }),
    hasError: PropTypes.bool.isRequired,
    message: PropTypes.string,
    loading: PropTypes.bool.isRequired,
    isAuthenticated: PropTypes.bool.isRequired
  }),
  onHandleSignin: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppContainer);
