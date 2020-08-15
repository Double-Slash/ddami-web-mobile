import React from "react";
import "./App.css";
import {createGlobalStyle} from "styled-components";
import Page from "./pages";
import {BrowserRouter} from "react-router-dom";
const GlobalStyle = createGlobalStyle`
  body {
    color: #3C3C3C;
    font-family: 'NanumSquare';
    height: 100vh;
    box-sizing: border-box;
    margin: 0;
    overflow-x: hidden;
    #root, .App{
      height: 100%;
      width: 100%;
    }
   }
  *:focus { outline:none; }
`;

function App() {
  return (
     <BrowserRouter>
       <GlobalStyle/>
       <Page/>
     </BrowserRouter>
  );
}

export default App;
