import {
  Col,
  notification,
  Row,
  Typography,
} from "antd";
import React, {
  FC,
  useEffect,
} from "react";
import CustomProductCard from "../../components/CustomProductCard";
import CustomSpin from "../../components/CustomSpin";
import { useGetFavorites } from "../../tanstack/useProfile";
import { useFavoritesStore } from "../../zustand/useFavorites";

const FavoritesModule: FC = () => {
  const [ api ] = notification.useNotification();
  const { changeFavorites } = useFavoritesStore();

  const {
    data: getFavorites = [],
    isLoading: isGetFavoritesLoading,
    isRefetching: isFavoritesRefetching,
  } = useGetFavorites(api);

  const isLoading = isGetFavoritesLoading;

  useEffect(() => {
    changeFavorites(getFavorites);
  }, [ isFavoritesRefetching ]);

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
        {!isLoading && getFavorites.length === 0 && (
          <Col span={24}>
            <Typography.Title level={4}>
              Нет избранных товаров
            </Typography.Title>
          </Col>
        )}
        {!isLoading && getFavorites.length > 0 && getFavorites.map((product) => (
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