import React, { useState } from 'react';
import { HiXCircle } from "react-icons/hi";

const MyToysCard = ({ toy, handleDelete }) => {
    const { _id, url, toyName, price, quantity, ratting, email } = toy;

   
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
                <label htmlFor="my-modal-5" className="btn btn-primary">Update</label>
                {/* Put this part before </body> tag */}
                <input type="checkbox" id="my-modal-5" className="modal-toggle" />
                <div className="modal">
                    <div className="modal-box w-11/12 max-w-5xl">
                        <h3 className="font-bold text-lg">Congratulations random Internet user!</h3>
                        <p className="py-4">You have been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                        <div className="modal-action">
                            <label htmlFor="my-modal-5" className="btn">Yay!</label>
                        </div>
                    </div>
                </div>
            </th>
        </tr >
    );
};

export default MyToysCard;