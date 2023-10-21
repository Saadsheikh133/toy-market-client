import React from 'react';
import logo from '../../assets/images/logo.jpg'
import { ImFacebook, ImTwitter } from "react-icons/im";
import useTitle from '../../hooks/useTitle';

const Footer = () => {
    useTitle('Footer')
    return (
        <footer className=''>
            <div className='bg-purple-950 py-10 rounded-t-xl px-10 text-white max-w-full lg:flex border-b'>
                <div className='lg:w-1/2 mx-auto mb-8 lg:mb-0  lg:border-r'>
                    <h2 className='text-2xl text-orange-600 font-bold'>Give us a call</h2>
                    <p className='text-2xl text-white font-bold mt-1'>+8801737033244</p>
                </div>
                <div className=' lg:w-1/2 md:flex gap-4 lg:mx-10'>
                    <h2 className='text-2xl font-bold'> Join Newsletter </h2>
                    <form className='w-full relative mt-4 lg:mt-0'>
                        <input className='bg-purple-800 w-full lg:w-4/5 py-6 px-10 rounded-full' type="email" name="" id="" placeholder='Your email' />
                        <input className='text-xl py-5 px-10 bg-purple-900 rounded-full absolute top-0 right-0 lg:right-32 font-bold' type="submit" />
                    </form>
                </div>
            </div>
            <div className="footer p-10 bg-purple-950 text-white  text-xl pt-10">
                <div className='leading-loose'>
                    <img className='rounded-full w-1/5' src={logo} alt="" />
                    <h2 className='text-2xl font-bold mt-5'>Toy Collections</h2>
                    <div className='flex gap-5 my-6'>
                        <a href="https://www.facebook.com/">
                            <ImFacebook size={50}></ImFacebook>
                        </a>
                        <a href="https://twitter.com/home">
                            <ImTwitter size={50}></ImTwitter>
                        </a>
                    </div>

                </div>
                <div className='leading-loose'>
                    <span className="footer-title">Services</span>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </div>
                <div className='leading-loose'>
                    <span className="footer-title">Contact us</span>
                    <p>+88 01737033244</p>
                    <p>mdsaadsheikh7096@gmail.com</p>
                    <p>learn with: Programming-hero.com</p>
                    <p>Natore, Rajshahi, Bangladesh.</p>
                </div>
                <div className='leading-loose'>
                    <span className="footer-title">Legal</span>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>
            </div>
            <div className=" px-4 py-10 bg-purple-800 text-white rounded-b-xl">
                <p className='text-center text-xl'>Copyright © 2023 - All right reserved By Saad Sheikh</p>
            </div>
        </footer>
    );
};

export default Footer;