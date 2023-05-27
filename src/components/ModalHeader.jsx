import { Modal } from "antd";
import React from "react";

const ModalHeader = ({ isOpen, handleOk, handleCancel }) => {
  return (
    <>
      <Modal
        title="Basic Modal"
        open={isOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  );
};
export default ModalHeader;
