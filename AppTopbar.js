import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export class AppTopbar extends Component {

	static defaultProps = {
		onMenuButtonClick: null,
		onTopbarMenuButtonClick: null,
		onTopbarItemClick: null,
		topbarMenuActive: false,
		activeTopbarItem: null,
		profileMode: null,
		horizontal: null
	}

	static propTypes = {
		onMenuButtonClick: PropTypes.func.isRequired,
		onTopbarMenuButtonClick: PropTypes.func.isRequired,
		onTopbarItemClick: PropTypes.func.isRequired,
		topbarMenuActive: PropTypes.bool.isRequired,
		activeTopbarItem: PropTypes.string,
		profileMode: PropTypes.string,
		horizontal: PropTypes.bool
	}

	constructor() {
		super();
		this.state = {};
	}

	onTopbarItemClick(event, item) {
		if (this.props.onTopbarItemClick) {
			this.props.onTopbarItemClick({
				originalEvent: event,
				item: item
			});
		}
	}

	render() {
		let topbarItemsClassName = classNames('topbar-menu fadeInDown', {'topbar-menu-visible': this.props.topbarMenuActive});

		return <div className="layout-topbar clearfix">

			<button className="layout-topbar-logo p-link">
				<img id="layout-topbar-logo" alt="babylon-layout" src="assets/layout/images/logo-white.png"/>
			</button>

			<button className="layout-menu-button p-link"  onClick={this.props.onMenuButtonClick}>
				<i className="pi pi-bars"/>
			</button>

			<button id="topbar-menu-button" className="p-link"  onClick={this.props.onTopbarMenuButtonClick}>
				<i className="pi pi-ellipsis-v"/>
			</button>

			<ul className={topbarItemsClassName}>
				{(this.props.profileMode === 'popup' || this.props.horizontal) &&
				<li className={classNames('user-profile', {'active-topmenuitem': this.props.activeTopbarItem === 'profile'})}
					onClick={(e) => this.onTopbarItemClick(e, 'profile')}>
					<button className="p-link">
						<img alt="babylon-layout" src="assets/layout/images/avatar.png"/>
						<span className="topbar-item-name">Arlene Welch</span>
					</button>

					<ul className="fadeInDown">
						<li role="menuitem">
							<button className="p-link">
								<i className="pi pi-user"/>
								<span>Profile</span>
							</button>
						</li>
						<li role="menuitem">
							<button className="p-link">
								<i className="pi pi-cog"/>
								<span>Settings</span>
							</button>
						</li>
						<li role="menuitem">
							<button className="p-link">
								<i className="pi pi-envelope"/>
								<span>Message</span>
							</button>
						</li>
						<li role="menuitem">
							<button className="p-link">
								<i className="pi pi-bell"/>
								<span>Notifications</span>
							</button>
						</li>
					</ul>
				</li>}

				<li className={classNames({'active-topmenuitem': this.props.activeTopbarItem === 'settings'})}
					onClick={(e) => this.onTopbarItemClick(e, 'settings')}>
					<button className="p-link">
						<i className="topbar-icon pi pi-calendar"/>
						<span className="topbar-item-name">Notifications</span>
					</button>
					<ul className="fadeInDown">
						<li role="menuitem">
							<button className="p-link">
								<i className="pi pi-tags"/>
								<span>Pending tasks</span>
								<span className="topbar-submenuitem-badge">6</span>
							</button>
						</li>
						<li role="menuitem">
							<button className="p-link">
								<i className="pi pi-calendar-plus"/>
								<span>Meeting today at 3pm</span>
							</button>
						</li>
						<li role="menuitem">
							<button className="p-link">
								<i className="pi pi-download"/>
								<span>Download</span>
							</button>
						</li>
						<li role="menuitem">
							<button className="p-link">
								<i className="pi pi-lock"/>
								<span>Book flight</span>
							</button>
						</li>
					</ul>
				</li>
				<li className={classNames({'active-topmenuitem': this.props.activeTopbarItem === 'messages'})}
					onClick={(e) => this.onTopbarItemClick(e, 'messages')}>
					<button className="p-link">
						<i className="topbar-icon pi pi-inbox"/>
						<span className="topbar-item-name">Messages</span>
						<span className="topbar-badge">8</span>
					</button>
					<ul className="fadeInDown">
						<li role="menuitem">
							<button className="topbar-message p-link">
								<img src="assets/layout/images/avatar-john.png" alt="babylon-layout"/>
								<span>Give me a call</span>
							</button>
						</li>
						<li role="menuitem">
							<button className="topbar-message p-link">
								<img src="assets/layout/images/avatar-julia.png" alt="babylon-layout"/>
								<span>Reports attached</span>
							</button>
						</li>
						<li role="menuitem">
							<button className="topbar-message p-link">
								<img src="assets/layout/images/avatar-kevin.png" alt="babylon-layout"/>
								<span>About your invoice</span>
							</button>
						</li>
						<li role="menuitem">
							<button className="topbar-message p-link">
								<img src="assets/layout/images/avatar-julia.png" alt="babylon-layout"/>
								<span>Meeting today</span>
							</button>
						</li>
						<li role="menuitem">
							<button className="topbar-message p-link">
								<img src="assets/layout/images/avatar.png" alt="babylon-layout"/>
								<span>Out of office</span>
							</button>
						</li>
					</ul>
				</li>
				<li className={classNames({'active-topmenuitem': this.props.activeTopbarItem === 'notifications'})}
					onClick={(e) => this.onTopbarItemClick(e, 'notifications')}>
					<button className="p-link">
						<i className="topbar-icon pi pi-cog"/>
						<span className="topbar-item-name">Settings</span>
					</button>
					<ul className="fadeInDown">
						<li role="menuitem">
							<button className="p-link">
								<i className="pi pi-pencil"/>
								<span>Change Theme</span>
								<span className="topbar-submenuitem-badge">4</span>
							</button>
						</li>
						<li role="menuitem">
							<button className="p-link">
								<i className="pi pi-star-o"/>
								<span>Favorites</span>
							</button>
						</li>
						<li role="menuitem">
							<button className="p-link">
								<i className="pi pi-lock"/>
								<span>Lock Screen</span>
								<span className="topbar-submenuitem-badge">2</span>
							</button>
						</li>
						<li role="menuitem">
							<button className="p-link">
								<i className="pi pi-image"/>
								<span>Wallpaper</span>
							</button>
						</li>
					</ul>
				</li>
			</ul>
		</div>;
	}
}