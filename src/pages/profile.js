import React from "react";
import profile from "../assets/img/profile.png";
import Navbar from "../components/navbar";

const Profile = () => {
	return (
		<div className="background-logo">
			<Navbar />
			<div className="orange-box">
				<h1>Profile</h1>
			</div>
			<div className="container mt-5">
				<div class="d-flex flex-wrap justify-content-center align-items-center">
					<div className="text-center">
						<img src={profile} />
            <h2>Profile</h2>
					</div>

					<div>
						<div className="bg-light py-2 rounded h5 px-4 text-center">ULFIATUL KHUSNA SANI</div>
						<div className="bg-light py-2 rounded h5 px-4 text-center">khusnasaniulfiatul@gmail.com</div>
						<div className="bg-light py-2 rounded h5 px-4 text-center">+62 813-3159-9891</div>
					</div>
				</div>
				<div className="d-flex justify-content-center align-items-center mt-5">
					<a href="/setting" className="text-decoration-none">
						<button className="btn btn-success px-5 me-4">Back</button>
					</a>
					<a href="/login" className="text-decoration-none">
						<button className="btn btn-danger px-5 ms-4">Logout</button>
					</a>
				</div>
			</div>
		</div>
		//     {/* +62 813-3159-9891 */}
		//     <div
		//       style={{
		//         position: 'absolute',
		//         width: '207px',
		//         height: '32px',
		//         left: '714px',
		//         top: '525px',
		//         fontFamily: 'Outfit',
		//         fontStyle: 'normal',
		//         fontWeight: '600',
		//         fontSize: '25px',
		//         lineHeight: '32px',
		//         color: '#000000',
		//       }}
		//     >
		//       +62 813-3159-9891
		//     </div>

		//     {/* Rectangle 19 */}
		//     <div
		//       style={{
		//         position: 'absolute',
		//         width: '152px',
		//         height: '46px',
		//         left: '829px',
		//         top: '645px',
		//         background: 'rgba(252, 9, 9, 0.8)',
		//         borderRadius: '10px',
		//       }}
		//     ></div>

		//     {/* Rectangle 22 */}
		//     <div
		//       style={{
		//         position: 'absolute',
		//         width: '148px',
		//         height: '46px',
		//         left: '484px',
		//         top: '647px',
		//         background: 'rgba(116, 252, 9, 0.8)',
		//         borderRadius: '10px',
		//       }}
		//     ></div>

		//     {/* Log out */}
		//     <div
		//       style={{
		//         position: 'absolute',
		//         width: '85px',
		//         height: '32px',
		//         left: '862px',
		//         top: '651px',
		//         fontFamily: 'Outfit',
		//         fontStyle: 'normal',
		//         fontWeight: '600',
		//         fontSize: '25px',
		//         lineHeight: '32px',
		//         color: '#000000',
		//       }}
		//     >
		//       <a className="custom-button" href= "/login">Log Out</a>
		//     </div>

		//     {/* Back */}
		//     <div
		//       style={{
		//         position: 'absolute',
		//         width: '56px',
		//         height: '32px',
		//         left: '530px',
		//         top: '652px',
		//         fontFamily: 'Outfit',
		//         fontStyle: 'normal',
		//         fontWeight: '600',
		//         fontSize: '25px',
		//         lineHeight: '32px',
		//         color: '#000000',
		//       }}
		//     >
		//       <a className="custom-button" href= "/setting">Back</a>
		//     </div>

		//     {/* Rectangle 46 */}
		//     <div
		//       style={{
		//         position: 'absolute',
		//         width: '440px',
		//         height: '105px',
		//         left: '473px',
		//         top: '74px',
		//         background: '#FFA14A',
		//         borderRadius: '10px',
		//       }}
		//     ></div>

		//     {/* Profile */}
		//     <div
		//       style={{
		//         position: 'absolute',
		//         width: '157px',
		//         height: '54px',
		//         left: '614px',
		//         top: '96px',
		//         fontFamily: 'Inter',
		//         fontStyle: 'normal',
		//         fontWeight: '800',
		//         fontSize: '40px',
		//         lineHeight: '160%',
		//         /* or 54px */
		//         letterSpacing: '0.15px',
		//         color: '#EEEEEE',
		//       }}
		//     >
		//       Profile
		//     </div>

		//     {/* WhatsApp_Image_2023-11-02_at_10.10 3 */}
		//     <div
		//       style={{
		//         position: 'absolute',
		//         width: '84px',
		//         height: '70px',
		//         left: '1034px',
		//         top: '15px',
		//         background: 'url(WhatsApp_Image_2023-11-02_at_10.10.png)',
		//       }}
		//     ></div>

		//     {/* WhatsApp_Image_2023-11-02_at_10.09 4 */}
		//     <div
		//       style={{
		//         position: 'absolute',
		//         width: '101px',
		//         height: '66px',
		//         left: '648px',
		//         top: '14px',
		//         background: 'url(WhatsApp_Image_2023-11-02_at_10.09.png)',
		//       }}
		//     ></div>

		//     {/* WhatsApp_Image_2023-11-02_at_10.08 3 */}
		//     <div
		//       style={{
		//         position: 'absolute',
		//         width: '99px',
		//         height: '87px',
		//         left: '296px',
		//         top: '0px',
		//         background: 'url(WhatsApp_Image_2023-11-02_at_10.08.png)',
		//       }}
		//     ></div>
		//   </div>
		// </div>
	);
};

export default Profile;
