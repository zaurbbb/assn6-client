import { gray } from "@ant-design/colors";
import {
  Card,
  Flex,
  Typography,
} from 'antd';
import React, { CSSProperties } from 'react';
import { Link } from "react-router-dom";
import useScreenSize from "../hooks/useScreenSize";
import CustomProductLike from "./ui/CustomProductLike";

const { Text, Title } = Typography;

interface ProductCardProps {
  product: {
    id: number;
    name: string;
    price: number;
    inStock: boolean;
    image_url: string;
    category: string;
    kit: number;
  };
}

const ProductCard = ({
  product: {
    id,
    name,
    price,
    inStock,
    image_url,
    category,
    kit,
  },
}: ProductCardProps) => {
  const { isMd } = useScreenSize();

  const cardStyles: CSSProperties = {
    width: '100%',
    height: '100%',
    position: 'relative',
    backgroundColor: '#F7F7F7',
  };

  const imageStyles: CSSProperties = {
    width: '100%',
    height: '25rem',
    borderTopLeftRadius: '0.6rem',
    borderTopRightRadius: '0.6rem',

    objectFit: 'cover',
  };

  const textSecondaryStyles: CSSProperties = {
    fontSize: '13px',
  };

  const flexStyles: CSSProperties = {
    height: "100%",
    position: 'relative',
    justifyContent: 'space-between',
  };

  const ProductInfo = () => {
    const priceStyles: CSSProperties = {
      margin: "0 0 1rem 0",
      fontFamily: 'ManropeSemiBold',
    };
    const nameStyles: CSSProperties = {
      margin: 0,
      fontFamily: 'ManropeSemiBold',
    };
    return (
      <Flex
        style={flexStyles}
        justify="space-between"
        vertical={true}
      >
        <Title
          style={priceStyles}
          level={4}
        >
          {price} ₸
        </Title>
        <Title
          style={nameStyles}
          level={4}
        >
          {name}
        </Title>
        <Text type="secondary">
          {category?.name}
        </Text>
      </Flex>
    );
  };

  return (
    <Card
      key={id}
      style={cardStyles}
      cover={
        <Flex style={{ height: "100%", position: "relative", textAlign: "center" }}>
          <Link to={`/product/${id}`}>
            <img
              alt={image_url ? image_url : 'No image'}
              src={image_url ? image_url : 'https://t4.ftcdn.net/jpg/04/70/29/97/360_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg'}
              style={imageStyles}
            />
          </Link>
          <CustomProductLike productId={id} />
        </Flex>
      }
    >
      <Link to={`/product/${id}`}>
        <ProductInfo />
      </Link>
    </Card>
  );
};

export default ProductCard;