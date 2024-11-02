import { gray } from "@ant-design/colors";
import {
  Flex,
  Space,
  Typography,
} from "antd";
import React, { FC } from "react";
import { Link } from "react-router-dom";
import useScreenSize from "../../../hooks/useScreenSize";

const CustomTitle: FC = () => {
  // hooks
  const { isMd } = useScreenSize();

  // styles
  const titleLevel = !isMd ? 2 : 3;
  const flexStyles = {
    // width: "100%",
  };
  const typographyStyles = {
    margin: 0,

    color: gray[9],
    fontWeight: "800",
  };

  return (
    <Link to="/">
      <Flex
        style={flexStyles}
        vertical
      >
        <Typography.Title
          level={titleLevel}
          style={typographyStyles}
        >
          Marketplace
        </Typography.Title>
        <Typography.Text style={typographyStyles}>
          Assignment 6
        </Typography.Text>
      </Flex>
    </Link>
  );
};

export default CustomTitle;

