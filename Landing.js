import React, {Component} from 'react';
import {Button} from "primereact/button";
import classNames from 'classnames';

export default class Landing extends Component {

	constructor() {
		super();
		this.state = {
			menuActive: false,
		};

		this.onMobileMenuClick = this.onMobileMenuClick.bind(this);
		this.onBodyClick = this.onBodyClick.bind(this);
	}

	onMobileMenuClick(){
		this.menuClick = true;

		this.setState({menuActive:!this.state.menuActive})
	}

	onBodyClick(){
		if (!this.menuClick) {
			this.setState({menuActive: false})
		}
		this.menuClick = false;
	}

	render() {
		return <div  className={classNames('landing-body',{'landing-menu-active':this.state.menuActive})} onClick={this.onBodyClick}>
			<div className="landing-wrapper">
				<div id="header">
					<div className="header-top">
						<img src="assets/layout/images/logo-black.png" className="logo" alt="babylon-layout"/>
						<Button id="landing-menu-button" className="p-button-secondary" icon="pi pi-ellipsis-v" onClick={this.onMobileMenuClick}></Button>
						<ul id="landing-menu">
							<li>
								<a href="#header">Home</a>
							</li>
							<li>
								<a href="#features">Features</a>
							</li>
							<li>
								<a href="#promo">News</a>
							</li>
							<li>
								<a href="#pricing">Pricing</a>
							</li>
							<li>
								<a href="#multimedia">Multimedia</a>
							</li>
						</ul>
					</div>

					<div className="header-content">
						<h1>PrimeReact Presents Babylon.</h1>
						<p>Modern and elegant responsive application template.</p>

						<Button label="Learn More" className="landing-button" />
					</div>
				</div>

				<div id="features">
					<h1>Features</h1>
					<p>Full Customizable Template</p>
					<div className="p-grid">
						<div className="p-col-12 p-md-12 p-lg-4">
							<div className="feature-box">
								<img src="assets/layout/images/landing/icon-responsivelayout.svg" alt="babylon-layout"/>
								<h3>Responsive Layout</h3>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
							</div>
						</div>
						<div className="p-col-12 p-md-12 p-lg-4">
							<div className="feature-box">
								<img src="assets/layout/images/landing/icon-moderndesign.svg" alt="babylon-layout"/>
								<h3>Modern Design</h3>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
							</div>
						</div>
						<div className="p-col-12 p-md-12 p-lg-4">
							<div className="feature-box">
								<img src="assets/layout/images/landing/icon-welldocumented.svg" alt="babylon-layout"/>
								<h3>Well Documented</h3>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
							</div>
						</div>
						<div className="p-col-12 p-md-12 p-lg-4">
							<div className="feature-box">
								<img src="assets/layout/images/landing/shape.svg" alt="babylon-layout"/>
								<h3>Clean Code</h3>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
							</div>
						</div>
						<div className="p-col-12 p-md-12 p-lg-4">
							<div className="feature-box">
								<img src="assets/layout/images/landing/icon-gorgeous.svg" alt="babylon-layout"/>
								<h3>Gorgeous</h3>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
							</div>
						</div>
						<div className="p-col-12 p-md-12 p-lg-4">
							<div className="feature-box">
								<img src="assets/layout/images/landing/icon-craftedforyou.svg" alt="babylon-layout"/>
								<h3>Crafted for You</h3>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
							</div>
						</div>
					</div>
				</div>

				<div id="promo">
					<h1>Join Babylon</h1>
					<p>Take advantage of media's most prominent business trend which empowers
						your internal advertising teams.</p>

					<Button label="Learn More" />

					<img src="assets/layout/images/landing/babylon-icon-cta.png" alt="babylon-layout"/>
				</div>

				<div id="pricing">
					<h1>Pricing</h1>
					<p>Affordable Prices, Highest Quality</p>

					<div className="p-grid">
						<div className="p-col-12 p-lg-4">
							<div className="pricing-box">
								<h3>Beginner</h3>
								<span className="pricing-intro">Starting From</span>
								<h3>5$ per month</h3>

								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut in ex condimentum,
									bibendum ligula a, ultrices magna.</p>
								<ul>
									<li>Responsive</li>
									<li>Push Messages</li>
								</ul>
							</div>
						</div>
						<div className="p-col-12 p-lg-4">
							<div className="pricing-box">
								<h3>Professional</h3>
								<span className="pricing-intro">Starting From</span>
								<h3>10$ per month</h3>

								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut in ex condimentum,
									bibendum ligula a, ultrices magna.</p>
								<ul>
									<li> Responsive</li>
									<li> Push Messages</li>
									<li> 10 Support Tickets</li>
									<li> Free Shipping</li>
								</ul>
							</div>
						</div>
						<div className="p-col-12 p-lg-4">
							<div className="pricing-box">
								<h3>Enterprise</h3>
								<span className="pricing-intro">Starting From</span>
								<h3>20$ per month</h3>

								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut in ex condimentum,
									bibendum ligula a, ultrices magna.</p>
								<ul>
									<li> Responsive</li>
									<li> Push Messages</li>
									<li> 10 Support Tickets</li>
									<li> Free Shipping</li>
									<li> Unlimited Space</li>
								</ul>
							</div>
						</div>
					</div>
				</div>

				<div id="multimedia">
					<h1>Multimedia</h1>
					<p>Duis nec lobortis massa, sed facilisis lorem. In hac habitasse platea dictumst. </p>
					<div className="multimedia-container">
						<iframe src="https://www.youtube.com/embed/Mcb8JtyQDJ4" frameBorder="0" width="560" title="Media"></iframe>
					</div>
				</div>

				<div id="footer">
					<div className="p-grid">
						<div className="p-col-12 p-lg-4">
							<img src="assets/layout/images/logo-white.png" alt="babylon-layout" className="footer-logo"/>
						</div>

						<div className="p-col-12 p-lg-8 footer-menu">
							<div className="p-grid">
								<div className="p-col-12 p-md-6 p-lg-3">
									<span>OVERVIEW</span>

									<a href="#primefaces">Why PrimeFaces</a>

									<a href="#prime">Who Uses PrimeFaces</a>

									<a href="#testimonials">Testimonials</a>

									<a href="#licence">License</a>

								</div>
								<div className="p-col-12 p-md-6 p-lg-3">
									<span>DEMOS</span>

									<a href="#faces">PrimeFaces</a>

									<a href="#ng">PrimeNG</a>

									<a href="#react">PrimeReact</a>

									<a href="#ui">PrimeUI</a>

								</div>
								<div className="p-col-12 p-md-6 p-lg-3">
									<span>SUPPORT</span>

									<a href="#options">Support Options</a>

									<a href="#pro">PrimeFaces PRO</a>

									<a href="#elite">PrimeFaces Elite</a>

									<a href="#forum">Forum</a>

								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className={classNames({'layout-mask':this.state.menuActive})}></div>
		</div>
	}
}