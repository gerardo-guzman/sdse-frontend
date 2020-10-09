import { types } from '../helpers/types';
import { User } from '../models/user.model';

export const authReducer = (state: User = {data: null, logged: false}, action: any) => {
    switch (action.type) {
        case types.login:
            return {
                ...action.payload,
                logged: true,
            };
        case types.logout:
            return {
                logged: false,
            };
        default:
            return state;
    }
}