import { Typography } from "antd";
import React, { FC } from "react";
import OrdersModule from "../modules/OrdersModule/OrdersModule";

const OrderPage: FC = () => {
  return (
    <>
      <Typography.Title level={2}>Заказы</Typography.Title>
      <OrdersModule />
    </>
  );
};

export default OrderPage;

