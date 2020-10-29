import React, { useState } from 'react';

export const useLoginForm = () => {
    const [ inputValues, setInputValues ] = useState({
        email: '',
        password: ''
    });
    const [ errEM, setErrEM ] = useState(false);
    const [ errPW, setErrPW ] = useState(false);
    const emailValidator = (email: string = '') => {
        if (email.length < 1) {
            setErrEM(true);
        }
        const validInput = /^[a-zA-Z0-9_.+-]+@(?:(?:[a-zA-Z0-9-]+\.)?[a-zA-Z]+\.)?(alumno|docente)\.ipn\.mx$/g;
        setErrEM(!validInput.test(email));
    };
    const passwordValidator = (pwd: string = '') => {
        if (pwd.length < 1) {
            setErrPW(true);
            return;
        } else {
            setErrPW(false);
        }
    };
    const handleInputChange = (e: React.FormEvent<HTMLInputElement>) => {
        setInputValues({
            ...inputValues,
            [e.currentTarget.name]: e.currentTarget.value
        });
    };
    return {
        inputValues,
        handleInputChange,
        passwordValidator,
        emailValidator,
        errEM, setErrEM,
        errPW, setErrPW
    };

}

