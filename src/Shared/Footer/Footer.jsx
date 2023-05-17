import React from 'react';
import logo from '../../assets/images/logo.jpg'

const Footer = () => {
    return (
        <footer>
            <div className="footer p-10 bg-base-200 text-base-content">
                <div>
                    <img className='rounded-full w-1/5' src={logo} alt="" />
                    <h2 className='text-2xl font-bold'>Toy Collections</h2>

                </div>
                <div>
                    <span className="footer-title">Services</span>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>
            </div>
            <div className=" p-4 bg-neutral text-neutral-content">
                <p className='text-center text-xl'>Copyright © 2023 - All right reserved</p>
            </div>
        </footer>
    );
};

export default Footer;