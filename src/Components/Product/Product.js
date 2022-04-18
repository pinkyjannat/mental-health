import React from 'react';
import{ Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
    // console.log(props.product)
    const { service, picture, details,price } = product;
    return (
        <div className=' col-lg-4 '>
            
                <div >
                <Card >
                    <Card.Img variant="top" src={picture} />
                    <Card.Body>
                        <h3>{service}</h3>
                        <p>{details}</p>
                        <h3>${price}</h3>
                    </Card.Body>
                    <div className='mx-auto'>
                        <Link to='/checkout'>
                        <button className='btn btn-dark btn-lg mb-4 px-5' type='submit'> Details </button>
                        </Link>
                    </div>
                </Card>
                </div>
            </div>
         
        
        


    );
};

export default Product;