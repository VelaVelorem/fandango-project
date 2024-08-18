export const loginFormValidation = (username, password) => {
    const errors = {};

    if(!username.length) {
        errors.username = 'You must include a username.';
    }
    
    if (username.length < 12) {
        errors.username = 'Oops! Your username must contain at least 12 characters.'
    }
    if (password.length < 8 || !/\d/.test(password) ) {
        errors.password = 'Oops! Your password must contain at least 8 characters and one digit.'
    }
    if (!password.length) {
        errors.password = 'You must include a password.'
    }
    return errors;
}