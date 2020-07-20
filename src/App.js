import React from 'react';
import './App.css';
import Main from "./pages/Main";
import {Route} from "react-router-dom";
import ImageGrid from "./components/ImageGrid";
import {Provider} from "react-redux";
import createStore from "./utils/store";

const store = createStore();

function App() {
  return (
    <Provider store={store}>
      <Route exact path="/" component={Main} />
      <ImageGrid/>
    </Provider>
  );
}

export default App;
