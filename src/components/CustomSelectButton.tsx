import {
  ControlOutlined,
  DownOutlined,
} from "@ant-design/icons";
import {
  Button,
  Dropdown,
  Menu,
} from "antd";
import React from "react";
import useScreenSize from "../hooks/useScreenSize";

interface CustomSelectButtonProps {
  handleSorterChange: (value: string) => void;
  sorterOptions: { label: string; value: string }[];
}

const CustomSelectButton = ({
  handleSorterChange,
  sorterOptions,
}: CustomSelectButtonProps) => {
  const { isSm } = useScreenSize();
  const handleMenuClick = ({ key }: { key: string }) => {
    handleSorterChange(key);
  };

  const menuStyles = {
    backgroundColor: "#050505",
    color: "white",
  };
  const menu = (
    <Menu
      onClick={handleMenuClick}
      style={menuStyles}
    >
      {sorterOptions.map((option) => (
        <Menu.Item
          key={option.value}
          style={menuStyles}
        >
          {option.label}
        </Menu.Item>
      ))}
    </Menu>
  );

  return (
    <Dropdown
      overlay={menu}
      trigger={[ 'click' ]}
      placement="bottomRight"
    >
      <Button
        icon={isSm ? <ControlOutlined /> : <DownOutlined />}
        iconPosition="end"
      >
        { !isSm && "сортировка по"}
      </Button>
    </Dropdown>
  );
};

export default CustomSelectButton;
