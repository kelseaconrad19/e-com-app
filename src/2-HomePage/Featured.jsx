import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "./Home.css";
import React from "react";

function FeaturedCarousel() {
	const [index, setIndex] = useState(0);

	const handleSelect = (selectedIndex) => {
		setIndex(selectedIndex);
	};

	return (
		<div id="carousel-">
			<h2 id="bestsellers-h2">This Week's Bestsellers</h2>
			<Carousel
				activeIndex={index}
				onSelect={handleSelect}
				class="carousel-container"
			>
				<Carousel.Item>
					<img
						text="First slide"
						src="https://m.media-amazon.com/images/I/41xa4Y+PKhL._SL500_.jpg"
						height={300}
					/>
				</Carousel.Item>
				<Carousel.Item>
					<img
						text="First slide"
						src="https://m.media-amazon.com/images/I/51Ao+F0+xvL._SL500_.jpg"
						height={300}
					/>
				</Carousel.Item>
				<Carousel.Item>
					<img
						text="First slide"
						src="https://m.media-amazon.com/images/I/51ik2VkcfCL._SL500_.jpg"
						height={300}
					/>
				</Carousel.Item>
				<Carousel.Item>
					<img
						text="First slide"
						src="https://m.media-amazon.com/images/I/51Q4bVdHu9L._SL500_.jpg"
						height={300}
					/>
				</Carousel.Item>
			</Carousel>
		</div>
	);
}

export default FeaturedCarousel;
