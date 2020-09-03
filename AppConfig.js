import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { TabView, TabPanel } from 'primereact/tabview';

export class AppConfig extends Component {

	static defaultProps = {
		layoutMode: 'slim',
		grouped: true,
		darkMenu: true,
		profileMode: 'inline',
		themeColor: 'blue-accent',
		configDialogActive: false
	}

	static propTypes = {
		layoutMode: PropTypes.string.isRequired,
		grouped: PropTypes.bool.isRequired,
		darkMenu: PropTypes.bool.isRequired,
		profileMode: PropTypes.string.isRequired,
		themeColor: PropTypes.string.isRequired,
		configDialogActive: PropTypes.bool.isRequired
	}

	render() {
		let themeColors = [
			{name: 'amber', file: 'accent', image: 'amber-accent.svg'},
			{name: 'amber', file: 'light', image: 'amber-light.svg'},
			{name: 'amber', file: 'dark', image: 'amber-dark.svg'},
			{name: 'blue', file: 'accent', image: 'blue-accent.svg'},
			{name: 'blue', file: 'light', image: 'blue-light.svg'},
			{name: 'blue', file: 'dark', image: 'blue-dark.svg'},
			{name: 'bluegrey', file: 'accent', image: 'bluegrey-accent.svg'},
			{name: 'bluegrey', file: 'light', image: 'bluegrey-light.svg'},
			{name: 'bluegrey', file: 'dark', image: 'bluegrey-dark.svg'},
			{name: 'brown', file: 'accent', image: 'brown-accent.svg'},
			{name: 'brown', file: 'light', image: 'brown-light.svg'},
			{name: 'brown', file: 'dark', image: 'brown-dark.svg'},
			{name: 'cyan', file: 'accent', image: 'cyan-accent.svg'},
			{name: 'cyan', file: 'light', image: 'cyan-light.svg'},
			{name: 'cyan', file: 'dark', image: 'cyan-dark.svg'},
			{name: 'deeporange', file: 'accent', image: 'deeporange-accent.svg'},
			{name: 'deeporange', file: 'light', image: 'deeporange-light.svg'},
			{name: 'deeporange', file: 'dark', image: 'deeporange-dark.svg'},
			{name: 'deeppurple', file: 'accent', image: 'deeppurple-accent.svg'},
			{name: 'deeppurple', file: 'light', image: 'deeppurple-light.svg'},
			{name: 'deeppurple', file: 'dark', image: 'deeppurple-dark.svg'},
			{name: 'green', file: 'accent', image: 'green-accent.svg'},
			{name: 'green', file: 'light', image: 'green-light.svg'},
			{name: 'green', file: 'dark', image: 'green-dark.svg'},
			{name: 'indigo', file: 'accent', image: 'indigo-accent.svg'},
			{name: 'indigo', file: 'light', image: 'indigo-light.svg'},
			{name: 'indigo', file: 'dark', image: 'indigo-dark.svg'},
			{name: 'lightblue', file: 'accent', image: 'lightblue-accent.svg'},
			{name: 'lightblue', file: 'light', image: 'lightblue-light.svg'},
			{name: 'lightblue', file: 'dark', image: 'lightblue-dark.svg'},
			{name: 'lightgreen', file: 'accent', image: 'lightgreen-accent.svg'},
			{name: 'lightgreen', file: 'light', image: 'lightgreen-light.svg'},
			{name: 'lightgreen', file: 'dark', image: 'lightgreen-dark.svg'},
			{name: 'lime', file: 'accent', image: 'lime-accent.svg'},
			{name: 'lime', file: 'light', image: 'lime-light.svg'},
			{name: 'lime', file: 'dark', image: 'lime-dark.svg'},
			{name: 'orange', file: 'accent', image: 'orange-accent.svg'},
			{name: 'orange', file: 'light', image: 'orange-light.svg'},
			{name: 'orange', file: 'dark', image: 'orange-dark.svg'},
			{name: 'pink', file: 'accent', image: 'pink-accent.svg'},
			{name: 'pink', file: 'light', image: 'pink-light.svg'},
			{name: 'pink', file: 'dark', image: 'pink-dark.svg'},
			{name: 'purple', file: 'accent', image: 'purple-accent.svg'},
			{name: 'purple', file: 'light', image: 'purple-light.svg'},
			{name: 'purple', file: 'dark', image: 'purple-dark.svg'},
			{name: 'teal', file: 'accent', image: 'teal-accent.svg'},
			{name: 'teal', file: 'light', image: 'teal-light.svg'},
			{name: 'teal', file: 'dark', image: 'teal-dark.svg'},
			{name: 'yellow', file: 'accent', image: 'yellow-accent.svg'},
			{name: 'yellow', file: 'light', image: 'yellow-light.svg'},
			{name: 'yellow', file: 'dark', image: 'yellow-dark.svg'}
		];

		return (
			<div className={classNames("layout-config", {'layout-config-active': this.props.configDialogActive})} onClick={this.props.onConfigClick}>
				<div className="layout-config-content">
					<button className="layout-config-button" id="layout-config-button" onClick={this.props.onConfigButtonClick}>
						<i className="pi pi-cog"/>
					</button>

					<button className="layout-config-close" onClick={this.props.onConfigCloseClick}>
						<i className="pi pi-times"/>
					</button>

					<TabView>
						<TabPanel header="Menu" headerClassName="">
							<h1>Menu Modes</h1>
							<div className="p-grid">
								<div className="p-col p-col-fixed">
									<button className="p-link layout-config-option-image" onClick={event => this.props.changeMenuMode({ originalEvent: event, menuMode: 'static' })}>
										<img src="assets/layout/images/configurator/menu/babylon-static.png" alt="babylon"/>
										{this.props.layoutMode === 'static' && <i className="pi pi-check"/>}
									</button>
									<span>Static</span>
								</div>
								<div className="p-col p-col-fixed">
									<button className="p-link layout-config-option-image" onClick={event => this.props.changeMenuMode({ originalEvent: event, menuMode: 'overlay' })}>
										<img src="assets/layout/images/configurator/menu/babylon-overlay.png" alt="babylon"/>
										{this.props.layoutMode === 'overlay' && <i className="pi pi-check"/>}
									</button>
									<span>Overlay</span>
								</div>
								<div className="p-col p-col-fixed">
									<button className="p-link layout-config-option-image" onClick={event => this.props.changeMenuMode({ originalEvent: event, menuMode: 'horizontal' })}>
										<img src="assets/layout/images/configurator/menu/babylon-horizontal.png" alt="babylon"/>
										{this.props.layoutMode === 'horizontal' && <i className="pi pi-check"/>}
									</button>
									<span>Horizontal</span>
								</div>
								<div className="p-col p-col-fixed">
									<button className="p-link layout-config-option-image" onClick={event => this.props.changeMenuMode({ originalEvent: event, menuMode: 'slim' })}>
										<img src="assets/layout/images/configurator/menu/babylon-slim.png" alt="babylon"/>
										{this.props.layoutMode === 'slim' && <i className="pi pi-check"/>}
									</button>
									<span>Slim</span>
								</div>
							</div>

							<h1>Menu Type</h1>
							<div className="p-grid">
								<div className="p-col p-col-fixed">
									<button className="p-link layout-config-option-image" onClick={event => this.props.changeMenuType({ originalEvent: event, grouped: true })}>
										<img src="assets/layout/images/configurator/menu/babylon-grouped.png" alt="babylon"/>
										{this.props.grouped === true && <i className="pi pi-check"/>}
									</button>
									<span>Grouped</span>
								</div>
								<div className="p-col p-col-fixed">
									<button className="p-link layout-config-option-image" onClick={event => this.props.changeMenuType({ originalEvent: event, grouped: false })}>
										<img src="assets/layout/images/configurator/menu/babylon-ungrouped.png" alt="babylon"/>
										{this.props.grouped === false && <i className="pi pi-check"/>}
									</button>
									<span>Ungrouped</span>
								</div>
							</div>

							<h1>Menu Colors</h1>
							<div className="p-grid">
								<div className="p-col p-col-fixed">
									<button className="p-link layout-config-option-image" onClick={event => this.props.changeMenuColor({ originalEvent: event, darkMenu: true })}>
										<img src="assets/layout/images/configurator/menu/babylon-static.png" alt="babylon"/>
										{this.props.darkMenu === true && <i className="pi pi-check"/>}
									</button>
									<span>Dark</span>
								</div>
								<div className="p-col p-col-fixed">
									<button className="p-link layout-config-option-image" onClick={event => this.props.changeMenuColor({ originalEvent: event, darkMenu: false })}>
										<img src="assets/layout/images/configurator/menu/babylon-light.png" alt="babylon"/>
										{this.props.darkMenu === false && <i className="pi pi-check"/>}
									</button>
									<span>Light</span>
								</div>
							</div>
						</TabPanel>

						<TabPanel header="User Profile">
							<div className="p-grid">
								<div className="p-col p-col-fixed">
									<button className={classNames("p-link", {'p-disabled': this.props.layoutMode === 'horizontal'})}
											onClick={event => this.props.changeProfileMode({ originalEvent: event, profileMode: 'inline' })}>
										<img src="assets/layout/images/configurator/menu/babylon-inline.png" alt="babylon"/>
										{this.props.profileMode === 'inline' && <i className="pi pi-check"/>}
									</button>
									<span>Inline</span>
								</div>
								<div className="p-col p-col-fixed">
									<button className={classNames("p-link", {'p-disabled': this.props.layoutMode === 'horizontal'})}
											onClick={event => this.props.changeProfileMode({ originalEvent: event, profileMode: 'popup' })}>
										<img src="assets/layout/images/configurator/menu/babylon-popup.png" alt="babylon"/>
										{this.props.profileMode === 'popup' && <i className="pi pi-check"/>}
									</button>
									<span>Popup</span>
								</div>
							</div>
						</TabPanel>

						<TabPanel header="Themes">
							<div className="p-grid">
								{themeColors && themeColors.map((t, index) => {
									return <div className="p-col p-xl-2" key={index}>
										<button className="p-link layout-config-option-image layout-config-option"
												onClick={event => this.props.changeTheme(t.name, t.file )}>
											<img src={"assets/layout/images/configurator/themes/" + t.image} alt={t.name}/>
											{this.props.themeColor === t.name + '-' + t.file && <i className="pi pi-check"/>}
										</button>
									</div>
								})
								}
							</div>
						</TabPanel>
					</TabView>
				</div>
			</div>
		);
	}
}
