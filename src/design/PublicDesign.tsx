import { Layout } from 'antd';
import { CSSProperties } from "react";
import useScreenSize from "../hooks/useScreenSize";
import CustomFooter from "./components/CustomFooter/index";
import CustomHeader from "./components/CustomHeader/index";

const { Content } = Layout;

function Design({ children }) {
  // hooks
  const { isSm } = useScreenSize();

  // styles
  const flexStyle: CSSProperties = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  const layoutStyle: CSSProperties = {
    ...flexStyle,

    background: "white",
  }
  const contentStyle: CSSProperties = {
    // ...flexStyle,

    padding: "0 2rem 2rem 2rem",
    width: "100%",
    minHeight: isSm ? "auto" : "60vh",
  };

  return (
    <Layout style={layoutStyle}>
      <CustomHeader />
      <Content style={contentStyle}>
          {children}
      </Content>
      <CustomFooter />
    </Layout>
  );
}

export default Design;
