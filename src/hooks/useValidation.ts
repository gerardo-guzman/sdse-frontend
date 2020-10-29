import React, { useState } from 'react';

export const useValidation = (initState: any, initErrors: any, initErrMsg: any) => {
    const [ inputValues, setInputValues ] = useState(initState);
    const [ errors, setErrors ] = useState(initErrors);
    const [ errMessage, setErrMessage ] = useState(initErrMsg);

    const handleInputChange = (e: React.FormEvent<HTMLInputElement>, validation: Function) => {
        setInputValues({
            ...inputValues,
            [e.currentTarget.name]: e.currentTarget.value
        });
        const { error, type } = validation(e.currentTarget.value);
        if (error) {
            setErrors({
                ...errors,
                [e.currentTarget.name]: true
            });
            setErrMessage({
                ...errMessage,
                [e.currentTarget.name]: type
            });
        } else {
            setErrors({
                ...errors,
                [e.currentTarget.name]: false
            });
            setErrMessage({
                ...errMessage,
                [e.currentTarget.name]: ''
            });
        }
    };

    return [
        inputValues,
        handleInputChange,
        errors,
        errMessage
    ];
};


