import React, { Component } from 'react';
import Growth from "../../../static/assets/growth.jpg";
import {Link} from 'react-router-dom';

export default class About extends Component {
    
  render(){
    return(
        <div className="content-page-wrapper">
            <div className="background-about"
                style={{
                    background: "url("+ Growth + ") no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                }} 
                 
            >
                <div className="overlay-about">
                <h1>About</h1>
                <div className="about-text">
                    <p>The Community Action Partnership is a national, nonprofit organization that works to strengthen, promote, represent and serve its network of member Community Action Agencies (CAAs) to assure that the issues of poverty are effectively presented and addressed. Action for Eastern Montana is committed to strengthening and enhancing the quality of life within the communities we serve by promoting education, advocacy and dignity for achieving independence. <br/><br/>In accordance with Federal regulations, Action for Eastern Montana provides copies of our
                    Tax Form 990, conflicts of interest policy, governing documents and
                    financial statements to the public upon request.</p>
                </div>
                


                <div className="about-button-wrapper">
                    <div className="button">
                        <Link to="/ceo-about">CEO's Message</Link>
                    </div>

                    <div className="button">
                        <Link to="/mission-about">Our Mission</Link>
                    </div>
                    
                    
                </div>

                
            </div>
            </div>
                
        </div>
    );
  }
}