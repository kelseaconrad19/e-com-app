import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
function Footer() {
	return (
		<footer className="py-3 my-4">
			<ul className="nav justify-content-center border-bottom pb-3 mb-3">
				<li className="nav-item">
					<a href="#" className="nav-link px-2 text-muted">
						Home
					</a>
				</li>
				<li className="nav-item">
					<a href="#" className="nav-link px-2 text-muted">
						About
					</a>
				</li>
				<li className="nav-item">
					<a href="#" className="nav-link px-2 text-muted">
						Blog
					</a>
				</li>
				<li className="nav-item">
					<a href="#" className="nav-link px-2 text-muted">
						Contact
					</a>
				</li>
			</ul>
			<p className="text-center text-muted">&copy; 2023 Company, Inc</p>
		</footer>
	);
}

export default Footer;
