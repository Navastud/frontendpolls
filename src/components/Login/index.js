import React from "react";
import { Button, Form, Icon, Input } from "antd";
import Container from "../../util/Container";

const handleSubmit = (e, props) => {
  e.preventDefault();
  props.form.validateFields((err, values) => {
    if (!err) {
      console.log("Received values of form: ", values);
      const loginRequest = Object.assign({}, values);
      props.handleLogin(loginRequest);
    }
  });
};

const Login = props => {
  const { getFieldDecorator } = props.form;
  return (
    <Container
      title="Login"
      style={{ maxWidth: "420px", margin: "0 auto", marginTop: "40px" }}
      icon="login"
    >
      <Form onSubmit={e => handleSubmit(e, props)} className="login-form">
        <Form.Item>
          {getFieldDecorator("usernameOrEmail", {
            rules: [
              {
                required: true,
                message: "Please input your username or email!"
              }
            ]
          })(
            <Input
              prefix={<Icon type="user" />}
              placeholder="Username or Email"
            />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator("password", {
            rules: [
              {
                required: true,
                message: "Please input your password!"
              }
            ]
          })(
            <Input
              prefix={<Icon type="lock" />}
              type="password"
              placeholder="Password"
            />
          )}
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
            style={{ width: "100%" }}
          >
            Log in
          </Button>
          Or <a href="/signin">registre now!</a>
        </Form.Item>
      </Form>
    </Container>
  );
};

const WrappedLogin = Form.create({ name: "login_form" })(Login);

export default WrappedLogin;
