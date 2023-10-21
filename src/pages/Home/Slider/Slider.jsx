import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper";
import slider1 from '../../../assets/images/slider-1.jpg'
import slider2 from '../../../assets/images/slider-2.jpg'
import slider3 from '../../../assets/images/slider-3.jpg'
import slider4 from '../../../assets/images/slider-4.jpg'
import slider5 from '../../../assets/images/slider-9.jpg'
import slider6 from '../../../assets/images/slider-6.jpg'
import slider7 from '../../../assets/images/slider-7.jpg'
import slider8 from '../../../assets/images/slider-10.jpg'
import toast, { Toaster } from 'react-hot-toast';
import useTitle from '../../../hooks/useTitle';
import { Rating } from '@smastrom/react-rating';

const notify = () => toast('Thanks for buy this item');

const Slider = () => {
    useTitle('Home')
    return (
        <div className='my-20 h-full'>
            <Toaster />
            <h2 className='text-4xl font-bold text-center mb-16 mt-20'>New Toy Collections</h2>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                className="mySwiper "
            >
                <SwiperSlide>
                    <div className="card w-full bg-base-100 shadow-xl image-full h-full">
                        <figure><img src={slider1} alt="Shoes" /></figure>
                        <div className="card-body">
                            <img className='rounded-xl' src={slider1} alt="" />
                            <h2 className="card-title text-3xl">Mini car</h2>
                            <p>Price: $10</p>
                            <p className='flex gap-4 items-center'>Ratings: 4.9 <Rating
                                style={{ maxWidth: 180 }}
                                value={4.9}
                                readOnly
                            /></p>
                            <div className="card-actions justify-end">
                                <button onClick={notify} className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="card w-full bg-base-100 shadow-xl image-full h-full">
                        <figure><img src={slider2} alt="Shoes" /></figure>
                        <div className="card-body">
                            <img className='rounded-xl' src={slider2} alt="" />
                            <h2 className="card-title text-3xl">Track</h2>
                            <p>Price: $11</p>
                            <p className='flex gap-4 items-center'>Ratings: 4.3 <Rating
                                style={{ maxWidth: 180 }}
                                value={4.3}
                                readOnly
                            /></p>
                            <div className="card-actions justify-end">
                                <button onClick={notify} className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="card w-full bg-base-100 shadow-xl image-full h-full">
                        <figure><img src={slider3} alt="Shoes" /></figure>
                        <div className="card-body">
                            <img className='rounded-xl' src={slider3} alt="" />
                            <h2 className="card-title text-3xl">Racing car</h2>
                            <p>Price: $ 30</p>
                            <p className='flex gap-4 items-center'>Ratings: 4.0 <Rating
                                style={{ maxWidth: 180 }}
                                value={4.0}
                                readOnly
                            /></p>
                            <div className="card-actions justify-end">
                                <button onClick={notify} className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="card w-full bg-base-100 shadow-xl image-full h-full">
                        <figure><img src={slider4} alt="Shoes" /></figure>
                        <div className="card-body">
                            <img className='rounded-xl' src={slider4} alt="" />
                            <h2 className="card-title text-3xl">New red car</h2>
                            <p>Price: $20</p>
                            <p className='flex gap-4 items-center'>Ratings: 4.2 <Rating
                                style={{ maxWidth: 180 }}
                                value={4.2}
                                readOnly
                            /></p>
                            <div className="card-actions justify-end">
                                <button onClick={notify} className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="card w-full bg-base-100 h-full shadow-xl image-full">
                        <figure><img src={slider5} alt="Shoes" /></figure>
                        <div className="card-body">
                            <img className='rounded-xl' src={slider5} alt="" />
                            <h2 className="card-title text-3xl">Awesome mini car</h2>
                            <p>Price: $55</p>
                            <p className='flex gap-4 items-center'>Ratings: 5 <Rating
                                style={{ maxWidth: 180 }}
                                value={5}
                                readOnly
                            /></p>
                            <div className="card-actions justify-end">
                                <button onClick={notify} className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="card w-full bg-base-100 shadow-xl image-full h-full">
                        <figure><img src={slider6} alt="Shoes" /></figure>
                        <div className="card-body">
                            <img className='rounded-xl' src={slider6} alt="" />
                            <h2 className="card-title text-3xl">Awesome mini car</h2>
                            <p>Price: $55</p>
                            <p className='flex gap-4 items-center'>Ratings: 4.5 <Rating
                                style={{ maxWidth: 180 }}
                                value={4.5}
                                readOnly
                            /></p>
                            <div className="card-actions justify-end">
                                <button onClick={notify} className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="card w-full bg-base-100 shadow-xl image-full h-full">
                        <figure><img src={slider7} alt="Shoes" /></figure>
                        <div className="card-body">
                            <img className='rounded-xl' src={slider7} alt="" />
                            <h2 className="card-title text-3xl">Awesome mini car</h2>
                            <p>Price: $55</p>
                            <p className='flex gap-4 items-center'>Ratings: 4.9 <Rating
                                style={{ maxWidth: 180 }}
                                value={4.9}
                                readOnly
                            /></p>
                            <div className="card-actions justify-end">
                                <button onClick={notify} className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="card w-full bg-base-100 glass shadow-xl image-full h-full">
                        <figure><img src={slider4} alt="Shoes" /></figure>
                        <div className="card-body">
                            <img className='rounded-xl' src={slider4} alt="" />
                            <h2 className="card-title text-3xl">Awesome mini car</h2>
                            <p>Price: $55</p>
                            <p className='flex gap-4 items-center'>Ratings: 4.8 <Rating
                                style={{ maxWidth: 180 }}
                                value={4.8}
                                readOnly
                            /></p>
                            <div className="card-actions justify-end">
                                <button onClick={notify} className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="card w-full bg-base-100 shadow-xl image-full h-full">
                        <figure><img src={slider8} alt="Shoes" /></figure>
                        <div className="card-body">
                            <img className='rounded-xl' src={slider8} alt="" />
                            <h2 className="card-title text-3xl">New design car</h2>
                            <p>Price: $100</p>
                            <p className='flex gap-4 items-center'>Ratings: 4.9 <Rating
                                style={{ maxWidth: 180 }}
                                value={4.9}
                                readOnly
                            /></p>
                            <div className="card-actions justify-end">
                                <button onClick={notify} className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
            <div className="divider divide-y-4 divide-slate-400/25 mt-10"></div>
        </div>
    );
};

export default Slider;