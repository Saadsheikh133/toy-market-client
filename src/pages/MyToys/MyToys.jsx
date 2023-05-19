import React, { useContext, useEffect, useState } from 'react';
import MyToysCard from './MyToysCard';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2'

const MyToys = () => {
    const [myToys, setMyToys] = useState([]);
    const { user } = useContext(AuthContext)
    

    const handleDelete = (_id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "Are you sure to delete this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/addToys/${_id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                        )
                        const remaining = myToys.filter(toy => toy._id !== _id)
                        setMyToys(remaining)
                    })
            }
        })
    }


    const url = `http://localhost:5000/addToys?email=${user.email}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
            setMyToys(data)
        })
    },[url])
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
                        <th>Email</th>
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
                                handleDelete={handleDelete}
                            ></MyToysCard>)
                        }
                 
                </tbody>
            </table>
        </div>
    );
};

export default MyToys;