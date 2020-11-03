import { useState } from 'react';

export const useForm = (initialState: any = {}) => {
    const [ state, setState ] = useState(initialState);
    const reset = () => {
        setState(initialState);
    }
    const handleInputChange = (e: React.FormEvent<HTMLInputElement>) => {
        setState({
            ...state,
            [ e.currentTarget.name ]: e.currentTarget.value
        });
    }
    return [state, handleInputChange, reset];
};
