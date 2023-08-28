import React from "react";
import UserMenu from "./user_menu";

class Header extends React.Component{
    render() {
        return  <div className={'header'} key={'header'}>
            <p className={'title_header'} key={'title_header'}>Awesome Kanban Board</p>
            <UserMenu/>
                </div>
    }
}

export default Header