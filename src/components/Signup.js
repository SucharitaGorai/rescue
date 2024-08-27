import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Validation from './SignupValidation.js';
import axios from 'axios';
import './Signup.css';

function Signup() {
    const [values, setValues] = useState({ name: '', password: '' });
    const navigate = useNavigate();
    const [errors, setErrors] = useState({});

    const handleInput = (event) => {
        setValues(prev => ({ ...prev, [event.target.name]: event.target.value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const err = Validation(values);
        setErrors(err);

        if (err.name === "" && err.password === "") {
            axios.post('http://localhost:4907/signup', values)
                .then(res => {
                    navigate('/');
                })
                .catch(err => console.log(err));
        }
    };

    return (
        <div
            className='d-flex justify-content-center align-items-center vh-100'
            
        >
            <div
                className='bg-white p-4 rounded w-25'
                style={{
                    border: '2px solid #fbc02d', 
                    borderRadius: '10px',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
                }}
            >
                
                <h2
                    className='text-center mb-4'
                    style={{
                        fontWeight: 'bold',
                        color: '#fbc02d' 
                    }}
                >
                    Sign-Up
                </h2>

                <form onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label htmlFor="name">
                            <strong>Name</strong>
                        </label>
                        <input
                            type="text"
                            placeholder='Enter Name'
                            name='name'
                            value={values.name}
                            onChange={handleInput}
                            className='form-control rounded-0'
                            style={{
                                border: '1px solid #fbc02d', 
                            }}
                        />
                        {errors.name && <span className='text-danger'>{errors.name}</span>}
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
                            style={{
                                border: '1px solid #fbc02d', 
                            }}
                        />
                        {errors.password && <span className='text-danger'>{errors.password}</span>}
                    </div>
                    <button
                        type='submit'
                        className='btn btn-success w-100 rounded-0'
                        style={{
                            backgroundColor: '#fbc02d', 
                            border: 'none',
                            color: '#fff',
                            fontWeight: 'bold',
                            transition: 'background-color 0.3s ease'
                        }}
                    >
                        Sign up
                    </button>
                    <p className='text-center mt-3'>You agree to our terms and policies.</p>
                    <Link
                        to="/"
                        className='btn border w-100 bg-light rounded-0 text-decoration-none'
                        style={{
                            borderColor: '#fbc02d', 
                            color: '#333', 
                            fontWeight: 'bold',
                            transition: 'background-color 0.3s ease, color 0.3s ease'
                        }}
                    >
                        Login
                    </Link>
                </form>
            </div>
        </div>
    );
}

export default Signup;
