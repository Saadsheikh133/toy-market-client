import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2'

const AddToy = () => {
    const { user } = useContext(AuthContext);

    const handleAddToy = event => {
        event.preventDefault();
        const form = event.target;
        const url = form.url.value;
        const toyName = form.toyName.value;
        const sellerName = form.sellerName.value;
        const email = form.email.value;
        const quantity = form.quantity.value;
        const price = form.price.value;
        const ratting = form.ratting.value;
        const details = form.details.value;
        const category = form.category.value;
        const formInfo = {
            url, toyName, sellerName, email, quantity, price, ratting, details, category
        }
        console.log(formInfo)

        fetch('http://localhost:5000/addToys', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(formInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'Toy has been created successfully',
                    showConfirmButton: false,
                    timer: 1500
                })
        })
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200 lg:w-full my-10 py-10 rounded-xl">
                <div className="hero-content flex-col lg:w-full">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold mb-10">Add A Toy</h1>
                    </div>
                    <form onSubmit={handleAddToy} className="card flex-shrink-0 shadow-2xl bg-base-100 lg:w-1/2 py-8">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="url" name='url' placeholder="photo url" className="input input-bordered" required/>
                            </div>
                            <div className='lg:flex lg:gap-4 lg:max-w-full'>
                                <div className="form-control lg:w-1/2">
                                    <label className="label">
                                        <span className="label-text">Toy Name</span>
                                    </label>
                                    <input type="text" name='toyName' placeholder="toy name" className="input input-bordered" required />
                                </div>
                                <div className="form-control lg:w-1/2">
                                    <label className="label">
                                        <span className="label-text">Seller Name</span>
                                    </label>
                                    <input type="text" name='sellerName' defaultValue={user?.displayName} placeholder="seller name" className="input input-bordered" required />
                                </div>
                           </div>
                            <div className='lg:flex gap-4 max-w-full'>
                                <div className="form-control lg:w-1/2">
                                    <label className="label">
                                        <span className="label-text">Seller Email</span>
                                    </label>
                                    <input type="email" name='email' defaultValue={user?.email} placeholder="email" className="input input-bordered" required />
                                </div>
                                <div className="form-control lg:w-1/2">
                                    <label className="label">
                                        <span className="label-text">Available quantity</span>
                                    </label>
                                    <input type="number" name='quantity' placeholder="quantity" className="input input-bordered" required />
                                </div>
                            </div>
                            <div className='lg:flex lg:max-w-full lg:gap-4'>
                                <div className="form-control lg:w-1/2">
                                    <label className="label">
                                        <span className="label-text">Price</span>
                                    </label>
                                    <input type="number" name='price' placeholder="price" className="input input-bordered" required />
                                </div>
                                <div className="form-control lg:w-1/2">
                                    <label className="label">
                                        <span className="label-text">Ratting</span>
                                    </label>
                                    <input type="text" name='ratting' placeholder="ratting" className="input input-bordered" required />
                                </div>
                            </div>
                            <select name="category" id="">
                                <option value="car toy">car toy</option>
                            </select>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Description</span>
                                </label>
                                <textarea name="details" cols="30" rows="3" placeholder='description' className="input input-bordered" required></textarea>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Add A Toy" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddToy;