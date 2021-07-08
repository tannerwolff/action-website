import React from 'react';
import {Link} from 'react-router-dom';
import LieapApp from "../../../static/docs/LIEAP-application-2020.pdf";
import EnergyServiceRules from "../../../static/docs/energy-service-rules-brochure-2.pdf";
import EnergyShare from "../../../static/docs/Energy-Share-1.pdf";


export default function(){
    return(
        <div className="governing-board-full-wrapper">
        <div className="full-employee-resource-page">
            <h1>Energy Programs</h1>
            <div className="governing-line"></div>

            <h3>Please fax your Energy Share or LIEAP applications to the main fax line at 406-377-3570 Attn: Energy Programs. </h3>

            <h3>Low-income Energy Assistance Program- LIEAP</h3>

            <p>Low-income Energy Assistance Program (LIEAP) pays a portion of winter energy bills for eligible people based on income and resources.</p>

            <p>Payments are usually made to local utility companies.</p>

            <p>LIEAP Application are accepted October 1st – April 30th.  <a href={LieapApp} target="_blank">Click here for the 2020-2021 application.</a></p>

            <p><b>What we Need from you:

                <ol>
                    <li>Copy of most recent heating bill, or propane provider letter</li>
                    <li>Copy of most recent bank statement(s)- all pages!!!</li>
                    <li>Everyone 16 or older must sign the application</li>
                    <li>Copy of 3 months of income proof for all household members- even minors if they are working</li>
                </ol>

                Who Qualifies for LIEAP?<br/>
            </b></p>

            <p>
                Action for Eastern Montana covers the 17 Eastern Counties of Montana. If you live in Carter, Custer, Daniels, Dawson, Fallon, Garfield, McCone, Phillips, Powder River, Prairie, Richland, Roosevelt, Rosebud, Sheridan, Treasure, Valley or Wibaux Counties, please apply for our program to see if you qualify for Fuel Assistance<br/><br/>

                The LIEAP program is designed to help Low-Income families and   individuals with a portion of their heating bills from the October—April; it doesn’t matter if you rent or own your home.  LIEAP eligibility is based on your household income (all money brought in) and resources (any assets you have in the bank, property or real estate, CD’s, Stocks and Bonds, etc.).<br/><br/>

                One question often asked by a potential client is: “If I get LIEAP, will it take assistance away from someone else that might need it more than me?”  The answer: NO.  If you qualify for the program based on your income and resources, the state of Montana has put aside some assistance for you.  If you bypass this assistance, you’re only hurting yourself or your family.  It’s your tax dollars at work. LIEAP is here to help you achieve self-reliance and self-sufficiency.<br/><br/>

                Once you are approved for LIEAP, a one-time payment will be sent to your fuel provider.  This benefit amount will be posted to your account and will be used for fuel charges during the winter months.  Any unused benefits will be returned to the state of MT at the end of the heating season.<br/><br/>

                All households must reapply each year, if assistance is still needed.  If you are Native American, living on an Indian Reservation, you must apply for Tribal LIHEAP.<br/><br/>

                Please feel free to call with any questions or concerns.  We are here to help.<br/><br/>

                All records and information about your situation are kept in confidence.  The LIEAP benefit amount is figured according to the number of household members, bedrooms, type of home, primary heat source and the total household income for 12 months.  Clients must re-apply each year.
            </p>

            <h3>These documents are needed when you submit a LIEAP Application between October 1st - April 30th:</h3>

            <ul>
                <li>A recent copy of your fuel bill (unless you heat with wood or coal).</li>
                <li>Income records such as; wage stubs, unemployment compensation, child support, interest income, retirement benefits, alimony payments, social security award letters, self-employment, and property income.</li>
                <li>Your most recent bank statement for all accounts.</li>
                <b>Propane and Fuel Oil Clients must submit:</b>

                <li>A note from your fuel provider stating they will supply your fuel.</li>
                <li>Your current balance with your provider. An application for heat assistance will be available October 1st. However, you may apply for weatherization due to emergency situation such as: storm related window damage, condemned furnace or water heater at any time during the year by contacting Energy Programs at Action For Eastern Montana by calling (406) 377-3564 or (800) 227-0703.</li>
                <b>Income Standards:</b>
                <li>Households currently receiving Supplemental Security Income (SSI) or Temporary Assistance for Needy Families (TANF) may be automatically eligible for fuel bill assistance.</li>
            </ul>

            <table>
                <tr>
                    <th>Number In Household</th>
                    <th>LIEAP Guidelines 2019-2020 Annual (Monthly)</th>
                    <th>Wx Upper Limits (including LIEAP Wx) 200%</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>$26,616</td>
                    <td>$26,616</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>$34,805</td>
                    <td>$34,805</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>$42,995</td>
                    <td>$43,440</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>$51,184</td>
                    <td>$52,400</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>$59,373</td>
                    <td>$61,360</td>
                </tr>
                <tr>
                    <td>6</td>
                    <td>$67,563</td>
                    <td>$70,320</td>
                </tr>
                <tr>
                    <td>7</td>
                    <td>$69,098</td>
                    <td>$79,280</td>
                </tr>
                <tr>
                    <td>8</td>
                    <td>$70,634</td>
                    <td>$88,240</td>
                </tr>
                <tr>
                    <td>9</td>
                    <td>$72,900</td>
                    <td>$97,200</td>
                </tr>
                <tr>
                    <td>10</td>
                    <td>$79,620</td>
                    <td>$106,160</td>
                </tr>
                <tr>
                    <td>11</td>
                    <td>$86,340</td>
                    <td>$115,120</td>
                </tr>
                <tr>
                    <td>12</td>
                    <td>$93,060</td>
                    <td>$124,080</td>
                </tr>
                <tr>
                    <td>13</td>
                    <td>$99,780</td>
                    <td>$133,040</td>
                </tr>
                <tr>
                    <td>14</td>
                    <td>$106,500</td>
                    <td>$142,000</td>
                </tr>
                <tr>
                    <td>15</td>
                    <td>$113,220</td>
                    <td>$150,960</td>
                </tr>
            </table>

            <p>The upper limit amounts are 60% of the state median income for household sizes one (1) through eight (8). The upper limit amounts for household sizes nine (9) and greater are 150% of the poverty threshold for the household size. For households at 150 percent of HHS poverty guidelines with more than 9 members add $6,720 for each additional member.</p>
            
            <p>Resources –  Cash, checking & savings accounts.  CD’s, Stocks & Bonds. Land leases/rentals. Tax Sheltered Annuity. Property/Real Estate – other than the home you live in.</p>

            <p><b>Weatherization</b></p>

            <p>
                Weatherization assistance is provided for 17 counties in Eastern Montana as well as the Northern Cheyenne and Fort Peck Indian Reservations.  Households MUST be LIEAP eligible to qualify.  Both homeowners and renters are eligible.<br/><br/>

                Client’s homes are prioritized on a list according to income and energy burden/usage. When your name moves to the top of the priority list, an energy auditor will schedule a time to assess your home’s needs for weatherization materials. The auditor is trained to determine the most cost-effective weatherization measures for your home.  Weatherization measures may include a furnace tune-up, caulking, weather stripping, insulation, storm windows, vent dampers, window quilts, replacement of broken glass, and repair of primary doors. Weatherization workers may not be able to install all the materials you may need, but they will do the most important weatherization within the dollar limits allowed.<br/><br/>

                All Tribal LIHEAP applicants must send their approved application to our office to be added to the list.<br/><br/>

                Weatherization workers may not be able to install all the materials you need, but they will do the most important within the dollar limits allowed. An estimated 120 homes out of 1200 homes are weatherized each year. Since we cannot weatherize every eligible home in a single year, there is the Warm Hearts-Warm Homes of Montana program facilitated by the Montana Conservation Corps, which we refer to.<br/><br/>

                If you are experiencing a heating emergency, contact our office first, to see if it is something we can help you with.
            </p>
            
            <p><b>Energy Share of Montana</b></p>

            <p>
                Energy Share of Montana is a private nonprofit organization.  The primary purpose is to help Montanans faced with energy emergencies meet their needs and move toward self-reliance.  We raise money through private donations and coordinate the efforts of energy providers and human services agencies to distribute resources to those most in need.   We offer funds to any family with any energy emergency.  Recipients are encouraged to repay these funds if and when they are financially able to do so.<br/><br/>

                One of the main ways we help people is with their heating bills. Often, families who live from paycheck to paycheck face some type of financial emergency when an unexpected expense occurs. This could be something like a vehicle break down, lay off from work, or medical expense/emergency.<br/><br/>

                Energy Share is the only assistance available to Montana families who have income too high to qualify for LIEAP assistance.  Applicants must first apply for LIEAP before they can apply for Energy Share. If applicants are ineligible for LIEAP or are still in need of assistance once receiving LIEAP, they can apply for Energy Share.<br/><br/>
            </p>

            <h3>Resources</h3>
            <ul>
                <li><a href={EnergyServiceRules} target="_blank">Energy Service Rules Brochure</a></li>
                
                <li><a href="https://www.energysharemt.com/">Energy Share Montana information</a></li>

                <li><a href={EnergyShare} target="_blank">Energy Share Application</a></li>

                
            </ul>

            <Link to="/resources"><b>Additional Resources</b></Link>
            
        </div>
    </div>
    );
}