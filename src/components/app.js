import React, { Component } from 'react';
import {
  BrowserRouter as Router, 
  Switch,
  Route
} from "react-router-dom";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faTrash, faPhoneAlt, faFax } from "@fortawesome/free-solid-svg-icons";

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

library.add(faMapMarkerAlt, faTrash, faPhoneAlt, faFax)

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        

        <Router>
          <div className="all-content-wrapper">
          <NavigationComponent />

          <Switch>

            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/quick-links" component={QuickLinks} />
            <Route path="/applications" component={Applications} />
            <Route path="/programs" component={Programs} />
            <Route path="/ceo-about" component={ceoAbout} />
            <Route path="/mission-about" component={missionAbout} />
            <Route path="/services" component={Services} />
            <Route path="/contacts" component={Contacts} />
            <Route path="/reports" component={Reports} />

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
                ©2021 by Action for Eastern Montana | Independent Contractor: Tanner Wolff
              </div>
            </div>

      </div>
    );
  }
}