import React from "react";

import manWithDog from "../components/images/manWithDog.png";
import dogWalk from "../components/images/dogOnWalk.png";
import catLooking from "../components/images/catLooking.png";
import petRabbit from "../components/images/petRabbits.png";

import "./main.css";

export default function Main() {
	return (
		<div className="main-page-container">
			<h2 className="main-title">Why Choose Pet Nanny?</h2>
			<img src={manWithDog} alt="man with a dog" className="pet-img manDog" />
			<h4 className="hereTitle">We're here when you need us</h4>
			<p className="herePara">
				Whether you're looking for daily walks, planning a day out, gotten stuck
				at work or just want your best friend to have some company day or night
				- we can offer any day, any time care.
			</p>
			<img src={dogWalk} alt="dog out walking" className="pet-img dogWalk" />
			<h4 className="safetyTitle">We take safety very seriously</h4>
			<p className="safetyPara">
				Your pet's safety is our main priority. Every care provider passes an
				enhanced background check, all our services are insured and we have a
				support team available around the clock.
			</p>
			<img
				src={catLooking}
				alt="a cat looking at us"
				className="pet-img catLooking"
			/>
			<h4 className="convTitle">Convienence is key</h4>
			<p className="convPara">
				At The Pet Nanny Network, we've thought of everything. From GPS- tracked
				walks, customized lock boxes and our easy to use PNN app, we can make
				your life easier at every step.
			</p>
			<img
				src={petRabbit}
				alt="rabbits on grass"
				className="pet-img petRabbit"
			/>

			<h4 className="expTitle">You can trust us</h4>
			<p className="expPara">
				PNN has been around the block a few times. We have a trusted record with
				hundreds of carers and counting. Pet Nanny Network are pet people... and
				it shows!
			</p>
		</div>
	);
}
