import React from "react";

export const Apps = (props) => {
	//function to open link in a new tab
	const openInNewTab = (url) => {
		const newWindow = window.open(url, "_blank", "noopener,noreferrer");
		if (newWindow) newWindow.opener = null;
	};
	return (
		<div id="apps">
			<div className="container">
				<div className="section-title text-center">
					<h2>Apps</h2>
				</div>
				<div className="row">
					{props.data
						? props.data.map((d, i) => (
								<div key={`${d.name}-${i}`} className="col-md-4">
									<div
										className="testimonial"
										onClick={() => openInNewTab(d.link)}>
										<div className="testimonial-image">
											{" "}
											<img src={d.img} alt="" />{" "}
										</div>
										<div className="testimonial-content">
											<div className="testimonial-meta"> {d.name} </div>
											<div className="testimonial-meta"> {d.category}</div>
											&nbsp;
											<p>{d.text}</p>
										</div>
									</div>
								</div>
						  ))
						: "loading"}
				</div>
			</div>
		</div>
	);
};
