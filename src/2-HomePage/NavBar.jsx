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

function NavigationBar() {
	return (
		<Navbar expand="lg" className="bg-body-tertiary nav-container nav-bar-cont">
			<Container className="ms-5 ">
				<Navbar.Brand href="#home">
					<img
						src="src/assets/logo.png"
						alt="logo"
						width="75"
						height="65"
						className="d-inline-block me-4 align-text-middle"
						id="brand-logo"
					/>
				</Navbar.Brand>

				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto">
						<Nav.Link href="#home">About</Nav.Link>
						<Nav.Link href="#link">Blog</Nav.Link>
						<Nav.Link href="#link">Contact</Nav.Link>
						<NavDropdown title="Browse" id="basic-nav-dropdown">
							<NavDropdown.Item href="#action/3.1">
								Children's Books
							</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.2">
								Literature & Fiction
							</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.3">
								Young Adult Fiction
							</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item href="#action/3.4">Nonfiction</NavDropdown.Item>
						</NavDropdown>
					</Nav>
				</Navbar.Collapse>
			</Container>
			<Form inline id="search-form">
				<Row>
					<Col xs="auto">
						<Form.Control
							type="text"
							placeholder="Title, Author, Genre"
							className="mr-sm-2 nav-search-input fs-5 p-2"
						/>
					</Col>
					<Col xs="auto">
						<Button type="submit" className="nav-search-btn fs-5">
							Search
						</Button>
					</Col>
				</Row>
			</Form>
		</Navbar>
	);
}

export default NavigationBar;
