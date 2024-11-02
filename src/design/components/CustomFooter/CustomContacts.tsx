import {
  Flex,
  Typography,
} from "antd";
import React, { FC } from "react";
import { Link } from "react-router-dom";
import { footerContacts } from "../../../data/footerContacts";

const CustomContacts: FC = () => {
  // styles
  const flexStyles = {
    // width: "auto",
  };
  const typographyStyles = {
    margin: 0,

    color: "white",
    fontWeight: "200",
  };

  return (
    <Flex
      style={flexStyles}
      vertical
    >
      {footerContacts.map((item) => (
        <Link
          style={typographyStyles}
          to={item.link}
          key={item.title}
        >
          <Typography.Title
            style={typographyStyles}
            level={4}
          >
            {item.content}
          </Typography.Title>
        </Link>
      ))}
    </Flex>
  );
};

export default CustomContacts;

