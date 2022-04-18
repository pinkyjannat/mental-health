import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
    // console.log(props.product)
    const { service, picture, details, price } = product;
    return (
        <div className=' col-lg-4 '>

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


/* <Card>
<Card.Img className='w-50 h-25 mx-auto' variant="top" src={picture} />
<Card.Body>
    <Card.Title>{name}</Card.Title>
    <Card.Text>
        {about}
    </Card.Text>
    <h5>${price}</h5>
</Card.Body>
<div className='mx-auto'>
   <Link to="/checkout"><button className='px-5 my-3 py-2 bg-dark text-white rounded-2'>Learn more</button></Link>
   </div>
</Card> */
         
        
        


    );
};

export default Product;