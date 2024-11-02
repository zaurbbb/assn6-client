import {
  Button,
  Card,
  Form,
  Input,
  notification,
} from 'antd';
import React from 'react';
import { Link } from "react-router-dom";
import {
  API,
  errorAnswer,
  responseAnswer,
} from "../../api/index";
import { useIsAuthStore } from "../../zustand/useIsAuth";

const RegisterModule: React.FC = () => {
  const [ api, contextHolder ] = notification.useNotification();
  const { changeIsAuth } = useIsAuthStore();
  const onFinish = async (values: any) => {
    const formData = new FormData();
    formData.append("email", values.email);
    formData.append("username", values.username);
    formData.append("password", values.password);
    API.post("/auth/register/", formData)
      .then((response) => {
        responseAnswer(response, api);
        localStorage.setItem("accessToken", response.data.access_token);
        changeIsAuth();
      })
      .catch((error) => errorAnswer(error));
  };

  return (
    <Card title={"Регистрация"}>
      {contextHolder}
      <Form
        name="register"
        initialValues={{ remember: true }}
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 16 }}
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
          name="username"
          label="ФИО"
          rules={[ { required: true, message: 'Введите ФИО!' } ]}
        >
          <Input placeholder="Иванов Иван Иванович" />
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
            Зарегистрироваться
          </Button>
          <br /> Если у вас уже есть аккаунт,
          <Link to="/login">
            то нажмите здесь
          </Link>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default RegisterModule;
