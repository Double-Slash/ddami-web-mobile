import React from 'react';
import './App.css';
import Main from "./pages/Main";
import {Route} from "react-router-dom";
import ImageGrid from "./components/ImageGrid";
import {Provider} from "react-redux";
import createStore from "./utils/store";
import {createGlobalStyle} from 'styled-components';
import Page from './pages';
import Complete from './components/MembershipComplete';
import AuthComplete from './components/MembershipAuthComplete';
import Detail from './components/Detail';
import Auth from './components/MembershipAuth'
import Login from './Login/Login'
const store = createStore();
const GlobalStyle = createGlobalStyle`
  body {
    color: #3C3C3C;
    font-family: 'NanumSquare';
    height: 100vh;
    box-sizing: border-box;
    margin: 0;
    #root, .App{
      height: 100%;
      width: 100%;
    }
   }
`;

function App() {
  return (
      <Login></Login>
  );
}

export default App;
