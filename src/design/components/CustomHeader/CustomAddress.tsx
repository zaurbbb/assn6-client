import { gray } from "@ant-design/colors";
import {
  Flex,
  Space,
  Typography,
} from "antd";
import React, { FC } from "react";
import { headerAddress } from "../../../data/headerAddress";

const CustomAddress: FC = () => {
  // styles
  const flexStyles = {
    width: "100%",
    height: "4rem",
    padding: "0 2rem",

    background: "#f5f5f5",
  };
  const titleStyles = {
    color: "#909090",
  }

  return (
    <></>
    // <Flex
    //   style={flexStyles}
    //   justify="space-between"
    //   align="center"
    // >
    //   <Space>
    //     {headerAddress.map((item) => (
    //       <Typography.Text key={item.title}>
    //         <Typography.Text style={titleStyles}>
    //           {item.title}
    //         </Typography.Text>
    //         {item.address}
    //       </Typography.Text>
    //     ))}
    //   </Space>
    //   <Typography.Text>
    //     +7 926 918 08 41
    //   </Typography.Text>
    // </Flex>
  );
};

export default CustomAddress;

