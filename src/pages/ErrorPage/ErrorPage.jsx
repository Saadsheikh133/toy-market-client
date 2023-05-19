import React from 'react';
import { useRouteError } from 'react-router-dom';
import img from '../../assets/images/error.jpg';


const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div className='lg:flex max-w-full items-center justify-between'>
            <div className='mx-auto mt-4'>
                <img src={img} alt="" />
            </div>
            <div className="divider lg:divider-horizontal">OR</div>
            <div id="error-page" className='text-3xl text-red-600 font-bold text-center space-y-4'>
                <h1 className='text-7xl  font-extrabold'>Oops!</h1>
                <p>Sorry, an unexpected error has occurred.</p>
                <p>
                    <i>{error.data}</i>
                    <br />
                    <i>{error.statusText || error.message}</i>
                </p>
            </div>
        </div>
    );
};

export default ErrorPage;