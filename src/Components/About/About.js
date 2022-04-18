import React from 'react';
import pinky from'../../images/pinky.png';

const About = () => {
    return (
        <div>
            <div id="bio" className='row'>
           <div className="col-lg-8">
           <div className=' p-5 my-3'>
        <p className='text-dark fs-3 '>Hello.... I am Jannatul Ferdous. I am a passionate web developer who excited to learn new things and love to see its results when implemented on a webpage. My goal is to become a full stack web developer so that i can combined my front end code, back end code along with database system and give a complete ,functional and eye catching website for clients.
        
        I am working hard to achieving my goal as i am a mom of three years old toddler,i have lots of works to do.But now a days i am enjoying coding whole night so that no one can disturb me then,thats my only me time for a day! I am also sacrificing gossiping, going out with friends and shopping which was my most favorite things to do all time! My bio is no pain no gain, i want to suffer a lot of pain to become a qualified developer! </p>
        
    </div>
           </div>
           <div className="col-lg-4">
          <img src={pinky} alt="" />
           </div>
       </div>
            
        </div>
    );
};

export default About;