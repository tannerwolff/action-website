import React from 'react';
import {Link} from 'react-router-dom';
import Agenda from '../../../static/docs/agenda-june-2021.pdf'


export default function(){
    return(
        <div className="governing-board-full-wrapper">
        <div className="governing-header">
            <h1>Governing Board Agenda</h1>
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

                <div className="board-minutes">
                    **If you would like copies of Action for Eastern Montana’s Governing Board meeting minutes, please call 406-377-3564 to request.
                </div>

                <div className="board-agenda-full-wrapper">
                    <div className="full-agenda-header">

                    
                    <h2>Action for Eastern Montana</h2>
                    <div className="governing-line"></div>

                    <b>June 25th, 2021 Finance/Audit Committee and Board Meeting</b><br/>
                    <b>Location:</b> Action for Eastern Montana's Glendive Office In the Warehouse (2030 N. Merrill Ave) <div className="red">This meeting will be in person.</div>
                    Phone# (866 200-5786) <br/>Conference ID: 2924667
                    <br/><br/>
                    <br/>
                    </div>

                    <div className="board-agenda-body">
                        <b>9:00</b>AM Financial/ Audit Committee Meeting...............Finance/Audit Committee Members<br/>
                        *Financial Reports<br/><br/>

                        <b>10:00</b>AM Call to Order, Determination of Quorum...............Janet Wolff, Board Chair<br/>
                        *Financial Reports<br/><br/>

                        <b>10:05</b>AM Department Training: HeadStart<br/>
                        <ul><li>AM approval of minutes</li></ul><br/>

                        <h4><b><u>Public Comments on the agenda items.</u></b></h4><br/>

                        <ul><li>Fiscal Director...............Lea Ringen, CFO<ul><li>*Discussion and vote on the Finance/Audit Committee's Approved agenda items</li></ul></li></ul>

                        <ol>
                            <li>Head Start Director...............Shawna Sargent, Head Start Director<ol><li>*Discussion and vote regarding a report the Shawna must hand out.</li></ol></li>

                            <li>Energy Programs Director...............Kevin Thompson, Energy Programs Director<ol><li>*Discussion and votes regarding contracts.</li></ol></li>

                            <li>AAA Director...............Heather Handran, AAA Director<ol><li>*Discussion and votes regarding vehicle purchase.</li></ol></li>

                            <li>CEO Report...............Clint Wynne, CEO<ol><li>Personnel Manual</li><li>Recent Meeting</li></ol></li>
                        </ol>

                        <h4><b><u>Public Comment regarding future items to discuss.</u></b></h4><br/>

                        <ul>
                            <li>Executive Session</li>
                            <li>Adjournment</li>
                        </ul>

                        <div className="highlighted">
                            *items require a vote.
                        </div>

                        Please post the extra agenda at your local courthouse or another frequently visited public site. 
                    </div>
                </div>
                <div className="agenda-pdf">
                    <a href={Agenda} target="_blank">Board Agenda PDF</a>
                </div>
                
        </div>
    </div>
    );
}