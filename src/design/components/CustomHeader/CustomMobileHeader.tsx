import {
  HeartOutlined,
  LikeOutlined,
  MenuOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import {
  Flex,
  Space,
} from "antd";
import React, { FC } from "react";
import { useIsAuthStore } from "../../../zustand/useIsAuth";
import CustomNavbar from "./CustomNavbar";
import CustomTitle from "./CustomTitle";

const CustomMobileHeader: FC = () => {
  // state
  // const [ openDrawer, setOpenDrawer ] = useState(false);
  // const handleOpenDrawer = () => setOpenDrawer(!openDrawer);

  // zustand
  const { isAuth } = useIsAuthStore();

  // styles
  const flexStyles = {
    padding: "2rem 2rem 0",
  };
  return (
    <Flex
      style={flexStyles}
      justify="space-between"
    >
      <CustomTitle />
      <CustomNavbar />
      {/*<CustomDrawer*/}
      {/*  openDrawer={openDrawer}*/}
      {/*  handleOpenDrawer={handleOpenDrawer}*/}
      {/*/>*/}
    </Flex>
  );
};

export default CustomMobileHeader;

