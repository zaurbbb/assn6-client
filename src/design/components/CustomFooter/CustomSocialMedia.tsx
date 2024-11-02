import { Space } from "antd";
import React, { FC } from "react";
import { footerSocialMedia } from "../../../data/footerSocialMedia";

const CustomSocialMedia: FC = () => {
  return (
    <Space size="middle">
      {footerSocialMedia.map((item) => (
        <a
          href={item.link}
          target="_blank"
          rel="noreferrer"
          key={item.name}
        >
          <img
            src={item.icon}
            alt={item.name}
          />
        </a>
      ))}
    </Space>
  );
};

export default CustomSocialMedia;

