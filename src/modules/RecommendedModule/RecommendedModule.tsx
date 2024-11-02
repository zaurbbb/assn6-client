import {
  Button,
  Col,
  Flex,
  notification,
  Row,
  Select,
  Space,
  Typography,
} from 'antd';
import React, { CSSProperties } from 'react';
import { useParams } from "react-router-dom";
import CustomProductCard from "../../components/CustomProductCard";
import CustomSpin from "../../components/CustomSpin";
import CustomProductLike from "../../components/ui/CustomProductLike";
import useScreenSize from "../../hooks/useScreenSize";
import {
  useGetProductByProductId,
  useGetRecommendedProducts,
} from "../../tanstack/useProducts";
import { useCartStore } from "../../zustand/useCart";
import { useIsAuthStore } from "../../zustand/useIsAuth";

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

const RecommendedModule = () => {
  const { isAuth } = useIsAuthStore();
  if (!isAuth) {
    return null;
  }
  const [ api ] = notification.useNotification();
  const { productId } = useParams();
  const {
    addToCart,
    removeFromCart,
    getItemQuantity
  } = useCartStore();

  const itemQuantity = getItemQuantity(productId);
  console.log('itemQuantity', itemQuantity);

  const {
    isMd,
  } = useScreenSize();
  const {
    data: product = {} as IProduct,
    isLoading: isProductLoading,
  } = useGetProductByProductId(api, productId);

  const {
    data: recommendedProducts = [],
    isLoading: isRecommendedProductsLoading,
  } = useGetRecommendedProducts(api);
  console.log("recommendedProducts", recommendedProducts);
  if (isProductLoading && isRecommendedProductsLoading) {
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

  const {
    image_url,
  } = product;


  return (
    <Space direction="vertical" style={spaceStyles}>
      <Title style={titleStyles}>Рекомендованные товары</Title>
      {recommendedProducts.map((product: IProduct) => (
        <CustomProductCard product={product} />
      ))}
    </Space>
  );
};

export default RecommendedModule;