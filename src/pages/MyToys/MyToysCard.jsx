import React from 'react';
import { HiXCircle } from "react-icons/hi";

const MyToysCard = ({ toy }) => {
    const { url, toyName, price, quantity, ratting } = toy;
    return (
        < tr >
            <th>
                <HiXCircle className='cursor-pointer' size={50}></HiXCircle>
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
            <td>${ price }</td>
            <td>{ quantity }</td>
            <td>{ ratting }</td>
            <th>
                <button className="btn btn-primary">Update</button>
            </th>
        </tr >
    );
};

export default MyToysCard;