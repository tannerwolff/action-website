import React from 'react';
import {Link} from 'react-router-dom';
import EqualHousing from "../../../static/assets/housing-program.jpg";
import TenantFlyer from "../../../static/docs/tenant-flyer.pdf";
import ChangeForm from "../../../static/docs/changeform.pdf";
import Flyer2 from "../../../static/docs/flyer2.pdf";


export default function(){
    return(
    <div className="governing-board-full-wrapper">
        <div className="full-housing-program-page">
            <h1>Housing Programs</h1>
            <div className="governing-line"></div>
                <h2><b>Section 8 Rental assistance</b></h2>
                <img src={EqualHousing} alt="Equal Housing opportunity Logo"></img>

                <p>The Section 8 Program assists low income, handicapped, elderly, ‬ and disabled persons with rental costs. Assistance is based on household income.Recipients are required to pay a portion of their income towards rent (roughly 30%). The remainder of the rent is subsidized via the Montana Department of Commerce. Section 8 Rental Assistance is tenant based, meaning the subsidy‬ lies with the tenant and is transferable per program regulations.‬ ‭Households may utilize Section 8 Rental Assistance until 30% of ‭their income exceeds the rent for the unit.‬ ‭</p>

                <h3>Who Qualifies?</h3>

                <p>Eligibility is based on household income.</p>

                <h3>How long is the wait?</h3>

                <p>Applicants are always encouraged to apply as Section 8 Rental Assistance provides long-term assistance to help households reach financial self-sufficiency. Help us keep waiting lists short, keep your address on the waiting list current. Use the <a href={ChangeForm} target="_blank"><b>address change form</b></a> and feel free to check your status on the <a href="https://www.waitlistcheck.com/" target="_blank"><b>waiting list.</b></a></p>

                <h3>What happens when i reach the top of the waiting list?</h3>

                <p>Applicants are notified in writing and an appointment is made with a housing specialist for an orientation and eligibility determination. In some cases, the applicant can apply the voucher to the unit they are currently renting.</p>

                <h3>How do I apply?</h3>

                <p>Apply here for <a href="https://www.waitlistcheck.com/application/form.php?ID=849-MT901" target="_blank"><b>Section 8 Rental Assistance</b></a>‬, or call Action for Eastern Montana at 406-377-3564 or 800-227-0703</p>

                <h1>Section 8 Home Buyer Program</h1>

                <p>
                    The Section 8 Homeownership Program of the Montana Department of Commerce allows eligible participants in the Section 8 housing choice voucher program, including participants with portable vouchers, the option of purchasing a home with their Section 8 assistance rather than renting.<br/><br/>

                    To be eligible, participants must be able to secure financing on their own, be employed full time at minimum wage or be receiving Social Security, and have been on Section 8 rental assistance for at least one year. Other requirements also apply, please feel free to contact the Action for Eastern Montana office for more information.
                </p>

                <embed src={Flyer2} width="100%" height="600px" />

                <h3><a href={TenantFlyer} target="_blank">Information on Eviction Moratorium</a></h3>

                <p>
                <b>Connie Smith</b><br/>
                Housing Program Director<br/>
                (406) 377-3564 ext 113 | Fax: (406) 377-3570<br/>
                <b>c.smith@aemt.org</b>
            </p>
            
        </div>
    </div>
    );
}