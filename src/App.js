import React from 'react';
import './App.css';
import Main from "./pages/Main";
import {Route} from "react-router-dom";
import ImageGrid from "./components/ImageGrid";
import {Provider} from "react-redux";
import createStore from "./utils/store";
import {createGlobalStyle} from 'styled-components';

const store = createStore();
const GlobalStyle = createGlobalStyle`
  body {
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
    <Provider store={store}>
      <GlobalStyle/>
      <Route exact path="/" component={Main} />
      <ImageGrid/>
    </Provider>
  );
}

export default App;
