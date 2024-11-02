import {
  Col,
  Flex,
  Row,
} from "antd";
import React, { FC } from "react";
import useScreenSize from "../../../hooks/useScreenSize";
import CustomNavbar from "./CustomNavbar";
import CustomSearch from "./CustomSearch";
import CustomTitle from "./CustomTitle";

const CustomContent: FC = () => {
  // hooks
  const { isSm } = useScreenSize();

  // styles
  const rowStyles = {
    padding: "2rem",
  };

  return (
    <Row
      style={rowStyles}
      // justify="space-between"
      // align="center"
    >
      {!isSm && (
        <Col
          xs={0}
          md={6}
          lg={8}
        >
          <CustomTitle />
        </Col>
      )}
      <Col
        xs={24}
        md={12}
        lg={8}
      >
        <CustomSearch />
      </Col>
      {!isSm && (
        <Col
          xs={0}
          md={6}
          lg={8}
          style={{
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <Flex align="flex-end">
            <CustomNavbar />
          </Flex>
        </Col>
      )}
    </Row>
  );
};

export default CustomContent;

