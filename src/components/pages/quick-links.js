import React from 'react';
import {Link} from 'react-router-dom';

export default function(){
    return(
        <div className="full-quicklinks-wrapper">
            <div className="quicklinks-cards-wrapper">
                
                <Link to="/contacts">Contacts</Link>

                <Link to="/reports">Accountability Reports</Link>

                <Link to="/governing-board">Governing Board</Link>

                <Link to="/resources">Resources</Link>

                <Link to="/employee-resources">Employee Resources and Newsletter</Link>

                <Link to="/employment">Employment Opportunities</Link>

                <Link to="/surveys">Surveys</Link>

            </div>
        </div>
    );
}