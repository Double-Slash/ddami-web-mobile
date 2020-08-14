import React,{MembershipComplete} from "react";
import { Route } from "react-router-dom";
import MembershipComplete from "../components/MembershipComplete";

function Complete() {
    return(
      <>
        <Route exact path='../components/MembershipComplete' component={MembershipComplete} />
      </>
    );
}

export default Main;