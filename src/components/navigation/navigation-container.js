import React, { Component } from 'react';
import {NavLink} from "react-router-dom";
import {Link} from 'react-router-dom';
import NavLogo from "../../../static/assets/action-logo.png";

export default class NavigationComponent extends Component {
  constructor(){
    super();

  }
  

  render(){
    return (
          <div className="nav-wrapper">
            <div className="left-side-nav-wrapper">
              <div className="navbar-logo">
                <Link to="/" ><img src={NavLogo} alt="Community Action Partnership graphic"></img></Link>
              </div>
            </div>
            
            <div className="right-side-nav-wrapper">
              <div className="nav-link-wrapper">
                <NavLink exact to="/" activeClassName="nav-link-active">Home</NavLink>
              </div>

              <div className="nav-link-wrapper">
                <NavLink to="/about" activeClassName="nav-link-active">About</NavLink>
              </div>

              <div className="nav-link-wrapper">
                <NavLink to="/quick-links" activeClassName="nav-link-active">Quick Links</NavLink>
              </div>

              <div className="nav-link-wrapper">
                <NavLink to="/services" activeClassName="nav-link-active">Our Services</NavLink>
              </div>
                

                

                

                
            </div>
            
          </div>

    );
  }
}