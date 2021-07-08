import React, { Component } from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.passWord = this.passWord.bind(this)

  }

  passWord() {
    var testV = 1;
    var pass1 = prompt('Please Enter Your Password',' ');
    while (testV < 3) {
    if (!pass1)
    history.go(-1);
    if (pass1.toLowerCase() == "letmein") {
    alert('You Got it Right!');
    window.open('employee-only');
    break;
    }
    testV+=1;
    var pass1 =
    prompt('Access Denied - Password Incorrect, Please Try Again.','Password');
    }
    if (pass1.toLowerCase()!="password" & testV ==3)
    history.go(-1);
    return " ";
    }
  


  render() {
    return (
        <div className="login-page">
            <h2>Log In</h2>
            <form autoComplete="off" onSubmit={this.handleLoginSubmit}>
                <div className="form-group">
                    <input
                    type="password"
                    autoComplete="new-password"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="Password"
                    value={this.passwordInput}
                    onChange={this.handlePasswordChange}
                    />
                </div>
                <form>
                    <input type="button" value="Enter Protected Area" onClick={this.passWord()}/>
                </form>
          </form>
        </div>
      );
  }
}