import React from 'react';
import { Rating } from '@smastrom/react-rating'
import useTitle from '../../../hooks/useTitle';

const SingleCategory = ({ toy }) => {
    const { img, price, quantity, rating, toyName } = toy;
    useTitle('SingleCategory')
    return (
        <div className='my-10'>
            <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 h-full w-full mx-auto pb-10">
                <a href="#">
                    <img className="rounded-t-lg" src={img} alt="" />
                </a>
                <div className="p-5 text-center">
                    <a href="#">
                        <h5 className="my-3 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{ toyName }</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-200">Price: ${ price }</p>
                    <div className='flex justify-center items-center gap-5 py-3'>
                        <p className=" font-normal text-gray-700 dark:text-gray-200">Ratting: {rating}</p>
                        <Rating
                            style={{ maxWidth: 120 }}
                            value={rating}
                            readOnly
                        />
                        {/* <Rating readOnly value={2.42} /> */}
                    </div>
                    <p className="mb-5 font-normal text-gray-700 dark:text-gray-200">Quantity: { quantity }</p>
                   
                    <button className='btn btn-primary'>View Details</button>
                </div>
            </div>

        </div>
    );
};

export default SingleCategory;