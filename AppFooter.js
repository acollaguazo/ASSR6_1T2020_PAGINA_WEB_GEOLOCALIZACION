import React, {Component} from 'react';

export class AppFooter extends Component {

	render() {
		return <div className="layout-footer">
			<div className="p-grid">
				<div className="p-col-6">
					<a href="/" className="logo-container">
						<img src="assets/layout/images/logo-black.png" alt="babylon-layout"/>
					</a>
				</div>
				<div className="p-col-6 footer-icons">
					<button className="p-link">
						<i className="pi pi-home"/>
					</button>
					<button className="p-link">
						<i className="pi pi-globe"/>
					</button>
					<button className="p-link">
						<i className="pi pi-envelope"/>
					</button>
				</div>
			</div>
		</div>
	}
}