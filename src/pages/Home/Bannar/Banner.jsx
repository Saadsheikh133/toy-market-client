import React from 'react';
import img from '../../../assets/images/img.jpg'
import useTitle from '../../../hooks/useTitle';

const Banner = () => {
    useTitle('Home')
    return (
        <div className='mt-10 relative'>
            <img className='w-full h-[700px] rounded-xl' src={img} alt="" />
            <div className='absolute rounded-xl flex items-center md:pl-10 h-full text-white bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] left-0 top-0'>
                <div className='w-1/2 '>
                    <h2 className='text-5xl font-bold mb-5'>Toy racing cars</h2>
                    <p className='text-xl leading-normal'>All car enthusiasts start somewhere. Whether your young one has already sparked an interest in automotives or just wants to learn, car toys are a great way to get kids excited and involved.</p>
                </div>
            </div>
        </div>
    );
};

export default Banner;