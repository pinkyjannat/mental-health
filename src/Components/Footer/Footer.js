
import React from 'react';
import { Link } from "react-router-dom";

const Footer = () => {
return (
	<div className='bg-dark'>
	<div>
		<div className='row'>
		<div className='col'>
			<h3 className='text-light'>About Us</h3>
			<Link to="#">Aim</Link>
			<Link to="#">Vision</Link>
			<Link to="#">Testimonials</Link>
		</div>
		<div className='col'>
			<h3 className='text-light'>Services</h3>
			<Link to="#">Writing</Link>
			<Link to="#">Internships</Link>
			<Link to="#">Coding</Link>
			<Link to="#">Teaching</Link>
		</div>
		<div className='col'>
			<h3 className='text-light'>Contact Us</h3>
			<Link to="#">Uttar Pradesh</Link>
			<Link to="#">Ahemdabad</Link>
			<Link to="#">Indore</Link>
			<Link to="#">Mumbai</Link>
		</div>
		<div className='row'>
			<h3 className='text-light'>Social Media</h3>
			<Link to="#">
			<i className="fab fa-facebook-f">
				<span style={{ marginLeft: "10px" }}>
				Facebook
				</span>
			</i>
			</Link>
			<Link to="#">
			<i className="fab fa-instagram">
				<span style={{ marginLeft: "10px" }}>
				Instagram
				</span>
			</i>
			</Link>
			<Link to="#">
			<i className="fab fa-twitter">
				<span style={{ marginLeft: "10px" }}>
				Twitter
				</span>
			</i>
			</Link>
			<Link to="#">
			<i className="fab fa-youtube">
				<span style={{ marginLeft: "10px" }}>
				Youtube
				</span>
			</i>
			</Link>
		</div>
		</div>
	</div>
	</div>
);
};
export default Footer;

