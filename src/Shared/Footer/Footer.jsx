import React from 'react';
import logo from '../../assets/images/logo.jpg'
import { ImFacebook, ImTwitter } from "react-icons/im";

const Footer = () => {
    return (
        <footer className=''>
            <div className="footer p-10 bg-neutral text-neutral-content rounded-t-xl text-xl pt-10">
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
            <div className=" px-4 py-6 bg-neutral text-neutral-content rounded-b-xl mb-10">
                <p className='text-center text-xl'>Copyright © 2023 - All right reserved By Saad Sheikh</p>
            </div>
        </footer>
    );
};

export default Footer;