import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Register = () => {
    const [error, setError] = useState('');
    const { createUser, updateUser } = useContext(AuthContext);

    const handleRegister = event => {
        event.preventDefault();
        setError('');
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;
        createUser(email, password)
            .then(result => {
                const newUser = result.user;
                console.log(newUser)
                updateUser(name, photo)
                    .then()
                .catch(error => console.log(error.message))
                form.reset();
            })
            .catch(error => {
            setError(error.message)
        })
    }
    return (
        <div className='my-10 rounded-xl'>
            <div className="hero min-h-screen bg-base-200 rounded-xl">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold mb-6">Please Register!</h1>
                    </div>
                    <form onSubmit={handleRegister} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
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
                        <p>All ready have an account? <Link to = "/login">Please Login</Link> </p>
                        </div>
                        <p className='text-red-500'>{error}</p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;