import React from "react";
import {Route} from "react-router-dom";
import Main from "./Main";
import Write from "../components/workplace/Write";
import WorkplacePage from "./WorkplacePage";
import Search from "../components/search/Search";
import Like from "../components/hamburger/Like";
import Purchase from "../components/hamburger/Purchase";
import Subscribe from "../components/hamburger/Subscribe";
import Setting from "../components/hamburger/Setting";
import Footer from "../components/common/Footer";
import DdamiShop from "../components/ddamishop/DdamiShop";
import Detail from "../components/ddamishop/Detail";
import Nav from '../components/common/DrawerLeft'

export default (props) => (
    <>
        <Nav/>
        <Route exact path="/" component={Main}/>
        <Route path="/shop" component={DdamiShop}/>
        <Route path="/workplace" component={WorkplacePage}/>
        <Route path="/detail" component={Detail}/>
        <Route path='/search' component={Search}/>
        <Route path='/like' component={Like} />
        <Route path='/purchase' component={Purchase} />
        <Route path='/subscribe' component={Subscribe} />
        <Route path='/setting' component={Setting} />
        <Footer/>
    </>
);
