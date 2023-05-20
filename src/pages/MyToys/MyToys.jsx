import React, { useContext, useEffect, useState } from 'react';
import MyToysCard from './MyToysCard';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2'
import useTitle from '../../hooks/useTitle';

const MyToys = () => {
    const [myToys, setMyToys] = useState([]);
    const { user } = useContext(AuthContext)
    useTitle('My Toys')

    // if (data.modifiedCount > 0) {
    //     const remaining = bookings.filter(booking => booking._id !== id)
    //     const updated = bookings.find(booking => booking._id === id)
    //     updated.status = "confirm"
    //     const newBookings = [updated, ...remaining]
    //     setBookings(newBookings)

    // }
    

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

    const handleUpdateToy = event => {
        fetch(`http://localhost:5000/addToys/${myToys._id}`, {
            method: 'PUT',
            headers: { "content-type": "application/json" },
            body: JSON.stringify(event)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'success!',
                        text: 'Coffee updated successfully',
                        icon: 'success',
                        showConfirmButton: false,
                        timer: 1500,
                        confirmButtonText: 'Cool'
                    })
                }
        })
    }


    const url = `http://localhost:5000/allToys?email=${user.email}`
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
                        Array.isArray(myToys) &&
                            myToys.map(toy => <MyToysCard
                                key={toy._id}
                                toy={toy}
                                handleDelete={handleDelete}
                                handleUpdateToy={handleUpdateToy}
                            ></MyToysCard>)
                        }
                 
                </tbody>
            </table>
        </div>
    );
};

export default MyToys;