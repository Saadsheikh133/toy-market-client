import React, { useContext, useEffect } from 'react';
import { Rating } from '@smastrom/react-rating'
import useTitle from '../../../hooks/useTitle';
import { Link, Navigate } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import Swal from 'sweetalert2'

const SingleCategory = ({ toy }) => {
    const { _id, img, price, quantity, sub_category, rating, toyName } = toy;
    const { user } = useContext(AuthContext)
    useTitle('Home')

    const handleViewDetail = () => {
        
        if (!user) {
            Swal.fire({
                title: 'warning!',
                text: 'You have to log in first to view details',
                icon: 'success',
                showConfirmButton: false,
                timer: 1500,
                confirmButtonText: 'Cool'
            })
       }

    }


    return (
        <div>
            <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 h-full w-full mx-auto pb-10">
                <a href="#">
                    <img className="rounded-t-lg" src={img} alt="" />
                </a>
                <div className="p-5 text-center">
                    <a href="#">
                        <h5 className="my-3 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{toyName}</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-200">Price: ${price}</p>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-200">sub_category: {sub_category}</p>
                    <div className='flex justify-center items-center gap-5 py-3'>
                        <p className=" font-normal text-gray-700 dark:text-gray-200">Ratting: {rating}</p>
                        <Rating
                            style={{ maxWidth: 120 }}
                            value={rating}
                            readOnly
                        />
                    </div>
                    <p className="mb-5 font-normal text-gray-700 dark:text-gray-200">Quantity: {quantity}</p>

                   
                        
                            <Link to={`/toyDetails/${_id}`}>
                                <button onClick={handleViewDetail} className='btn bg-gradient-to-r from-green-400 to-purple-500 hover:from-pink-500 hover:to-sky-500 text-white'>View Details</button>
                            </Link>
                    
                </div>
            </div>



        </div>
    );
};

export default SingleCategory;