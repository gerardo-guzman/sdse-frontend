import React, { useState } from 'react';

export const useSignupForm = () => {
    const invalidInput = /[^A-Za-zÀ-ÿ\s\u00f1\u00d1]/g;
    const [ inputValues, setInputValues ] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        school: '',
    });

    const [ errFN, setErrFN ] = useState(false);
    const [ errLN, setErrLN ] = useState(false);
    const [ errPW, setErrPW ] = useState(false);
    const [ errEM, setErrEm ] = useState(false);
    const [ errSc, setErrSc ] = useState(false);

    const firstnameValidation = (name: string = '') => {
        if (name.length < 1) {
            setErrFN(true);
            return;
        }
        setErrFN(invalidInput.test(name));
    };
    const lastNameValidation = (lastName: string = '') => {
        if (lastName.length < 1) {
            setErrLN(true);
            return;
        }
        setErrLN(invalidInput.test(lastName));
    };
    const passwordValidation = (password: string = '') => {
        if (password.length < 1) {
            setErrPW(true );
            return;
        }
        setErrPW(password.length < 8);
    };
    const emailValidation = (email: string = '') => {
        if (email.length < 1) {
            setErrEm(true);
            return;
        }
        const validInput = /^[a-zA-Z0-9_.+-]+@(?:(?:[a-zA-Z0-9-]+\.)?[a-zA-Z]+\.)?(alumno|docente)\.ipn\.mx$/g;
        setErrEm( !validInput.test(email) );
    };
    const schoolValidation = (school: string = '') => {
        setErrSc(school.length < 1);
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
        firstnameValidation,
        lastNameValidation,
        passwordValidation,
        emailValidation,
        schoolValidation,
        errFN, setErrFN,
        errLN, setErrLN,
        errPW, setErrPW,
        errEM, setErrEm,
        errSc, setErrSc
    };
}
