import React from "react";
import PropTypes from "prop-types";
import { Spin } from "antd";

const Loading = ({ children, loading }) => (
  <Spin
    tip="Loading..."
    spinning={loading === undefined ? false : loading}
    size={"large"}
  >
    {children}
  </Spin>
);

Loading.propTypes = {
  children: PropTypes.node.isRequired,
  loading: PropTypes.bool.isRequired
};

export default Loading;
