import { useState } from "react";
import { Button } from "react-bootstrap";
import "../1-MainFiles/App.css";
import NavigationBar from "./NavBar";
import Hero from "./Hero";
import FeaturedCarousel from "./Featured";
import Footer from "./Footer";

function Home() {
	return (
		<div>
			<NavigationBar />;
			<Hero />;
			<FeaturedCarousel />;
			<Footer />;
		</div>
	);
}

export default Home;
