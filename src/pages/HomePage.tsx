import {
  Col,
  Row,
} from "antd";
import React, {
  CSSProperties,
  FC,
} from "react";
import useScreenSize from "../hooks/useScreenSize";
import MenuFiltersModule from "../modules/MenuFiltersModule/MenuFiltersModule";
import MetaModule from "../modules/MetaModule/MetaModule";
import ProductsModule from "../modules/ProductsModule/ProductsModule";

const HomePage: FC = () => {
  const { isMd } = useScreenSize();
  const colStyles: CSSProperties = {
    alignItems: "flex-start",
    padding: 0,
  };
  return (
    <>
      {/*<MetaModule />*/}
      <Row
        justify="center"
        align="top"
        gutter={[ 24, 16 ]}
      >
        {!isMd && (
          <Col
            span={5}
          >
            <MenuFiltersModule />
          </Col>
        )}
        <Col
          style={colStyles}
          span={isMd ? 24 : 19}
        >
          <ProductsModule />
        </Col>
      </Row>
    </>
  );
};

export default HomePage;

