import { Typography } from "antd";
import React, { FC } from "react";
import OrderModule from "../modules/OrderModule/OrderModule";

const OrderPage: FC = () => {
  return (
    <>
      <Typography.Title level={2}>Оформление заказа</Typography.Title>
      <OrderModule />
    </>
  );
};

export default OrderPage;

