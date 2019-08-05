import React from "react";
import PropTypes from "prop-types";
import { Button, Form, Icon, Input, Spin } from "antd";
import Container from "../../util/Container";

const handleSubmit = (e, props) => {
  e.preventDefault();

  const { form, onHandleSignin } = props;

  form.validateFields((err, values) => {
    if (!err) {
      const loginRequest = Object.assign({}, values);
      onHandleSignin(loginRequest);
    }
  });
};

const Signin = props => {
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

Signin.propTypes = {
  onHandleSignin: PropTypes.func.isRequired
};

const WrappedSignin = Form.create({ name: "login_form" })(Signin);

export default WrappedSignin;
