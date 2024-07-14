import { useState } from "react";
import { Button } from "react-bootstrap";
import "../1-MainFiles/App.css";
import NavigationBar from "./NavBar";
import Hero from "./Hero";

function Home() {
	return (
		<div>
			<NavigationBar />;
			<Hero />
		</div>
	);
}

export default Home;
