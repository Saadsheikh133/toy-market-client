import React from 'react';
import Swal from 'sweetalert2';

const AddReview = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const product = form.product.value;
        const rating = form.rating.value;
        const review = form.review.value;
        const formInfo = {name, product, rating, review}
        console.log(formInfo)
        fetch('https://b7a11-toy-marketplace-server-side-nine.vercel.app/addReview', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(formInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        position: 'top-center',
                        icon: 'success',
                        title: 'Review has been added successfully',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    form.reset();
                }
        })
    }

    return (
        <div className='mx-auto bg-slate-100 pt-10'>
            <h2 className='text-5xl text-center font-bold my-10'>Share Your Review!</h2>
            <form onSubmit={handleSubmit} className='lg:w-1/2 mx-auto' required>
                <label>Name*</label><br />
                <input className='py-3 px-2 w-full border rounded-lg my-4' type="text" name="name" placeholder='Your Name' required/><br />
                <label>Product Name*</label><br />
                <input className='py-3 px-2 w-full rounded-lg my-4 border' type="text" name="product" placeholder='Product Name' required/><br />
                <label>Rating*</label><br />
                <input className='py-3 px-2 w-full rounded-lg my-4 border' type="number" name="rating" placeholder='Rating' required/><br />
                <label>Message*</label><br />
                <textarea className='py-3 px-2 w-full border rounded-lg my-2' name="review" placeholder='Your Message' required /><br />
                <input className='bg-gradient-to-r from-purple-600 to-cyan-400 text-white py-3 px-6 rounded-lg cursor-pointer' type="submit" value="Add Review" /><br />
            </form>
        </div>
    );
};

export default AddReview;