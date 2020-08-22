import { types } from '../types/types';
import { firebase, googleAuthProvider } from '../firebase/firebase.config';

// Async action (fetch, http)
export const loginWithEmailPassword = (email, password) => {
    return (dispatch) => {

        console.log(email, password)

        setTimeout(() => {
            dispatch( loginAction( 12445, 'Jose Arcadio' ) );
        }, 3000);
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