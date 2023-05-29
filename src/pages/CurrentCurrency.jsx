import React from "react";
import { Breadcrumb, Layout } from "antd";
import TableCurrentCurrency from "../components/TableCurrentCurrency";
import ChartComponent from "../components/ChartComponent";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const { Content } = Layout;

const StyledContent = styled(Content)`
  padding: 0 50px;
  @media (max-width: 650px) {
    padding: 0 10px;
`;

const StyledBreadcrumb = styled(Breadcrumb)`
  margin: 16px 0;
`;

const StyledLayoutContent = styled.div`
  background-color: white;
  display: flex;
  @media (max-width: 650px) {
    flex-direction:column
`;

const CurrentCurrency = () => {
  const params = useParams();
  const items = [{ title: "Main", href: "/" }, { title: params.id }];

  return (
    <StyledContent>
      <StyledBreadcrumb items={items} />
      <StyledLayoutContent>
        <TableCurrentCurrency id={params.id} />
        <ChartComponent id={params.id} />
      </StyledLayoutContent>
    </StyledContent>
  );
};

export default CurrentCurrency;
