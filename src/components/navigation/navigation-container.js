import React, { Component } from 'react';
import {NavLink} from "react-router-dom";
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


import NavLogo from "../../../static/assets/fulltransparentlogo.png";



export default class NavigationComponent extends Component {
  constructor(props){
    super(props);

  
  }

    
  

  render(){
    return (
          <div className="nav-wrapper">
            <div className="navbar-wrapper">
              <div className="upper-wrapper">
                <div className="navbar-logo">

                  <Link to="/" ><img src={NavLogo} alt="Community Action Partnership graphic"></img></Link>
 
                </div>
              </div>
              
              <div className="lower-wrapper">
                <div className="left-side-nav">
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
                  <NavLink to="services" activeClassName="nav-link-active">Our Services</NavLink>
                </div>
                
                <div className="nav-link-wrapper">
                  <NavLink to="/programs" activeClassName="nav-link-active">All Programs</NavLink>
                </div>


                <div className="nav-link-wrapper">
                  <NavLink to="/applications" activeClassName="nav-link-active">Applications</NavLink>
                </div>

              </div>

                <div className="right-side-nav">
                  <div className="nav-link-wrapper">
                    <NavLink to="/employee-only" activeClassName="nav-link-active"><FontAwesomeIcon icon="sign-in-alt" />   Employees</NavLink>
                  </div>
                  
                </div>
                
              </div>

              
            </div>
            
          </div>

    );
  }
}