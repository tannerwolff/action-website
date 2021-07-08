import React from 'react';
import {Link} from 'react-router-dom';
import SeniorCompanions from "../../../static/assets/senior-companions.jpg";


export default function(){
    return(
    <div className="governing-board-full-wrapper">
        <div className="full-senior-companions-page">
            <h1>SENIOR COMPANIONS AND VETERAN CHOOSE HOME PROGRAM</h1>
            <div className="governing-line"></div>

            <h3>Mission Statement:</h3>

            <img src={SeniorCompanions} alt="Volunteer interacting with Senior"></img>

            <p><b> To provide an opportunity for qualified, able-bodied seniors to make a meaningful contribution to their communities be enabling people who need support to maintain their greatest level of independence.</b></p>

            <p>
                Senior Companions are volunteers who provide limited help to other at-risk seniors to help keep them independent.<br/><br/>

                Senior Companions must be 55 years of afe and meet the income guide lines for the Federal Grant.<br/><br/>

                The income level for 2021 for a family of one is $2,146.67 per month, for a family of two, it is $2,903.33. A volunteer's income can be adjusted for medical expenses p to $1,073.34 to help bring them to the necessary income level. <br/><br/>

                They must pass three background checks , a National Sex Offender, a Montana State Felony Background Check and a FBI fingerprint check and complete 20 hours of orientation training before they can work with clients.<br/><br/>

                Senior Companions recieve a stipend of $3.00 for every hour they volunteer along with mileage reimbursement at the federal rate and a meal per diem to encourage them and the clients to recieve healthy meals.<br/><br/>

                The stipend is not considered income and will not affect the volunteer from recieving any other federal, state, or local services or programs.<br/><br/>

                Senior Companions set their own hours they wish to volunteer and how many clients they will help.<br/><br/>

                Senior Companions are provided with liability insurance to protect them and the clients from lawsuits.<br/><br/>


                They are supervised by a local volunteer station.<br/><br/>

                <b>Who can have the help of a Senior Companion?</b><br/>

                <div className="tab-section-one">
                    Anyone over the age of 60 can have a companion provided if there is one available.<br/><br/>

                    Anyone 21 to 59 can have a companion if there is a medical reason for them to recieve help.<br/><br/>

                    There is no charge to the client for recieving help from a senior companion.

                    Examples of the types of service provided:

                    <ul>
                        <li>Take the client shopping</li>
                        <li>Accompany to doctor appointments</li>
                        <li>Monitor Medication</li>
                        <li> Assist with walking and exercise</li>
                        <li>Read/write letters, fill out forms, or help with money management</li>
                        <li>Go to social or sporting events</li>
                        <li>Provide respite care for family care givers</li>
                    </ul>

                    The companion and the client decide on what activities they will do, what days they will meet and how many hour they will spend together.<br/><br/>
                </div>
            </p>

            <h3>Choose Home Program</h3>
            <p>
                Choose Home Senior Companion volunteers are the same as Senior Companions. They must be 55 years or older, but they do not have to meet the income guidelines. Their clients must be veterans age 21 and older.<br/><br/>

                They recieve the same benefits. Choose Home Senior Companion volunteers recieve a stipend of $3.00 for every hour they volunteer along with mileage reimbursement at the federal rate and a meal per diem to encourage them and the client to recieve healthy meals. 
            </p>

            <p>
                <b>Karen O'Dell</b><br/>
                Senior Companion and Veteran Choose Home program Director <br/>
                Glendive - (406) 377-3564 | (800) 227-0703<br/>
                Sidney - (406) 433-4967 | 1-866-433-4967<br/>
                <b>k.odell@aemt.org</b>
            </p>
            
            
        </div>
    </div>
    );
}