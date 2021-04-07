import React, { Component } from 'react';
import Growth from "../../../static/assets/growth.jpg";
import {Link} from 'react-router-dom';

export default class missionAbout extends Component {
    
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
                <h1>Our Mission</h1>

                <h2>MISSION STATEMENT</h2>

                <p>Action for Eastern Montana is committed to strengthening and enhancing the quality of life within the communities we serve by promoting education, advocacy and dignity for achieving independence.</p>

                <h2>VISION</h2>

                <p>Action for Eastern Montana, through advocacy, education, collaboration and initiative will empower people of all ages to build on their dreams, live with dignity and achieve independence.</p>

                <h2>VALUES</h2>

                <p>An organization’s values are reflected in how its staff go about their work and how they interact with one another, with their customer and with larger community. Those values also give the organization a reference point from which to measure its success.</p>

                <p><b>WORTH OF EVERY INDIVIDUAL...</b> Action for Eastern Montana believes in the fundamental value of each individual; all people deserve respect for their basic humanity and individuality. It is Action for Eastern Montana’s goal to empower individuals to recognize and achieve their fullest potential.</p>

                <p><b>FAMILY...</b> Families are basic building blocks of society, individuals learn to relate to one another in families. Families train children for full participation in society, to become the parents of future generations. Healthy families create healthy societies and healthy future generations.</p>

                <p><b>GROWTH AND DEVELOPMENT...</b> Discovery, learning, growth and change are the means by which individuals and organizations reach their full potential. Action for Eastern Montana believes in nurturing self-esteem and self-reliance in our customers and ourselves, forming partnerships, which build strong motivated individuals. Responsibility lies in the hands of the individual.</p>

                <p><b>OPPORTUNITY...</b> Action for Eastern Montana empowers families to overcome the barriers which limit their opportunities, to acquire the skills with which to learn and grow, to reclaim their right to dream of a better future and to purse their share of the best their community can offer.</p>

                <p><b>PARTNERSHIPS...</b> Action for Eastern Montana does not work alone; it is part of a network of community organizations. Effective partnerships are grounded on trust.</p>

                <p><b>COMMUNITY...</b> Action for Eastern Montana believes that all people should feel they are part of their community, that all individuals, families and organizations need to be treated as valuable members of the community if they are to grow and succeed.</p>

                <p><b>INNOVATION...</b> Seeing our role as an advocate in the lives of the families with whom we work and in the communities we serve, Action for Eastern Montana strives to operate at the cutting edge of knowledge and practice, continually exploring new ways to achieve Action for Eastern Montana’s mission.</p>

                <p><b>EXCELLENCE...</b> Giving one’s best is the Action for Eastern Montana standard measure of human performance. We achieve excellence with honesty, integrity, a sense of humor, a sense of enjoyment and an optimistic attitude.<br/>
                THE ONLY FAILURE IS NOT TRYING!!</p>




                <div className="about-button-wrapper">

                    <Link to="/ceo-about">CEO's message</Link>

                    <Link to="/mission-about">Our Mission</Link>
                   
                </div>

                
            </div>
        </div>
    );
  }
}