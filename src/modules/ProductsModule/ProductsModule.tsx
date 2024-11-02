import {
  Col,
  notification,
  Pagination,
  Row,
} from "antd";
import React, {
  FC,
  useEffect,
} from "react";
import CustomProductCard from "../../components/CustomProductCard";
import CustomSpin from "../../components/CustomSpin";
import { useGetProducts } from "../../tanstack/useProducts";
import { useGetFavorites } from "../../tanstack/useProfile";
import { useFavoritesStore } from "../../zustand/useFavorites";
import { useSearchStore } from "../../zustand/useSearch";

const ProductsModule: FC = () => {
  const [ api ] = notification.useNotification();
  const { changeFavorites } = useFavoritesStore();

  const {
    search,
    changeSearch,
  } = useSearchStore();

  const {
    data,
    isLoading: isGetProductsLoading,
  } = useGetProducts(api, search);

  const getProducts = data?.results || [];
  const [ total, setTotal ] = React.useState<number>(0);

  useEffect(() => {
    setTotal(data?.total_records || 0);
  }, [data]);

  const {
    data: getFavorites = [],
    isLoading: isGetFavoritesLoading,
    isRefetching: isFavoritesRefetching,
  } = useGetFavorites(api);

  const isLoading = isGetProductsLoading || isGetFavoritesLoading;

  useEffect(() => {
    changeFavorites(getFavorites);
  }, [ isFavoritesRefetching ]);

  useEffect(() => {
    changeSearch({
      limit: 8,
      page: 1,
    });
  }, []);

  const handlePageChange = (page: number = 1) => {
    changeSearch({
      ...search,
      page,
    });
  };
  console.log('search', search);

  const rowStyles = {
    width: '100%',
  };

  const CustomPagination = () => {
    // if (total > 0) {
    return (
      <Pagination
        align="center"
        defaultCurrent={1}
        current={search.page}
        total={total}
        onChange={handlePageChange}
      />
    );
    // }
  };
  return (
    <>
      <Row
        style={rowStyles}
        gutter={[ 12, 24 ]}
        // justify="space-between"
      >
        <Col
          span={24}
          style={{ justifyContent: "center" }}
        >
          <CustomPagination />
        </Col>
        {getProducts?.map((product) => (
          <Col
            key={product.id}
            span={6}
          >
            <CustomProductCard product={product} />
          </Col>
        ))}
        <Col
          span={24}
          style={{ justifyContent: "center" }}
        >
          <CustomPagination />
        </Col>
      </Row>
    </>
  );
};

export default ProductsModule;