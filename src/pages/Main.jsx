import React from "react";
import TableComponent from "../components/TableComponent";
import { Breadcrumb, Layout } from "antd";

const { Content } = Layout;

const Main = () => {
  const items = [{ title: "Main" }, { title: "" }];
  return (
    <Content style={{ padding: "0 50px" }}>
      <Breadcrumb style={{ margin: "16px 0" }} items={items}></Breadcrumb>
      <div
        className="site-layout-content"
        style={{
          backgroundColor: "white",
        }}
      >
        <TableComponent />
      </div>
    </Content>
  );
};

export default Main;
