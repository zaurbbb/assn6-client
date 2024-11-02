import {
  Button,
  Col,
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
import { useParams } from "react-router-dom";
import CustomSpin from "../../components/CustomSpin";
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
  const { productId } = useParams();
  const {
    favorites,
    changeFavorites,
  } = useFavoritesStore();
  const {
    addToCart,
    deleteProductFromCart,
    getItemQuantity,
  } = useCartStore();
  // const [ itemQuantity, setItemQuantity ] = useState(0);
  const itemQuantity = getItemQuantity(productId);

  const {
    data: product = {} as IProduct,
    isLoading: isProductLoading,
  } = useGetProductByProductId(api, productId);

  if (isProductLoading) {
    return <CustomSpin />;
  }

  const spaceStyles: CSSProperties = {
    width: "100%",
    padding: "1.5rem",
    marginBottom: "2rem",
    borderRadius: "1rem",

    backgroundColor: "#F0F0F0",
  };

  const {
    mutateAsync: postOrder,
  } = usePostOrder(api);

  const onFinish = async (values: any) => {
    postOrder({
      product_id: productId,
      promo_code: "string",
      quantity: itemQuantity,
      ...values,
    })
      .then(() => {
        deleteProductFromCart(productId);
        notification.success({
          message: 'Заказ успешно оформлен!',
          description: 'Ваш заказ успешно оформлен. Ожидайте звонка оператора для уточнения деталей.',
        });
      })
      .catch((error) => {
        console.log('error', error);
        notification.error({
          message: 'Ошибка при оформлении заказа!',
          description: 'При оформлении заказа произошла ошибка. Попробуйте еще раз.',
        });
      });


  }

  // "product_id": 0,
  //   "promo_code": "string",
  //   "quantity": 0,
  //   "name": "string",
  //   "phone": "string",
  //   "email": "string",
  //   "city": "string",
  //   "street": "string",
  //   "entrance": "string",
  //   "delivery_method": 0,
  //   "payment_method": 0,
  //   "status": 0
  return (
    <Form
      name="login"
      initialValues={{ remember: true }}
      // style={{ maxWidth: "50%" }}
      labelCol={{ span: 24 }}
      // wrapperCol={{ span: 16 }}
      onFinish={onFinish}
    >
      <Space
        style={spaceStyles}
        direction="vertical"
        size="large"
      >
        <Typography.Title
          level={3}
          style={{ margin: 0 }}
        >Мои данные</Typography.Title>
        {/* write post order form */}
        <Form.Item
          name="name"
          label="Имя"
          rules={[ { required: true, message: 'Введите имя!' } ]}
        >
          <Input placeholder="Александр" />
        </Form.Item>
        <Form.Item
          name="phone"
          label="Номер сотового телефона"
          rules={[ { required: true, message: 'Введите телефон!' } ]}
        >
          <Input placeholder="+7 999 999 99 99" />
        </Form.Item>
        <Form.Item
          name="email"
          label="Электронная почта"
          rules={[ { required: true, message: 'Введите Email!' } ]}
        >
          <Input
            placeholder="example@gmail.com"
            type="email"
          />
        </Form.Item>
      </Space>
      <Space
        style={spaceStyles}
        direction="vertical"
        size="large"
      >
        <Typography.Title
          level={3}
          style={{ margin: 0 }}
        >Выбрать адрес доставки</Typography.Title>
        {/* write post order form */}
        <Form.Item
          name="city"
          label="Населенный пункт"
          rules={[ { required: true, message: 'Введите населенный пункт!' } ]}
        >
          <Input placeholder="Москва" />
        </Form.Item>
        <Form.Item
          name="street"
          label="Улица"
          rules={[ { required: true, message: 'Введите улицу!' } ]}
        >
          <Input placeholder="Ленина" />
        </Form.Item>
        <Form.Item
          name="entrance"
          label="Подъезд"
          rules={[ { required: true, message: 'Введите подъезд!' } ]}
        >
          <Input placeholder="1" />
        </Form.Item>
      </Space>
      <Space
        style={spaceStyles}
        direction="vertical"
        size="large"
      >
        <Typography.Title
          level={3}
          style={{ margin: 0 }}
        >
          Выбрать способ доставки
        </Typography.Title>
        <Form.Item
          name="delivery_method"
          rules={[ { required: true, message: 'Выберите способ доставки!' } ]}
        >
          <Radio.Group>
            <Row>
              <Col span={24}>
                <Radio value="0">
                  Курьерская доставка
                </Radio>
              </Col>
              <Col span={24}>
                <Radio value="1">
                  Самовывоз
                </Radio>
              </Col>
            </Row>
          </Radio.Group>
        </Form.Item>
      </Space>
      <Space
        style={spaceStyles}
        direction="vertical"
        size="large"
      >
        <Typography.Title
          level={3}
          style={{ margin: 0 }}
        >
          Выбрать способ оплаты
        </Typography.Title>
        <Form.Item
          name="payment_method"
          rules={[ { required: true, message: 'Выберите способ оплаты!' } ]}
        >
          <Radio.Group>
            <Row>
              <Col span={24}>
                <Radio value="0">
                  денежными средствами при получении
                </Radio>
              </Col>
              <Col span={24}>
                <Radio value="1">
                  платёжным поручением от компании
                </Radio>
              </Col>
            </Row>
          </Radio.Group>
        </Form.Item>
      </Space>
      <Space
        style={spaceStyles}
        direction="vertical"
        size="large"
      >
        <Form.Item
          name="rules"
          rules={[ { required: true, message: 'Ознакомьтесь с правилами и условиями!' } ]}
        >
          <Radio.Group>
            <Row>
              <Col span={24}>
                <Radio value="courier">
                  я ознакомлен(-на) и полностью согласен(-на) с условиями доставки товара,
                  с условиями публичной оферты и с условиями обработки персональных данных
                </Radio>
              </Col>
            </Row>
          </Radio.Group>
        </Form.Item>
      </Space>
      <Form.Item>
        <Button
          block
          type="primary"
          htmlType="submit"
        >
          Оформить заказ
        </Button>
      </Form.Item>
    </Form>
  );
};

export default OrderModule;