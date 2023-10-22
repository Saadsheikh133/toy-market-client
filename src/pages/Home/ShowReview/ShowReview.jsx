import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'
import { BiSolidQuoteLeft } from "react-icons/bi";

const ShowReview = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('https://b7a11-toy-marketplace-server-side-nine.vercel.app/reviews')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, [])

    return (
        <div>
            <h2 className='text-6xl my-10 text-center font-bold'>All Reviews Are Here</h2>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 50,
                    },
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                {
                    reviews.map(review => <SwiperSlide key={review._id}> <div className="bg-purple-200 py-4 rounded-ee-[80px] rounded-ss-[80px]">
                        <div className="card-body text-lg font-semibold px-10">
                            <h2 className="card-title font-bold mb-2 text-2xl">{review.product}</h2>
                            <div className="flex justify-between">
                                <p>
                                    <Rating
                                        style={{ maxWidth: 180 }}
                                        value={review.rating}
                                        readOnly
                                    />
                                </p>
                                <BiSolidQuoteLeft size={50}></BiSolidQuoteLeft>
                            </div>
                            <p className="text-xl mt-4">{review.review}</p>
                            <h2 className="card-title font-bold text-xl">{review.name}</h2>
                        </div>
                    </div></SwiperSlide>)
                }
            </Swiper>
        </div>
    );
};

export default ShowReview;