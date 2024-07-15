import { Container, Button, Card } from "react-bootstrap";
import React from "react";
import "./Home.css";

function BookCard(props) {
	return (
		<Card className="text-white card-container">
			<Card.Img src={props.img} alt="Card image" id="book-cover" fluid />{" "}
		</Card>
	);
}

function Hero() {
	return (
		<div className="hero-container">
			<Container className="hero-content">
				<h1 className="hero-title mt-4">Welcome to Page Turners!</h1>

				<div className="product-cards mt-4">
					<BookCard
						img="https://m.media-amazon.com/images/I/51Ppi-8kISL.jpg"
						title="Harry Potter"
						text="A young boy discovers he is a wizard and attends a magical school, where he uncovers secrets about his past and battles a dark force seeking immortality."
						author="J.K. Rowling"
					/>
					<BookCard
						img="https://m.media-amazon.com/images/I/81gxI+tlqeL._AC_UF1000,1000_QL80_.jpg"
						title="Eye of the World"
						text="In a world threatened by a powerful dark entity, a young farm boy embarks on a perilous journey with his friends and a mysterious sorceress to uncover his destiny and save humanity."
						author="Robert Jordan"
					/>
					<BookCard
						img="https://images.booksense.com/images/210/928/9780547928210.jpg"
						title="Lord of the Rings"
						text="A hobbit named Frodo Baggins inherits a powerful ring and sets out with a diverse group of companions to destroy it and thwart the dark lord Sauron’s plans for domination."
						author="J.R.R. Tolkien"
					/>
					<BookCard
						img="https://m.media-amazon.com/images/I/81GwPUHuoKL._AC_UF1000,1000_QL80_.jpg"
						title="Jade City"
						text="In a city where jade grants magical powers, two rival clans battle for control, leading to betrayal, political intrigue, and a fight for survival."
						author="Fonda Lee"
					/>
				</div>
				<Button variant="primary fs-1 mt-5" className="hero-btn">
					Shop Now
				</Button>
			</Container>
		</div>
	);
}

export default Hero;
