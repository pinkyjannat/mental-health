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
        <div >
         <h1 >service={service.length}</h1>
         {
          service.map(product =><Product
          key={product.id} product={product}></Product>)
         }
        </div>
    );
};

export default Service;