import React from "react";

export const Features = (props) => {
	return (
		<div id="features" className="text-center">
			<div className="container">
				<div className="col-md-10 col-md-offset-1 section-title">
					<h2>Features</h2>
				</div>
				<div className="row">
					{props.data
						? props.data.map((d, i) => (
								<div key={`${d.title}-${i}`} className="col-xs-6 col-md-3">
									{" "}
									{/* check if index 0, will use Cairo_logo.png instead. */}
									{/* check if index is 3, will use ERC211_logo.png instead */}
									{i != 0 && i != 3 ? (
										<i className={d.icon}></i>
									) : i == 0 ? (
										<img src="img/logo/Cairo_logo.png" alt="" />
									) : (
										<img src="img/logo/ERC2114_logo.png" alt="" />
									)}
									<h3>{d.title}</h3>
									<p>{d.text}</p>
								</div>
						  ))
						: "Loading..."}
				</div>
			</div>
		</div>
	);
};
