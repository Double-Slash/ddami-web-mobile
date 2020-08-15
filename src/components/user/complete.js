import React,{MembershipComplete} from "react";
import { Route } from "react-router-dom";
import MembershipComplete from "./JoinComplete";

function Complete() {
    return(
      <>
        <Route exact path='./' component={MembershipComplete} />
      </>
    );
}

export default Complete;