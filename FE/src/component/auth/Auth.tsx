import React from 'react';
import Button from 'antd/lib/button';
import Form from 'antd/lib/form';
import Input from 'antd/lib/input';
import Tabs from 'antd/lib/tabs';
import { useNavigate } from 'react-router-dom';

import { LockOutlined, UserOutlined } from '@ant-design/icons';

interface IAuthLogin {
  onLoginClick: (values: any) => void;
}

const AuthLogin = ({ onLoginClick }:IAuthLogin) => (
  <Form
    style={{ width: 500 }}
    name="login"
    initialValues={{ remember: true }}
    onFinish={onLoginClick}
  >
    <Form.Item
      name="username"
      rules={[{ required: true }]}
    >
      <Input
        prefix={<UserOutlined />}
        placeholder="Username"
      />
    </Form.Item>
    <Form.Item
      name="password"
      rules={[{ required: true }]}
    >
      <Input
        prefix={<LockOutlined />}
        type="password"
        placeholder="Password"
      />
    </Form.Item>
    <Form.Item>
      <Button type="primary" htmlType="submit">
        Login
      </Button>
    </Form.Item>
  </Form>
);

interface IAuthSignup {
  onSignupClick: (values: any) => void;
}

const AuthSignup = ({ onSignupClick }: IAuthSignup) => (
  <Form
    style={{ width: 500 }}
    name="signup"
    initialValues={{ remember: true }}
    onFinish={onSignupClick}
  >
    <Form.Item
      name="username"
      rules={[{ required: true }]}
    >
      <Input
        prefix={<UserOutlined />}
        placeholder="Username"
      />
    </Form.Item>
    <Form.Item
      name="password"
      rules={[{ required: true }]}
    >
      <Input
        prefix={<LockOutlined />}
        type="password"
        placeholder="Password"
      />
    </Form.Item>
    <Form.Item
      name="confirm_password"
      rules={[{ required: true }]}
    >
      <Input
        prefix={<LockOutlined />}
        type="confirm_password"
        placeholder="Password"
      />
    </Form.Item>
    <Form.Item>
      <Button type="primary" htmlType="submit">
        Signup
      </Button>
    </Form.Item>
  </Form>
);

const Auth = () => {
  // const { pathname } = useLocation();
  // const activeKey = useMemo(() => (pathname.includes('login') ? 'login' : 'signup'), [pathname]);
  const navigate = useNavigate();

  const onLoginClick = (values: any) => {
    console.debug(values);
    navigate('/my-products');
  };

  const onSignupClick = (values: any) => {
    console.debug(values);
    navigate('/login');
  };

  return (
    <div className="flex h-screen">
      <div className="m-auto">
        <Tabs>
          <Tabs.TabPane tab="Login" key="login">
            <AuthLogin onLoginClick={onLoginClick} />
          </Tabs.TabPane>
          <Tabs.TabPane tab="Signup" key="signup">
            <AuthSignup onSignupClick={onSignupClick} />
          </Tabs.TabPane>
        </Tabs>
      </div>
    </div>
  );
};

export { Auth };
