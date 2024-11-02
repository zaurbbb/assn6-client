import {
  Card,
  Typography,
} from "antd";
import React, { FC } from "react";

const NotFoundPage: FC = () => {
  return (
    <Card>
      <Typography.Title level={2}>
        Эта страница недоступна или ведутся тех. работы
      </Typography.Title>
      <Typography.Paragraph>
        Приносим извинения за неудобства.
      </Typography.Paragraph>
    </Card>
  );
};

export default NotFoundPage;

