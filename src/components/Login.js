import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Validation from './LoginValidation';

function Login() {
    const [values, setValues] = useState({
        email: '',
        password: ''
    });

    const navigate = useNavigate();
    const [errors, setErrors] = useState({});
    const [backendError, setBackendError] = useState([]);

    const handleInput = (event) => {
        setValues(prev => ({ ...prev, [event.target.name]: event.target.value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const err = Validation(values);
        setErrors(err);

        if (err.email === "" && err.password === "") {
            axios.post('http://localhost:8700/login', values)
                .then(res => {
                    if (res.data.errors) {
                        setBackendError(res.data.errors);
                    } else {
                        setBackendError([]);
                        if (res.data === "Success") {
                            navigate('/home');
                        } else {
                            alert("No record existed");
                        }
                    }
                })
                .catch(err => console.log(err));
        }
    };

    return (
        <div className='d-flex justify-content-center align-items-center vh-100' style={{ backgroundImage: 'url(background.jpg)', backgroundSize: 'cover' }}>
            <div className='bg-white p-4 rounded w-25' style={{ border: '2px solid #fbc02d', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                <h2 className='text-center mb-4' style={{ fontWeight: 'bold', color: '#fbc02d' }}>Sign-In</h2>
                {
                    backendError.length > 0 && backendError.map(e => (
                        <p key={e.msg} className='text-danger'>{e.msg}</p>
                    ))
                }
                <form onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label htmlFor="email">
                            <strong>Email</strong>
                        </label>
                        <input
                            type="email"
                            placeholder='Enter Email'
                            name='email'
                            value={values.email}
                            onChange={handleInput}
                            className='form-control rounded-0'
                            style={{ border: '1px solid #fbc02d' }}
                        />
                        {errors.email && <span className='text-danger'>{errors.email}</span>}
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="password">
                            <strong>Password</strong>
                        </label>
                        <input
                            type="password"
                            placeholder='Enter Password'
                            name='password'
                            value={values.password}
                            onChange={handleInput}
                            className='form-control rounded-0'
                            style={{ border: '1px solid #fbc02d' }}
                        />
                        {errors.password && <span className='text-danger'>{errors.password}</span>}
                    </div>
                    <button
                        type='submit'
                        className='btn btn-success w-100 rounded-0'
                        style={{ backgroundColor: '#fbc02d', border: 'none', color: '#fff', fontWeight: 'bold', transition: 'background-color 0.3s ease' }}
                    >
                        Log in
                    </button>
                    <p className='text-center mt-3'>You agree to our terms and policies.</p>
                    <Link
                        to="/signup"
                        className='btn border w-100 bg-light rounded-0 text-decoration-none'
                        style={{ borderColor: '#fbc02d', color: '#333', fontWeight: 'bold', transition: 'background-color 0.3s ease, color 0.3s ease' }}
                    >
                        Create Account
                    </Link>
                </form>
            </div>
        </div>
    );
}

export default Login;
