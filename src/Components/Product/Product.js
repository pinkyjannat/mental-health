import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
    // console.log(props.product)
    const { service, picture, details } = product;
    return (
        <div>
            <h1>this is service</h1>
                <div className='col-sm-6 col-lg-4'>
                <Card >
                    <Card.Img variant="top" src={picture} />
                    <Card.Body>
                        <Card.Title>{service}</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
                </div>
            </div>
         
        
        


    );
};

export default Product;