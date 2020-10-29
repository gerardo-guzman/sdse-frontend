export const signupValidations = {
    // if true, a error is triggered
    firstnameValidation: function (name: string = '') {
        if (name.length < 1) {
            return {
                error: true,
                type: 'Este campo es obligatorio.'
            }
        }
        const invalidInput = /[^A-Za-zÀ-ÿ\s\u00f1\u00d1]/g;
        return {
            error: (invalidInput.test(name)),
            type: 'Este campo no acepta números ni caracteres especiales.'
        }
    },
    lastNameValidation: function (lastname: string = '') {
        if (lastname.length < 1) {
            return {
                error: true,
                type: 'Este campo es obligatorio.'
            }
        }
        const invalidInput = /[^A-Za-zÀ-ÿ\s\u00f1\u00d1]/g;
        return {
            error: (invalidInput.test(lastname)),
            type: 'Este campo no acepta números ni caracteres especiales.'
        }
    },
    passwordValidation: function (password: string = '') {
        if (password.length < 1) {
            return {
                error: true,
                type: 'Este campo es obligatorio.'
            }
        }
        return {
            error: (password.length < 8),
            type: 'La contraseña debe tener al menos 8 caracteres.'
        }
    },
    emailValidation: function (email: string = '') {
        if (email.length < 1) {
            return {
                error: true,
                type: 'Este campo es obligatorio.'
            }
        }
        const validInput = /^[a-zA-Z0-9_.+-]+@(?:(?:[a-zA-Z0-9-]+\.)?[a-zA-Z]+\.)?(alumno|docente)\.ipn\.mx$/g;
        return {
            error: !validInput.test(email),
            type: 'El correo proporcionado debe ser institucional'
        }
    },
    schoolValidation: function (school: string = '') {
        return {
            error: (school.length < 1),
            type: 'Este campo es obligatorio'
        };
    },
    //Errors
    errors: {
        firstName: false,
        lastName: false,
        password: false,
        school: false,
        email: false,
    },
    errMsg: {
        firstName: '',
        lastName: '',
        password: '',
        school: '',
        email: '',
    },
};