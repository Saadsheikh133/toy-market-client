import React, { useContext, useEffect, useState } from 'react';
import MyToysCard from './MyToysCard';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2'
import useTitle from '../../hooks/useTitle';

const MyToys = () => {
    const [myToys, setMyToys] = useState([]);
    const [updateInfo, setUpdateInfo] = useState({})
    const [activeTab, setActiveTab] = useState('')
    const { user } = useContext(AuthContext)
    useTitle('My Toys')



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

    const handleUpdateToy = id => {
        fetch(`http://localhost:5000/addToys/${id}`, {
            method: 'PUT',
            headers: { "content-type": "application/json" },
            body: JSON.stringify(updateInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'success!',
                        text: 'Toy updated successfully',
                        icon: 'success',
                        showConfirmButton: false,
                        timer: 1500,
                        confirmButtonText: 'Cool'
                    })
                    const remaining = myToys.filter(myToy => myToy._id !== id)
                    const updated = myToys.find(myToy => myToy._id === id)
                    console.log(remaining, updated)

                    const newToys = [updated, ...remaining]
                    setMyToys(newToys)
                    // if (data.modifiedCount > 0) {
                    //     const remaining = bookings.filter(booking => booking._id !== id)
                    //     const updated = bookings.find(booking => booking._id === id)
                    //     updated.status = "confirm"
                    //     const newBookings = [updated, ...remaining]
                    //     setBookings(newBookings)

                    // }
                }
            })
    }

    const handleSorting = tabName => {
        setActiveTab(tabName)
    }

    useEffect(() => {
        fetch(`http://localhost:5000/myToys/${activeTab}`)
            .then(res => res.json())
            .then(data => {
            setMyToys(data)
        })
    }, [activeTab])


    const url = `http://localhost:5000/allToys?email=${user?.email}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setMyToys(data)
            })
    }, [url])
    return (
        <div className="overflow-x-auto w-full">
            <div className='flex justify-center my-10'>
                <div className="tabs tabs-boxed">
                    <a onClick={() => handleSorting('ascending')} className={`tab ${activeTab == 'ascending' ? 'tab-active' : ''}`}>ascending</a>
                    <a onClick={() => handleSorting('descending')} className={`tab ${activeTab == 'descending' ? 'tab-active' : ''}`}>descending</a>
                </div>
            </div>
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
                        myToys?.map(toy => <MyToysCard
                            key={toy._id}
                            toy={toy}
                            handleDelete={handleDelete}
                            handleUpdateToy={handleUpdateToy}
                            setUpdateInfo={setUpdateInfo}
                        ></MyToysCard>)
                    }

                </tbody>
            </table>
        </div>
    );
};

export default MyToys;