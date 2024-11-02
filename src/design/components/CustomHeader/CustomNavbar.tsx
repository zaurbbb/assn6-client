import Icon from "@ant-design/icons";
import { Space } from "antd";
import React, { FC } from "react";
import { Link } from "react-router-dom";
import {
  headerPrivateNavbar,
  headerPublicNavbar,
} from "../../../data/headerNavbar";
import { useIsAuthStore } from "../../../zustand/useIsAuth";

const CustomNavbar: FC = () => {
  // zustand
  const { isAuth } = useIsAuthStore();

  // styles
  const iconStyles = {
    fontSize: "2rem",
    color: "black",

    cursor: "pointer",
  };

  const NavbarItem: FC<{
    item: {
      name: string;
      icon: any;
      link: string;
    }
  }> = ({ item }) => (
    <Link
      to={item.link}
      key={item.name}
    >
      <Icon
        style={iconStyles}
        component={item.icon}
      />
    </Link>
  );
  return (
    <Space size="middle">
      {isAuth && headerPrivateNavbar.map((item) => <NavbarItem item={item} />)}
      {!isAuth && headerPublicNavbar.map((item) => <NavbarItem item={item} />)}
    </Space>
  );
};

export default CustomNavbar;

