import React from 'react';
import img from '../../../assets/images/img-1.jpg';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import Swal from 'sweetalert2'

const SingleCard = () => {

    const handleAlert = () => {
        Swal.fire({
            title: 'Thanks for buy this car.',
            width: 600,
            padding: '3em',
            color: '#716add',
            background: '#fff url(/images/trees.png)',
            backdrop: `
            rgba(0,0,123,0.4)
            url("/images/nyan-cat.gif")
            left top
            no-repeat
             `
        })
    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200 my-10">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={img} className="lg:max-w-lg rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold mb-5">Best Quality Car!</h1>
                        <p className="py-6 text-xl">This car, is a miniature representation of an automobile. Other miniature motor vehicles, such as trucks, buses, or even ATVs, etc. are often included in this general category. Because many miniature vehicles were originally aimed at children as playthings, there is no precise difference between a model car and a toy car, yet the word model implies either assembly required or the accurate rendering of an actual vehicle at smaller scale. The kit building hobby became popular through the 1950s, while the collecting of miniatures by adults started to pick up momentum around 1970. Precision-detailed miniatures made specifically for adults are a significant part of the market since the mid-1980s.</p>
                        <div className='lg:flex justify-between my-5 text-xl'>
                            <p>Price: $1500</p>
                            <div className='flex gap-2 my-4'>
                                <p>Ratting: 4.9</p>
                                <Rating
                                    style={{ maxWidth: 120 }}
                                    value={5}
                                    readOnly
                                />
                            </div>
                        </div>
                        <button onClick={handleAlert} className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleCard;