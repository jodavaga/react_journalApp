import { types } from '../types/types';

/*
const initialState = {
    uid: '1242AF14',
    name: 'Jose D.'
}
*/

export const authReducer = (state = {}, action) => {
    switch (action.type) {
        case types.login:
            return {
                uid: action.payload.uid,
                name: action.payload.name
            }

        case types.logout:
            return {}
    
        default:
            return state;
    }
}