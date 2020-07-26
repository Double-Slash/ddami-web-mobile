import React from "react";
import { Route } from "react-router-dom";
import Write from '../components/workplace/Write';

const WorkplacePage = (props) => {
  // const { match } = props
  // const { path } = match

  return(
    <>
      <Route exact path='/workplace/write' component={Write}/>
    </>
  )
}

export default WorkplacePage