import React from 'react';
import useTitle from '../../hooks/useTitle';

const AllToysCard = ({ toy }) => {
    const { sellerName, toyName, sub_category, price, quantity } = toy;
    useTitle('All toys')
   
    return (
        < tr >
            <th>1</th>
            <td>{sellerName}</td>
            <td>{ toyName }</td>
            <td>{ sub_category }</td>
            <td>{ price }</td>
            <td>{ quantity }</td>
            <td>
                <button className='btn btn-primary btn-sm'>View details</button>
            </td>
        </tr >
    );
};

export default AllToysCard;