import { gray } from "@ant-design/colors";
import {
  Col,
  Flex,
  Row,
  Space,
  Typography,
} from "antd";
import React, { FC } from "react";
import { Link } from "react-router-dom";
import { footerNavbar } from "../../../data/footerNavbar";
import useScreenSize from "../../../hooks/useScreenSize";

const CustomNavbar: FC = () => {
  // hooks
  const { isXs } = useScreenSize();

  // styles
  const spaceDirection = isXs ? "vertical" : "horizontal";
  const colSpan = isXs ? 24 : 12;
  const typographyStyles = {
    width: "100%",
    margin: 0,

    color: "white",
  };
  const spaceStyles = {
    // width: "100%",
  };

  // helper component
  const NavbarItem: FC<{ item: any }> = ({ item }) => (
    <Link
      to={item.link}
      key={item.title}
    >
      <Typography.Text style={typographyStyles}>
        {item.title}
      </Typography.Text>
    </Link>
  );

  return (
    // <Space
    //   style={spaceStyles}
    //   size="large"
    //   direction={spaceDirection}
    // >
    <Row
      gutter={[ 32, 16 ]}
      style={{ minWidth: "50%" }}
    >
      <Col span={colSpan}>
        <Flex
          justify="flex-start"
          vertical
        >
          {footerNavbar.slice(0, 5).map((item) => <NavbarItem item={item} />)}
        </Flex>
      </Col>
      <Col span={colSpan}>
        <Flex
          justify="flex-start"
          vertical
        >
          {footerNavbar.slice(5, 10).map((item) => <NavbarItem item={item} />)}
        </Flex>
      </Col>
    </Row>
    // </Space>
  );
};

export default CustomNavbar;

