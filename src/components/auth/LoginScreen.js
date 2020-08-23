import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';

import { useForm } from '../../hooks/useForm';
import { loginWithEmailPassword, startGoogleLogin } from '../../actions/auth';

export const LoginScreen = () => {

    const history = useHistory();
    const {msgError, loading} = useSelector(state => state.ui);

    const dispatch = useDispatch();
    
    const [ formValues, handleInputChange ] = useForm({
        email: 'test@mail.com',
        password: '12345'
    });

    const {email, password} = formValues;

    const handleLogin = (e) => {
        e.preventDefault();

        dispatch( loginWithEmailPassword(email, password) );
        history.replace('/');
        
    }

    const handleLoginGoogle = () => {
        dispatch( startGoogleLogin() );
    }

    return (
        <>
            <h3 className="auth__title">Login</h3>

            { msgError && <div className="auth__alert-error">  {msgError} </div> }

            <form onSubmit={handleLogin}>

                <input 
                    type="text"
                    placeholder="Email"
                    name="email"
                    className="auth__input"
                    autoComplete="off"
                    value={ email }
                    onChange={handleInputChange}
                />

                <input 
                    type="password"
                    placeholder="Password"
                    name="password"
                    className="auth__input"
                    value={ password }
                    onChange={handleInputChange}
                />


                <button
                    type="submit"
                    className="btn btn-primary btn-block"
                    disabled={loading}
                >
                   {loading ? <i className="fas fa-spinner animate__animated animate__rotateIn"></i> : 'Login'}
                </button>

                
                <div className="auth__social-networks">
                    <p>Login with social networks</p>

                    <div 
                        className="google-btn"
                        onClick={handleLoginGoogle}
                    >
                        <div className="google-icon-wrapper">
                            <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                        </div>
                        <p className="btn-text">
                            <b>Sign in with google</b>
                        </p>
                    </div>
                </div>

                <Link 
                    to="/auth/register"
                    className="link"
                >
                    Create new account    
                </Link>

            </form>
        </>
    )
}
