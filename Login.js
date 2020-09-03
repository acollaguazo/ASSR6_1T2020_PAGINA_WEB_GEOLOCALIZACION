import React, { Component } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
// hooks react redux
import { useDispatch, useSelector } from "react-redux";
import { logInAction, logOutAction } from "../redux/userDuck";
import { connect } from "react-redux";
import { Message } from "primereact/message";
import { Dashboard } from "../components/Dashboard";
import { Redirect } from "react-router";

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "" };
  }

  render() {
    if (this.props.user.loggedIn) {
      return <Redirect to="/" />;
    }

    console.log("ENTRO EN render");
    console.dir(this.props);
    return (
	  <div className="login-body">
		console.log(this.props.user.message.trim()!=="")
	
    
        <div className="login-panel"></div>
        <div className="login-content">
          <img src="assets/layout/images/logo-black.png" alt="babylon-layout" />

          <h1>
            <span>SIGN IN</span> Mservices
          </h1>
          <p>Welcome, please use the form to sign-in.</p>
		  {this.props.user.message.trim()!=="" &&
		  <Message severity="error" text={this.props.user.message}></Message>
		  }
          <div className="login-input-wrapper" style={{marginTop:'20px'}} >
            <InputText required={true}  validationMessage="Requerido" 
              value={this.state.username}
              placeholder="Username"
              onChange={(e) => this.setState({ username: e.target.value })}
            />
          </div>

          <div className="login-input-wrapper">
            <InputText
              value={this.state.password}
              placeholder="Password"
              type="password"
              required={true}
              onChange={(e) => this.setState({ password: e.target.value })}
            />
          </div>

          <Button
            label="Sign In"
            onClick={() => {
              this.props.logInAction(this.state.username, this.state.password);
            }}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log("ENTRO EN mapStateToProps");
  console.dir(state);
  return { user: state.login };
};

export default connect(mapStateToProps, { logInAction, logOutAction })(Login);
