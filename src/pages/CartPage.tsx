import {
  Button,
  Flex,
  Typography,
} from "antd";
import React, { FC } from "react";
import { Link } from "react-router-dom";
import CartModule from "../modules/CartModule/CartModule";

const CartPage: FC = () => {
  return (
    <>
      <Flex justify="space-between">
        <Typography.Title level={2}>Корзина</Typography.Title>
        <Link to={`/order/1`}>
          <Button
            size="large"
            type="primary"
          >
            {/*<ShoppingCartOutlined />*/}
            Оформить заказ
          </Button>
        </Link>
      </Flex>
      <CartModule />
    </>
  );
};

export default CartPage;

