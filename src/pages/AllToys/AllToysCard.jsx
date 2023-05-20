import React from 'react';
import useTitle from '../../hooks/useTitle';
import { Link } from 'react-router-dom';

const AllToysCard = ({ toy, i }) => {
    const { _id, sellerName, toyName, sub_category, price, quantity } = toy;
    useTitle('All toys')

    return (
        < tr >
            <th>{i + 1}</th>
            <td>{sellerName}</td>
            <td>{toyName}</td>
            <td>{sub_category}</td>
            <td>{price}</td>
            <td>{quantity}</td>
            <td>
                <Link to = {`/toyDetails/${_id}`}>
                    <button className='btn btn-sm bg-gradient-to-r from-green-400 to-purple-500 hover:from-pink-500 hover:to-sky-500 text-white'>View details</button>
                </Link>
            </td>
        </tr >
    );
};

export default AllToysCard;