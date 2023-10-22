import { Rating } from '@smastrom/react-rating';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ToyDetails = () => {
    const [toyInfo, setToyInfo] = useState([]);
    const { id } = useParams();
    const { sellerName, price, rating, quantity, description, img, toyName, sub_category, sellerEmail } = toyInfo;

    useEffect(() => { 
        fetch(`https://b7a11-toy-marketplace-server-side-nine.vercel.app/allToys/${id}`)
            .then(res => res.json())
            .then(data => {
                setToyInfo(data)
        })
    }, [id])


    useEffect(() => { 
        fetch(`https://b7a11-toy-marketplace-server-side-nine.vercel.app/toys/${id}`)
            .then(res => res.json())
            .then(data => {
                setToyInfo(data)
        })
    }, [id])


    return (
        <div>
            <div className="card lg:w-1/2 mx-auto bg-base-100 shadow-xl image-full my-10">
                <figure><img src={ img } alt="Shoes" /></figure>
                <div className="card-body text-xl">
                    <figure className="">
                        <img src={ img } alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className='my-8 space-y-4 text-center'>
                        <h2 className="font-bold text-center text-4xl">Car Name: {toyName}</h2>
                        <h2 className="font-bold text-center text-2xl">Seller Name: {sellerName}</h2>
                        <p>{ sellerEmail}</p>
                        <p>Price: ${price}</p>
                        <div className='flex items-center justify-center w-1/3 mx-auto'>
                        <p>Ratting: { rating}</p>
                            <Rating
                                style={{ maxWidth: 120 }}
                                value={rating }
                                readOnly
                            />
                        </div>
                        <p>Quantity: {quantity}</p>
                        <p>Sub_Category: {sub_category}</p>
                        <p>Description: { description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ToyDetails;