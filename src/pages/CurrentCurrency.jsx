import React from "react";
import { Breadcrumb, Layout } from "antd";
import TableCurrentCurrency from "../components/TableCurrentCurrency";
import ChartComponent from "../components/ChartComponent";
import { useParams, useNavigate } from "react-router-dom";

const { Content } = Layout;

const CurrentCurrency = () => {
  const navigate = useNavigate();
  const params = useParams();
  const items = [{ title: "Main" }, { title: "Item" }];
  return (
    <Content style={{ padding: "0 50px" }}>
      <Breadcrumb style={{ margin: "16px 0" }} items={items}></Breadcrumb>
      <div
        className="site-layout-content"
        style={{
          backgroundColor: "white",
          display: "flex",
        }}
      >
        <TableCurrentCurrency id={params.id} />
        <ChartComponent id={params.id} />
      </div>
    </Content>
  );
};

export default CurrentCurrency;
