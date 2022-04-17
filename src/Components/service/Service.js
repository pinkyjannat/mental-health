import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Service = () => {
    const[service,setService]=useState([]);

    useEffect(()=>{
    fetch('fakeData.json')
    .then(res=>res.json())
    .then(data=>setService(data))

    },[])

    return (
        <div className='row g-4' >
        
         {
          service.map(product =><Product
          key={product.id} product={product}></Product>)
         }
        </div>
    );
};

export default Service;