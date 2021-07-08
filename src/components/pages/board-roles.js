import React from 'react';
import {Link} from 'react-router-dom';

export default function(){
    return(
    <div className="governing-board-full-wrapper">
        <div className="governing-board-heading-wrapper">
            <h1>Board Roles and Responsibilities</h1>
        </div>
        <div className="governing-line"></div>

        <div className="governing-board-buttons">
                    
                    <div className="button">
                        <Link to="/board-agenda">Board Agenda</Link>
                    </div>

                    <div className="button">
                        <Link to="/board-roles">Board Roles & Responsibilities</Link>
                    </div>

                    <div className="button">
                        <Link to="/board-bylaws">Board Bylaws</Link>
                    </div>


                </div>

        <div className="board-training">
            <b>Board Governance Training</b><br/><br/>
            the Training program is broken into eight easy-to-view sessions, each lasting 30-45 minutes <br/><br/>

            <b>Train at your convenience. The Series includes the following sessions:</b>
            <ul>
                <li><a href="https://youtu.be/bGFVvnNHAQg" target="_blank">Part One: Board Governance Overview</a></li>

                <li><a href="https://youtu.be/w1aVisfpubY" target="_blank">Part Two: Board Governance Overview</a></li>

                <li><a href="https://youtu.be/ItPkALQ4ofU" target="_blank">Topic targeted specifically for Head Start/Early Head Start organizations</a></li>

                <li><a href="https://youtu.be/drfZ6IABNPI" target="_blank">Risk Management</a></li>

                <li><a href="https://youtu.be/Pgx5Cafhqms" target="_blank">Advice for choosing an auditor</a></li>

                <li><a href="https://youtu.be/XCFnuTPD-kU" target="_blank">Roles and Responsibilities of an Audit Committee</a></li>

                <li><a href="https://youtu.be/mGDifWOe8HQ" target="_blank">Reviewing financial statements</a></li>

                <li><a href="https://youtu.be/qeWIdnFiOwQ" target="_blank">Reviewing the Form 990</a></li>

                
            </ul>



        </div>
    </div>
    );
}