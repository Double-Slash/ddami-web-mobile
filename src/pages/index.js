import React from "react";
import { Route } from "react-router-dom";
import Main from "./Main";
import Write from "../components/workplace/Write";
import WorkplacePage from "./WorkplacePage";
import Search from "../components/search/Search";
import Like from "../components/hamburger/Like";
import Purchase from "../components/hamburger/Purchase";
import Subscribe from "../components/hamburger/Subscribe";
import Setting from "../components/hamburger/Setting";
import Footer from "../components/common/Footer";

export default (props) => (
  <>
    <Route exact path='/' component={Main} />
    <Route path='/workplace' component={WorkplacePage}/>
    <Route path='/search' component={Search}/>
    {/*좋아요한 작품*/}
    <Route path='/like' component={Like} />
    {/*판구매 내역*/}
    <Route path='/purchase' component={Purchase} />
    {/*찜한 목록*/}
    <Route path='/subscribe' component={Subscribe} />
    {/*설정*/}
    <Route path='/setting' component={Setting} />
    {/*<Footer/>*/}
  </>
)