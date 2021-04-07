import React from 'react';
import {Link} from 'react-router-dom';

export default function(){
    return(
        <div className="full-quicklinks-wrapper">
            <div className="quicklinks-cards-wrapper">
                
                <Link to="/contacts">Contacts</Link>

                <Link to="/reports">Accountability Reports</Link>

                <Link to="/governing">Governing Board</Link>

                <Link to="/resouces">Resources</Link>

                <Link to="/employees-resources">Employee Resources and Newsletter</Link>

                <Link to="/surveys">Survey</Link>

            </div>
        </div>
    );
}