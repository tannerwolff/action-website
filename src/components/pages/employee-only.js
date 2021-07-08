import React, { Component } from "react";
import annualLeave from "../../../static/docs/annual-leave-payout.pdf";
import AgencyAcronyms from "../../../static/docs/agency-acronym.pdf";
import AEMTLeaveApp from "../../../static/docs/aemt-leave-app.pdf";
import leaveWithoutPay from "../../../static/docs/leave-without-pay.pdf";

const REACT_APP_PASSWORD = process.env.REACT_APP_PASSWORD


export default class Login extends Component {
  constructor(props) {
    super(props);
    this.passWord = this.passWord.bind(this)

  }

  passWord() {
    var testV = 1;
    var pass1 = prompt('Please Enter Your Password');
    while (testV < 3) {
    if (!pass1)
    history.go(-1);
    if (pass1.toLowerCase() == REACT_APP_PASSWORD) {
    break;
    }
    testV+=1;
    var pass1 =
    prompt('Access Denied - Password Incorrect, Please Try Again.','');
    }
    if (pass1.toLowerCase()!="password" & testV ==3)
    history.go(-1);
    
  }
  
  


  render() {
    return (
      <div className="full-reports-page-wrapper">
        <h1>Employee Only Forms</h1>
        <div className="governing-line"></div>

            <div className="single-report">
              <a href={annualLeave} target="_blank">Annual Leave Payout Form</a>
            </div>
            <div className="single-report">
              <a href={AgencyAcronyms} target="_blank">Agency Acronyms</a>
            </div>
            <div className="single-report">
              <a href={AEMTLeaveApp} target="_blank">AEMT Leave Application</a>
            </div>
            <div className="single-report">
              <a href={leaveWithoutPay} target="_blank">Leave without Pay Request</a>
            </div>

            <div className="disclosure">
              *For AEMT Leave Application, please print with pink paper.<br/>
              *For Leave without Pay Request, Please print with Purple paper. 
            </div>

            <form>
              <input type="hidden"  onClick={this.passWord()}/>
            </form>
        </div>
      );
  }
}