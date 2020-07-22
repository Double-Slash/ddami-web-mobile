import React from "react";
import { Route } from "react-router-dom";
import Main from "./Main";
import WorkplacePage from "./WorkplacePage";

export default (props) => (
  <>
    <Route exact path='/' component={Main} />
    <Route exact path='/workplace' component={WorkplacePage}/>
  </>
)