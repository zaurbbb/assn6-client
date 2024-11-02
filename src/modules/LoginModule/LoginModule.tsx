import {
  Button,
  Card,
  Form,
  Input,
  notification,
  Typography,
} from 'antd';
import React from 'react';
import { Link } from "react-router-dom";
import {
  API,
  errorAnswer,
  responseAnswer,
} from "../../api/index";
import { useIsAuthStore } from "../../zustand/useIsAuth";

const LoginModule: React.FC = () => {
  const [ api, contextHolder ] = notification.useNotification();

  const { changeIsAuth } = useIsAuthStore();

  const onFinish = async (values: any) =>
    API.post("/auth/login/", values)
      .then((response) => {
        responseAnswer(response, api);
        localStorage.setItem("accessToken", response.data.access_token);

        changeIsAuth();
      })
      .catch((error) => errorAnswer(error));

  return (
    <Card title={"Войти в систему"}>
      {contextHolder}
      <Form
        name="login"
        initialValues={{ remember: true }}
        // style={{ maxWidth: "50%" }}
        labelCol={{ span: 5 }}
        // wrapperCol={{ span: 16 }}
        onFinish={onFinish}
      >
        <Form.Item
          name="email"
          label="Email"
          rules={[ { required: true, message: 'Введите Email!' } ]}
        >
          <Input
            placeholder="example@gmail.com"
            type="email"
          />
        </Form.Item>
        <Form.Item
          name="password"
          label="Пароль"
          rules={[ { required: true, message: 'Введите пароль!' } ]}
        >
          <Input
            type="password"
            placeholder="Пароль"
          />
        </Form.Item>

        <Form.Item>
          <Button
            block
            type="primary"
            htmlType="submit"
          >
            Войти
          </Button>
          <Typography.Text>
            <br /> Если вы не зарегистрированы,
            <Link to="/register">
              то нажмите здесь
            </Link>
          </Typography.Text>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default LoginModule;
