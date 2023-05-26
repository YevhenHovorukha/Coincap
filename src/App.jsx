import React, { useEffect } from "react";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import { Space, Table, Tag } from "antd";
import "./App.css";
import HeaderComponent from "./components/HeaderComponent";
import TableComponent from "./components/TableComponent";
import { getCoinData } from "./Redux/reducers/coinDataSlice";
import { useDispatch } from "react-redux/es/exports";

const { Footer, Content } = Layout;

const App = () => {
  const dispatch = useDispatch();
  const items = [{ title: "Home" }, { title: "List" }, { title: "App" }];
  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(getCoinData());
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [dispatch]);
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
