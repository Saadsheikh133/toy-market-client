import React, { useEffect, useState } from 'react';
import AllToysCard from './AllToysCard';
import useTitle from '../../hooks/useTitle';

const AllToys = () => {
    const [allToys, setAllToys] = useState([]);
    const [searchText, setSearchText] = useState('');
    useTitle('All toys')


    const handleSearch = () => {
        fetch(`http://localhost:5000/searchByToyName/${searchText}`)
            .then(res => res.json())
            .then(data => {
                setAllToys(data)
        })
    }


    useEffect(() => {
        fetch('http://localhost:5000/allToys')
            .then(res => res.json())
            .then(data => {
            setAllToys(data)
        })
    }, [])

    return (
        <div>
            <div className='lg:flex justify-center my-8'>
                <div className="form-control">
                    <div className="">
                        <input onChange={(e) => setSearchText(e.target.value)} type="text" name='text' placeholder="Search…" className="input input-bordered" />
                        <button onClick={handleSearch} className='btn bg-accent hover:bg-sky-500 ml-4'>Search</button>
                    </div>
                </div>
            </div>
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
                            allToys.map((toy, i) => <AllToysCard
                                key={toy._id}
                                toy={toy}
                                i={i}
                            ></AllToysCard>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllToys;