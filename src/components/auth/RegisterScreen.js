import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import validator from 'validator';

import {useForm} from '../../hooks/useForm';
import { startRegisterWithEmailPassName } from '../../actions/auth';
import { setError, removeError } from '../../actions/ui';

export const RegisterScreen = () => {

    const dispatch = useDispatch();
    
    const {ui} = useSelector(state => state);
    
    const [formValues, handleInputChange] = useForm({
        name: 'jose D',
        email: 'test@mail.com',
        password: '123456',
        password2: '123456'
    });
    
    const { name, email, password, password2 } = formValues;
    
    const handleRegister = (e) => {
        e.preventDefault();
        
        if (isFormValid()) {
            return dispatch(startRegisterWithEmailPassName(email, password, name));
        } 
        
    }
    
    const isFormValid = () => {
        
        if (name.trim().length <= 2 ) {
            dispatch( setError('Name is required') );
            return false;
        }
        
        if ( !validator.isEmail(email) ) {
            dispatch( setError('Email not valid') );
            return false;
        }
        
        if (password !== password2 || password.length < 6) {
            dispatch( setError('Password should be more than 6 characters and match each other') );
            return false;
        }
        
        dispatch( removeError() );
        return true;
    }

    return (
        <>
            <h3 className="auth__title">Register</h3>


            { ui.msgError && <div className="auth__alert-error">  {ui.msgError} </div> }
            <form onSubmit={handleRegister}>

                <input 
                    type="text"
                    placeholder="Name"
                    name="name"
                    className="auth__input"
                    autoComplete="off"
                    value={name}
                    onChange={handleInputChange}
                />

                <input 
                    type="text"
                    placeholder="Email"
                    name="email"
                    className="auth__input"
                    autoComplete="off"
                    value={email}
                    onChange={handleInputChange}
                />

                <input 
                    type="password"
                    placeholder="Password"
                    name="password"
                    className="auth__input"
                    value={password}
                    onChange={handleInputChange}
                />

                <input 
                    type="password"
                    placeholder="Confirm password"
                    name="password2"
                    className="auth__input"
                    value={password2}
                    onChange={handleInputChange}
                />


                <button
                    type="submit"
                    className="btn btn-primary btn-block mb-5"
                >
                    Register
                </button>

               

                <Link 
                    to="/auth/login"
                    className="link"
                >
                    Already registered?
                </Link>

            </form>
        </>
    )
}
