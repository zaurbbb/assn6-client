import {
  Flex,
  Pagination,
} from "antd";
import React, { FC } from "react";

const CustomPagination: FC = ({
  query,
  handleQueryChange,
}) => {
  return (
    <Pagination
      align="center"
      defaultCurrent={1}
      current={query.page}
      total={50}
      onChange={handleQueryChange}
    />
  );
};

export default CustomPagination;

