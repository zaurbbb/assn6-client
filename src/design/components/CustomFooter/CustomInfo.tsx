import { gray } from "@ant-design/colors";
import {
  Col,
  Row,
  Typography,
} from "antd";
import React, { FC } from "react";
import useScreenSize from "../../../hooks/useScreenSize";

const CustomInfo: FC = () => {
  // hooks
  const { isSm } = useScreenSize();

  // styles
  const colStyles = {
    display: "flex",
    justifyContent: isSm ? "flex-start" : "flex-end",
  };
  const typographyPrimaryStyles = {
    color: "white",
  };
  const typographySecondaryStyles = {
    color: gray[0],
  };
  return (
    <Row
      justify="space-between"
      gutter={[ 32, 16 ]}
    >
      <Col span={24}>
        <Typography.Text style={typographyPrimaryStyles}>
          пользовательское соглашение
        </Typography.Text>
      </Col>
      <Col
        xs={24}
        md={12}
      >
        <Typography.Text style={typographySecondaryStyles}>
          2024 ⓒ все права защищены
        </Typography.Text>
      </Col>
      <Col
        style={colStyles}
        xs={24}
        md={12}
      >
        <Typography.Text style={typographySecondaryStyles}>
          {/*ооо «мегаполис» · огрн: 1205000032192*/}
        </Typography.Text>
      </Col>
    </Row>
  );
};

export default CustomInfo;

