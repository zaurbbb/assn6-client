import { gray } from "@ant-design/colors";
import {
  Layout,
  Space,
} from "antd";
import React, { FC } from "react";
import useScreenSize from "../../../hooks/useScreenSize";
import CustomContent from "./CustomContent";
import CustomHeader from "./CustomHeader";
import CustomInfo from "./CustomInfo";

const CustomFooter: FC = () => {

  // styles
  const footerStyles = {
    width: "100%",
    padding: "4rem 2rem",

    background: gray[9],
  };
  const spaceStyles = {
    width: "100%",
  };

  return (
    <Layout.Footer style={footerStyles}>
      <Space
        style={spaceStyles}
        direction="vertical"
        size="large"
      >
        {/*<CustomHeader />*/}
        <CustomContent />
        <CustomInfo />
      </Space>
    </Layout.Footer>
  );
};

export default CustomFooter;

