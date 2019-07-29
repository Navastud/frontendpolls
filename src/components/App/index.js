import React, { Component } from "react";
import { Layout, Icon } from "antd";
import { Route, withRouter, Switch } from "react-router-dom";
import MenuHeader from "./MenuHeader";
import Signin from "../Signin";

const { Header, Sider, Content, Footer } = Layout;

class App extends Component {
  state = {
    collapsed: false
  };

  toggle = () => this.setState({ collapsed: !this.state.collapsed });

  render() {
    const { collapsed } = this.state;
    return (
      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="logo" />
          <MenuHeader currentUser={null} />
        </Sider>
        <Layout>
          <Header>
            <Icon
              className="trigger"
              type={collapsed ? "menu-unfold" : "menu-fold"}
              onClick={this.toggle}
            />
          </Header>
          <Content
            style={{
              margin: "24px 16px ",
              padding: 24,
              background: "#FFFFFF",
              minHeight: 460
            }}
          >
            <Switch>
              <Route
                exact
                path="/"
                render={props => <div>Hello World !!</div>}
              />
              <Route
                path="/login"
                render={props => (
                  <Signin onLogin={this.handleLogin} {...props} />
                )}
              />
            </Switch>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Polling App ©2019 Created by Navastud SPA
          </Footer>
        </Layout>
      </Layout>
    );
  }
}
export default withRouter(App);
