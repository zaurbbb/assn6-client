import {
  HeartOutlined,
  LoginOutlined,
  LogoutOutlined,
  ShoppingCartOutlined,
  UnorderedListOutlined,
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
  }, {
    name: "Orders",
    icon: UnorderedListOutlined,
    link: "/orders",
  }, {
    name: "Profile",
    icon: UserOutlined,
    link: "/profile",
  },
  // {
  //   name: "Profile",
  //   icon: LogoutOutlined,
  //   link: "/profile",
  // },
];