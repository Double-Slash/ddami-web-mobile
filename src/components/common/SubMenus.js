import React from 'react';
import {Link, Route} from 'react-router-dom';

import Work from './SubMenu/Work';
import Material from './SubMenu/Material';
import Artist from './SubMenu/Artist';
import styled from 'styled-components';

import { Tabs } from 'antd';
import 'antd/dist/antd.css';

const Ul = styled.ul`
    display: flex;
    padding-top: 20px;
`;

const TabSection = styled.div`
  background: tomato;
  padding-left: 18px;
  padding-top: 22px;
  padding-right: 18px;
  width: 100%;
  height: 100%;
  border-top-left-radius: 40px;
`;

const { TabPane } = Tabs;

const SubMenus = () => {
    return (
        <div>
            {/*<Ul>*/}
            {/*    <li>*/}
            {/*        <Link to="/search/work">작품🐳</Link> */}
            {/*    </li>*/}
            {/*    <li>*/}
            {/*        <Link to="/search/material">재료💂‍♂️</Link>*/}
            {/*    </li>*/}
            {/*    <li>*/}
            {/*        <Link to="/search/artist">작가👨‍🎨</Link>*/}
            {/*    </li>*/}
            {/*</Ul>*/}
            {/*<hr />*/}
            {/*    <Work />*/}
            {/*    /!* 서브라우터를 구현해서 컴포넌트 3개로 구성합니다. *!/*/}
            {/*    /!* <Route path="/search/" component={Work} /> *!/*/}
            {/*    <Route path="/search/work" component={Work} />*/}
            {/*    <Route path="/search/material" component={Material} />*/}
            {/*    <Route path="/search/Artist" component={Artist} />*/}
            <TabSection>
                <Tabs defaultActiveKey="1">
                    <TabPane tab="작품" key="1">
                        <Work />
                    </TabPane>
                    <TabPane tab="재료" key="2">
                        <Material />
                    </TabPane>
                    <TabPane tab="작가" key="3">
                        <Artist />
                    </TabPane>
                </Tabs>
            </TabSection>

        </div>
    );
};

export default SubMenus;