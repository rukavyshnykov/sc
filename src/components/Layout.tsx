import styled from "styled-components";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Home } from "../pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { FAQ } from "../pages/FAQ";
import { Profile } from "../pages/Profile";

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100svh;
`;

const Content = styled.div`
  flex-grow: 1;
`;

const router = createBrowserRouter([
  {
    element: <Home />,
    path: "/",
  },
  {
    element: <FAQ />,
    path: "/faq",
  },
  {
    element: <Profile />,
    path: "/profile",
  },
]);

export const LayoutWrapper = () => {
  return (
    <Layout>
      <Header />
      <Content>
        <RouterProvider router={router} />
      </Content>
      <Footer />
    </Layout>
  );
};
