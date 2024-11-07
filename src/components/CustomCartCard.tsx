import { gray } from "@ant-design/colors";
import { ShoppingCartOutlined } from "@ant-design/icons";
import {
  Button,
  Card,
  Col,
  Flex,
  Row,
  Space,
  Tag,
  Typography,
} from 'antd';
import React, { CSSProperties } from 'react';
import { Link } from "react-router-dom";
import useScreenSize from "../hooks/useScreenSize";
import { useCartStore } from "../zustand/useCart";
import CustomProductAvailability from "./ui/CustomProductProperty";
import CustomProductLike from "./ui/CustomProductLike";

const { Text, Title } = Typography;

interface ProductCardProps {
  product: {
    article: string;
    availability: string;
    category: string;
    country: string;
    id: number;
    image_url: string;
    invoice: string;
    kit: number;
    manufacturing: string;
    name: string;
    plating: string;
    price: number;
    quantity: number;
    shade: string;
    size: string;
    texture: string;
    usage: string;
  };
}

const ProductCard = ({
  product,
}: ProductCardProps) => {
  const { isMd } = useScreenSize();

  const {
    addToCart,
    removeFromCart,
    getItemQuantity,
  } = useCartStore();
  const itemQuantity = getItemQuantity(product?.id);

  const cardStyles: CSSProperties = {
    width: '100%',
    position: 'relative',
    backgroundColor: '#F7F7F7',
  };

  const imageStyles: CSSProperties = {
    width: '100%',
    height: '25rem',
    borderRadius: '1rem',
    objectFit: 'cover',
  };

  const textSecondaryStyles: CSSProperties = {
    fontSize: '13px',
  };

  const flexStyles: CSSProperties = {
    position: 'relative',
  };


  const spaceStyles: CSSProperties = {
    width: "100%",
    padding: "1.2rem",

    borderRadius: "1rem",

    backgroundColor: "#F0F0F0",
  };
  const titleStyles = {
    fontFamily: 'ManropeLight',
    margin: 0,
  };
  const tagStyle = (): CSSProperties => ({
    border: 'none',
    borderRadius: '1rem',
    padding: '0.7rem 1.5rem',
    margin: 0,
    fontSize: '14px',
    cursor: 'pointer',
    textAlign: 'center',
    backgroundColor: '#05050540',
    color: 'white',
    transition: 'all 0.3s',
    '&:hover': {
      borderColor: '#40a9ff',
      color: 'white',
    },
  });

  return (
    <Flex
      style={{ width: "100%" }}
      vertical
      gap={8}
    >
      <Row gutter={[ 8, 8 ]}>
        <Col
          span={10}
          style={{ position: 'relative' }}
        >
          <img
            alt={product?.image_url ? product?.image_url : 'No image'}
            src={product?.image_url ? product?.image_url : 'https://t4.ftcdn.net/jpg/04/70/29/97/360_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg'}
            style={imageStyles}
          />
          <CustomProductLike productId={product?.id} />
        </Col>
        <Col
          span={14}
          style={{ width: "100%" }}
        >
          <Flex
            vertical={true}
            justify={"space-between"}
            align={"start"}
            gap={8}
            style={{ width: "100%", height: "100%" }}
          >
            <Space
              direction="vertical"
              style={spaceStyles}
            >
              <Text type="secondary">
                {product?.category?.name}
              </Text>

              <Title
                level={4}
                style={titleStyles}
              >
                {product?.name}
              </Title>
              <Text type="secondary">
                Итоговая цена: <Text>{+product?.price*itemQuantity} ₸</Text>
              </Text>
            </Space>

            <Flex gap="small">
              <Button
                size="large"
                onClick={() => removeFromCart(product.id)}
              >
                -
              </Button>
              <Flex
                align="center"
                justify="center"
                style={{ border: "none", width: "3rem" }}
                disabled
              >
                {itemQuantity}
              </Flex>
              <Button
                size="large"
                onClick={() => addToCart(product)}
              >
                +
              </Button>
            </Flex>

          </Flex>
        </Col>
      </Row>
    </Flex>
  );
};

export default ProductCard;