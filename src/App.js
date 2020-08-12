import React from 'react';
import './App.css';
import {Provider} from "react-redux";
import {createGlobalStyle} from 'styled-components';
import Page from './pages';
import {BrowserRouter} from "react-router-dom";


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
    <BrowserRouter>
      <GlobalStyle/>
      <Page/>
      {/*<Route exact path="/" component={Main} />*/}
      {/*<ImageGrid/>*/}
    </BrowserRouter>
  );
}

export default App;
