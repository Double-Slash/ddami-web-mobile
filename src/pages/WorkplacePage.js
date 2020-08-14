import React from "react";
import { Route } from "react-router-dom";
import WorkPlace from "../components/workplace/Workplace";
import Write from '../components/workplace/Write';
import WorkDetail from "../components/workplace/work/WorkDetail";

const WorkplacePage = (props) => {
  // const { match } = props
  // const { path } = match

  return(
    <>
      <Route exact path='/workplace/:ArtistId' component={WorkPlace}/>
      <Route exact path='/workplace/work/:workId' component={WorkDetail}/>
      <Route exact path='/workplace/material/:materialId' component={WorkDetail}/>
      <Route exact path='/workplace/write' component={Write}/>
    </>
  )
}

export default WorkplacePage