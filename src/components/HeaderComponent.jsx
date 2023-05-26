import React from "react";
import { Layout, Typography } from "antd";
import { Col, Row, Statistic } from "antd";

const { Header } = Layout;
const { Title, Text } = Typography;

const HeaderComponent = () => {
  return (
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

        <Text
          type="secondary"
          color="white"
          style={{ color: "white", textAlign: "center" }}
        >
          Bitcoin <br /> 26453.15$
        </Text>

        <Text type="secondary" style={{ color: "white", textAlign: "right" }}>
          Ethereum <br /> 1805.25$
        </Text>

        <Text type="secondary" style={{ color: "white", textAlign: "right" }}>
          Tether <br /> 1.00$
        </Text>
      </div>
      <div style={{ marginLeft: "auto" }}>
        <Text type="secondary" style={{ color: "white", textAlign: "right" }}>
          Ant Design{" "}
        </Text>
      </div>
    </Header>
  );
};

export default HeaderComponent;
