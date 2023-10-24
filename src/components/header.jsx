import React from "react";

export const Header = (props) => {
	return (
		<header id="header">
			<div className="intro">
				<div className="overlay">
					<div className="container">
						<div className="row">
							<div className="col-md-8 col-md-offset-2 intro-text">
								<img
									src="img/logo/OldSoukLogo.png"
									alt=""
									style={{ marginBottom: "100px", scale: "1.3" }}></img>
								<h1>
									{props.data ? props.data.title : "Loading"}{" "}
									<img src="img/logo/StarknetLogo.svg" alt=""></img>
									<span></span>
								</h1>
								<p>{props.data ? props.data.paragraph : "Loading"}</p>
								<a
									href="#features"
									className="btn btn-custom btn-lg page-scroll">
									Learn More
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};
