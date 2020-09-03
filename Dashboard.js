import React, {Component} from 'react';
import {CarService} from '../service/CarService';
import {Checkbox} from 'primereact/components/checkbox/Checkbox';
import {Button} from 'primereact/components/button/Button';
import {InputText} from 'primereact/components/inputtext/InputText';
import {InputTextarea} from 'primereact/components/inputtextarea/InputTextarea';
import {DataTable} from 'primereact/components/datatable/DataTable';
import {Column} from 'primereact/components/column/Column';
import {Chart} from 'primereact/chart';
import {Menu} from 'primereact/menu';
import {FullCalendar} from 'primereact/fullcalendar';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

export class Dashboard extends Component {

	constructor() {
		super();
		this.state = {
			tasks: [],
			city: null,
			selectedCar: null,
			fullcalendarOptions: {
				plugins: [ dayGridPlugin, timeGridPlugin, interactionPlugin ],
				defaultDate: '2017-02-01',
				header: {
					left: 'prev,next today',
					center: 'title',
					right: 'month,agendaWeek,agendaDay'
				}
			},
			events: [
				{
					"id": 1,
					"title": "All Day Event",
					"start": "2017-02-01"
				},
				{
					"id": 2,
					"title": "Long Event",
					"start": "2017-02-07",
					"end": "2017-02-10"
				},
				{
					"id": 3,
					"title": "Repeating Event",
					"start": "2017-02-09T16:00:00"
				},
				{
					"id": 4,
					"title": "Repeating Event",
					"start": "2017-02-16T16:00:00"
				},
				{
					"id": 5,
					"title": "Conference",
					"start": "2017-02-11",
					"end": "2017-02-13"
				},
				{
					"id": 6,
					"title": "Meeting",
					"start": "2017-02-12T10:30:00",
					"end": "2017-02-12T12:30:00"
				},
				{
					"id": 7,
					"title": "Lunch",
					"start": "2017-02-12T12:00:00"
				},
				{
					"id": 8,
					"title": "Meeting",
					"start": "2017-02-12T14:30:00"
				},
				{
					"id": 9,
					"title": "Happy Hour",
					"start": "2017-02-12T17:30:00"
				},
				{
					"id": 10,
					"title": "Dinner",
					"start": "2017-02-12T20:00:00"
				},
				{
					"id": 11,
					"title": "Birthday Party",
					"start": "2017-02-13T07:00:00"
				},
				{
					"id": 12,
					"title": "Click for Google",
					"url": "http://google.com/",
					"start": "2017-02-28"
				}
			],
			chartData: {
				labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
				datasets: [{
					label: 'Sales',
					data: [12, 19, 3, 5, 2, 3, 9],
					borderColor: [
						'#7E57C2',
					],
					borderWidth: 3,
					borderDash: [5, 5],
					fill: false,
					pointRadius: 3
				}, {
					label: 'Income',
					data: [1, 2, 5, 3, 12, 7, 15],
					backgroundColor: [
						'rgba(187,222,251,0.2)',
					],
					borderColor: [
						'#42A5F5',
					],
					borderWidth: 3,
					fill: true
				},
					{
						label: 'Expenses',
						data: [7, 12, 15, 5, 3, 13, 21],
						borderColor: [
							'#FFB300',
						],
						borderWidth: 3,
						fill: false,
						pointRadius: [4, 6, 4, 12, 8, 0, 4]
					},
					{
						label: 'New Users',
						data: [3, 7, 2, 17, 15, 13, 19],
						borderColor: [
							'#66BB6A',
						],
						borderWidth: 3,
						fill: false
					}]
			},
			chartOptions: {
				responsive: true,
				hover: {
					mode: 'index'
				},
				scales: {
					xAxes: [{
						display: true,
						scaleLabel: {
							display: true,
							labelString: 'Month'
						}
					}],
					yAxes: [{
						display: true,
						scaleLabel: {
							display: true,
							labelString: 'Value'
						}
					}]
				}
			},
			menuItems: [
				{
					label: 'Save', icon: 'pi pi-fw pi-check'
				},
				{
					label: 'Update', icon: 'pi pi-fw pi-refresh'
				},
				{
					label: 'Delete', icon: 'pi pi-fw pi-trash'
				}
			]
		};
		this.onTaskChange = this.onTaskChange.bind(this);
		this.carservice = new CarService();
	}

	onTaskChange(e) {
		let selectedTasks = [...this.state.tasks];
		if (e.checked)
			selectedTasks.push(e.value);
		else
			selectedTasks.splice(selectedTasks.indexOf(e.value), 1);

		this.setState({tasks: selectedTasks});
	}

	componentDidMount() {
		this.carservice.getCarsMedium().then(data => this.setState({cars: data}));
	}

	actionTemplate(){
		return <div className="p-grid">
			<div className="p-col-6">
				<Button type="button" icon="pi pi-search" className="p-button-info" style={{marginRight: '.5em'}}></Button>
			</div>
			<div className="p-col-6">
				<Button type="button" icon="pi pi-times" className="p-button-danger"></Button>
			</div>
		</div>;
	}

	logoTemplate(rowData, column){
		var src = "assets/demo/images/car/" + rowData.brand + ".png";
		return <img src={src} alt={rowData.brand} width="50px" />;
	}

	render() {
		return <div className="layout-dashboard">
			<h1>Mservice</h1>
			<p>¡Unete a esta comunidad para conocer o buscar servicios!</p>

			<div className="p-grid">
				
				<div className="p-col-12 p-lg-6 p-xl-3">
					
				</div>
				<div className="p-col-12 p-lg-6 p-xl-3">
				
				
				</div>
				<div className="p-col-12 p-lg-6 p-xl-3">
				
				
				</div>
				
				
				    <div className="p-grid">
                        <div className="p-col-12 p-lg-6">
                            <div className="card card-w-title">
                           

                                <div className="p-grid">
                                    
                            
                                    
                            
                                    <div className="p-col-12">Registrarse aquí</div>
                                    <div className="p-col-12">
                                        <Button label="Registrar"/>
                                    </div>
									<div className="p-col-12">Inicie sesión aquí</div>
                                    <div className="p-col-12 ">
                                        <Button label="Iniciar Sesión"/>
                                    </div>
									<div className="p-col-12">Busqueda flash</div>
                                    <div className="p-col-12 ">
                                        <Button label="Busqueda rápida"/>
                                    </div>
									

                                   

                                    

                                    
                                    
                                </div>
                            </div>
                        </div>
                       
                    </div>
                

				
				<div className="p-col-12 p-md-12 p-lg-4">
					<div className="card card-w-title team">
						<h1>Team</h1>
						<ul>
							<li>
								<img src="assets/layout/images/avatar.png" alt="babylon-layout"/>
								<div className="team-box">
									<span className="team-member">Kevin Blum</span>
									</div>
								<button className="p-link">
									<i className="pi pi-comment"/>
								</button>
								<button className="p-link">
									<i className="pi pi-share-alt"/>
								</button>
							</li>
							<li>
								<img src="assets/layout/images/avatar-john.png" alt="babylon-layout"/>
								<div className="team-box">
									<span className="team-member">Nicolle Toala</span>
									</div>
								<button className="p-link">
									<i className="pi pi-comment"/>
								</button>
								<button className="p-link">
									<i className="pi pi-share-alt"/>
								</button>
							</li>
							<li>
								<img src="assets/layout/images/avatar-julia.png" alt="babylon-layout"/>
								<div className="team-box">
									<span className="team-member">Darwin Borja</span>
								</div>
								<button className="p-link">
									<i className="pi pi-comment"/>
								</button>
								<button className="p-link">
									<i className="pi pi-share-alt"/>
								</button>
							</li>
							<li>
								<img src="assets/layout/images/avatar-kevin.png" alt="babylon-layout"/>
								<div className="team-box">
									<span className="team-member">Marcelo</span>
								</div>
								<button className="p-link">
									<i className="pi pi-comment"/>
								</button>
								<button className="p-link">
									<i className="pi pi-share-alt"/>
								</button>
							</li>
						</ul>
					</div>
				</div>

				

				

				
			</div>
		</div>
	}
}
