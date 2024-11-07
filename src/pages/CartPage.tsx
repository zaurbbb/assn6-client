import {
  Button,
  Col,
  notification,
  Row,
  Space,
} from "antd";
import React, { FC } from "react";
import { Link } from "react-router-dom";
import CustomSpin from "../components/CustomSpin";
import CartModule from "../modules/CartModule/CartModule";
import OrderModule from "../modules/OrderModule/OrderModule";
import { usePostCart } from "../tanstack/useCart";
import { usePostOrder } from "../tanstack/useOrders";
import { useCartStore } from "../zustand/useCart";

const CartPage: FC = () => {
  const [ api ] = notification.useNotification();

  const {
    cart,
  } = useCartStore();
  if (cart.length === 0) {
    return (
      <Row
        // style={rowStyles}
        gutter={[ 12, 24 ]}
      >
        <Col
          span={24}
          style={{ width: "100%" }}
        >
          <Space size="large">
            <h1>Корзина пуста</h1>
            <Link to="/products">
              <Button type="primary">
                Перейти в каталог
              </Button>
            </Link>
          </Space>
        </Col>
      </Row>
    );
  }

  const {
    isPending: isPostCartPending,
  } = usePostCart(api);
  const {
    isPending: isPostOrderPending,
  } = usePostOrder(api);
  if (isPostCartPending
    || isPostOrderPending
  ) {
    return <CustomSpin />;
  }

  return (
    <>
      <OrderModule />
      <CartModule />
    </>
  );
};

export default CartPage;

