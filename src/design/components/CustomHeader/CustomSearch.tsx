import { SearchOutlined } from "@ant-design/icons";
import { Input } from 'antd';
import React, { FC } from "react";
import { useSearchStore } from "../../../zustand/useSearch";

const CustomSearch: FC = () => {
  const {
    search,
    changeSearch,
  } = useSearchStore();
  const onSearch = (value: string) => {
    changeSearch({
      ...search,
      search: value,
    });
  }

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
      placeholder="поиск"
      onChange={(e) => onSearch(e.target.value)}
    />
  );
};

export default CustomSearch;

