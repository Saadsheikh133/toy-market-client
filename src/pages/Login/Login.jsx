import React, { useContext, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import Swal from 'sweetalert2'
import useTitle from '../../hooks/useTitle';

const Login = () => {
    const [error, setError] = useState('');
    const { loginUser, googleLogin } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    useTitle('Login')

    const from = location.state?.from?.pathname || '/';

    const handleGoogleLogin = () => {
        setError('');
        googleLogin()
            .then(result => {
                console.log(result.user)
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'Your work has been saved',
                    showConfirmButton: false,
                    timer: 1500
                })
                navigate(from, { replace: true })
            })
            .catch(error => {
            setError(error.message)
        })
    }

    const handleLoginUser = event => {
        event.preventDefault();
        setError('');
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        loginUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'Your work has been saved',
                    showConfirmButton: false,
                    timer: 1500
                })
                navigate(from, { replace: true })
                form.reset();
            })
            .catch(error => {
                setError(error.message)
            })

    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200 rounded-xl my-8 lg:w-full">
                <div className="hero-content flex-col  lg:w-1/3">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold mb-10">Login now!</h1>
                    </div>
                    <form onSubmit={handleLoginUser} className="card flex-shrink-0 w-full  shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6 mb-6">
                                <input className='btn btn-primary' type="submit" value="Login" />
                            </div>
                            <div>
                                <button onClick={handleGoogleLogin} className='btn w-full bg-slate-400'><FcGoogle size={30}></FcGoogle></button>
                            </div>
                            <p className='py-5 text-center text-xl'>New to this site? <Link className='hover:underline text-primary' to = "/register">Please Register</Link> </p>
                        <p className='text-red-600 py-4'>{error}</p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;