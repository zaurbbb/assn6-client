import {
  notification,
  Row,
} from "antd";
import React, { FC } from "react";
import CustomMenuFilters from "../../components/CustomMenuFilters";

const MenuFiltersModule: FC = () => {
  const [ api, contextHolder ] = notification.useNotification();

  const rowStyles = {
    width: '100%',
  };
  return (
    <Row style={rowStyles}>
      <CustomMenuFilters />
    </Row>
  );
};

export default MenuFiltersModule;

