import React, { useState, forwardRef, useImperativeHandle } from "react";
import { Button, Modal } from "react-bootstrap";

export type MessagePopupRef = {
    show: () => void;
    hide: () => void;
  };
  
interface MessagePopupProps {
  title: string;
  message: string;
  show: boolean;
  handleClose: () => void;
}

const MessagePopup = forwardRef((props: MessagePopupProps, ref) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useImperativeHandle(ref, () => ({
    hide: () => {
      handleClose();
    },
  }));

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{props.message}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fechar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
});

export default MessagePopup;
