import React from "react";
import TableComponent from "../components/TableComponent";
import { Breadcrumb, Layout } from "antd";
import styled from "styled-components";

const { Content } = Layout;

const StyledContent = styled(Content)`
  padding: 0 50px;
  @media (max-width: 650px) {
    padding: 0 10px
`;

const StyledBreadcrumb = styled(Breadcrumb)`
  margin: 16px 0;
`;

const Main = () => {
  const items = [{ title: "Main", href: "/" }];

  return (
    <StyledContent>
      <StyledBreadcrumb items={items} />
      <TableComponent />
    </StyledContent>
  );
};

export default Main;
