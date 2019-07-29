import React from "react";
import PropTypes from "prop-types";
import { Link, withRouter } from "react-router-dom";
import { Menu, Icon } from "antd";

const getMenuItems = currentUser => {
  return currentUser
    ? [
        <Menu.Item key="/">
          <Link to="/">
            <Icon type="home" />
            <span>Home</span>
          </Link>
        </Menu.Item>,
        <Menu.Item key="/profile">
          <Link to="/profile">
            <Icon type="user" />
            <span>Profile</span>
          </Link>
        </Menu.Item>,
        <Menu.Item key="/poll/new">
          <Link to="/poll/new">
            <Icon type="bar-chart" />
            <span>Polls</span>
          </Link>
        </Menu.Item>,
        <Menu.Item key="/logout">
          <Link to="/logout">
            <Icon type="logout" />
            <span>Logout</span>
          </Link>
        </Menu.Item>
      ]
    : [
        <Menu.Item key="/login">
          <Link to="/login">
            <Icon type="login" />
            <span>Login</span>
          </Link>
        </Menu.Item>,
        <Menu.Item key="/signup">
          <Link to="/signup">
            <Icon type="user-add" />
            <span>Signup</span>
          </Link>
        </Menu.Item>
      ];
};

const MenuHeader = ({ currentUser }) => {
  let menuItems = getMenuItems(currentUser);

  return (
    <Menu mode="inline" defaultSelectedKeys={["1"]}>
      {menuItems}
    </Menu>
  );
};

MenuHeader.propTypes = {
  currentUser: PropTypes.shape({
    username: PropTypes.string.isRequired
  })
};

export default withRouter(MenuHeader);
