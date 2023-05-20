import React from 'react';

const SingleCategory = ({ toy }) => {
    const { img, price, quantity, ratting, toyName } = toy;
    return (
        <div className='my-10'>
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 h-full w-full mx-auto">
                <a href="#">
                    <img className="rounded-t-lg" src={img} alt="" />
                </a>
                <div className="p-5 text-center">
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{ toyName }</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-200">Price: ${ price }</p>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-200">Ratting: { ratting }</p>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-200">Quantity: { quantity }</p>
                   
                    <button className='btn btn-primary'>View Details</button>
                </div>
            </div>

        </div>
    );
};

export default SingleCategory;