import React from "react";
import { Layout, Typography, Button } from "antd";
import { WalletOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux/es/exports";
import { Outlet } from "react-router-dom";

const { Header, Footer } = Layout;
const { Title, Text } = Typography;

const HeaderComponent = () => {
  const coinData = useSelector((state) => state.coinData.data);
  const textItems = coinData
    ? coinData.slice(0, 3).map((item) => {
        return (
          <Text
            key={item.id}
            type="secondary"
            style={{ color: "white", textAlign: "center" }}
          >
            {item.name} <br /> {`${(+item.priceUsd).toFixed(2)}$`}
          </Text>
        );
      })
    : null;

  return (
    <>
      <Header style={{ display: "flex", alignItems: "center" }}>
        <div
          style={{
            margin: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            gap: "30px",
          }}
        >
          <Title level={5} style={{ color: "white", textAlign: "right" }}>
            Popular <br /> Cryptocurrency
          </Title>
          {textItems}
        </div>
        <div
          style={{ marginLeft: "auto", display: "flex", alignItems: "center" }}
        >
          <Button
            className="header--button"
            icon={<WalletOutlined style={{ fontSize: "30px" }} />}
          >
            <Text
              type="secondary"
              style={{ textAlign: "left", lineHeight: 1.1, color: "#001529" }}
            >
              Total:
              <br />
              1824.70$
            </Text>
          </Button>
        </div>
      </Header>
      <Outlet />
      <Footer style={{ textAlign: "center" }}>
        // Ant Design ©2023 Created by Ant UED //
      </Footer>
    </>
  );
};

export default HeaderComponent;
