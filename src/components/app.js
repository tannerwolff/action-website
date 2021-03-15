import React, { Component } from 'react';
import {
  BrowserRouter as Router, 
  Switch,
  Route
} from "react-router-dom";

import NavigationComponent from "./navigation/navigation-container";
import Home from "./pages/home";
import About from "./pages/about";
import Services from "./pages/services";
import QuickLinks from "./pages/quick-links";

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        

        <Router>
          <div>
          <NavigationComponent />

          <Switch>

            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/quick-links" component={QuickLinks} />
            <Route path="/services" component={Services} />

          </Switch>
          </div>
        </Router>

      </div>
    );
  }
}