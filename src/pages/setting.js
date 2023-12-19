import React from "react";
import profile from "../assets/img/profile.png";
import Navbar from "../components/navbar";

const Setting = () => {
	return (
		<div className="background-logo">
			<Navbar />
			<div className="orange-box">
				<h1>Setting</h1>
			</div>
			<div className="container mt-5">
				<div class="d-flex justify-content-center align-items-center">
					<img src={profile} />
					<a href="/profile" className="h2 text-decoration-none">
						<h2>Profile</h2>
					</a>
				</div>
				<div className="text-center">
					<a href="/login" className="text-decoration-none">
						<button className="btn btn-danger mt-5 px-5">Logout</button>
					</a>
				</div>
			</div>
		</div>
	);
};

export default Setting;
