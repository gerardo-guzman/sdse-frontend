import React, { useState } from 'react';

export const useValidation = (initState: any, initErrors: any) => {
    const [ inputValues, setInputValues ] = useState(initState);
    const [ errors, setErrors ] = useState(initErrors);
    const [ errMessage, setErrMessage ] = useState({});

   /* const validateInput = (e: React.FormEvent<HTMLInputElement>, validation: Function) => {
        //const invalidInput = /[^A-Za-zÀ-ÿ\s\u00f1\u00d1]/g;
        if (invalidInput.test(e.currentTarget.value)) {
            setErrors({
                ...errors,
                [e.currentTarget.name]: true
            });
        } else {
            setErrors({
                ...errors,
                [e.currentTarget.name]: false
            });
        }
    }; */
    const handleInputChange = (e: React.FormEvent<HTMLInputElement>, validation: Function) => {
        setInputValues({
            ...inputValues,
            [e.currentTarget.name]: e.currentTarget.value
        });
        if (validation(e.currentTarget.value)) {
            setErrors({
                ...errors,
                [e.currentTarget.name]: true
            });
        } else {
            setErrors({
                ...errors,
                [e.currentTarget.name]: false
            });
        }
    };

    return [
        inputValues,
        handleInputChange,
        errors
    ];
};


