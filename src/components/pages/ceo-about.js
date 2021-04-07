import React, { Component } from 'react';
import Growth from "../../../static/assets/growth.jpg";
import {Link} from 'react-router-dom';

export default class ceoAbout extends Component {
    
  render(){
    return(
        <div className="content-page-wrapper">
            <div className="left-column"
                style={{
                    background: "url("+ Growth + ") no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                }}  
            />
                
            

            <div className="right-column">
                <h1>CEO's Message</h1>
                <p>You see them every day. They are in your church, at your kid’s school, working down the hall from you and living down the street. They are the people in poverty who call Eastern Montana home. They are our friends. They are our neighbors.</p>

                <p>Here at Action for Eastern Montana, we understand what poverty in Eastern Montana looks like, and it is usually a very different picture than what most people may think.</p>

                <p>Often, people incorrectly believe that America’s tax dollars are paying the expenses of able‐bodied lazy individuals or families as they sit around doing nothing except waiting for another handout.</p>

                <p>Our client surveys tell a very different tale. In fact, in one of our recent surveys sent out to over 1,500 clients nearly 76% of our survey respondents were either retired or working full or part‐time with a few working both full and part‐time. Moreover, 92% of the spouses/significant others of the survey respondents were either retired or working full or part‐time. Not only were the survey respondents the retired or the employed, but they also had a relatively high level of education. Nearly 50% of respondents had schooling beyond high school. Also, 38% of respondents indicated that their spouse/partner had schooling beyond high school. Statistics such as this are a primary indication of the need for Community Action programs.</p>
                <p>At Action we have a demographic of clients that are not “lazy”, “uneducated”, or “unemployed” people; rather, they are individuals who stretch themselves, work hard, and desire to achieve success. They are doing all they can, and it is not enough.</p>
                <p>
                At Action for Eastern Montana our staff, partners, and local Board have a strong sense of duty to invest in individuals, families, and communities. We have a drive to meet the needs we uncover and discover. The result of this focus is that 32% of our survey respondents indicated that they are less dependent on social programs than they were a year ago.
                </p>
                <p>A fixed income social security check doesn’t go far to start with, and life gets even harder when housing, fuel, and food costs rapidly increase. According to recent socioeconomic research associated with life in Eastern Montana a living wage for a family of one adult equals $10.95 per hour. We work with hundreds of clients living on just a $660 per month social security check; that works out to $3.85 per hour f or these elderly individuals. Maybe they have a house paid for, maybe they have Medicare, but that still leaves a lot of expenses to meet on less than $4.00 per hour of income.</p>
                <p>One of the key aspects of our success is the Community Services Block Grants and the ability that our local Board has to allocate these funds to address area needs. Our local Board is made up of pastors, a bank president, an attorney, elected officials from both sides of the aisle, farmers/ranchers and clients.</p>
                <p>Throughout the year, we hear hundreds of success stories from our clients, area businesses, local churches, and our locally elected officials. We urge you to share your story with your elected officials by contacting using the links below. Please urge them to support the work of your locally‐governed Community Action Agency – Action for Eastern Montana.</p>

                <p>Sincerely,</p>

                <p><b>Clint Wynne</b> <br />
                CEO <br /> 
                Action for Eastern Montana</p>


                <div className="about-button-wrapper">

                    <Link to="/ceo-about">CEO's Message</Link>

                    <Link to="/mission-about">Our Mission</Link>
                        
                </div>

                
            </div>
        </div>
    );
  }
}