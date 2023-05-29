import React, { useState, useEffect } from "react";
import { Modal, Typography, Input } from "antd";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { addItem } from "../Redux/reducers/walletSlice";
import styled from "styled-components";

const { Title } = Typography;

const StyledModal = styled(Modal)`
    .ant-modal-content {
      max-width:400px;
      margin: 0 auto;
`;

const StyledContainer = styled.div`
  align-self: center;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const StyledTitle = styled(Title)`
  text-align: "center";
`;

const ModalTable = ({
  isModalOpen,
  handleOk,
  handleCancel,
  selectedItemName,
  selectedItemPrice,
}) => {
  const walletData = useSelector((state) => state.wallet.value);
  const dispath = useDispatch();
  const [formData, setFormData] = useState({
    name: "",
    value: "",
    price: null,
    total: null,
  });

  console.log(walletData);
  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    let total = null;

    if (name === "value") {
      total = value * formData.price;
    } else if (name === "price") {
      total = (formData.value * value).toFixed(2);
    }

    setFormData((prevState) => ({
      ...prevState,
      [name]: value.replace(/\D/g, ""),
      total,
    }));
  };
  useEffect(
    () =>
      setFormData((prevState) => {
        return {
          ...prevState,
          name: selectedItemName,
          price: parseFloat(selectedItemPrice),
        };
      }),
    [selectedItemName, selectedItemPrice]
  );

  const addToWallet = () => {
    dispath(addItem(formData));
    setFormData((prevState) => {
      return {
        ...prevState,
        value: "",
        total: prevState.value + prevState.price,
      };
    });
  };

  return (
    <>
      <StyledModal
        className="modal-table"
        open={isModalOpen}
        onOk={() => {
          handleOk();
          addToWallet();
        }}
        onCancel={handleCancel}
        okButtonProps={{ disabled: !formData.value }}
      >
        <StyledContainer>
          <StyledTitle level={5}>Buy {selectedItemName}</StyledTitle>
          <Input
            placeholder="Enter Value"
            name="value"
            onChange={onChangeHandler}
            value={formData.value}
          />
        </StyledContainer>
      </StyledModal>
    </>
  );
};
export default ModalTable;
