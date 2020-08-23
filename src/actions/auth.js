import { types } from '../types/types';
import { firebase, googleAuthProvider } from '../firebase/firebase.config';
import { setError, removeError } from './ui';

// Async action (fetch, http)
export const loginWithEmailPassword = (email, password) => {
    return (dispatch) => {

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then( ({user}) => {
                dispatch( removeError() );
                dispatch( loginAction( user.uid, user.displayName ) );
            })
            .catch(e => {
                dispatch( setError('Wrong Email or Password') );
            })
    }
}

export const startRegisterWithEmailPassName = (email, password, name) => {
    return (dispatch) => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then( async ({user}) =>  {

                await user.updateProfile({displayName: name});

                dispatch( loginAction(user.uid, user.displayName) );
            })
            .catch(e => {
                console.log(e);
            })
    }
}

export const startGoogleLogin = () => {
    return (dispatch) => {

        firebase.auth().signInWithPopup(googleAuthProvider)
        .then(userCred => {
            console.log(userCred);
            const {user } = userCred;
            dispatch( loginAction(user.uid, user.displayName) )
        }).catch(e => {
            console.log(e)
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