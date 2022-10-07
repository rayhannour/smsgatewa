import React from 'react';
import { useHistory } from 'react-router-dom';
import AppMenu from './AppMenu';
import classNames from 'classnames';
import {useNavigate} from 'react-router-dom';

import {userLogin} from './ahthentificate/AuthenticationService';
import { Link } from 'react-router-dom';
const AppTopbar = (props) => {

    const onTopbarSubItemClick = (event) => {
        event.preventDefault();
       
    }

    const history = useHistory();
    const logOut=()=>{
        localStorage.clear();
       
       
    }

    const logOuts=()=>{
        if( props.keycloaks &&  props.keycloaks.authenticated){
            props.keycloaks.logout()
        }else{
            props.keycloaks.login()
        }
        
    }

    return (
        <>
            <div className="layout-topbar">
                <div className="layout-topbar-left">
                    <button className="topbar-menu-button p-link" onClick={props.onMenuButtonClick}>
                        <i className="pi pi-bars"></i>
                    </button>
                    
                    <button className="logo p-link" onClick={() => history.push('/')}>
                        <img src={`assets/layout/images/logo-${props.colorScheme === 'light' ? 'dark' : 'light'}.png`} alt="logo" style={{height:"70px"}} />
                    </button>

            
                </div>

                <AppMenu model={props.items} menuMode={props.menuMode} colorScheme={props.colorScheme} menuActive={props.menuActive} activeInlineProfile={props.activeInlineProfile}
                    onSidebarMouseOver={props.onSidebarMouseOver} onSidebarMouseLeave={props.onSidebarMouseLeave} toggleMenu={props.onToggleMenu} onChangeActiveInlineMenu={props.onChangeActiveInlineMenu}
                    onMenuClick={props.onMenuClick} onRootMenuItemClick={props.onRootMenuItemClick} onMenuItemClick={props.onMenuItemClick} />

                <div className="layout-topbar-right">
                    <ul className="layout-topbar-right-items">
                        <li id="profile" className={classNames('profile-item', { 'active-topmenuitem': props.topbarMenuActive })}>
                            <button className="p-link" onClick={props.onTopbarItemClick}>
                                <img src="assets/layout/images/profile-image.png" alt="profile" />
                            </button>

                            <ul className="fadeInDown">
                                <li role="menuitem">
                                    <button className="p-link" onClick={onTopbarSubItemClick}>
                                        <i className="pi pi-fw pi-user"></i>
                                        <span>Profile</span>
                                    </button>
                                </li>
                                <li role="menuitem">
                                    <button className="p-link" onClick={onTopbarSubItemClick}>
                                        <i className="pi pi-fw pi-cog"></i>
                                        <span>Settings</span>
                                    </button>
                                </li>
                                <li role="menuitem">
                                <Link to="/notfound" replace ><button className="p-link" onClick={logOuts}>
                                        <i className="pi pi-fw pi-sign-out"></i>
                                        <span >Logout</span>
                                    </button></Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <button className="p-link">
                                <i className="topbar-icon pi pi-fw pi-bell"></i>
                                <span className="topbar-badge">2</span>
                                <span className="topbar-item-name" >Notifications</span>
                            </button>
                        </li>
                        <li>
                            <button className="p-link">
                                <i className="topbar-icon pi pi-fw pi-comment"></i>
                                <span className="topbar-badge">5</span>
                                <span className="topbar-item-name">Messages</span>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default AppTopbar;