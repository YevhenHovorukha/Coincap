import React from "react";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import { Space, Table, Tag } from "antd";
import "./App.css";
import HeaderComponent from "./components/HeaderComponent";
import TableComponent from "./components/TableComponent";

const { Footer, Content } = Layout;

const App = () => {
  const items = [{ title: "Home" }, { title: "List" }, { title: "App" }];
  return (
    <>
      <HeaderComponent />
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
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©2023 Created by Ant UED
      </Footer>
    </>
  );
};

export default App;
