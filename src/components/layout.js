import React from "react";
import styled from "@emotion/styled";
import { MDXProvider } from "@mdx-js/react";
import ThemeProvider from "./themeProvider";
import mdxComponents from "./mdxComponents";
import Sidebar from "./sidebar";
import RightSidebar from "./rightSidebar";

const Wrapper = styled("div")`
  display: flex;
  justify-content: space-between;
  background-color: #e6e7ec;

  @media only screen and (max-width: 767px) {
    display: block;
  }
`;

const Content = styled("main")`
  display: flex;
  flex-grow: 1;
  margin: 0px 50px;
  padding-top: 2rem;
  background-color: #e6e7ec;

  @media only screen and (max-width: 1023px) {
    padding-left: 10px;
    padding-right: 10px;
    margin: 0 10px;
    padding-top: 2rem;
  }
`;

const MaxWidth = styled("div")`
  @media only screen and (max-width: 50rem) {
    width: 100%;
    position: relative;
  }
`;

const LeftSideBarWidth = styled("div")`
  width: 250px;
  min-width: 200px;
`;
const RightSideBarWidth = styled("div")`
  width: 224px;
  min-width: 175px;
`;

const Layout = ({ children, location }) => (
  <ThemeProvider location={location}>
    <MDXProvider components={mdxComponents}>
      <Wrapper>
        <LeftSideBarWidth className={"hidden-xs"}>
          <Sidebar location={location} />
        </LeftSideBarWidth>
        <Content>
          <MaxWidth>{children}</MaxWidth>
        </Content>
        <RightSideBarWidth className={"hidden-xs"}>
          <RightSidebar location={location} />
        </RightSideBarWidth>
      </Wrapper>
    </MDXProvider>
  </ThemeProvider>
);

export default Layout;
