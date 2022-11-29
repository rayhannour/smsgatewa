import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import classNames from 'classnames';
import { BreadCrumb } from 'primereact/breadcrumb';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';

const AppBreadcrumb = (props) => {

    const [search, setSearch] = useState('');
    const location = useLocation()

    const activeRoute = props.routes.filter(route => {
        return route.label.replace(/\s/g, '').toLowerCase() === location.pathname.toLowerCase().replace(/\s/g, '').slice(1)
    })

    let items;

    if (location.pathname === '/') {
        items = [{ label: 'Dashboard' }, { label: 'Penale Dashboard' }]
    }
    else if (!activeRoute.length) {
        items = [{ label: '' }, { label: '' }];
    }
    else {
        items = [
            { label: activeRoute[0].parent },
            { label: activeRoute[0].label }
        ]
    }

    const isStatic = () => {
        return props.menuMode === 'static';
    }


    return (
        <div className="layout-breadcrumb-container">
            <div className="layout-breadcrumb-left-items">
                {isStatic() && <button className="menu-button p-link" onClick={props.onMenuButtonClick} >
                    <i className="pi pi-bars"></i>
                </button>}

                ++
            </div>
            <div className="layout-breadcrumb-right-items">


                <span className="layout-rightmenu-button-desktop">
                    <Button label="منظومات أخرى" icon="pi pi-bookmark" className="layout-rightmenu-button" onClick={props.onRightMenuButtonClick}></Button>
                </span>

                <span className="layout-rightmenu-button-mobile">
                    <Button icon="pi pi-bookmark" className="layout-rightmenu-button" onClick={props.onRightMenuButtonClick}></Button>
                </span>
            </div>
        </div>
    )
}

export default AppBreadcrumb;