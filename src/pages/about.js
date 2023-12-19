// BlogPage.js
import React from "react";
import Navbar from "../components/navbar";

function About() {
	return (
		<div className="background-logo">
			<Navbar />
			<div className="orange-box">
				<h1>About Us</h1>
			</div>
			<div className="container">
				<div className="card bg-light mt-5">
					<div className="card-body">
						<p className="text-center fs-5 fw-bold">
							Selamat datang di UANGPINTAR solusi keuangan pribadi berbasis
							website untuk mencapai tujuan keuangan anda. Kami menyediakan alat
							yang intuitif dan aman, membantu anda mengelola keuangan pribadi
							dengan mudah. Dengan UANGPINTAR, wujudkan tujuan finansial anda
							dengan simpel dan efisien.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default About;
