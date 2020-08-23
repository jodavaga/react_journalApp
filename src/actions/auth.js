import { types } from '../types/types';
import { firebase, googleAuthProvider } from '../firebase/firebase.config';
import { setError, removeError, setLoading, finishLoading } from './ui';

// Async action (fetch, http)
export const loginWithEmailPassword = (email, password) => {
    return (dispatch) => {

        dispatch( removeError() );
        dispatch( setLoading() );

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then( ({user}) => {
                dispatch( loginAction( user.uid, user.displayName ) );
                dispatch( finishLoading() );
            })
            .catch(e => {
                dispatch( setError('Wrong Email or Password') );
                dispatch( finishLoading() );
            })
    }
}

export const startRegisterWithEmailPassName = (email, password, name) => {
    return (dispatch) => {

        dispatch( setLoading() );

        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then( async ({user}) =>  {

                await user.updateProfile({displayName: name});

                dispatch( loginAction(user.uid, user.displayName) );
                dispatch( finishLoading() );
            })
            .catch(e => {
                console.log(e);
                dispatch( finishLoading() );
            })
    }
}

export const startGoogleLogin = () => {
    return (dispatch) => {

        dispatch( setLoading() );

        firebase.auth().signInWithPopup(googleAuthProvider)
        .then(userCred => {
            console.log(userCred);
            const {user } = userCred;
            dispatch( loginAction(user.uid, user.displayName) )
            dispatch( finishLoading() );
        }).catch(e => {
            console.log(e)
            dispatch( finishLoading() );
        });
    }
}

export const loginAction = (uid, displayName) => {
    return {
        type: types.login,
        payload: {
            uid,
            name: displayName
        }
    }
}

export const logoutAction = () => ({
    type: types.logout,
})