import React from 'react';
import { Carousel } from 'react-bootstrap';
import Bio from '../Bio/Bio';
import Service from '../service/Service';
import './Home.css';

const Home = () => {
    return (
        <div className='container '>
            <div class="shadow rounded text-center fs-1 p-4 mt-3">Mental Health <span style={{ color: 'lightblue', fontFamily: 'fantasy' }}> Matter</span></div>
            <Carousel>
                <Carousel.Item >

                    <img
                        className="d-block w-100"
                        src={'https://img.freepik.com/free-vector/mental-health-social-media-post-template_23-2149049607.jpg?t=st=1650181932~exp=1650182532~hmac=549d79fbbf412345d9880e155c881d6259adf47b563ddac479a317c3c969ddef&w=1060'}
                        alt="First slide"
                    />


                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={'https://img.freepik.com/free-vector/flat-mental-health-instagram-stories_23-2149036130.jpg?t=st=1650181932~exp=1650182532~hmac=a8280e424a1f9c50b7d8bbe610948159208ae3715eec346ff55bb4ff9cd050d5&w=1380'}
                        alt="Second slide"
                    />


                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={'https://img.freepik.com/free-vector/hand-drawn-mental-health-instagram-posts-collection_23-2149055027.jpg?t=st=1650181932~exp=1650182532~hmac=dc2ed653a0ac1d1c632c39d55768b479b5a358aea5e108e2e4f7d4eb3336caf3&w=1060'}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
             <Bio></Bio>
            <div >
                <h1 className=' text-center'>Services you need most</h1>
                <Service></Service>
            </div>

        </div>

    );
};

export default Home;