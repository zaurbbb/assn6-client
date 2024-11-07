import {
  Button,
  Col,
  Flex,
  Form,
  Input,
  notification,
  Radio,
  Row,
  Select,
  Space,
  Typography,
} from 'antd';
import React, { CSSProperties } from 'react';
import {
  Link,
  useNavigate,
  useParams,
} from "react-router-dom";
import CustomSpin from "../../components/CustomSpin";
import { usePostCart } from "../../tanstack/useCart";
import { usePostOrder } from "../../tanstack/useOrders";
import { useGetProductByProductId } from "../../tanstack/useProducts";
import { useCartStore } from "../../zustand/useCart";
import { useFavoritesStore } from "../../zustand/useFavorites";

const { Title, Text } = Typography;
const { Option } = Select;


interface IProduct {
  id: number;
  name: string;
  price: number;
  inStock: boolean;
  image: string;
  category: string;
  size: string;
  usage: string;
  kit: number;
  article: string;
  availability: string;
  plating: string;
  texture: string;
  invoice: string;
  shade: string;
  manufacturing: string;
  country: string;
}

const OrderModule = () => {
  const [ api ] = notification.useNotification();
  const navigate = useNavigate();
  // const { productId } = useParams();
  // const {
  //   favorites,
  //   changeFavorites,
  // } = useFavoritesStore();
  const {
    mutateAsync: postCart,
  } = usePostCart(api);
  const {
    mutateAsync: postOrder,
  } = usePostOrder(api);
  const {
    cart,
    clearCart,
  } = useCartStore();

  const onFinish = async () => {
    await cart.forEach((item) => {
      const formData = new FormData();
      formData.append("product", item.id);
      formData.append("quantity", item.quantity);
      return postCart(formData);
    });
    await postOrder();
    await clearCart();
    navigate(`/orders`);
  };

  return (
    <Flex justify="space-between">
      <Typography.Title level={2}>Корзина</Typography.Title>
      {/*<Link to={`/order/1`}>*/}
        <Button
          size="large"
          type="primary"
          onClick={() => onFinish()}
        >
          {/*<ShoppingCartOutlined />*/}
          Оформить заказ
        </Button>
      {/*</Link>*/}
    </Flex>
  );
};

export default OrderModule;