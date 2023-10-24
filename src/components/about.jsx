import React from "react";

export const About = (props) => {
	return (
		<div id="about" className="text-center">
			<div
				className="container"
				style={{ display: "block", alignItems: "center" }}>
				<div className="col-md-10 col-md-offset-1 section-title">
					<h2>About</h2>
				</div>
				<img
					src="img/Souk_Architecture.png"
					className="img-responsive"
					alt=""
				/>{" "}
				{/* 
					<div className="col-md-6 col-md-20">
						{" "}
						<img
							src="img/Souk_Architecture.png"
							className="img-responsive"
							alt=""
						/>{" "}
					</div>
					<div className="col-xs-12 col-md-6">
						<div className="about-text">
							<h2>About</h2>
							<p>{props.data ? props.data.paragraph : "loading..."}</p>
							<h3>Why Choose Us?</h3>
							<div className="list-style">
								<div className="col-lg-6 col-sm-6 col-xs-12">
									<ul>
										{props.data
											? props.data.Why.map((d, i) => (
													<li key={`${d}-${i}`}>{d}</li>
											  ))
											: "loading"}
									</ul>
								</div>
								<div className="col-lg-6 col-sm-6 col-xs-12">
									<ul>
										{props.data
											? props.data.Why2.map((d, i) => (
													<li key={`${d}-${i}`}> {d}</li>
											  ))
											: "loading"}
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div> */}
			</div>
		</div>
	);
};
