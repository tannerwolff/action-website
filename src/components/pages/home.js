import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import MidRiversLogo from "../../../static/assets/mid-rivers-logo.png";
import MDULogo from "../../../static/assets/MDULogo.png";


import MontanaMap from "../../../static/assets/mt-map.png";
import AboutPic from "../../../static/assets/family.png";
import PhillipsCounty from "../../../static/docs/PhillipsContact.pdf";
import ValleyCounty from "../../../static/docs/ValleyContact.pdf";
import DanielsCounty from "../../../static/docs/DanielsContact.pdf";
import SheridanCounty from "../../../static/docs/SheridanContact.pdf";
import GarfieldCounty from "../../../static/docs/GarfieldContact.pdf";
import RooseveltCounty from "../../../static/docs/RooseveltContact.pdf";
import McConeCounty from "../../../static/docs/McConeContact.pdf";
import RichlandCounty from "../../../static/docs/RichlandContact.pdf";
import RosebudCounty from "../../../static/docs/RosebudContact.pdf";
import TreasureCounty from "../../../static/docs/TreasureContact.pdf";
import DawsonCounty from "../../../static/docs/DawsonContact.pdf";
import PrairieCounty from "../../../static/docs/PrairieContact.pdf";
import WibauxCounty from "../../../static/docs/WibauxContact.pdf";
import FallonCounty from "../../../static/docs/FallonContact.pdf";
import PowderRiverCounty from "../../../static/docs/PowderRiverContact.pdf";
import CusterCounty from "../../../static/docs/CusterContact.pdf";
import CarterCounty from "../../../static/docs/CarterContact.pdf";
import FortPeckTribes from "../../../static/docs/FortPeck.pdf";


export default class Home extends Component {

  render(){
    return (

        <div className="complete-homepage-wrapper">
              <h2>Click your county to see the contact info!</h2>
          <div className="montana-map-section-wrapper">

              <img src={MontanaMap} useMap="#image-map"/>

              <map name="image-map">
                <area target="_blank" alt="Phillips County" title="Phillips County" href={PhillipsCounty} coords="708,17,629,20,628,46,621,73,618,87,615,101,615,116,615,129,614,137,601,135,599,146,579,147,576,167,585,172,593,179,606,181,622,185,632,185,645,185,655,186,660,196,669,189,676,179,684,175,694,179,698,167,699,146,698,126,698,107,701,97,709,98,709,85,705,76,713,69,711,32" shape="poly"/>


                <area target="_blank" alt="Valley County" title="Valley County" href={ValleyCounty} coords="712,14,711,32,712,53,712,70,705,81,708,97,699,111,698,135,699,157,701,170,716,174,732,172,743,165,762,156,768,144,774,135,781,122,796,126,807,126,821,126,820,101,823,63,809,62,804,32,790,29,799,10" shape="poly"/>


                <area target="_blank" alt="Daniels County" title="Daniels County" href={DanielsCounty} coords="799,10,795,27,806,29,806,60,848,59,890,55,883,41,879,6" shape="poly"/>


                <area target="_blank" alt="Sheridan County" title="Sheridan County" href={SheridanCounty} coords="879,4,884,22,884,36,887,46,893,55,907,53,908,66,921,64,919,76,964,73,957,0" shape="poly"/>


                <area target="_blank" alt="Roosevelt County" title="Roosevelt County" href={RooseveltCounty} coords="825,62,827,98,821,104,825,123,841,119,852,115,862,115,874,115,887,118,894,111,900,104,911,108,921,108,933,108,943,114,958,114,967,118,964,76,921,76,918,64,908,64,907,52" shape="poly"/>


                <area target="_blank" alt="Garfield County" title="Garfield County" href={GarfieldCounty} coords="660,200,657,213,656,227,659,241,664,255,662,265,664,273,701,272,722,270,744,269,764,270,789,269,811,269,809,228,800,228,802,207,789,206,789,186,792,146,776,132,768,150,760,157,741,168,719,174,699,171,694,179,678,177,669,188" shape="poly"/>


                <area target="_blank" alt="McCone County" title="McCone County" href={McConeCounty} coords="778,122,788,126,797,126,810,128,820,128,830,123,841,119,859,115,873,116,876,125,876,135,874,150,863,151,866,167,866,181,863,191,863,206,865,224,830,224,830,238,820,240,820,226,800,226,802,209,790,205,792,170,795,151,785,135" shape="poly"/>


                <area target="_blank" alt="Richland County" title="Richland County" href={RichlandCounty} coords="877,119,877,129,876,144,876,159,897,162,897,172,928,169,929,180,939,199,965,199,975,192,965,117,943,113,926,109,915,109,901,109" shape="poly"/>


                <area target="_blank" alt="Dawson County" title="Dawson County" href={DawsonCounty} coords="863,151,866,184,863,196,866,224,874,249,886,249,900,259,922,259,940,259,950,251,957,235,954,224,949,207,943,199,933,184,925,171,897,170,879,160" shape="poly"/>


                <area target="_blank" alt="Rosebud County" title="Rosebud County" href={RosebudCounty} coords="667,279,671,292,667,301,673,315,694,317,723,317,725,325,737,325,737,356,746,356,751,411,767,411,767,447,764,471,804,468,802,447,810,446,806,395,810,349,810,311,809,268" shape="poly"/>


                <area target="_blank" alt="Prairie County" title="Prairie County" href={PrairieCounty} coords="811,226,813,265,851,267,856,285,866,296,881,296,897,299,912,293,923,288,933,281,930,258,898,260,874,246,870,222,835,225,831,236,820,237,818,225" shape="poly"/>


                <area target="_blank" alt="Wibaux County" title="Wibaux County" href={WibauxCounty} coords="943,202,953,213,956,228,951,245,946,255,935,262,936,277,960,285,981,282,972,198" shape="poly"/>


                <area target="_blank" alt="Custer County" title="Custer County" href={CusterCounty} coords="810,272,810,315,811,350,810,397,915,390,909,346,918,346,912,308,928,304,925,289,888,301,855,286,849,269,825,263" shape="poly"/>


                <area target="_blank" alt="Fallon County" title="Fallon County" href={FallonCounty} coords="912,307,918,343,947,346,949,356,958,353,958,366,974,366,988,373,979,282,950,282,935,280,925,287,928,304" shape="poly"/>


                <area target="_blank" alt="Powder River County" title="Powder River County" href={PowderRiverCounty} coords="809,397,809,448,809,491,915,485,908,443,916,441,911,391" shape="poly"/>


                <area target="_blank" alt="Carter County" title="Carter County" href={CarterCounty} coords="912,350,914,484,993,475,988,376,958,363,947,356,943,343" shape="poly"/>


                <area target="_blank" alt="Treasure County" title="Treasure County" href={TreasureCounty} coords="677,319,690,337,697,352,700,362,695,370,705,371,705,380,725,380,745,390,744,360,737,355,737,326,723,326,722,316" shape="poly"/>
            </map>
          </div>

          <div className="google-calendar-section">
            <iframe src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=America%2FDenver&amp;src=Y180djBpb3J0NHY5NGxvdnNwcm9yMjBqaWRyZ0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t&amp;src=ZW4udXNhI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&amp;color=%23EF6C00&amp;color=%230B8043" ></iframe>
          </div>

          <div className="short-home-about-section">
              <div className="home-about-background"
                style={{
                background: "url("+ AboutPic + ") no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center"
            }}>
                <div className="overlay-about">
                    <div className="about-text">
                    <h1>A little about us</h1>
                        <p>The Community Action Partnership is a national, nonprofit organization that works to strengthen, promote, represent and serve its network of member Community Action Agencies (CAAs) to assure that the issues of poverty are effectively presented and addressed. Action for Eastern Montana is committed to strengthening and enhancing the quality of life within the communities we serve by promoting education, advocacy and dignity for achieving independence. <br/><br/>In accordance with Federal regulations, Action for Eastern Montana provides copies of our
                        Tax Form 990, conflicts of interest policy, governing documents and
                        financial statements to the public upon request.</p>
                    </div>
                


                <div className="about-button-wrapper">
                    <div className="button">
                        <Link to="/about">View more about us!</Link>
                    </div>
     
                </div>

              </div>  

              

                
            </div>  
          </div>

          <div className="homepage-department-section">
            <h1>Our Departments</h1>
            <div className="homepage-department-buttons">

              <div className="department-button">
                <Link to="/agency-on-aging">Area I Agency on Aging</Link>
              </div>

              <div className="department-button">
                <Link to="/employment-and-training">Employment and training</Link>
              </div>

              <div className="department-button">
                <Link to="/energy-programs">Energy Programs</Link>
              </div>

              <div className="department-button">
                <Link to="/head-start">Head Start</Link>
              </div>

              <div className="department-button">
                <Link to="/housing-programs">Housing Programs</Link>
              </div>

              <div className="department-button">
                <Link to="/senior-companions">Senior Companions and Veteran Choose Home Program</Link>
              </div>
            </div>
          </div>

          <div className="donor-thank-yous">
            <h1>Thank you to our donors!</h1>
            <div className="all-thank-yous">
              <div className="individual-thank-you">
                <img src={MidRiversLogo}></img>
                <h3>Mid-Rivers Communications</h3>
              </div>

              <div className="individual-thank-you">
                <img src={MDULogo}></img>
                <h3>Montana-Dakota Utilities Co.</h3>
              </div>
            </div>
            
          </div>
        </div>

    );
  }
}