import React, { FC } from "react";
import ProductModule from "../modules/ProductModule/ProductModule";
import RecommendedModule from "../modules/RecommendedModule/RecommendedModule";

const ProductPage: FC = () => {
  return (
    <>
      <ProductModule />
      <RecommendedModule />
    </>
  );
};

export default ProductPage;

