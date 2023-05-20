import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import SingleCategory from './SingleCategory';

const TabCategory = () => {
    const [toys, setToys] = useState([]);
    const [category, setCategory] = useState('Sports Cars');

    useEffect(() => {
        fetch(`http://localhost:5000/toys?category=${category}`)
            .then(res => res.json())
            .then(data => {
                setToys(data)
            })
    }, [category])
    return (
        <>
            <Tabs className='text-center'>
                <TabList>
                    <Tab onClick={() => setCategory('Sports Cars')}>Sports car</Tab>
                    <Tab onClick={() => setCategory('Classic Cars')}>Classic Cars</Tab>
                    <Tab onClick={() => setCategory('Off-Road Trucks')}>Off-Road Trucks</Tab>
                </TabList>
            </Tabs>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10 mx-auto w-full'>
                {
                    toys.map(toy => <SingleCategory
                        key={toy._id}
                        toy={toy}
                    ></SingleCategory>)
                }
            </div>
        </>
    );
};

export default TabCategory;