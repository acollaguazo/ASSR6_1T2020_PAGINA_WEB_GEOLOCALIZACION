import React, { Component } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
// hooks react redux
import { useDispatch, useSelector } from "react-redux";
import { fecthPerson } from "../redux/personDuck";
import { connect } from "react-redux";
import { Message } from "primereact/message";
import { Dashboard } from "../components/Dashboard";
import { Redirect } from "react-router";
import Search from "../components/common/Search";
import classNames from "classnames";
import { Dropdown } from "primereact/dropdown";

export class Person extends Component {

  statuses = [
    { label: "Activo", value: "ACT" },
    { label: "Inactivo", value: "INA" },
  ];
 
  types = [
    { label: "Natural", value: "NAT" },
    { label: "Juridica", value: "JUR" },
  ];

  roles = [
    { label: "Cliente", value: "Cliente" },
    { label: "Proveedor", value: "Proveedor" }
  ];

  componentDidMount() {
    this.props.fecthPerson();
    console.dir(this.props.person); 
  }

	statusBodyTemplate = (rowData) => {
    var statusRes = this.statuses.filter(function (status) {
      return status.value === rowData.estado;
    });
    return (
      <span
        className={classNames("customer-badge", "status-" + rowData.estado)}
      >
        {statusRes[0].label}
      </span>
    );
  };
  typeBodyTemplate = (rowData) => {
    var typeRes = this.types.filter(function (type) {
      return type.value === rowData.tipoPersona;
    });
     if(typeRes==='NAT')
    return (
      <i className="pi pi-user"> {typeRes[0].label}</i>)
    else
    return (
      <i className="pi pi-users"> {typeRes[0].label}</i>
    );
    
  };
  
 rolesBodyTemplate = (rowData) => {
   
  
  };

  render() {
    const cols = [
      {
        field: "identificacion",
        header: "Identificación",
        filterPlaceholder: "Buscar por identificación",
      },
      {
        field: "nombres",
        header: "Razón Social",
        filterPlaceholder: "Buscar por razón social",
      },
      {
        field: "estado",
        header: "Estado",
        filterPlaceholder: "Todos",
        bodyTemplate: this.statusBodyTemplate,
        filterOptions: this.statuses,
        filterField:'estado',
        isDropdownFilter:true
      },
      {
        field: "TipoPersona",
        header: "Tipo",
        filterPlaceholder: "Todos",
        bodyTemplate: this.typeBodyTemplate,
        filterOptions: this.types,
        filterField:'tipoPersona',
        isDropdownFilter:true
      },
      {
        field: "arrRoles",
        header: "Roles",
        filterPlaceholder: "Todos",
        bodyTemplate: this.rolesBodyTemplate,
        filterOptions: this.roles,
        filterField:'arrRoles',
        isMultiFilter:true
      }
    ];
    return (
      <Search name="Clientes" list={this.props.person.array} columns={cols} />
    );
  }
}

const mapStateToProps = (state) => {
  return { person: state.person };
};

export default connect(mapStateToProps, { fecthPerson })(Person);
