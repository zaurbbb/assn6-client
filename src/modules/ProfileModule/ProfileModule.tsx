import {
  Button,
  Form,
  Input,
  notification,
  Row,
  Spin,
} from "antd";
import React, { FC } from "react";
import {
  useGetProfile,
  usePatchProfile,
} from "../../tanstack/useProfile";

const ProfileModule: FC = () => {

  const [ api ] = notification.useNotification();
  const {
    data = {
      username: '',
      email: '',
      phone_number: '',
      country: '',
      city: '',
      role: '',
    },
    isLoading,
    isRefetching
  } = useGetProfile(api);
  const {
    mutateAsync: patchProfile,
    isPending: patchProfilePending,
  } = usePatchProfile(api);

  const [form] = Form.useForm();
  form.setFieldsValue({
    username: data.username,
    email: data.email,
    phone_number: data.phone_number,
    country: data.country,
    city: data.city,
    role: data.role,
  });

  if (isLoading || isRefetching) {
    return <Spin />;
  }

  const onFinish = async (values: any) => {
    // form data
    const formData = new FormData();
    formData.append('username', values.username);
    formData.append('email', values.email);
    formData.append('phone_number', values.phone_number);
    formData.append('country', values.country);
    formData.append('city', values.city);

    await patchProfile(formData);
  }



  return (
    <Row
      // style={rowStyles}
      gutter={[ 12, 24 ]}
    >
      <Form
        form={form}
        labelCol={{ span: 10 }}
        // layout="vertical"
        onFinish={onFinish}
        initialValues={data} // Set initial form values from fetched data
      >
        <Form.Item label="Username" name="username">
          <Input />
        </Form.Item>
        <Form.Item label="Email" name="email">
          <Input />
        </Form.Item>
        <Form.Item label="Phone Number" name="phone_number">
          <Input />
        </Form.Item>
        <Form.Item label="Country" name="country">
          <Input />
        </Form.Item>
        <Form.Item label="City" name="city">
          <Input />
        </Form.Item>
        <Form.Item label="Role" name="role">
          <Input disabled />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" loading={patchProfilePending}>
            Update Profile
          </Button>
        </Form.Item>
      </Form>
    </Row>
  );
};

export default ProfileModule;