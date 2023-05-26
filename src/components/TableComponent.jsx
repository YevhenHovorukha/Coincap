import React, { useState, useEffect } from "react";
import { Table, Tooltip, Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import axios from "axios";

const formatNumber = (number) => {
  if (number >= 1000000000) {
    return (number / 1000000000).toFixed(1) + " Billion";
  } else if (number >= 1000000) {
    return (number / 1000000).toFixed(1) + " M";
  } else if (number >= 1000) {
    return (number / 1000).toFixed(1) + " K";
  } else {
    return number.toString();
  }
};

const columns = [
  {
    title: "№",
    dataIndex: "number",
  },
  {
    title: "",
    dataIndex: "symbol",
    render: (text) => <span style={{ color: "red" }}>{text}</span>,
  },
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "VWAP(24Hr)",
    dataIndex: "vwap24Hr",
  },
  {
    title: "Change(24Hr)",
    dataIndex: "change24Hr",
  },
  {
    title: "MarketCap",
    dataIndex: "marketCapUsd",
  },
  {
    title: "Price",
    dataIndex: "priceUsd",
  },
  {
    title: "Buy",
    dataIndex: "buy",
    render: (text) => (
      <Tooltip title={text}>
        <Button
          type="primary"
          style={{ backgroundColor: "red" }}
          shape="circle"
          icon={<PlusOutlined />}
        />
      </Tooltip>
    ),
  },
];

const TableComponent = () => {
  const [coinData, setCoinData] = useState("");

  useEffect(() => {
    const getCoinData = async () => {
      try {
        const getData = await axios.get("https://api.coincap.io/v2/assets", {
          params: {
            limit: 40,
          },
        });
        setCoinData(getData.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    getCoinData();
  }, []);

  const newData = coinData
    ? coinData.map((item, index) => {
        return {
          key: item.id,
          number: index + 1,
          symbol: item.symbol,
          name: item.name,
          vwap24Hr: `${(+item.vwap24Hr).toFixed(2)}$`,
          change24Hr: `${(
            (item.priceUsd * item.changePercent24Hr) /
            100
          ).toFixed(2)}$`,
          marketCapUsd: formatNumber(item.marketCapUsd) + `$`,
          priceUsd: `${(+item.priceUsd).toFixed(2)}$`,
          buy: "",
        };
      })
    : null;
  console.log(newData);
  return (
    <div>
      <Table
        columns={columns}
        dataSource={newData}
        pagination={{
          position: ["bottomCenter"],
          pageSize: 5,
        }}
      />
    </div>
  );
};
export default TableComponent;