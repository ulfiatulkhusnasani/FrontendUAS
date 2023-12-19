import React, { useState } from "react";
import logo from "../assets/img/lg.jpeg";
import "../assets/css/auth.css";
import { Link } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

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
					<h2 className="mt">SIGN IN</h2>
					<p>Sign in to continue to our application</p>
					<form onSubmit={handleSubmit}>
						<div className="datainput">
							<input
								className="validate"
								name="name"
								type="email"
								value={email}
								onChange={handleEmailChange}
								placeholder="Email"
								required
							/>
							<span className="highlight"></span>
							<span className="bar"></span>
						</div>
						<div className="datainput">
							<input
								className="validate"
								type="password"
								name="email"
								value={password}
								onChange={handlePasswordChange}
								placeholder="Password"
								required
							/>
							<span className="highlight"></span>
							<span className="bar"></span>
						</div>
						<div className="text-right">
							<a href="/login" className="forgot">
								Forgot Password?
							</a>
						</div>
						<div className="text-center mt">
							<Link to="/pencatatan">
								<button className="btn-submit mb-3" type="submit">
									Log In
								</button>
							</Link>
							<p>
								Don't have account?{" "}
								<a href="/register" className="text-orange fw-bold">
									{" "}
									Sign Up
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

export default Login;
