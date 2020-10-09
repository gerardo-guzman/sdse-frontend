import { createContext } from 'react';
import { User } from '../models/user.model';

interface AuthModel {
    user?: User;
    dispatchUser?: React.Dispatch<any>;
}



export const AuthContext = createContext<AuthModel>({});
