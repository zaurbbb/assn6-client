import { SearchOutlined } from "@ant-design/icons";
import { Input } from 'antd';
import React, { FC } from "react";

const CustomSearch: FC = () => {
  // const onSearch = (value: string) => console.log(value);

  // styles
  const inputStyles = {
    background: "#F0F0F0",
  };
  const iconStyles = {
    color: "#909090",
  };

  return (
    <Input
      style={inputStyles}
      addonBefore={<SearchOutlined style={iconStyles} />}
      addonAfter={null}
      prefix={null}
      suffix={null}
      variant="borderless"
      placeholder="плитка оникс"
      // onSearch={onSearch}
    />
  );
};

export default CustomSearch;

