import React, {Component} from 'react';
import classNames from 'classnames';
import {AutoComplete} from "primereact/autocomplete";
import {Accordion, AccordionTab} from "primereact/accordion";

export class Help extends Component {
	constructor() {
		super();
		this.state = {
			text: null,
			filteredText: [],
			activeTab: 'basic'
		};

		this.filterText = this.filterText.bind(this);
	}

	filterText(event) {
		const query = event.query;
		let filteredText = []

		for (let i = 0; i < 10; i++) {
			filteredText.push(query + i);
		}
		this.setState({filteredText: filteredText});
	}

	render() {
		const accordionHeader1 = <span>
                                    <i className="pi pi-circle-on"></i>
                                    <div className="accordion-title">
                                        Which do I need to develop a SaaS application?
                                    </div>
		</span>
		const accordionHeader2 = <span>
                                    <i className="pi pi-circle-on"></i>
                                    <div className="accordion-title">
                                        I’m a freelancer/agency. Can I use the item for an end product I’m doing for a client?
                                    </div>
		</span>
		const accordionHeader3 = <span>
                                    <i className="pi pi-circle-on"></i>
                                    <div className="accordion-title">
                                        We’re a reseller, are we able to purchase a license on behalf of our client?
                                    </div>
		</span>
		const accordionHeader4 = <span>
                                    <i className="pi pi-circle-on"></i>
                                    <div className="accordion-title">
                                        Is there a recurring fee or is it perpetual?
                                    </div>
		</span>

		let contentStyle = {transform: this.state.activeTab === 'basic' ? 'translate3d(0, 0, 0)' : this.state.activeTab === 'license' ? 'translate3d(-100%, 0, 0)' : 'translate3d(-200%, 0, 0)'};

		return (
			<div className="help-wrapper">
				<div className="help-header">
					<div className="header-content">
						<h1>Busqueda Servicio</h1>
						<div className="search-form">
							<AutoComplete id="acSimple" placeholder="Servicio"
										  suggestions={this.state.filteredText} value={this.state.text}
										  completeMethod={this.filterText}
										  onChange={event => this.setState({text: event.value, filteredText: null})}/>
							<i className="pi pi-search"/>
						</div>
						<div className="search-form">
							<AutoComplete id="acSimple" placeholder="Direccion"
										  suggestions={this.state.filteredText} value={this.state.text}
										  completeMethod={this.filterText}
										  onChange={event => this.setState({text: event.value, filteredText: null})}/>
							<i className="pi pi-search"/>
						</div>
						<div className="search-form">
							<AutoComplete id="acSimple" placeholder="Ciudad"
										  suggestions={this.state.filteredText} value={this.state.text}
										  completeMethod={this.filterText}
										  onChange={event => this.setState({text: event.value, filteredText: null})}/>
							<i className="pi pi-search"/>
						</div>
						<div className="search-form">
							<AutoComplete id="acSimple" placeholder="Pais"
										  suggestions={this.state.filteredText} value={this.state.text}
										  completeMethod={this.filterText}
										  onChange={event => this.setState({text: event.value, filteredText: null})}/>
							<i className="pi pi-search"/>
						</div>
					</div>
				</div>

				<div className="help-container">
					<div className="help-content-header">
						<div
							className={classNames("card help-content-header-tab tab-1", {'selected-tab': this.state.activeTab === 'basic'})}
							onClick={() => this.setState({activeTab: 'basic'})}>
							<div className="tab-icon">
								<i className="pi pi-compass"></i>
							</div>
							<div className="tab-content">
								<h3>The Basics</h3>
								<span>4 articles in this collection</span>
							</div>
						</div>
						<div
							className={classNames("card help-content-header-tab tab-2", {'selected-tab': this.state.activeTab === 'license'})}
							onClick={() => this.setState({activeTab: 'license'})}>
							<div className="tab-icon">
								<i className="pi pi-bookmark"></i>
							</div>
							<div className="tab-content">
								<h3>Questions About Licenses</h3>
								<span>3 articles in this collection</span>
							</div>
						</div>
						<div
							className={classNames("card help-content-header-tab tab-3", {'selected-tab': this.state.activeTab === 'framework'})}
							onClick={() => this.setState({activeTab: 'framework'})}>
							<div className="tab-icon">
								<i className="pi pi-folder"></i>
							</div>
							<div className="tab-content">
								<h3>Questions About Frameworks</h3>
								<span>72 articles in this collection</span>
							</div>
						</div>
					</div>

					<div className="help-contents-wrapper">
						<div className="help-contents-row" style={contentStyle}>
							<div className="card help-content">
								<div className="questions-header">
									<h1>The Basics</h1>
									<span>4 articles in this collection</span>
									<div className="profile-images">
										<img src="assets/layout/images/extensions/avatar-1.png" alt="babylon-layout"/>
										<img src="assets/layout/images/extensions/avatar-2.png" alt="babylon-layout"/>
										<img src="assets/layout/images/extensions/avatar-3.png" alt="babylon-layout"/>
									</div>
								</div>
								<div className="questions-content">
									<Accordion className="sub-accordion" activeIndex={0}>
										<AccordionTab header={accordionHeader1}>
											Nunc viverra nisl ac enim facilisis, sit amet elementum arcu sagittis.
											Maecenas nec nisi arcu. Donec tempus scelerisque neque, eu commodo velit
											auctor in. Cras in lorem porttitor ligula cursus gravida eu ut ex. Proin eu
											posuere dolor. Mauris condimentum, elit et viverra egestas, metus purus
											tempor lorem, eu ultricies tellus odio a nunc.
										</AccordionTab>
										<AccordionTab header={accordionHeader2}>
											Morbi commodo augue turpis, ut luctus justo elementum eget. In maximus enim
											a dignissim porta. Sed eget erat turpis. Phasellus elementum ex non magna
											convallis auctor. Interdum et malesuada fames ac ante ipsum primis in
											faucibus. Pellentesque ullamcorper arcu nisi, ac consectetur dui consequat
											ac.
										</AccordionTab>
										<AccordionTab header={accordionHeader3}>
											Donec aliquet, nulla vel dignissim sollicitudin, nibh magna dapibus mauris,
											vel egestas nisi quam id turpis. Duis consequat elementum consequat.
											Phasellus vulputate, elit sed commodo interdum, erat lorem molestie tortor,
											a commodo est lacus ut sapien. Mauris tristique magna eu diam pellentesque
											semper sed nec ante. Pellentesque id accumsan erat. Vivamus dictum tristique
											ex, quis sodales felis convallis id. Donec hendrerit auctor neque, semper
											posuere arcu.
										</AccordionTab>
										<AccordionTab header={accordionHeader4}>
											Nulla facilisi. Nam bibendum venenatis quam id fermentum. Sed quis libero id
											lorem lacinia sollicitudin. Quisque commodo, urna ac facilisis maximus, mi
											augue dictum lacus, non aliquam turpis libero eget mauris. Praesent
											venenatis leo vitae sem vulputate, at elementum felis tempus.

											Nulla lobortis condimentum nisi vitae ultrices. Aenean ac mi et lectus
											varius efficitur.
										</AccordionTab>
									</Accordion>
								</div>
							</div>

							<div className="card help-content">
								<div className="questions-header">
									<h1>Questions About Licenses</h1>
									<span>4 articles in this collection</span>
									<div className="profile-images">
										<img src="assets/layout/images/extensions/avatar-1.png" alt="babylon-layout"/>
										<img src="assets/layout/images/extensions/avatar-2.png" alt="babylon-layout"/>
										<img src="assets/layout/images/extensions/avatar-3.png" alt="babylon-layout"/>
									</div>
								</div>
								<div className="questions-content">
									<Accordion className="sub-accordion" activeIndex={0}>
										<AccordionTab header={accordionHeader1}>
											Nunc viverra nisl ac enim facilisis, sit amet elementum arcu sagittis.
											Maecenas nec nisi arcu. Donec tempus scelerisque neque, eu commodo velit
											auctor in. Cras in lorem porttitor ligula cursus gravida eu ut ex. Proin eu
											posuere dolor. Mauris condimentum, elit et viverra egestas, metus purus
											tempor lorem, eu ultricies tellus odio a nunc.
										</AccordionTab>
										<AccordionTab header={accordionHeader2}>
											Morbi commodo augue turpis, ut luctus justo elementum eget. In maximus enim
											a dignissim porta. Sed eget erat turpis. Phasellus elementum ex non magna
											convallis auctor. Interdum et malesuada fames ac ante ipsum primis in
											faucibus. Pellentesque ullamcorper arcu nisi, ac consectetur dui consequat
											ac.
										</AccordionTab>
										<AccordionTab header={accordionHeader3}>
											Donec aliquet, nulla vel dignissim sollicitudin, nibh magna dapibus mauris,
											vel egestas nisi quam id turpis. Duis consequat elementum consequat.
											Phasellus vulputate, elit sed commodo interdum, erat lorem molestie tortor,
											a commodo est lacus ut sapien. Mauris tristique magna eu diam pellentesque
											semper sed nec ante. Pellentesque id accumsan erat. Vivamus dictum tristique
											ex, quis sodales felis convallis id. Donec hendrerit auctor neque, semper
											posuere arcu.
										</AccordionTab>
										<AccordionTab header={accordionHeader4}>
											Nulla facilisi. Nam bibendum venenatis quam id fermentum. Sed quis libero id
											lorem lacinia sollicitudin. Quisque commodo, urna ac facilisis maximus, mi
											augue dictum lacus, non aliquam turpis libero eget mauris. Praesent
											venenatis leo vitae sem vulputate, at elementum felis tempus.

											Nulla lobortis condimentum nisi vitae ultrices. Aenean ac mi et lectus
											varius efficitur.
										</AccordionTab>
									</Accordion>
								</div>
							</div>

							<div className="card help-content">
								<div className="questions-header">
									<h1>Questions About Frameworks</h1>
									<span>4 articles in this collection</span>
									<div className="profile-images">
										<img src="assets/layout/images/extensions/avatar-1.png" alt="babylon-layout"/>
										<img src="assets/layout/images/extensions/avatar-2.png" alt="babylon-layout"/>
										<img src="assets/layout/images/extensions/avatar-3.png" alt="babylon-layout"/>
									</div>
								</div>
								<div className="questions-content">
									<Accordion className="sub-accordion" activeIndex={0}>
										<AccordionTab header={accordionHeader1}>
											Nunc viverra nisl ac enim facilisis, sit amet elementum arcu sagittis.
											Maecenas nec nisi arcu. Donec tempus scelerisque neque, eu commodo velit
											auctor in. Cras in lorem porttitor ligula cursus gravida eu ut ex. Proin eu
											posuere dolor. Mauris condimentum, elit et viverra egestas, metus purus
											tempor lorem, eu ultricies tellus odio a nunc.
										</AccordionTab>
										<AccordionTab header={accordionHeader2}>
											Morbi commodo augue turpis, ut luctus justo elementum eget. In maximus enim
											a dignissim porta. Sed eget erat turpis. Phasellus elementum ex non magna
											convallis auctor. Interdum et malesuada fames ac ante ipsum primis in
											faucibus. Pellentesque ullamcorper arcu nisi, ac consectetur dui consequat
											ac.
										</AccordionTab>
										<AccordionTab header={accordionHeader3}>
											Donec aliquet, nulla vel dignissim sollicitudin, nibh magna dapibus mauris,
											vel egestas nisi quam id turpis. Duis consequat elementum consequat.
											Phasellus vulputate, elit sed commodo interdum, erat lorem molestie tortor,
											a commodo est lacus ut sapien. Mauris tristique magna eu diam pellentesque
											semper sed nec ante. Pellentesque id accumsan erat. Vivamus dictum tristique
											ex, quis sodales felis convallis id. Donec hendrerit auctor neque, semper
											posuere arcu.
										</AccordionTab>
										<AccordionTab header={accordionHeader4}>
											Nulla facilisi. Nam bibendum venenatis quam id fermentum. Sed quis libero id
											lorem lacinia sollicitudin. Quisque commodo, urna ac facilisis maximus, mi
											augue dictum lacus, non aliquam turpis libero eget mauris. Praesent
											venenatis leo vitae sem vulputate, at elementum felis tempus.

											Nulla lobortis condimentum nisi vitae ultrices. Aenean ac mi et lectus
											varius efficitur.
										</AccordionTab>
									</Accordion>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
