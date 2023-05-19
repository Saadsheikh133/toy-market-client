import React, { useEffect, useState } from 'react';
import MyToysCard from './MyToysCard';

const MyToys = () => {
    const [myToys, setMyToys] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/addToys`)
            .then(res => res.json())
            .then(data => {
            setMyToys(data)
        })
    },[])
    return (
        <div className="overflow-x-auto w-full">
            <table className="table w-full">
                {/* head */}
                <thead>
                    <tr>
                        <th>
                            Delete service
                        </th>
                        <th>Image</th>
                        <th>Name</th>
                        <th>price</th>
                        <th>Quantity</th>
                        <th>Ratting</th>
                        <th>Update</th>
                    </tr>
                </thead>
                <tbody>
                        {
                            myToys.map(toy => <MyToysCard
                                key={toy._id}
                                toy={toy}
                            ></MyToysCard>)
                        }
                 
                </tbody>
            </table>
        </div>
    );
};

export default MyToys;