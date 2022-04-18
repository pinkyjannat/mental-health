import React from 'react';
import { Link } from 'react-router-dom';
import apple from '../../images/apple.png';
import googleplay from '../../images/googleplay.png'

const Footer = () => {
	return (
		<div>
			 <footer>
    <section class="bg-dark text-white d-flex align-item-center justify-content-around pt-4 pb-4">
      <div> <p>©2020. All rights reserved.</p></div>
     <div class=" apps">
       <h4>Get the App</h4>
       <div> 
        <img src={apple} alt="" />
      </div>
       <div> 
	   <img src={googleplay} alt="" />
      </div>
     </div>
    </section>
    </footer>
		</div>
	);
};

export default Footer;
