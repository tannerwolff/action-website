import React from 'react';
import {Link} from 'react-router-dom';


export default function(){
    return(
    <div className="full-quicklinks-wrapper">
        <div className="quicklinks-cards-wrapper">
            
            <Link to="/agency-on-aging">Area I Agency on Aging</Link>

            <Link to="/employment-and-training">Employment and training</Link>

            <Link to="/energy-programs">Energy Programs</Link>

            <Link to="/head-start">Head Start</Link>

            <Link to="/housing-programs">Housing Programs</Link>

            <Link to="/senior-companions">Senior Companions and Veteran Choose Home Program</Link>

        </div>
    </div>
    );
}