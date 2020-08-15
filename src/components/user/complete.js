import React from "react";
import { Route } from "react-router-dom";
import JoinComplete from "./JoinComplete";

function Complete() {
    return(
      <>
        <Route exact path='./Joincomplete' component={JoinComplete} />
      </>
    );
}

export default Complete;