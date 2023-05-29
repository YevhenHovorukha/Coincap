import { Modal, Table, Typography } from "antd";
import React from "react";
import { useSelector } from "react-redux/es/exports";
import styled from "styled-components";

const { Title } = Typography;

const StyledTitle = styled(Title)`
  text-align: center;
  margin-top: 20px;
`;

const StyledTable = styled(Table)`
  margin-top: 20px;
  @media (max-width: 650px) {
    overflow:scroll
`;

const columns = [
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Price",
    dataIndex: "price",
  },
  {
    title: "Value",
    dataIndex: "value",
  },
  {
    title: "Total",
    dataIndex: "total",
  },
];

const ModalHeader = ({ isOpen, handleOk, handleCancel, walletSum }) => {
  const walletData = useSelector((state) => state.wallet.value);

  const dataForTable = walletData.map((item) => {
    return {
      key: item.name,
      name: item.name,
      price: item.price.toFixed(2) + `$`,
      value: item.value,
      total: item.total.toFixed(2) + `$`,
    };
  });

  return (
    <Modal open={isOpen} onOk={handleOk} onCancel={handleCancel} footer={[]}>
      <StyledTitle level={3}>WALLET</StyledTitle>
      <StyledTable
        columns={columns}
        dataSource={dataForTable}
        pagination={false}
      />
      <StyledTitle level={5}>TOTAL: {walletSum}$</StyledTitle>
    </Modal>
  );
};

export default ModalHeader;
