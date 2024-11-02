import { Flex } from "antd";
import React, { FC } from "react";
import CustomSocialMedia from "./CustomSocialMedia";
import CustomTitle from "./CustomTitle";

const CustomFooterContent: FC = () => {
  return (
    <Flex>
      <CustomTitle />
      <CustomSocialMedia />
    </Flex>
  );
};

export default CustomFooterContent;

