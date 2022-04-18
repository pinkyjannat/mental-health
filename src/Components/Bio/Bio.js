import React from 'react';
import { Link } from 'react-router-dom';
import pinky from'../../images/pinky.png';
import About from '../About/About';

const Bio = () => {
    return (
       <div id="bio" className='row'>
           <div className="col-lg-8">
           <div className=' p-5 my-3'>
        <p className='text-dark  fs-4'> Now I am offering free mental health support for Ontario residents dealing with stress, anxiety, depression and more, thanks to funding from the Government of Ontario. I am a licensed mental health practitionar who have treating like over 5k people since last decade! you can contact me if you have any issues with your mental health like depression, anxiety or any accidental trauma</p>
        <div className='mx-auto'>
            <Link to='/about' >
            <button className='btn btn-dark btn-lg mb-4 px-5' > Details </button>
            </Link>
        
        </div>
    </div>
           </div>
           <div className="col-lg-4 mt-4">
          <img src={pinky} alt="" />
           </div>
       </div>
    );
};

export default Bio;