import React from "react";


import review1 from "../components/images/review1.png";
import review2 from "../components/images/review2.png";
import review3 from "../components/images/review3.png";

import reviewStars from "../components/images/review-stars.png";

export default function Reviews() {
	return (
		<div>
			<div className="review-container">
				<h3 className="review-title">Check our testimonials!</h3>
				<div className="public-reviews-container">
					<div className="review1">
						<img
							className="cust-review-img"
							src={review1}
							alt="customer-image1"
						/>
						<img
							src={reviewStars}
							alt="review-stars"
							className="review-stars"
						/>
						<h6 className="cust-name-title">Joe Bloggs</h6>
						<p className="cust-review-para">
							The Pet Nanny Network App is amazing for when I'm stuck at work or
							working away from home and can't get back to walk my best friend.
							The walkers leave a nice recap of my dog's behaviour. Best of all
							my dog loves meeting new people! Highly recommend!
						</p>
					</div>
					<div className="review2">
						<img
							className="cust-review-img2"
							src={review2}
							alt="customer-image2"
						/>
						<img
							src={reviewStars}
							alt="review-stars"
							className="review-stars"
						/>
						<h6 className="cust-name-title">Jane Smith</h6>
						<p className="cust-review-para">
							I couldn't seem to find the time to walk my dog with a 9 month old
							baby and long shifts at the hospital. With the Pet Nanny Network
							App, I can meet and talk to my walker before, during and after the
							walk and can get my dog walked any time day or night!
						</p>
					</div>
					<div className="review3">
						<img
							className="cust-review-img3"
							src={review3}
							alt="customer-image2"
						/>
						<img
							src={reviewStars}
							alt="review-stars"
							className="review-stars"
						/>
						<h6 className="cust-name-title">John Doh</h6>
						<p className="cust-review-para">
							As a first responder, I'm often out for long periods of the day
							and night. I rely on the Pet Nanny Network to walk my little best
							friend as much as he needs. My PNN guy is really awesome and will
							stay with my guy while I'm away responding to emergencies at all
							hours. I don't know what I'd do without them!
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
