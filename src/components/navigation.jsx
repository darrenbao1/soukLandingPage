import React, { useRef } from "react";
export const Navigation = (props) => {
	const navbarRef = useRef(null);

	const handleNavClose = () => {
		if (navbarRef.current) {
			navbarRef.current.classList.remove("in"); // Remove the "in" class to close the navbar
		}
	};
	return (
		<nav id="menu" className="navbar navbar-default navbar-fixed-top">
			<div className="container">
				<div className="navbar-header">
					<button
						type="button"
						className="navbar-toggle collapsed"
						data-toggle="collapse"
						data-target="#bs-example-navbar-collapse-1">
						{" "}
						<span className="sr-only">Toggle navigation</span>{" "}
						<span className="icon-bar"></span>{" "}
						<span className="icon-bar"></span>{" "}
						<span className="icon-bar"></span>{" "}
					</button>
					<a
						className="navbar-brand page-scroll"
						href="#page-top"
						onClick={() => handleNavClose()}>
						<img
							src="img/logo/OldSoukLogo.png"
							style={{ width: "50%", marginTop: "-15px" }}
							alt=""></img>
					</a>{" "}
				</div>

				<div
					className="collapse navbar-collapse"
					id="bs-example-navbar-collapse-1"
					ref={navbarRef}>
					<ul className="nav navbar-nav navbar-right">
						<li>
							<a
								href="#features"
								className="page-scroll"
								onClick={() => handleNavClose()}>
								Features
							</a>
						</li>
						<li>
							<a
								href="#about"
								className="page-scroll"
								onClick={() => handleNavClose()}>
								About
							</a>
						</li>
						{/* <li>
							<a href="#services" className="page-scroll">
								Services
							</a>
						</li>
						<li>
							<a href="#portfolio" className="page-scroll">
								Gallery
							</a>
						</li> */}
						<li>
							<a href="#apps" className="page-scroll">
								Apps
							</a>
						</li>
						<li>
							<a
								href="#team"
								className="page-scroll"
								onClick={() => handleNavClose()}>
								Team
							</a>
						</li>
						<li>
							<a
								href="#contact"
								className="page-scroll"
								onClick={() => handleNavClose()}>
								Contact
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};
