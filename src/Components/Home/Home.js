import React from 'react';
import Banner from '../Banner/Banner';
import Bio from '../Bio/Bio';
import Footer from '../Footer/Footer';
import Service from '../service/Service';


const Home = () => {
    return (
        <div className='container '>
            <div class="shadow rounded text-center fs-1 p-4 mt-3">Mental Health <span style={{ color: 'lightblue', fontFamily: 'fantasy' }}> Matter</span></div>
            <Banner></Banner>
             <Bio></Bio>
            <div >
                <h1 className=' text-center'>Services you need most</h1>
                <Service></Service>
            </div>
          <Footer/>
        </div>

    );
};

export default Home;