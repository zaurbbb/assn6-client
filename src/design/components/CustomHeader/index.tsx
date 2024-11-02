import { gray } from "@ant-design/colors";
import {
  Flex,
  Layout,
  Space,
} from "antd";
import React, { FC } from "react";
import useScreenSize from "../../../hooks/useScreenSize";
import CustomAddress from "./CustomAddress";
import CustomContent from "./CustomContent";
import CustomMobileHeader from "./CustomMobileHeader";

const CustomHeader: FC = () => {
  const {
    isSm,
    isLg,
  } = useScreenSize();

  const headerStyles = {
    width: "100%",
    height: "auto",
    padding: 0,

    background: "white",
  };


  return (
    <Layout.Header style={headerStyles}>
      <Flex vertical>
        {isSm && <CustomMobileHeader />}
        {!isLg && <CustomAddress />}
        <CustomContent />
      </Flex>
    </Layout.Header>
  );
};

export default CustomHeader;

