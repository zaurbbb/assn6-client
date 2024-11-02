import {
  Button,
  Col,
  notification,
  Row,
} from "antd";
import React, {
  FC,
  useEffect,
} from "react";
import { Link } from "react-router-dom";
import CustomCartCard from "../../components/CustomCartCard";
import useScreenSize from "../../hooks/useScreenSize";
import { useGetFavorites } from "../../tanstack/useProfile";
import { useCartStore } from "../../zustand/useCart";
import { useFavoritesStore } from "../../zustand/useFavorites";

const CartModule: FC = () => {
  const [ api ] = notification.useNotification();
  const { cart } = useCartStore();
  const { isMd } = useScreenSize();
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
    // width: '100%',
  };

  return (
    <Row
      style={rowStyles}
      gutter={[ 12, 24 ]}
    >

      {cart?.map((product) => (
        <Col
          key={product.id}
          span={!isMd ? 12 : 24}
        >
          <CustomCartCard product={product} />
        </Col>
      ))}
    </Row>
  );
};

export default CartModule;