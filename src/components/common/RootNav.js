import React from 'react';
import { BrowserRouter, Route, Link, Switch, Redirect } from "react-router-dom";
import Home from './Nav';
import Search from './Search'; 

// 이 부분은 라우터의 루트가 되는 부분입니다.
// 여기서 Home부분과 검색부분 페이지로 갈수 있습니다.
// 여기서 시작 부분을 만들었습니다.
const RootNav = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/Search" component={Search} />
                <Redirect path="*" to="/" />
            </Switch>
        </BrowserRouter>
    );
};

export default RootNav;