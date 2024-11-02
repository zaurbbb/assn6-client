import { Typography } from "antd";
import React, { FC } from "react";
import FavoritesModule from "../modules/FavoritesModule/FavoritesModule.tsx";
const FavoritesPage: FC = () => {
  return (
    <>
      <Typography.Title level={2}>Понравившиеся</Typography.Title>
      <FavoritesModule />
    </>
  );
};

export default FavoritesPage;

