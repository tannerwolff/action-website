import React from 'react';
import finalAudit20 from "../../../static/docs/AEM final 2020 audit.pdf";
import form990 from "../../../static/docs/form990.pdf";
import annualReport from "../../../static/docs/2018-2019-Annual-Report.pdf";
import headstartReport from "../../../static/docs/head-start-report.pdf";
import romaProgress from "../../../static/docs/ROMA-progress.pdf";
import romaWorkplan from "../../../static/docs/ROMA-workplan.pdf";
import strategicPlanpdf from "../../../static/docs/strategic-plan.pdf";



export default function(){
    return(
    <div className="full-reports-page-wrapper">
        <h1>Accountability Reports</h1>
        <div className="governing-line"></div>
        <div className="single-report">
            <a href={finalAudit20} target="_blank">2020 Audit</a>
        </div>

        <div className="single-report">
            <a href={form990} target="_blank">Form 990</a>
        </div>

        <div className="single-report">
            <a href={annualReport} target="_blank">2018-2019 Annual Report</a>
        </div>

        <div className="single-report">
            <a href={headstartReport} target="_blank">Head Start Annual Report 2015-2016</a>
        </div>

        <div className="single-report">
            <a href={romaProgress} target="_blank">ROMA Progress Report</a>
        </div>

        <div className="single-report">
            <a href={romaWorkplan} target="_blank">ROMA Workplan</a>
        </div>

        <div className="single-report">
            <a href={strategicPlanpdf} target="_blank">Strategic Plan</a>
        </div>
        
    </div>
    );
}