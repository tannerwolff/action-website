import React, { Component } from 'react';
import {
  BrowserRouter as Router, 
  Switch,
  Route
} from "react-router-dom";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faTrash, faPhoneAlt, faFax, faSignInAlt } from "@fortawesome/free-solid-svg-icons";

import NavigationComponent from "./navigation/navigation-container";
import Home from "./pages/home";
import About from "./pages/about";
import Applications from "./pages/applications";
import QuickLinks from "./pages/quick-links";
import Programs from "./pages/programs";
import ceoAbout from "./pages/ceo-about";
import missionAbout from "./pages/mission-about";
import Services from "./pages/services";
import Contacts from "./pages/contacts";
import Reports from "./pages/reports";
import Employment from "./pages/employment";
import GoverningBoard from "./pages/governing-board";
import BoardAgenda from "./pages/board-agenda";
import BoardRoles from "./pages/board-roles";
import BoardBylaws from "./pages/board-bylaws";
import Resources from "./pages/resources";
import EmployeeResources from "./pages/employee-resources";
import Surveys from "./pages/surveys";
import AreaOnAging from "./pages/area-i-agency";
import EmploymentTraining from "./pages/employment-training";
import EnergyPrograms from "./pages/energy-programs";
import HeadStart from "./pages/head-start";
import HousingProgram from "./pages/housing-program";
import seniorCompanions from './pages/senior-companions';
import Employee from './pages/employee-only';
import Login from './pages/login';
import NoMatch from './pages/no-match';




library.add(faMapMarkerAlt, faTrash, faPhoneAlt, faFax, faSignInAlt)

export default class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      status: "NOT_LOGGED_IN"
    }
  }
  
  render() {
    return (
      <div className='app'>
        

        <Router>
          <div className="all-content-wrapper">
          <NavigationComponent />

          <Switch>

            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/employee-only" component={Employee} />
            <Route path="/quick-links" component={QuickLinks} />
            <Route path="/applications" component={Applications} />
            <Route path="/programs" component={Programs} />
            <Route path="/ceo-about" component={ceoAbout} />
            <Route path="/mission-about" component={missionAbout} />
            <Route path="/services" component={Services} />
            <Route path="/contacts" component={Contacts} />
            <Route path="/reports" component={Reports} />
            <Route path="/employment" component={Employment} />
            <Route path="/governing-board" component={GoverningBoard} />
            <Route path="/board-agenda" component={BoardAgenda} />
            <Route path="/board-roles" component={BoardRoles} />
            <Route path="/board-bylaws" component={BoardBylaws} />
            <Route path="/resources" component={Resources} />
            <Route path="/employee-resources" component={EmployeeResources} />
            <Route path="/surveys" component={Surveys} />
            <Route path="/agency-on-aging" component={AreaOnAging} />
            <Route path="/employment-and-training" component={EmploymentTraining} />
            <Route path="/energy-programs" component={EnergyPrograms} />
            <Route path="/head-start" component={HeadStart} />
            <Route path="/housing-programs" component={HousingProgram} />
            <Route path="/senior-companions" component={seniorCompanions} />
            <Route path="/login" component={Login} />
            <Route component={NoMatch} />


          </Switch>
          </div>
        </Router>

        <div className="footer-wrapper">
              <div className="upper-footer-wrapper">
                <div className="footer-phone">
                  <FontAwesomeIcon icon="phone-alt" /> (406) 377-3564
                </div>
                <div className="footer-fax">
                  <FontAwesomeIcon icon="fax" /> (406) 377-3570
                </div>

              </div>

              <div className="copyright">
                ©2021 by Action for Eastern Montana | Contractor: Tanner Wolff
              </div>
            </div>

      </div>
    );
  }
}