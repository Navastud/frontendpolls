import React from "react";
import PropTypes from "prop-types";
import { Switch, Route } from "react-router-dom";
import { Layout, Icon } from "antd";
import MenuHeader from "./MenuHeader";
import Signin from "../Signin";
import "./index.css";

const { Header, Content, Footer, Sider } = Layout;

const App = ({
  collapsed,
  onToggleCollapsed,
  currentUser,
  isAuthenticated,
  onHandleSignin
}) => {
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" />
        <MenuHeader isAuthenticated={isAuthenticated} />
      </Sider>
      <Layout>
        <Header className="header-layout">
          <Icon
            className="trigger"
            type={collapsed ? "menu-unfold" : "menu-fold"}
            onClick={onToggleCollapsed}
          />
        </Header>
        <Content className="content-layout">
          <div className="container">
            <Switch>
              <Route
                path="/login"
                render={props => (
                  <Signin {...props} onHandleSignin={onHandleSignin} />
                )}
              />
            </Switch>
          </div>
        </Content>
        <Footer className="footer-layout">
          Polling App ©2019 Created by Navastud
        </Footer>
      </Layout>
    </Layout>
  );
};

App.propTypes = {
  currentUser: PropTypes.shape({
    id: PropTypes.number.isRequired,
    username: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  }),
  isAuthenticated: PropTypes.bool.isRequired,
  onHandleSignin: PropTypes.func.isRequired
};

export default App;
