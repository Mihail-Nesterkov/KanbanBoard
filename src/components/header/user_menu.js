import React, {useState} from "react";
import logo from '../../img/user_menu.png'
import logoA from '../../img/user-menuA.png'
import rhomb from '../../img/rhomb.png'

const UserMenu = () => {
  let [userAct, setUserAct] = useState(false)
  const onHandlClick = () => {
    setUserAct(!userAct)
  }
  if (userAct) {
    return (
      <div className={'win'} key={'win'}>
        <img src={logoA} alt="user icon" className={'icon_user_menu'} key={'icon_user_menuA'} onClick={onHandlClick}/>
        <img src={rhomb} alt="rhomb" key={rhomb} className={'win_menu_rhomb'}/>
        <ul className={'win_menu'} key={'win_menu'}>
          <li className={'win_menu_item'} onClick={onHandlClick} key={'win_menu_item1'}>Profile</li>
          <li className={'win_menu_item'} onClick={onHandlClick} key={'win_menu_item2'}>Log Out</li>
        </ul>
      </div>
    )
  } else {
    return (
      <div className={'win'}>
        <img src={logo} className={'icon_user_menu'} alt="user icon" key={'icon_user_menu'} onClick={onHandlClick}/>
      </div>
    )
  }
}

export default UserMenu