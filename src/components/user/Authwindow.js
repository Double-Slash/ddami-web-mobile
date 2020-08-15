// 회원가입 인증창
import React,{useState} from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {Provider, useDispatch} from "react-redux";
import Complete from './Complete';
import Modal from 'antd/lib/modal/Modal';


const ModalWarapper = `
  display: none; 
  align:center;
  left: 0;
  top: 0;
  width: 50%; 
  height: 50%; 
  overflow: auto; 
`;

const ModalContent = `
  background-color: #fefefe;
  margin: 15% auto; 
  padding: 20px;
  border: 1px solid black;
  width: 30%;
`;

const Button = `
padding: 12px auto;
font-size: 12px;
width: 20%
`;

function Window() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
        <>
        <React.Fragment>
        <Modal>
        <p className="title">인증창</p>
        <ModalContent>
          <input type = "text"/>
        </ModalContent>
        <Button>
          <button onClick={handleClose}> 입력완료 </button>
        </Button>
        </Modal>
        </React.Fragment>
        
        {/*<Modal show={show} onHide={handleClose} animation={false}>*/}
        {/*  <Modal.Header closeButton>*/}
        {/*    <Modal.Title>인증창</Modal.Title>*/}
        {/*  </Modal.Header>*/}
        {/*  <Modal.Body><input type="text"/></Modal.Body>*/}
        {/*  <Modal.Footer>*/}
        {/*    <Button variant="second" onClick={handleClose}>*/}
        {/*      닫기*/}
        {/*    </Button>*/}
        {/*    <Button variant="first" onClick={handleClose}>*/}
        {/*      입력완료*/}
        {/*    </Button>*/}
        {/*  </Modal.Footer>*/}
        {/*</Modal>*/}
      </>
    );
  }

  export default Window;
  