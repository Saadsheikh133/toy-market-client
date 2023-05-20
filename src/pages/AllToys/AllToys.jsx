import React, { useEffect, useState } from 'react';
import AllToysCard from './AllToysCard';
import useTitle from '../../hooks/useTitle';

const AllToys = () => {
    const [allToys, setAllToys] = useState([]);
    const [toys, setToys] = useState([]);
    useTitle('All toys')

    useEffect(() => {
        fetch('http://localhost:5000/addToys')
            .then(res => res.json())
            .then(data => {
            setAllToys(data)
        })
    }, [])

    useEffect(() => {
        fetch('http://localhost:5000/toys')
            .then(res => res.json())
            .then(data => {
            setToys(data)
        })
    }, [])

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Serial No.</th>
                            <th>Seller Name</th>
                            <th>Toy Name</th>
                            <th>Sub-category</th>
                            <th>Price</th>
                            <th>Available Quantity</th>
                            <th>Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allToys.map(toy => <AllToysCard
                                key={toy._id}
                                toy= {toy}
                            ></AllToysCard>)
                        }
                        {
                            toys.map(toy => <AllToysCard
                                key={toy._id}
                                toy={toy}
                            ></AllToysCard>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllToys;