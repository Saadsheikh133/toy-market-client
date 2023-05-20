import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import { FcGoogle } from 'react-icons/fc';
import Swal from 'sweetalert2'
import useTitle from '../../hooks/useTitle';

const Register = () => {
    const [error, setError] = useState('');
    const { createUser, updateUser, googleLogin } = useContext(AuthContext);
    const navigate = useNavigate()
    useTitle('Register')

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
            })
            .catch(error => {
                setError(error.message)
        })
    }

    const handleRegister = event => {
        event.preventDefault();
        setError('');
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;

        if (!/(?=.*[A-Z])/.test(password)) {
            return Swal.fire({
                position: 'top-center',
                icon: 'success',
                title: 'Your work has been saved',
                showConfirmButton: false,
                timer: 1500
            })
        }

        else if (!/(?=.*?[#?!@$%^&*-])/.test(password)) {
            return Swal.fire({
                position: 'top-center',
                icon: 'success',
                title: 'Your work has been saved',
                showConfirmButton: false,
                timer: 1500
            })
        }

        createUser(email, password)
            .then(result => {
                const newUser = result.user;
                console.log(newUser)
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'Your work has been saved',
                    showConfirmButton: false,
                    timer: 1500
                })
                updateUser(name, photo)
                    .then()
                    .catch(error => setError(error.message))
                navigate('/login', { replace: true })
                form.reset();
            })
            .catch(error => {
            setError(error.message)
        })
    }
    return (
        <div className='my-10 rounded-xl'>
            <div className="hero min-h-screen bg-base-200 rounded-xl py-5">
                <div className="hero-content flex-col py-5">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold my-10">Please Register!</h1>
                    </div>
                    <form onSubmit={handleRegister} className="card flex-shrink-0 shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="Your name" className="input input-bordered" required />
                            </div>
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
                                <input type="password" name='password' placeholder="Your password" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="url" name='photo' placeholder="photo url" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6 mb-6">
                                <input className='btn btn-primary' type="submit" value="Register" />
                            </div>
                            <div>
                                <button onClick={handleGoogleLogin} className='btn w-full bg-slate-400'><FcGoogle size={30}></FcGoogle></button>
                            </div>
                        <p className='text-xl text-center py-4'>All ready have an account? <Link className='text-primary hover:underline' to = "/login">Please Login</Link> </p>
                        </div>
                        <p className='text-red-500 py-4'>{error}</p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;