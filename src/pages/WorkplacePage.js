import React from "react";
import { Route } from "react-router-dom";
import Workplace from '../components/workplace';

const WorkplacePage = ({history}) => {
  console.log(history)
  console.log(Workplace)
  return(
    <>
      <Route exact path='/write' component={WorkplacePage.Write}/>
    </>
  )
}

export default WorkplacePage