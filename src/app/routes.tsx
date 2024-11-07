import { lazy } from "react";
import OrdersPage from "../pages/OrdersPage";

const LoginPage = lazy(() => import("../pages/LoginPage.tsx"));
const RegisterPage = lazy(() => import("../pages/RegisterPage.tsx"));
const HomePage = lazy(() => import("../pages/HomePage.tsx"));
const ProfilePage = lazy(() => import("../pages/ProfilePage.tsx"));
const UsersPage = lazy(() => import("../pages/UsersPage.tsx"));
const FavoritesPage = lazy(() => import("../pages/FavoritesPage.tsx"));
const ProductPage = lazy(() => import("../pages/ProductPage.tsx"));
const CartPage = lazy(() => import("../pages/CartPage.tsx"));
const OrderPage = lazy(() => import("../pages/OrderPage.tsx"));
const NotFoundPage = lazy(() => import("../pages/NotFoundPage.tsx"));

export const publicRoutes = [
  { path: "/", element: <HomePage /> },
  { path: "/login", element: <LoginPage /> },
  { path: "/register", element: <RegisterPage /> },

  // product -> productId
  { path: "/product/:productId", element: <ProductPage /> },

  // cart
  { path: "/cart", element: <CartPage /> },

  // order
  { path: "/order/:productId", element: <OrderPage /> },
];

export const privateRoutes = [
  // home
  { path: "/", element: <HomePage /> },

  // profile
  { path: "/profile", element: <ProfilePage /> },

  // notFound
  { path: "/404", element: <NotFoundPage /> },

  // users
  { path: "/users", element: <UsersPage /> },

  // notFound
  { path: "/notFound", element: <NotFoundPage /> },

  // favorites
  { path: "/favorites", element: <FavoritesPage /> },

  // product -> productId
  { path: "/product/:productId", element: <ProductPage /> },

  // cart
  { path: "/cart", element: <CartPage /> },

  // orders
  { path: "/orders", element: <OrdersPage /> },
];

