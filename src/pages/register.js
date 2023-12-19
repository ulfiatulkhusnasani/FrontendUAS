import React, { useState } from "react";
import logo from "../assets/img/lg.jpeg";
import "../assets/css/auth.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

function Register() {
	const [nama, setNama] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleNamaChange = (e) => {
		setNama(e.target.value);
	};

	const handleEmailChange = (e) => {
		setEmail(e.target.value);
	};

	const handlePasswordChange = (e) => {
		setPassword(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// You can handle form submission here, e.g., send data to an API or validate the inputs.
	};

	return (
		<Row>
			<Col sm="12" md="6">
				<div className="pad">
					<div className="row">
						<div className="column">
							<img src={logo} alt="Logo" width={70} />
						</div>
					</div>
					<h2 className="mt">SIGN UP</h2>
					<p>Sign up to register your account</p>
					<form onSubmit={handleSubmit}>
						<div className="datainput">
							<input
								type="text"
								value={nama}
								onChange={handleNamaChange}
								placeholder="Nama"
								required
							/>
						</div>
						<div className="datainput">
							<input
								type="email"
								value={email}
								onChange={handleEmailChange}
								placeholder="Email"
								required
							/>
						</div>
						<div className="datainput">
							<input
								type="password"
								name="email"
								value={password}
								onChange={handlePasswordChange}
								placeholder="Password"
								required
							/>
						</div>

						<div className="text-center mt">
							<Link to="/pencatatan">
								<button className="btn-submit mb-3" type="submit">
									Sign Up
								</button>
							</Link>
							<p>
								Have an account?{" "}
								<a href="/login" className="text-orange">
									{" "}
									Sign In
								</a>
							</p>
						</div>
					</form>
				</div>
			</Col>
			<Col md="6" className="d-none d-md-block">
				<img src={logo} alt="Logo" className="img-logo" />
			</Col>
		</Row>
	);
}

export default Register;
