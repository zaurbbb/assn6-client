import { Tag } from "antd";
import React, { FC } from "react";

const CustomStatus: FC = ( {
  status,
}: {
  status: string
}) => {
  let statusColor = "";
  let statusText = "";
  switch (status) {
    case "pending":
      statusColor = "orange";
      statusText = "В ожидании"
      break;
    case "shipping":
      statusColor = "blue";
      statusText = "Доставляется"
      break;
    case "delivered":
      statusColor = "green";
      statusText = "Доставлен"
      break;
    case "cancelled":
      statusColor = "red";
      statusText = "Отменен"
      break;
    default:
      statusColor = "black";
      break;
  }
  return (
    <Tag color={statusColor}>
      {statusText}
    </Tag>
  );
};

export default CustomStatus;

