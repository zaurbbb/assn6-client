import {
  HeartOutlined,
  LoginOutlined,
  LogoutOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";

export const headerPublicNavbar = [
  {
    name: "Cart",
    icon: ShoppingCartOutlined,
    link: "/cart",
  }, {
    name: "Login",
    icon: LoginOutlined,
    link: "/login",
  },
];

export const headerPrivateNavbar = [
  {
    name: "Liked",
    icon: HeartOutlined,
    link: "/favorites",
  }, {
    name: "Cart",
    icon: ShoppingCartOutlined,
    link: "/cart",
  },
  // {
  //   name: "Profile",
  //   icon: LogoutOutlined,
  //   link: "/profile",
  // },
];