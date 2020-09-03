import React, { Component } from 'react';
import {CountryService} from '../service/CountryService';
import {InputText} from 'primereact/inputtext';
import {InputTextarea} from 'primereact/inputtextarea';
import {AutoComplete} from 'primereact/autocomplete';
import {MultiSelect} from 'primereact/multiselect';
import {Calendar} from 'primereact/calendar';
import {Chips} from 'primereact/chips';
import {Checkbox} from 'primereact/checkbox';
import {RadioButton} from 'primereact/radiobutton';
import {InputSwitch} from 'primereact/inputswitch';
import {Dropdown} from 'primereact/dropdown';
import {Password} from 'primereact/password';
import {Spinner} from 'primereact/spinner';
import {Slider} from 'primereact/components/slider/Slider';
import {ListBox} from 'primereact/listbox';
import {Rating} from 'primereact/rating';
import {ColorPicker} from 'primereact/colorpicker';
import {Editor} from 'primereact/editor';
import {ToggleButton} from 'primereact/togglebutton';
import {SelectButton} from 'primereact/selectbutton';
import {Button} from 'primereact/button';
import {SplitButton} from 'primereact/splitbutton';
import {GMap} from 'primereact/gmap';



export class FormsDemo extends Component {

    constructor() {
        super();
        this.state = {
            countriesData: [],
            cars: [],
            selectedType: null,
            chipsValue: [],
            date1: null,
            date2: null,
            date3: null,
            date4: null,
            date5: null,
            date6: null,
            date7: null,
            checkboxValue: [],
            radioValue: null,
            inputSwitchValue: false,
            dropdownCity: null,
            spinnerValue: null,
            sliderValue: [20,80],
            listBoxCity: null,
            ratingValue: null,
            colorPickerValue: null,
            inputGroupValue: null,
            carOptions: [
                {label: 'Audi', value: 'Audi'},
                {label: 'BMW', value: 'BMW'},
                {label: 'Fiat', value: 'Fiat'},
                {label: 'Honda', value: 'Honda'},
                {label: 'Jaguar', value: 'Jaguar'},
                {label: 'Mercedes', value: 'Mercedes'},
                {label: 'Renault', value: 'Renault'},
                {label: 'VW', value: 'VW'},
                {label: 'Volvo', value: 'Volvo'}
            ],
            cities: [
                {label: 'Select City', value: null},
                {label: 'New York', value: 'New York'},
                {label: 'Rome', value: 'Rome'},
                {label: 'London', value: 'London'},
                {label: 'Istanbul', value: 'Istanbul'},
                {label: 'Paris', value: 'Paris'}
            ],
            listBoxCities: [
                {label: 'Madrid', value: 'Madrid'},
                {label: 'Geneva', value: 'Geneva'},
                {label: 'Los Angeles', value: 'Los Angeles'},
                {label: 'Monaco', value: 'Monaco'},
                {label: 'Berlin', value: 'Berlin'}
            ],
            types: [
                {label: 'Apartment', value: 'Apartment'},
                {label: 'House', value: 'House'},
                {label: 'Studio', value: 'Studio'}
            ],
            splitButtonItems: [
                {label: 'Update', icon: 'pi pi-refresh'},
                {label: 'Delete', icon: 'pi pi-times'},
                {label: 'Home', icon: 'pi pi-home', url: 'http://www.primefaces.org/primereact'}
            ]
        };

        this.countryService = new CountryService();
        this.onCheckboxChange = this.onCheckboxChange.bind(this);
        this.filterCountry = this.filterCountry.bind(this);
        this.filterBrands = this.filterBrands.bind(this);
        this.autoCompleteItemTemplate = this.autoCompleteItemTemplate.bind(this);
    }

    componentDidMount(){
        this.setState({countriesData: this.countryService.getCountries(this)})
        this.brands = ['Audi', 'BMW', 'Fiat', 'Ford', 'Honda', 'Jaguar', 'Mercedes', 'Renault', 'Volvo'];
    }
    

    filterCountry(event) {
        let results = this.state.countriesData.filter((country) => {
            return country.name.toLowerCase().startsWith(event.query.toLowerCase());
        });
        this.setState({ filteredCountries: results });
    }

    filterBrands(event) {
        setTimeout(() => {
            let results;

            if (event.query.length === 0) {
                results = [...this.brands];
            }
            else {
                results = this.brands.filter((brand) => {
                    return brand.toLowerCase().startsWith(event.query.toLowerCase());
                });
            }

            this.setState({ filteredBrands: results });
        }, 250);
    }

    autoCompleteItemTemplate(brand) {
        if (!brand) {
            return;
        }

        return (
                <div className="p-clearfix">
                    <img alt={brand} src={`assets/demo/images/car/${brand}.png`} style={{ width: '32px', display: 'inline-block', margin: '5px 0 2px 5px' }} />
                    <div style={{ fontSize: '18px', float: 'right', margin: '10px 10px 0 0' }}>{brand}</div>
                </div>
        );
    }

    onCheckboxChange(event){
        let selected = [...this.state.checkboxValue];
        if (event.checked)
            selected.push(event.value);
        else
            selected.splice(selected.indexOf(event.value), 1);

        this.setState({checkboxValue: selected});
    }

    render() {
        const options = {
            center: {lat: -2.133755, lng: -79.9205725},
            zoom: 12
        };      
        return (
            
            <div className="p-grid p-fluid">
                <div className="p-col-12 p-lg-6">
                    <div className="card card-w-title">
                    <GMap options={options} style={{width: '100%', minHeight: '320px'}} />
            
                        <h1>Registro</h1>
                        <div className="p-grid">
                            <div className="p-col-12 p-md-4">
                                <InputText placeholder="Nombre Compuesto"/>
                            </div>
                            <div className="p-col-12 p-md-4">
                                <InputText placeholder="Cédula"/>
                            </div>
                            <div className="p-col-12 p-md-4">
                                <InputText placeholder="Oficio"/>
                            </div>
                            <div className="p-col-12 p-md-4">
                                <InputText placeholder="Ubicación" />
                            </div>
                         
                        </div>
                    </div>

                    <div className="card card-w-title">
                        <h1>Datos Adicionales</h1>
                        <InputTextarea rows={3} cols={30} placeholder="Your Message" autoResize={true} />
                    </div>

                 
                   
                   
                  

                </div>

              

                

                <div className="p-col-12 p-nogutter">
                    <div className="p-grid">
                        <div className="p-col-12 p-lg-6">
                            <div className="card card-w-title">
                                <h1>Completar Registro</h1>

                                <div className="p-grid">
                                    
                            
                                    
                            
                                    <div className="p-col-12">Registrar</div>
                                    <div className="p-col-12">
                                        <Button label="Registrar"/>
                                    </div>

                                   

                                    

                                    
                                    
                                </div>
                            </div>
                        </div>
                       
                    </div>
                </div>
            </div>
        );
    }
}