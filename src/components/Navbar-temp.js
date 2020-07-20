import React, {useState} from "react";
import { Link } from "react-router-dom";

function NavbarTemp() {
    const [open, setOpen] = useState(false);

    const toggleSidebar = (event) => {
        let key = `${event.currentTarget.parentNode.id}Open`;
        this.setState({ [key]: !this.state[key] });
    };

    // TODO: open 상태에 따른 메뉴의 className 선언s

    return (
        <div>
            <div id="open" className="sidebar-icon">
                <div className="icon" onClick={toggleSidebar}>
                    ≡
                </div>
                {/* TODO: 메뉴 들어갈 자리 */}
            </div>
            <div className="logo">
                <Link to="/">따미 로고</Link>
            </div>
            <div className="search-icon">
                <Link to="/search">
                    <img src="https://img.icons8.com/android/24/000000/search.png" alt="search-icon"/>
                </Link>
            </div>
            <div className="user-icon">
                알림
            </div>
        </div>
    );
}

export default NavbarTemp;