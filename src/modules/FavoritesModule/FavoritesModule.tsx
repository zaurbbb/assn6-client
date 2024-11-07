import {
  Col,
  notification,
  Row,
  Typography,
} from "antd";
import React, { FC } from "react";
import CustomProductCard from "../../components/CustomProductCard";
import CustomSpin from "../../components/CustomSpin";
import { useGetLikedProducts } from "../../tanstack/useLiked";

const FavoritesModule: FC = () => {
  const [ api ] = notification.useNotification();
  const {
    data,
    isLoading,
  } = useGetLikedProducts(api);

  const rowStyles = {
    width: '100%',
  };

  return (
    <>
      <Row
        style={rowStyles}
        gutter={[ 12, 24 ]}
      >
        {isLoading && <CustomSpin />}
        {!isLoading && data.length === 0 && (
          <Col span={24}>
            <Typography.Title level={4}>
              Нет избранных товаров
            </Typography.Title>
          </Col>
        )}
        {!isLoading && data.length > 0 && data.map((product) => (
          <Col
            key={product.id}
            xs={12}
            md={8}
          >
            <CustomProductCard product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default FavoritesModule;