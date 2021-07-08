import React from 'react';
import BoardManual from "../../../static/docs/Board-Manual-Updated-November-2015.pdf"
import Newsletter2017 from "../../../static/docs/2017-newsletter-April.pdf"
import Newsletter2016 from "../../../static/docs/2016-newsletter.pdf"
import Newsletter2015 from "../../../static/docs/2015-newsletter.pdf"
export default function(){
    return(
        <div className="governing-board-full-wrapper">
            <div className="full-employee-resource-page">
                <h1>Employee Resources</h1>
                <div className="governing-line"></div>
                <h3>H.R. Resources</h3>

                <h2>Employee Benefits</h2>
                <a href={BoardManual} target="_blank"><b>Board Manual - Updated November 2015</b></a>

                <h2><b>Newsletters</b></h2>

                <a href={Newsletter2017} target="_blank"><b>2017 Newsletter</b></a><br/>

                <a href={Newsletter2016} target="_blank"><b>2016 Newsletter</b></a><br/>

                <a href={Newsletter2015} target="_blank"><b>2015 Newsletter</b></a>
            </div>
        </div>
    );
}