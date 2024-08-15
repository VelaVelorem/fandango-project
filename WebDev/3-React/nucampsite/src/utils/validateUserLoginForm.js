export const validateUserLoginForm = (values) => {
    const errors = {};

    if(!values.username) {
        errors.username = 'A username is required!';
    } else if(values.username.length < 6) {
        errors.username = 'Your username needs to be at least 6 characters';
    } else if(values.username.length > 15) {
        errors.username = "Your usernames can't be more than 15 characters"
    }


    if(!values.password) {
        errors.password = 'A password is required';
    } else if(values.password.length <= 8) {
        errors.password = 'Your password must be at least 8 characters.';
    }

    return errors;
}