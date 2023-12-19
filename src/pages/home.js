import React from "react";
import "../assets/css/home.css";
import background from "../assets/img/bg.jpg";
import Navbar from "../components/navbar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

function Home() {
	return (
		<>
			<Navbar />
			<Container>
				<Row>
					<Col
						sm="12"
						md="6"
						className="d-none d-md-block"
					>
            <img src={background} className="img-fluid" width="100%" />
          </Col>
					<Col md="6" className="align-self-center text-center mt-5">
						<h1 className="title-home">Selamat datang!</h1>
						<p className="subtitle-home mb-5">
							Uang pintar, membuatmu pintar mengelola uang
						</p>
						<a href="/login" className="button-home">
							Sign in
						</a>
					</Col>
				</Row>
			</Container>
		</>
	);
}

export default Home;
