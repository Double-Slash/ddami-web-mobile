import React from "react";
import { Route } from "react-router-dom";
import WorkPlace from "../components/workplace/Workplace";
import Write from '../components/workplace/Write';

const WorkplacePage = (props) => {
  // const { match } = props
  // const { path } = match

  return(
    <>
      <Route path='/workplace/:id' component={WorkPlace}/>
      <Route exact path='/workplace/write' component={Write}/>
    </>
  )
}

export default WorkplacePage