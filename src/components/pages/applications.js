import React from 'react';
import {Link} from 'react-router-dom';

import LieapApp from "../../../static/docs/LIEAP-application-2020.pdf";
import EnergyShare from "../../../static/docs/Energy-Share-1.pdf";


export default function(){
    return(
    <div className="full-quicklinks-wrapper">
        <div className="quicklinks-cards-wrapper">
            
            <a href={EnergyShare} target="_blank">Energy Share Application</a> 

            <a href={LieapApp} target="_blank">LIEAP Application</a>

            

        </div>
    </div>
    );
}