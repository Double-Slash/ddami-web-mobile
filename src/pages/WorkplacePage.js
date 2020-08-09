import React from "react";
import { Route } from "react-router-dom";
import WorkPlace from "../components/workplace/Workplace";
import Write from '../components/workplace/Write';
import WorkDetail from "../components/workplace/WorkDetail";
import Nav from '../components/common/DrawerLeft'

const WorkplacePage = (props) => {
  // const { match } = props
  // const { path } = match

  return(
    <>
      <Nav/>
      <Route exact path='/workplace/:ArtistId' component={WorkPlace}/>
      <Route exact path='/workplace/work/:workId' component={WorkDetail}/>
      <Route exact path='/workplace/write' component={Write}/>
    </>
  )
}

export default WorkplacePage