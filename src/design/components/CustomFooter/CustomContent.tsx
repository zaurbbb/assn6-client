import {
  Col,
  Row,
} from "antd";
import React, { FC } from "react";
import useScreenSize from "../../../hooks/useScreenSize";
import CustomContacts from "./CustomContacts";
import CustomNavbar from "./CustomNavbar";

const CustomContent: FC = () => {
  // hooks
  const {
    isSm,
  } = useScreenSize();

  // styles
  const contactsColStyles = {
    display: "flex",
    justifyContent: isSm ? "flex-start" : "flex-end",
    alignItems: "flex-start",
  };

  return (
    <Row
      justify="space-between"
      gutter={[ 32, 16 ]}
    >
      <Col
        xs={24}
        md={16}
      >
        <CustomNavbar />
      </Col>
      <Col
        style={contactsColStyles}
        xs={24}
        md={8}
      >
        <CustomContacts />
      </Col>
    </Row>
  );
};

export default CustomContent;

