import React from 'react';
import {Link} from 'react-router-dom'

const Navlinks = () => {
    return (
    <ul className="nav-links">
        <li>
            <Link to="/" className="link"><h3>따미마을</h3></Link><br/>
            <Link to="/#" className="link">내 작업실</Link><br/>
            <Link to="/#" className="link">좋아요 한 작품</Link>
        </li>
        <li>
            <Link to="/shop" className="link"><h3>따미샵</h3></Link><br/>
            <Link to="/#" className="link">판구매 조회</Link><br/>
            <Link to="/#" className="link">찜한 목록</Link>
        </li>
        <li>
            <Link to="/activity" className="link"><h3>대외활동</h3></Link><br/>
            <Link to="/#" className="link">관심있는 활동</Link>

        </li>
        <li>
            <Link to="/chat" className="link"><h3>채팅</h3></Link>
        </li>
    </ul>
    );
};

export default Navlinks;