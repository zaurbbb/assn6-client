import { CloseOutlined } from "@ant-design/icons";
import {
  Drawer,
  Flex,
  Typography,
} from "antd";
import React, { FC } from "react";

interface CustomDrawerProps {
  openDrawer: boolean;
  handleOpenDrawer: () => void;
}

const CustomDrawer: FC<CustomDrawerProps> = ({
  openDrawer,
  handleOpenDrawer,
}) => {
  return (
    <Drawer
      title={(
        <Flex justify="space-between">
          <CloseOutlined onClick={handleOpenDrawer} />
          <Typography.Text>
            Inquadra
          </Typography.Text>
        </Flex>
      )}
      placement="left"
      size="small"
      onClose={handleOpenDrawer}
      closable={false}
      // onClose={onClose}
      open={openDrawer}
      key="left"
    >
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Drawer>
  );
};

export default CustomDrawer;