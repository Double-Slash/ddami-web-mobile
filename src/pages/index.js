import React from "react";
import { Route } from "react-router-dom";
import Main from "./Main";
import Write from "../components/workplace/Write";
import WorkplacePage from "./WorkplacePage";
import Footer from "../components/common/Footer";

export default (props) => (
  <>
    <Route exact path='/' component={Main} />
    <Route path='/workplace' component={WorkplacePage}/>
    <Footer/>
  </>
)