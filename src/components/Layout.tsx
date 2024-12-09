import styled from "styled-components";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Home } from "../pages/Home";

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100svh;
`;

const Content = styled.div`
  flex-grow: 1;
`;

export const LayoutWrapper = () => {
  return (
    <Layout>
      <Header />
      <Content>
        <Home />
      </Content>
      <Footer />
    </Layout>
  );
};
