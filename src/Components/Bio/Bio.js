import React from 'react';
import pinky from'../../images/pinky.png';

const Bio = () => {
    return (
       <div id="bio" className='row'>
           <div className="col-lg-8">
           <div className=' p-5 my-3'>
        <p className='text-dark fs-3 '> Now I am offering free mental health support for Ontario residents dealing with stress, anxiety, depression and more, thanks to funding from the Government of Ontario. I am a licensed mental health practitionar who have treating like over 5k people since last decade! you can contact me if you have any issues with your mental health like depression, anxiety or any accidental trauma</p>
        <div className='mx-auto'>
            <button className='btn btn-dark btn-lg mb-4 px-5' > Details </button>
        </div>
    </div>
           </div>
           <div className="col-lg-4">
          <img src={pinky} alt="" />
           </div>
       </div>
    );
};

export default Bio;