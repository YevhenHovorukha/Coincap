import React, { useState } from "react";
import { Table, Tooltip, Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux/es/exports";
import { useNavigate } from "react-router-dom";
import ModalTable from "./ModalTable";
import styled from "styled-components";
import { formatNumber } from "../utils/formatNumber";

const StyledButton = styled(Button)`
  && {
    background-color: red;
    :hover {
      background-color: red;
    }
  }
`;
const StyledTable = styled(Table)`
  @media (max-width: 750px) {
    overflow: scroll;
  }
  .ant-pagination-item-active > a {
    color: red;
    :hover {
      color: red;
    }
  }
  .ant-pagination-item-active {
    border-color: red;
    :hover {
      border-color: red;
    }
  }
`;

const StyledBoltRed = styled.span`
  color: red;
  font-weight: bold;
`;

const TableComponent = () => {
  const [selectedItemName, setSelectedItemName] = useState(null);
  const [selectedItemPrice, setSelectedItemPrice] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const columns = [
    {
      title: "№",
      dataIndex: "number",
    },
    {
      title: "",
      dataIndex: "symbol",
      render: (text) => <StyledBoltRed>{text}</StyledBoltRed>,
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
      render: (text, record) => (
        <>
          <Tooltip title={text}>
            <StyledButton
              type="primary"
              shape="circle"
              icon={<PlusOutlined />}
              onClick={(event) => {
                event.stopPropagation();
                showModal(record.name, record.priceUsd);
              }}
            />
          </Tooltip>
        </>
      ),
    },
  ];

  const showModal = (itemName, itemPrice) => {
    setSelectedItemName(itemName);
    setSelectedItemPrice(itemPrice);
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const navigate = useNavigate();
  const coinData = useSelector((state) => state.coinData.data);

  const newData = coinData
    ? coinData.map((item, index) => {
        return {
          key: item.id,
          id: item.id,
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

  return (
    <>
      <StyledTable
        columns={columns}
        dataSource={newData}
        pagination={{
          position: ["bottomCenter"],
          pageSize: 6,
        }}
        onRow={(record) => ({
          onClick: () => navigate(`${record.id}`),
        })}
      />
      <ModalTable
        isModalOpen={isModalOpen}
        handleOk={handleOk}
        handleCancel={handleCancel}
        selectedItemName={selectedItemName}
        selectedItemPrice={selectedItemPrice}
      />
    </>
  );
};

export default TableComponent;
