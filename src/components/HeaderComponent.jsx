import React, { useState } from "react";
import { Layout, Typography, Button } from "antd";
import { WalletOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux/es/exports";
import { Outlet } from "react-router-dom";
import ModalHeader from "./ModalHeader";
import styled from "styled-components";

const { Header, Footer } = Layout;
const { Title, Text } = Typography;

const StyledHeader = styled(Header)`
 
  display: flex;
  align-items: center;
  @media (max-width: 650px) {
    padding: 0 20px;
    
`;

const StyledTitle = styled(Title)`
  && {
    color: white;
    text-align: right;
  }
`;

const StyledTitleCoinCap = styled(Title)`
  && {
    display:none;
    color: white;
    text-align: right;
    @media (max-width: 650px) {
      display:block;
      margin:0;
  } 
`;

const StyledText = styled(Text)`
  && {
    color: white;
    text-align: center;
  }
`;

const StyledButton = styled(Button)`
  && {
    margin-left: auto;
    display: flex;
    align-items: center;
    :hover {
      color: red;
      border-color: red;
    }
  }
`;

const StyledDiv = styled.div`
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 30px;
  @media (max-width: 650px) {
    display:none;
`;

const StyledWalletIconStyle = styled(WalletOutlined)`
  font-size: 30px;
`;

const StyledWalletText = styled(Text)`
  && {
    text-align: left;
    line-height: 1.1;
    color: #001529;
  }
`;

const StyledFooter = styled(Footer)`
  text-align: center;
`;

const HeaderComponent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const walletData = useSelector((state) => state.wallet.value);

  const walletSum =
    walletData.length === 0
      ? 0
      : walletData.reduce((acc, item) => item.total + acc, 0);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const coinData = useSelector((state) => state.coinData.data);
  const textItems = coinData
    ? coinData.slice(0, 3).map((item) => {
        return (
          <StyledText key={item.id} type="secondary">
            {item.name} <br /> {`${(+item.priceUsd).toFixed(2)}$`}
          </StyledText>
        );
      })
    : null;

  return (
    <>
      <StyledHeader>
        <StyledTitleCoinCap level={3}>CoinCap</StyledTitleCoinCap>
        <StyledDiv>
          <StyledTitle level={5}>
            Popular <br /> Cryptocurrency
          </StyledTitle>
          {textItems}
        </StyledDiv>
        <StyledButton
          className="header--button"
          icon={<StyledWalletIconStyle />}
          onClick={showModal}
        >
          <StyledWalletText type="secondary">
            Total:
            <br />
            {walletSum.toFixed(2)}$
          </StyledWalletText>
        </StyledButton>
      </StyledHeader>
      <ModalHeader
        showModal={showModal}
        handleOk={handleOk}
        handleCancel={handleCancel}
        isOpen={isModalOpen}
        walletSum={walletSum}
      />
      <Outlet />
      <StyledFooter>Ant Design ©2023 Created by Ant UED</StyledFooter>
    </>
  );
};

export default HeaderComponent;
