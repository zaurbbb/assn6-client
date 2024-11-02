import { Typography } from "antd";
import React, { CSSProperties } from "react";

const CustomProductLike = ({
  property,
}: {
  property: string;
}) => {

  const textStyles: CSSProperties = {
    padding: '2px 8px',

    background: "rgba(255,255,255,0.4)",

    borderRadius: '4rem',

    color: "#ffffff",
  };

  return (
    <Typography.Text style={textStyles}>{property}</Typography.Text>
  );
};

export default CustomProductLike;

