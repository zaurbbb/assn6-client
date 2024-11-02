import { gray } from "@ant-design/colors";
import {
  Flex,
  Space,
  Typography,
} from "antd";
import React, { FC } from "react";

const CustomTitle: FC = () => {
  // styles
  const flexStyles = {
    width: "100%",
  };
  const typographyStyles = {
    margin: 0,

    color: "white",
    fontWeight: "bold",
  };

  return (
    <Flex
      style={flexStyles}
      vertical
    >
      <Typography.Title
        level={2}
        style={typographyStyles}
      >
        Inquadra
      </Typography.Title>
      <Typography.Text style={typographyStyles}>
        ceramic home
      </Typography.Text>
    </Flex>
  );
};

export default CustomTitle;

