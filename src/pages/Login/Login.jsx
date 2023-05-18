import React, { useContext, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { Link } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";

const Login = () => {
    const [error, setError] = useState('');
    const { loginUser, updateUser } = useContext(AuthContext)

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
                updateUser()
                form.reset();
            })
            .catch(error => {
                setError(error.message)
            })

    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200 rounded-xl my-8">
                <div className="hero-content flex-col">
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
                                <button className='btn w-full bg-slate-400'><FcGoogle size={30}></FcGoogle></button>
                            </div>
                            <p>New to this site? <Link to = "/register">Please Register</Link> </p>
                        <p>{error}</p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;