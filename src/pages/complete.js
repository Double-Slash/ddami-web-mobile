import React from "react";
import { Route } from "react-router-dom";
import MembershipComplete from "../components/MembershipComplete";

function Complete() {
    return(
      <>
        <Route exact path='/' component={MembershipComplete}/>
      </>
    );
}

export default Main;