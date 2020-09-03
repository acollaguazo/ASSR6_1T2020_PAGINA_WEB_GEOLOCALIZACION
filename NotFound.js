import React, {Component} from 'react';

export default class NotFound extends Component {

	render() {
		return <div className="exception-body notfound">
			<div className="exception-panel"></div>

			<div className="exception-content">
				<img src="assets/layout/images/logo-black.png" alt="babylon-layout"/>
				<h1><span className="exception-name">PAGE</span> NOT FOUND</h1>
				<p>Requested resource is not available.</p>
				<a href="/#">Back to Dashboard</a>
			</div>
		</div>
	}
}