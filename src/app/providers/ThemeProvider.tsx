import { ConfigProvider } from "antd";
import { ReactNode } from "react";

interface ThemeProviderProps {
  children?: ReactNode;
}

function ThemeProvider({ children }: ThemeProviderProps): ReactNode {

  return (
    <ConfigProvider
      theme={{
        token: {
          fontFamily: "ManropeMedium",
        },
        components: {
          Checkbox: {
            colorPrimary: "#050505",
            colorPrimaryHover: "#050505",
          },
          Radio: {
            colorPrimary: "#050505",
            colorPrimaryHover: "#050505",
          },
          Button: {
            colorPrimaryHover: "white",
            colorPrimaryActive: "gray",
          },
          Pagination: {
            colorPrimary: "#050505",
            colorPrimaryHover: "#050505",
          },
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
}

export default ThemeProvider;
