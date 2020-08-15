import React from "react";
import { Route } from "react-router-dom";
import MembershipComplete from "./MembershipComplete";

function Complete() {
    return(
      <>
        <Route exact path='../components/MembershipComplete' component={MembershipComplete} />
      </>
    );
}

export default Complete;