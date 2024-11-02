import IconDot from '/icons/IconDot.svg';
import {
  DollarOutlined,
  TruckOutlined,
} from "@ant-design/icons";
import {
  Button,
  Col,
  Flex,
  notification,
  Row,
  Select,
  Space,
  Tag,
  Typography,
} from 'antd';
import React, {
  CSSProperties,
  useState,
} from 'react';
import { useParams } from "react-router-dom";
import CustomSpin from "../../components/CustomSpin";
import CustomProductLike from "../../components/ui/CustomProductLike";
import useScreenSize from "../../hooks/useScreenSize";
import { useGetProductByProductId } from "../../tanstack/useProducts";
import { useCartStore } from "../../zustand/useCart";

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

const ProductModule = () => {
  const [ api ] = notification.useNotification();
  const { productId } = useParams();
  const {
    addToCart,
    removeFromCart,
    getItemQuantity
  } = useCartStore();
  // const [ itemQuantity, setItemQuantity ] = useState(0);
  const itemQuantity = getItemQuantity(productId);
  console.log('itemQuantity', itemQuantity);

  const {
    isMd,
  } = useScreenSize();
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

    borderRadius: "1rem",

    backgroundColor: "#F0F0F0",
  };

  const imageStyles = {
    width: '100%',
    height: isMd ? '25rem' : '40rem',

    borderRadius: '0.5rem',

    objectFit: 'cover',
  };

  const titleStyles = {
    fontFamily: 'ManropeLight',
  };

  const tagStyle = () => ({
    border: 'none',
    borderRadius: '1rem',
    padding: '1rem 0.1rem',
    margin: 0,
    width: '100%',
    fontSize: '14px',
    cursor: 'pointer',
    textAlign: 'center',
    backgroundColor: '#050505',
    color: 'white',
    transition: 'all 0.3s',
    '&:hover': {
      borderColor: '#40a9ff',
      color: 'white',
    },
  });

  const colStyles = {
    width: "100%",
    padding: !isMd ? 'auto' : '0',
    justifyContent: "center",
  };

  const {
    image_url,
  } = product;
  return (
    <Row
      gutter={[ 16, 16 ]}
      align="top"
    >
      <Col
        style={colStyles}
        md={24}
        lg={12}
      >
        <Flex style={{ height: "100%", position: "relative", textAlign: "center" }}>
          <img
            alt={image_url ? image_url : 'No image'}
            src={image_url ? image_url : 'https://t4.ftcdn.net/jpg/04/70/29/97/360_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg'}
            style={imageStyles}
          />
          <CustomProductLike productId={product.id} />
        </Flex>
      </Col>
      <Col
        style={colStyles}
        md={24}
        lg={12}
      >
        <Flex
          vertical
          gap={8}
          style={{ width: '100%' }}
        >
          <Space
            direction="vertical"
            size="middle"
            style={spaceStyles}
          >
            <Flex justify="space-between">
              <Text type="secondary">
                {product?.category?.name}
              </Text>
            </Flex>
            <Title
              level={3}
              style={titleStyles}
            >
              {product?.name}
            </Title>
            <Text
              style={titleStyles}
            >
              {product?.description}
            </Text>
            <Text
              strong
              style={titleStyles}
            >
              Цена: {product?.price} ₸
            </Text>
          </Space>
          <Space
            direction="vertical"
            size="middle"
            style={spaceStyles}
          >
            <Flex
              align="center"
              gap="small"
            >

              {itemQuantity > 0 ? (
                <Flex gap="small">
                  <Button size="large" onClick={() => removeFromCart(product.id)}>-</Button>
                  <Flex align="center" justify="center" style={{ border: "none", width: "3rem"}} disabled>{itemQuantity}</Flex>
                  <Button size="large" onClick={() => addToCart(product)}>+</Button>
                  <Button
                    size="large"
                    type="primary"
                  >
                    В корзине
                  </Button>
                </Flex>
              ) : (
                <Button
                  size="large"
                  type="primary"
                  block={true}
                  onClick={() => addToCart(product)}
                >
                  Добавить в корзину
                </Button>
              )}
            </Flex>
          </Space>
        </Flex>
      </Col>
    </Row>
  );
};

export default ProductModule;