import React from 'react';
import {Link} from 'react-router-dom';
import HeadStart from "../../../static/assets/Head-Start.jpg";
import HeadStartApp from "../../../static/docs/Head-Start-Application.pdf";


export default function(){
    return(
        <div className="governing-board-full-wrapper">
        <div className="full-head-start-page">
            <h1>Head Start</h1>
            <div className="governing-line"></div>

            <p>Head Start is a FREE pre-school program serving 3-4 year olds is in the process of recruitment for the 2021-2022 school year. </p>
            <div className="picture-one">
                <img src={HeadStart} alt="Head Start Logo"></img>
            </div>

            

            <p>The program is based on the premise that the parents are the primary educators of their children.  The Head Start program provides a leaning environment with various experiences that are developmentally appropriate and that will help children develop socially, intellectually, physically, and emotionally.  It is designed to increase school readiness and develop a child’s fullest potential.</p>

            <p>At Head Start we provide free medical and dental screening, healthy meals and safe activities indoors and out.</p>

            <h4>Head Start Family Income Guidelines for 2019-2020</h4>

            <table>
                <tr>
                    <th>Household Size</th>
                    <th>Maximum Income Level (Per Year)</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>$12,880</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>$17,420</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>$21,960</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>$26,500</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>$31,040</td>
                </tr>
                <tr>
                    <td>6</td>
                    <td>$35,580</td>
                </tr>
                <tr>
                    <td>7</td>
                    <td>$40,120</td>
                </tr>
                <tr>
                    <td>8</td>
                    <td>$44,660</td>
                </tr>
            </table>
            <div className="text-below-headstart-table">
                <b>*For households with more than eight people, add $4,540 per additional person. Always check with the appropriate managing agency to ensure the most accurate guidelines.</b>
            </div>

            <p>
                While eligibility is based on income guidelines, families that receive certain benefits may be eligible.  10% of the slots can be filled with over income families.<br/><br/>

                If you think you child and family would enjoy participating in Head Start, <a href={HeadStartApp} target="_blank"><b>please click here to download Head Start application</b></a> or <a href="" target="_blank"><b>click here to apply online.</b></a></p>
            
        </div>
    </div>
    );
}