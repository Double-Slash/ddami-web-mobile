// 회원가입 인증창
import React,{useState} from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {Provider, useDispatch} from "react-redux";
import Complete from './pages/complete';

function Window() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
        <>
        <Modal show={show} onHide={handleClose} animation={false}>
          <Modal.Header closeButton>
            <Modal.Title>인증창</Modal.Title>
          </Modal.Header>
          <Modal.Body><input type="text"/></Modal.Body>
          <Modal.Footer>
            <Button variant="second" onClick={handleClose}>
              Close
            </Button>
            <Button variant="first" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }

  export default Window;
  