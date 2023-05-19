import { HiXCircle } from "react-icons/hi";

const MyToysCard = ({ toy, handleDelete, handleUpdateToy }) => {
    const { _id, url, toyName, price, quantity, ratting, email } = toy;

    const handleUpdate = event => {
        event.preventDefault();
        const form = event.target;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const details = form.details.value;
        const toyInfo = {
            price,
            quantity,
            details
        }
        console.log(toyInfo)
        handleUpdateToy(toyInfo)
    }


    return (
        < tr >
            <th>
                <button onClick={() => handleDelete(_id)}>
                    <HiXCircle size={50}></HiXCircle>
                </button>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-20 h-20">
                            <img src={url} />
                        </div>
                    </div>
                </div>
            </td>
            <td>
                {toyName}
            </td>
            <td>{email}</td>
            <td>${price}</td>
            <td>{quantity}</td>
            <td>{ratting}</td>
            <th>
                {/* The button to open modal */}
                <label htmlFor="my-modal-5" className="btn btn-primary">Update</label>

                {/* Put this part before </body> tag */}
                <input type="checkbox" id="my-modal-5" className="modal-toggle" />
                <div className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box">
                        <form onSubmit={ handleUpdate} className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
                            <h2 className='text-3xl text-center'>Update Toy:</h2>
                            <div className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Price</span>
                                    </label>
                                    <input type="number" placeholder="price" name='price' className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Available Quantity</span>
                                    </label>
                                    <input type="text" placeholder="Quantity" name='quantity' className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Details</span>
                                    </label>
                                    <input type="text" placeholder="description" name='details' className="input input-bordered" />
                                </div>
                                <div className="form-control mt-6">
                                    <input className='btn btn-primary' type="submit" value="Update Toy" />
                                </div>
                            </div>
                        </form>
                        <div className="modal-action">
                            <label htmlFor="my-modal-5" className="btn">X</label>
                        </div>
                    </div>
                </div>
            </th>
        </tr >
    );
};

export default MyToysCard;