import {
	Navbar,
	Nav,
	NavDropdown,
	Container,
	Form,
	Button,
	Row,
	Col,
} from "react-bootstrap";
import React from "react";
import "./Home.css";

function Hero() {
	return (
		<div className="hero-container">
			<Container className="hero-content">
				<h1 className="hero-title">Welcome to Bookstore</h1>
				<p className="hero-text">
					Explore a wide range of books from various genres
				</p>
				<Button variant="primary" className="hero-btn">
					Shop Now
				</Button>
			</Container>
		</div>
	);
}

export default Hero;
