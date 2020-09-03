import React, {Component} from 'react';
import classNames from 'classnames';
import {AppTopbar} from './AppTopbar';
import {AppBreadcrumb} from './AppBreadcrumb';
import {AppFooter} from './AppFooter';
import {AppConfig} from './AppConfig';
import {AppMenu} from './AppMenu';
import {AppInlineProfile} from './AppInlineProfile';
import {withRouter} from 'react-router';
import {Route} from 'react-router-dom';
import {Dashboard} from './components/Dashboard';
import {FormsDemo} from './components/FormsDemo';
import {SampleDemo} from './components/SampleDemo';
import {DataDemo} from './components/DataDemo';
import {PanelsDemo} from './components/PanelsDemo';
import {OverlaysDemo} from './components/OverlaysDemo';
import {MenusDemo} from './components/MenusDemo';
import {MessagesDemo} from './components/MessagesDemo';
import {ChartsDemo} from './components/ChartsDemo';
import {MiscDemo} from './components/MiscDemo';
import {EmptyPage} from './components/EmptyPage';
import {Documentation} from './components/Documentation';
import {Help} from './pages/Help';
import {Invoice} from "./pages/Invoice";
import '@fullcalendar/core/main.css';
import '@fullcalendar/daygrid/main.css';
import '@fullcalendar/timegrid/main.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import 'primereact/resources/primereact.min.css';
import './App.css';
import Person from "./pages/Person"


class App extends Component {

	

	constructor() {
		super();
		this.state = {
			layoutMode: 'static',
			overlayMenuActive: false,
			staticMenuDesktopInactive: false,
			staticMenuMobileActive: false,
			topbarMenuActive: false,
			activeTopbarItem: null,
			darkMenu: true,
			menuActive: false,
			profileMode: 'inline',
			themeColor: 'blue-accent',
			grouped: true,
			inlineProfileActive: false,
			configDialogActive: false
		};

		this.onDocumentClick = this.onDocumentClick.bind(this);
		this.onMenuClick = this.onMenuClick.bind(this);
		this.onMenuButtonClick = this.onMenuButtonClick.bind(this);
		this.onTopbarMenuButtonClick = this.onTopbarMenuButtonClick.bind(this);
		this.onTopbarItemClick = this.onTopbarItemClick.bind(this);
		this.onInlineProfileClick = this.onInlineProfileClick.bind(this);
		this.onMenuItemClick = this.onMenuItemClick.bind(this);
		this.onRootMenuItemClick = this.onRootMenuItemClick.bind(this);
		this.changeMenuMode = this.changeMenuMode.bind(this);
		this.changeMenuType = this.changeMenuType.bind(this);
		this.changeMenuColor = this.changeMenuColor.bind(this);
		this.changeProfileMode = this.changeProfileMode.bind(this);
		this.changeTheme = this.changeTheme.bind(this);
		this.onConfigButtonClick = this.onConfigButtonClick.bind(this);
		this.onConfigCloseClick = this.onConfigCloseClick.bind(this);
		this.onConfigClick = this.onConfigClick.bind(this);
		this.createMenu();
	}

	componentWillMount() {
		loadGoogleMaps(() => {
			// Work to do after the library loads.
			this.setState({ googleMapsIsReady: true });
		});
	}

	
	
	onMenuClick(event) {
		this.menuClick = true;

		if (this.state.inlineProfileActive && !this.inlineProfileClick && this.isSlim()) {
			this.setState( {inlineProfileActive: false});
		}
		this.inlineProfileClick = false;
	}

	onMenuButtonClick(event) {
		this.menuClick = true;
		this.setState(({
			topbarMenuActive: false
		}));

		if (this.state.layoutMode === 'overlay') {
			if (this.isDesktop())
				this.setState({overlayMenuActive: !this.state.overlayMenuActive});
			else
				this.setState({staticMenuMobileActive: !this.state.staticMenuMobileActive});
		}
		else {
			if (this.isDesktop())
				this.setState({staticMenuDesktopInactive: !this.state.staticMenuDesktopInactive});
			else
				this.setState({staticMenuMobileActive: !this.state.staticMenuMobileActive});
		}

		event.preventDefault();
	}

	onTopbarMenuButtonClick(event) {
		this.topbarItemClick = true;
		this.setState({topbarMenuActive: !this.state.topbarMenuActive});
		this.hideOverlayMenu();
		event.preventDefault();
	}

	onTopbarItemClick(event) {
		this.topbarItemClick = true;

		if (this.state.activeTopbarItem === event.item)
			this.setState({activeTopbarItem: null});
		else
			this.setState({activeTopbarItem: event.item});

		event.originalEvent.preventDefault();
	}

	onInlineProfileClick(event) {
		this.inlineProfileClick = true;
		this.setState({inlineProfileActive: !this.state.inlineProfileActive});

		if(this.isSlim() && !this.isMobile()) {
			if (!this.menuClick) {
				this.setState({menuActive: false})

				this.hideOverlayMenu();
			}
			this.menuClick = false;
		}
	}

	onMenuItemClick(event) {
		if (!event.item.items) {
			this.hideOverlayMenu();
        }

		if (!event.item.items && (this.isHorizontal() || this.isSlim())) {
			this.setState({
				menuActive: false
			});
		}
	}

	onRootMenuItemClick(event) {
		this.setState({
			menuActive: !this.state.menuActive
		});

		event.originalEvent.preventDefault();
	}

	onConfigButtonClick(event){
		this.configClick = true;
		this.setState({configDialogActive: !this.state.configDialogActive})
	}

	onConfigCloseClick(){
		this.setState({configDialogActive: false})
	}

	onConfigClick(){
		this.configClick = true;
	}

	onDocumentClick(event) {
		if (!this.topbarItemClick) {
			this.setState({
				activeTopbarItem: null,
				topbarMenuActive: false
			});
		}

		if (!this.menuClick) {
			if (this.isHorizontal() || this.isSlim()) {
				this.setState({
					menuActive: false
				})
			}

			this.hideOverlayMenu();
		}

		if (this.state.inlineProfileActive && !this.inlineProfileClick && this.isSlim()) {
			this.setState( {inlineProfileActive: false});
		}

		if (!this.configClick) {
			this.setState({configDialogActive: false});
		}

		this.topbarItemClick = false;
		this.menuClick = false;
		this.configClick = false;
		this.inlineProfileClick = false;
	}

	hideOverlayMenu() {
		this.setState({
			overlayMenuActive: false,
			staticMenuMobileActive: false
		})
	}

	isDesktop() {
		return window.innerWidth > 1024;
	}

	isMobile() {
		return window.innerWidth <= 640;
	}

	isOverlay() {
		return this.state.layoutMode === 'overlay';
	}

	isHorizontal() {
		return this.state.layoutMode === 'horizontal';
	}

	isSlim() {
		return this.state.layoutMode === 'slim';
	}

	changeMenuMode(event) {
		this.setState({layoutMode: event.menuMode})
		if(event.menuMode === 'horizontal') {
			this.setState({profileMode : 'popup'});
		}
	}

	changeMenuType(event) {
		this.setState({grouped: event.grouped})
	}

	changeMenuColor(event) {
		this.setState({darkMenu: event.darkMenu})
	}

	changeProfileMode(event) {
		this.setState({profileMode: event.profileMode})
	}

	changeTheme(theme, scheme) {
		this.setState({themeColor: theme + '-' + scheme})
		this.changeStyleSheetUrl('layout-css', theme, 'layout', scheme);
		this.changeStyleSheetUrl('theme-css', theme, 'theme', scheme);
	}

	changeStyleSheetUrl(id, value, prefix, scheme) {
		let element = document.getElementById(id);
		let urlTokens = element.getAttribute('href').split('/');

		if(id.localeCompare('layout-css') === 0) {
			urlTokens[urlTokens.length - 1] = prefix + '-' + value + '.css';
		}
		else {
			urlTokens[urlTokens.length - 2] = value ;
			urlTokens[urlTokens.length - 1] = 'theme-' + scheme +  '.css' ;
		}
		let newURL = urlTokens.join('/');

		this.replaceLink(element, newURL);

		if (scheme === 'dark') {
			this.setState({darkMenu:true})
		} else if (scheme === 'light') {
			this.setState({darkMenu:false})
		}

		let topbarLogo = document.getElementById('layout-topbar-logo');
		let menuLogo = document.getElementById('layout-menu-logo');

		if (value.localeCompare('yellow') === 0 || value.localeCompare('lime') === 0) {
			topbarLogo.src = 'assets/layout/images/logo-black.png';
			menuLogo.src = 'assets/layout/images/logo-black.png';

		} else {
			topbarLogo.src = 'assets/layout/images/logo-white.png';
			menuLogo.src = 'assets/layout/images/logo-white.png';
		}
	}

	isIE() {
		return /(MSIE|Trident\/|Edge\/)/i.test(window.navigator.userAgent)
	}

	replaceLink(linkElement, href) {
		if(this.isIE()){
			linkElement.setAttribute('href', href);
		}
		else {
			const id = linkElement.getAttribute('id');
			const cloneLinkElement = linkElement.cloneNode(true);

			cloneLinkElement.setAttribute('href', href);
			cloneLinkElement.setAttribute('id', id + '-clone');

			linkElement.parentNode.insertBefore(cloneLinkElement, linkElement.nextSibling);

			cloneLinkElement.addEventListener('load', () => {
				linkElement.remove();
				cloneLinkElement.setAttribute('id', id);
			});
		}
	}

	createMenu() {
		this.menuGrouped = [
			{ 	label: 'Home Page', icon: 'pi pi-fw pi-home',
				items: [
					{label: 'Dashboard', icon: 'pi pi-fw pi-home', to: '/'},
					{label: 'Persona', icon: 'pi pi-fw pi-user', to: '/person'}
				]
			},
			
			{
				label: 'Components', icon: 'pi pi-fw pi-star',
				items: [
					{label: 'Login', icon: 'pi pi-fw pi-sign-in', to: '/login'},
					{label: 'Registro Persona', icon: 'pi pi-fw pi-th-large', to: '/sample'},
					{label: 'Registro Servicio', icon: 'pi pi-fw pi-file', to: '/forms'},
					{label: 'Búsqueda', icon: 'pi pi-fw pi-search', to: '/help'},
					{label: 'Calificaciones', icon: 'pi pi-fw pi-inbox', to: '/panel'},
				]
			},
			
		];

		this.menuUngrouped = [
			{
				label: 'Main Menu',
				icon: 'pi pi-fw pi-home',
				items: this.menuGrouped
			}
		];
	}

	render() {
		const layoutClassName = classNames('layout-wrapper', {
			'layout-horizontal': this.state.layoutMode === 'horizontal',
			'layout-overlay': this.state.layoutMode === 'overlay',
			'layout-static': this.state.layoutMode === 'static',
			'layout-slim': this.state.layoutMode === 'slim',
			'layout-static-inactive': this.state.staticMenuDesktopInactive,
			'layout-mobile-active': this.state.staticMenuMobileActive,
			'layout-overlay-active': this.state.overlayMenuActive,
			'layout-menu-dark': this.state.darkMenu,
			'layout-menu-light':!this.state.darkMenu
		});
		const AppBreadCrumbWithRouter = withRouter(AppBreadcrumb);

		return (
			<div className={layoutClassName} onClick={this.onDocumentClick}>
				<AppTopbar topbarMenuActive={this.state.topbarMenuActive} activeTopbarItem={this.state.activeTopbarItem}
						   onMenuButtonClick={this.onMenuButtonClick} onTopbarMenuButtonClick={this.onTopbarMenuButtonClick} onTopbarItemClick={this.onTopbarItemClick}
						   profileMode={this.state.profileMode} horizontal={this.isHorizontal()}/>

				<div className='layout-menu-container' onClick={this.onMenuClick}>
					<div className="layout-menu-logo">
						<button className="p-link">
							<img id="layout-menu-logo" src="assets/layout/images/logo-white.png" alt="babylon-layout"/>
						</button>
					</div>
					<div className="layout-menu-wrapper">
						<div className="menu-scroll-content">
							{(this.state.profileMode === 'inline' && this.state.layoutMode !== 'horizontal') &&
							<AppInlineProfile inlineProfileActive={this.state.inlineProfileActive} onInlineProfileClick={this.onInlineProfileClick}/>}
							<AppMenu model={this.state.grouped ? this.menuGrouped : this.menuUngrouped} onMenuItemClick={this.onMenuItemClick}
									 onRootMenuItemClick={this.onRootMenuItemClick}
									 layoutMode={this.state.layoutMode} active={this.state.menuActive}/>
						</div>
					</div>
				</div>

				<div className="layout-main">
					<AppBreadCrumbWithRouter/>

					<div className="layout-content">
						<Route path="/" exact component={Dashboard}/>
						<Route path="/forms" component={FormsDemo}/>
						<Route path="/sample" component={SampleDemo}/>
						<Route path="/data" component={DataDemo}/>
						<Route path="/panels" component={PanelsDemo}/>
						<Route path="/overlays" component={OverlaysDemo}/>
						<Route path="/menus" component={MenusDemo}/>
						<Route path="/messages" component={MessagesDemo}/>
						<Route path="/charts" component={ChartsDemo}/>
						<Route path="/misc" component={MiscDemo}/>
						<Route path="/empty" component={EmptyPage}/>
						<Route path="/documentation" component={Documentation}/>
						<Route path="/help" component={Help} />
						<Route path="/invoice" component={Invoice} />
						<Route path="/person" component={Person} />
					</div>
				</div>

				<AppConfig layoutMode={this.state.layoutMode} grouped={this.state.grouped} darkMenu={this.state.darkMenu}
						   profileMode={this.state.profileMode} themeColor={this.state.themeColor}
						   changeMenuMode={this.changeMenuMode} changeMenuType={this.changeMenuType} changeProfileMode={this.changeProfileMode}
						   changeMenuColor={this.changeMenuColor} changeTheme={this.changeTheme}
						   onConfigButtonClick={this.onConfigButtonClick} onConfigCloseClick={this.onConfigCloseClick}
						   onConfigClick={this.onConfigClick} configDialogActive={this.state.configDialogActive}/>

				<AppFooter/>

				{this.state.staticMenuMobileActive && <div className="layout-mask"></div>}
			</div>
		);
	}
}

const loadGoogleMaps = (callback) => {
	const existingScript = document.getElementById('googleMaps');

	if (!existingScript) {
		const script = document.createElement('script');
		script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyALyhdMxVa7ncvO3xFR11_oUr1K0bqXg8g&libraries=places';
		script.id = 'googleMaps';
		document.body.appendChild(script);

		script.onload = () => {
			if (callback) callback();
		};
	}

	if (existingScript && callback) callback();
};

export default App;
