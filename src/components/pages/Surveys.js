import React from 'react';
import PaperSurvey from "../../../static/docs/community-survey.pdf";

export default function(){
    return(
    <div className="governing-board-full-wrapper">
        <div className="full-survey-wrapper">
            <h1>Surveys</h1>
            <div className="governing-line"></div>

            <div classname="survey-line">
                Paper Version: <a href={PaperSurvey} target="_blank"> <b>Community Survey 2018-2019</b></a><br/><br/>
            </div>

            <div classname="survey-line">
                Online Version: <a href="https://docs.google.com/forms/d/e/1FAIpQLSf2Vgo6xtZiRJNIYvoe9HZCshCc66fuebpwv0HW4Pc9G0gS-Q/viewform?c=0&w=1" target="_blank"> <b>Click Here!</b></a><br/><br/>
            </div>
            
        </div>
    </div>
    );
}