import React, { useState, useEffect, useMemo } from 'react';
import classNames from 'classnames';
import { Route } from 'react-router-dom';
import { Dialog } from 'primereact/dialog';
import AppTopbar from './AppTopbar';
import AppFooter from './AppFooter';
import AppConfig from './AppConfig';
import AppRightMenu from './AppRightMenu';
import AppBreadcrumb from './AppBreadcrumb';
import AppMenu from './AppMenu';

import { dashboards } from './components/Dashboard';

import { Dashboard } from './components/Dashboard';
import { FormLayoutDemo } from './components/FormLayoutDemo';
import { InputDemo } from './components/InputDemo';
import { FloatLabelDemo } from './components/FloatLabelDemo';
import { InvalidStateDemo } from './components/InvalidStateDemo';
import { ButtonDemo } from './components/ButtonDemo';
import { TableDemo } from './components/TableDemo';
import { ListDemo } from './components/ListDemo';
import { TreeDemo } from './components/TreeDemo';
import { PanelDemo } from './components/PanelDemo';
import { OverlayDemo } from './components/OverlayDemo';
import { MediaDemo } from './components/MediaDemo';
import { MenuDemo } from './components/MenuDemo';
import { MessagesDemo } from './components/MessagesDemo';
import { FileDemo } from './components/FileDemo';
import { ChartDemo } from './components/ChartDemo';
import { MiscDemo } from './components/MiscDemo';
import { Documentation } from './components/Documentation';
import { IconsDemo } from './utilities/IconsDemo';
import { Widgets } from './utilities/Widgets';
import { GridDemo } from './utilities/GridDemo';
import { SpacingDemo } from './utilities/SpacingDemo';
import { ElevationDemo } from './utilities/ElevationDemo';
import { TextDemo } from './utilities/TextDemo';
import { TypographyDemo } from './utilities/TypographyDemo';
import { DisplayDemo } from './utilities/DisplayDemo';
import { FlexBoxDemo } from './utilities/FlexboxDemo';
import { CrudDemo } from './pages/CrudDemo';
import { CalendarDemo } from './pages/CalendarDemo';
import { TimelineDemo } from './pages/TimelineDemo';
import { Invoice } from './pages/Invoice';
import { Help } from './pages/Help';
import { EmptyPage } from './pages/EmptyPage';


import PrimeReact from 'primereact/api';

import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import './App.scss';

import ProtectedRoute from './ahthentificate/ProtectedRoute';
import { Login } from './pages/Login';
import { NotFound } from './pages/NotFound';

import { FormSmsPenale } from './components/smsGateway/FormSmsPenale';

import AuthorizedFunction from './ahthentificate/AuthorizedFunction';
import { useKeycloak } from '@react-keycloak/web';

import { useHistory } from 'react-router-dom';
import { Button } from 'primereact/button';
import HeroSection from './pages/Herosection';
import { DataJobSmsDetail } from './components/smsGateway/jobSms/DataJobSmsDetail';



const App = (props) => {
    
    const [animationClass, setAnimationClass] = useState("");

    const [loadHero, setLoadHero] = useState(false);


    const [rightMenuActive, setRightMenuActive] = useState(false);
    const [configActive, setConfigActive] = useState(false);
    const [menuMode, setMenuMode] = useState('sidebar');
    const [overlayMenuActive, setOverlayMenuActive] = useState(false);
    const [ripple, setRipple] = useState(true);
    const [sidebarStatic, setSidebarStatic] = useState(false);
    const [staticMenuDesktopInactive, setStaticMenuDesktopInactive] = useState(false);
    const [staticMenuMobileActive, setStaticMenuMobileActive] = useState(false);
    const [menuActive, setMenuActive] = useState(false);
    const [searchActive, setSearchActive] = useState(false);
    const [topbarMenuActive, setTopbarMenuActive] = useState(false);
    const [sidebarActive, setSidebarActive] = useState(false);
    const [pinActive, setPinActive] = useState(false);
    const [activeInlineProfile, setActiveInlineProfile] = useState(false);
    const [resetActiveIndex, setResetActiveIndex] = useState(null)

    PrimeReact.ripple = true;


    const menu = [
        {
            label: 'Favorites', authorize: ['app-manager'], icon: 'pi pi-home',
            items: [
                { label: 'Dashboard', icon: 'pi pi-home', to: '/dashboard' },
            ]
        },
        {
            label: 'UI Kit', authorize: ['RealmAdmin'], icon: 'pi pi-star',
            items: [
                { label: 'Form Layout', icon: 'pi pi-id-card', to: '/formlayout' },
                { label: 'Input', icon: 'pi pi-check-square', to: '/input' },
                { label: 'Float Label', icon: 'pi pi-bookmark', to: '/floatlabel' },
                { label: 'Invalid State', icon: 'pi pi-exclamation-circle', to: '/invalidstate' },
                { label: 'Button', icon: 'pi pi-mobile', to: '/button', className: 'rotated-icon' },
                { label: 'Table', icon: 'pi pi-table', to: '/table' },
                { label: 'List', icon: 'pi pi-list', to: '/list' },
                { label: 'Tree', icon: 'pi pi-share-alt', to: '/tree' },
                { label: 'Panel', icon: 'pi pi-tablet', to: '/panel' },
                { label: 'Overlay', icon: 'pi pi-clone', to: '/overlay' },
                { label: 'Media', icon: "pi pi-image", to: '/media' },
                { label: 'Menu', icon: 'pi pi-bars', to: '/menu' },
                { label: 'Message', icon: 'pi pi-comment', to: '/message' },
                { label: 'File', icon: 'pi pi-file', to: '/file' },
                { label: 'Chart', icon: 'pi pi-chart-bar', to: '/chart' },
                { label: 'Misc', icon: 'pi pi-circle-off', to: '/misc' },
            ]
        },
        {
            label: 'Utilities', authorize: ['RealmAdmin'], icon: 'pi pi-compass',
            items: [
                { label: 'Display', icon: 'pi pi-desktop', to: '/display' },
                { label: 'Elevation', icon: 'pi pi-external-link', to: '/elevation' },
                { label: 'Flexbox', icon: 'pi pi-directions', to: '/flexbox' },
                { label: 'Icons', icon: 'pi pi-search', to: '/icons' },
                { label: 'Widgets', icon: 'pi pi-star-o', to: '/widgets' },
                { FloatLabelDemoel: 'Grid System', icon: 'pi pi-th-large', to: '/grid' },
                { label: 'Spacing', icon: 'pi pi-arrow-right', to: '/spacing' },
                { label: 'Typography', icon: 'pi pi-align-center', to: '/typography' },
                { label: 'Text', icon: 'pi pi-pencil', to: '/text' },
            ]
        },
        {
            label: 'Pages', authorize: ['app-manager'], icon: 'pi pi-briefcase',
            items: [
                { label: 'Crud', icon: 'pi pi-pencil', to: '/crud' },
                { label: 'Calendar', icon: 'pi pi-calendar-plus', to: '/calendar' },
                { label: 'Timeline', icon: 'pi pi-calendar', to: '/timeline' },
                { label: 'Landing', icon: 'pi pi-globe', url: 'assets/pages/landing.html', target: '_blank' },
                { label: 'Login', icon: 'pi pi-sign-in', to: '/login' },
                { label: 'Invoice', icon: 'pi pi-dollar', to: '/invoice' },
                { label: 'Help', icon: 'pi pi-question-circle', to: '/help' },
                { label: 'Error', icon: 'pi pi-times-circle', to: '/error' },
                { label: 'Not Found', icon: 'pi pi-exclamation-circle', to: '/notfound' },
                { label: 'Access Denied', icon: 'pi pi-lock', to: '/access' },
                { label: 'Empty Page', icon: 'pi pi-circle-off', to: '/empty' }
            ]
        },
        {
            label: 'Hierarchy', authorize: ['RealmAdmin'], icon: 'pi pi-align-left',
            items: [
                {
                    label: 'Submenu 1', icon: 'pi pi-align-left',
                    items: [
                        {
                            label: 'Submenu 1.1', icon: 'pi pi-align-left',
                            items: [
                                { label: 'Submenu 1.1.1', icon: 'pi pi-align-left' },
                                { label: 'Submenu 1.1.2', icon: 'pi pi-align-left' },
                                { label: 'Submenu 1.1.3', icon: 'pi pi-align-left' },
                            ]
                        },
                        {
                            label: 'Submenu 1.2', icon: 'pi pi-align-left',
                            items: [
                                { label: 'Submenu 1.2.1', icon: 'pi pi-align-left' },
                                { label: 'Submenu 1.2.2', icon: 'pi pi-align-left' }
                            ]
                        },
                    ]
                },
                {
                    label: 'Submenu 2', icon: 'pi pi-align-left',
                    items: [
                        {
                            label: 'Submenu 2.1', icon: 'pi pi-align-left',
                            items: [
                                { label: 'Submenu 2.1.1', icon: 'pi pi-align-left' },
                                { label: 'Submenu 2.1.2', icon: 'pi pi-align-left' },
                                { label: 'Submenu 2.1.3', icon: 'pi pi-align-left' },
                            ]
                        },
                        {
                            label: 'Submenu 2.2', icon: 'pi pi-align-left',
                            items: [
                                { label: 'Submenu 2.2.1', icon: 'pi pi-align-left' },
                                { label: 'Submenu 2.2.2', icon: 'pi pi-align-left' }
                            ]
                        },
                    ]
                }
            ]
        },
        {
            label: 'Start', authorize: ['RealmAdmin'], icon: 'pi pi-download',
            items: [
                { label: 'Documentation', icon: 'pi pi-question', to: '/documentation' },
                { label: 'Buy Now', icon: 'pi pi-shopping-cart', command: () => { window.location = "https://www.primefaces.org/store" } }
            ]
        },
        {
            label: 'Sms Gateway', authorize: ['app-manager'], icon: 'pi pi-download',
            items: [
                { label: 'Shudler EasyBulk', icon: 'pi pi-box', to: '/smspenale' },
                { label: 'Jobs Sms', icon: 'pi pi-sort-amount-down-alt', to: '/smsjobs' }
            ]
        }
    ];

    //const [menuGlobal,setMenuGlobal]=useState([]);
    //const {keycloak} = useKeycloak();
    //AuthorizedFunction(keycloak,menu,menuGlobal);



    const routes = [
        { parent: 'Dashboard', label: 'Penale Dashboard' },
        { parent: 'UI Kit', label: 'Form Layout' },
        { parent: 'UI Kit', label: 'Input' },
        { parent: 'UI Kit', label: 'Float Label' },
        { parent: 'UI Kit', label: 'Invalid State' },
        { parent: 'UI Kit', label: 'Button' },
        { parent: 'UI Kit', label: 'Table' },
        { parent: 'UI Kit', label: 'List' },
        { parent: 'UI Kit', label: 'Panel' },
        { parent: 'UI Kit', label: 'Tree' },
        { parent: 'UI Kit', label: 'Overlay' },
        { parent: 'UI Kit', label: 'Menu' },
        { parent: 'UI Kit', label: 'Media' },
        { parent: 'UI Kit', label: 'Message' },
        { parent: 'UI Kit', label: 'File' },
        { parent: 'UI Kit', label: 'Chart' },
        { parent: 'UI Kit', label: 'Misc' },
        { parent: 'Utilities', label: 'Display' },
        { parent: 'Utilities', label: 'Elevation' },
        { parent: 'Utilities', label: 'Flexbox' },
        { parent: 'Utilities', label: 'Icons' },
        { parent: 'Utilities', label: 'Widgets' },
        { parent: 'Utilities', label: 'Grid' },
        { parent: 'Utilities', label: 'Spacing' },
        { parent: 'Utilities', label: 'Typography' },
        { parent: 'Utilities', label: 'Text' },
        { parent: 'Pages', label: 'Crud' },
        { parent: 'Pages', label: 'Calendar' },
        { parent: 'Pages', label: 'Timeline' },
        { parent: 'Pages', label: 'Invoice' },
        { parent: 'Pages', label: 'Login' },
        { parent: 'Pages', label: 'Help' },
        { parent: 'Pages', label: 'Empty' },
        { parent: 'Pages', label: 'Access' },
        { parent: 'Start', label: 'Documentation' },

        { parent: 'Sms Gateway', label: 'Penale' }
    ]

    let rightMenuClick;
    let configClick;
    let menuClick;
    let searchClick = false;
    let topbarItemClick;

    const [menuGlobal, setMenuGlobal] = useState([]);

    const { keycloak, initialized } = useKeycloak();




    const history = useHistory();

    useEffect(async () => {
        if (keycloak && !keycloak.authenticated) {

        }
    }, [])

    useEffect(async () => {
        await AuthorizedFunction(keycloak, menu, menuGlobal);
    }, [keycloak.authenticated])


    useEffect(() => {

        setResetActiveIndex(true)
        setMenuActive(false)
    }, [menuMode])

    const onDocumentClick = () => {
        if (!searchClick && searchActive) {
            onSearchHide();
        }

        if (!topbarItemClick) {
            setTopbarMenuActive(false)
        }

        if (!menuClick) {
            if (isHorizontal() || isSlim()) {
                setMenuActive(false)
                setResetActiveIndex(true)
            }

            if (overlayMenuActive || staticMenuMobileActive) {
                setOverlayMenuActive(false);
                setStaticMenuMobileActive(false)
            }

            hideOverlayMenu();
            unblockBodyScroll();
        }

        if (!rightMenuClick) {
            setRightMenuActive(false)
        }

        if (configActive && !configClick) {
            setConfigActive(false);
        }

        topbarItemClick = false;
        menuClick = false;
        configClick = false;
        rightMenuClick = false;
        searchClick = false;
    }

    const onSearchHide = () => {
        setSearchActive(false);
        searchClick = false;
    }

    const onMenuModeChange = (menuMode) => {
        setMenuMode(menuMode);
        setOverlayMenuActive(false);
    }

    const onRightMenuButtonClick = () => {
        rightMenuClick = true;
        setRightMenuActive(true)
    }

    const onRightMenuClick = () => {
        rightMenuClick = true;
    }

    const onRightMenuActiveChange = (active) => {
        setRightMenuActive(active);
    }

    const onConfigClick = () => {
        configClick = true;
    }

    const onConfigButtonClick = (event) => {
        setConfigActive(prevState => !prevState)
        configClick = true;
        event.preventDefault();
    }

    const onRippleChange = (e) => {
        PrimeReact.ripple = e.value;
        setRipple(e.value);
    }

    const onMenuButtonClick = (event) => {
        menuClick = true;

        if (isOverlay()) {
            setOverlayMenuActive(prevState => !prevState)
        }

        if (isDesktop()) {
            setStaticMenuDesktopInactive(prevState => !prevState)
        } else {
            setStaticMenuMobileActive(prevState => !prevState)
        }

        event.preventDefault();
    }

    const hideOverlayMenu = () => {
        setOverlayMenuActive(false)
        setStaticMenuMobileActive(false)
    }

    const onTopbarItemClick = (event) => {
        topbarItemClick = true;
        setTopbarMenuActive(prevState => !prevState)
        hideOverlayMenu();
        event.preventDefault();
    }

    const onToggleMenu = (event) => {
        menuClick = true;

        if (overlayMenuActive) {
            setOverlayMenuActive(false)
        }

        if (sidebarActive) {
            setSidebarStatic(prevState => !prevState)
        }

        event.preventDefault();
    }

    const onSidebarMouseOver = () => {
        if (menuMode === 'sidebar' && !sidebarStatic) {
            setSidebarActive(isDesktop());
            setTimeout(() => {
                setPinActive(isDesktop())
            }, 200);
        }
    }

    const onSidebarMouseLeave = () => {
        if (menuMode === 'sidebar' && !sidebarStatic) {
            setTimeout(() => {
                setSidebarActive(false);
                setPinActive(false);
            }, 250);
        }
    }

    const onMenuClick = () => {
        menuClick = true;
    }

    const onChangeActiveInlineMenu = (event) => {
        setActiveInlineProfile(prevState => !prevState);
        event.preventDefault();
    }

    const onRootMenuItemClick = () => {
        setMenuActive(prevState => !prevState)
    }

    const onMenuItemClick = (event) => {
        if (!event.item.items) {
            hideOverlayMenu();
            setResetActiveIndex(true);
        }

        if (!event.item.items && (isHorizontal() || isSlim())) {
            setMenuActive(false);
        }
    }

    const isHorizontal = () => {
        return menuMode === 'horizontal';
    }

    const isSlim = () => {
        return menuMode === 'slim';
    }

    const isOverlay = () => {
        return menuMode === 'overlay';
    }

    const isDesktop = () => {
        return window.innerWidth > 991;
    }


    const onInputClick = () => {
        searchClick = true
    }

    const breadcrumbClick = () => {
        searchClick = true;
        setSearchActive(true);
    }

    const unblockBodyScroll = () => {
        if (document.body.classList) {
            document.body.classList.remove('blocked-scroll');
        } else {
            document.body.className = document.body.className.replace(new RegExp('(^|\\b)' +
                'blocked-scroll'.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
        }
    }

    const layoutClassName = classNames('layout-wrapper', {
        'layout-static': menuMode === 'static',
        'layout-overlay': menuMode === 'overlay',
        'layout-overlay-active': overlayMenuActive,
        'layout-slim': menuMode === 'slim',
        'layout-horizontal': menuMode === 'horizontal',
        'layout-active': menuActive,
        'layout-mobile-active': staticMenuMobileActive,
        'layout-sidebar': menuMode === 'sidebar',
        'layout-sidebar-static': menuMode === 'sidebar' && sidebarStatic,
        'layout-static-inactive': staticMenuDesktopInactive && menuMode === 'static',
        'p-ripple-disabled': !ripple
    });
    const [displayBasic, setDisplayBasic] = useState(true);
    const basicDialogFooter = <Button type="button" label="Dismiss" onClick={() => onclose()} icon="pi pi-check" className="p-button-secondary" />;

    const onclose = () => {
        console.log("dismissed");
        setDisplayBasic(false);
        history.push("/")
        keycloak.login();

    }

    useEffect(() => {
        setAnimationClass("hero-animation");
    });
    useEffect(() => {

        if (keycloak && keycloak.authenticated) {

            history.push("/dashboard")
        }


    }, [keycloak.authenticated]);

    if (!initialized) {
        return <></>;
    } else {
        //history.push("/dashboard");
        //<NotFound keycloaks={keycloak}/>
        console.log("initialize");
    }




    return (
        <>
            {keycloak && !keycloak.authenticated && (<>

                <Dialog  visible={displayBasic} style={{ width: '800px', height: '1200px' }} modal onHide={() => setDisplayBasic(false)}>
                    <div  style={{ minHeight: '50vh',textAlign:'center' }}>
                        <div className="exception-panel" >
                            <br/>
                            <br/> <br/>
                            <br/> <br/>

                            {loadHero ? <><HeroSection /> <br/> <br/><Button style={{fontSize: '1.5rem'}} className="mr-2 mb-2" label="الولوج للتطبيقة" icon="pi pi-check"   onClick={() => onclose()}/></> : <button className="logo p-link" onClick={(e) => { setLoadHero(true) }}>
                                <img src={`assets/layout/images/logo-${props.colorScheme === 'light' ? 'dark' : 'light'}.png`} alt="logo" style={{ height: "400px" }} />
                            </button>}

                        </div>

                    </div>
                </Dialog>
            </>)}

            {keycloak && keycloak.authenticated && (<>


                <div className={layoutClassName} onClick={onDocumentClick}>


                    <div className="layout-main">



                        <AppTopbar keycloaks={keycloak} items={menuGlobal} menuMode={menuMode} colorScheme={props.colorScheme} menuActive={menuActive}
                            topbarMenuActive={topbarMenuActive} activeInlineProfile={activeInlineProfile} onTopbarItemClick={onTopbarItemClick} onMenuButtonClick={onMenuButtonClick}
                            onSidebarMouseOver={onSidebarMouseOver} onSidebarMouseLeave={onSidebarMouseLeave} onToggleMenu={onToggleMenu}
                            onChangeActiveInlineMenu={onChangeActiveInlineMenu} onMenuClick={onMenuClick} onMenuItemClick={onMenuItemClick}
                            onRootMenuItemClick={onRootMenuItemClick} resetActiveIndex={resetActiveIndex} />

                        <AppMenu keycloaks={keycloak} model={menuGlobal} onRootMenuItemClick={onRootMenuItemClick} onMenuItemClick={onMenuItemClick} onToggleMenu={onToggleMenu} onMenuClick={onMenuClick} menuMode={menuMode}
                            colorScheme={props.colorScheme} menuActive={menuActive}
                            sidebarActive={sidebarActive} sidebarStatic={sidebarStatic} pinActive={pinActive}
                            onSidebarMouseLeave={onSidebarMouseLeave} onSidebarMouseOver={onSidebarMouseOver}
                            activeInlineProfile={activeInlineProfile} onChangeActiveInlineMenu={onChangeActiveInlineMenu} resetActiveIndex={resetActiveIndex} />

                        <AppBreadcrumb routes={routes} onMenuButtonClick={onMenuButtonClick} menuMode={menuMode}
                            onRightMenuButtonClick={onRightMenuButtonClick} onInputClick={onInputClick}
                            searchActive={searchActive} breadcrumbClick={breadcrumbClick} />

                        <div className="layout-main-content">


                            <Route path="/" exact component={Dashboard} />
                            <Route path="/login" component={Login} />
                            <Route path="/Dashboard" exact component={Dashboard} />

                            <ProtectedRoute roles={['RealmAdmin']} path="/documentation" component={Documentation} />
                            <Route path="/formlayout" component={FormLayoutDemo} />

                            <ProtectedRoute roles={['app-manager']} path="/smspenale" component={FormSmsPenale} />
                            <ProtectedRoute roles={['app-manager']} path="/smsjobs" component={DataJobSmsDetail} />
                            

                            <ProtectedRoute roles={['RealmAdmin']} path="/floatlabel" component={FloatLabelDemo} />
                            <ProtectedRoute roles={['RealmAdmin']} path="/input" component={InputDemo} />
                            <ProtectedRoute roles={['RealmAdmin']} path="/invalidstate" component={InvalidStateDemo} />
                            <ProtectedRoute roles={['RealmAdmin']} path="/button" component={ButtonDemo} />
                            <ProtectedRoute roles={['RealmAdmin']} path="/table" component={TableDemo} />
                            <ProtectedRoute roles={['RealmAdmin']} path="/list" component={ListDemo} />
                            <ProtectedRoute roles={['RealmAdmin']} path="/tree" component={TreeDemo} />
                            <ProtectedRoute roles={['RealmAdmin']} path="/panel" component={PanelDemo} />
                            <ProtectedRoute roles={['RealmAdmin']} path="/overlay" component={OverlayDemo} />
                            <ProtectedRoute roles={['RealmAdmin']} path="/menu" component={MenuDemo} />
                            <ProtectedRoute roles={['RealmAdmin']} path="/message" component={MessagesDemo} />
                            <ProtectedRoute roles={['RealmAdmin']} path="/media" component={MediaDemo} />
                            <ProtectedRoute roles={['RealmAdmin']} path="/file" component={FileDemo} />
                            <ProtectedRoute roles={['RealmAdmin']} path="/chart" component={ChartDemo} />
                            <ProtectedRoute roles={['RealmAdmin']} path="/misc" component={MiscDemo} />
                            <ProtectedRoute roles={['RealmAdmin']} path="/display" component={DisplayDemo} />
                            <ProtectedRoute roles={['RealmAdmin']} path="/elevation" component={ElevationDemo} />
                            <ProtectedRoute roles={['RealmAdmin']} path="/flexbox" component={FlexBoxDemo} />
                            <ProtectedRoute roles={['RealmAdmin']} path="/icons" component={IconsDemo} />
                            <ProtectedRoute roles={['RealmAdmin']} path="/widgets" component={Widgets} />
                            <ProtectedRoute roles={['RealmAdmin']} path="/grid" component={GridDemo} />
                            <ProtectedRoute roles={['RealmAdmin']} path="/spacing" component={SpacingDemo} />
                            <ProtectedRoute roles={['RealmAdmin']} path="/typography" component={TypographyDemo} />
                            <ProtectedRoute roles={['RealmAdmin']} path="/text" component={TextDemo} />
                            <Route path="/crud" component={CrudDemo} />
                            <Route path="/calendar" component={CalendarDemo} />
                            <ProtectedRoute roles={['RealmAdmin']} path="/help" render={() => <Help colorScheme={props.colorScheme} />} />
                            <ProtectedRoute roles={['RealmAdmin']} path="/invoice" render={() => <Invoice colorScheme={props.colorScheme} />} />
                            <ProtectedRoute roles={['RealmAdmin']} path="/empty" component={EmptyPage} />
                            <ProtectedRoute roles={['RealmAdmin']} path="/timeline" component={TimelineDemo} />

                        </div>

                        <AppFooter colorScheme={props.colorScheme} />

                    </div>

                    <AppRightMenu rightMenuActive={rightMenuActive} onRightMenuClick={onRightMenuClick} onRightMenuActiveChange={onRightMenuActiveChange} />

                    <AppConfig configActive={configActive} onConfigButtonClick={onConfigButtonClick} onConfigClick={onConfigClick} menuMode={menuMode} changeMenuMode={onMenuModeChange}
                        colorScheme={props.colorScheme} changeColorScheme={props.onColorSchemeChange} theme={props.theme} changeTheme={props.onMenuThemeChange}
                        componentTheme={props.componentTheme} changeComponentTheme={props.onComponentThemeChange}
                        ripple={ripple} onRippleChange={onRippleChange} />

                </div>
            </>)}</>
    );

}

export default App;
