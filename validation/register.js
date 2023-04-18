
module.exports = function validateRegisterInput(data){
    let errors = {};
    console.log({data});
    if (!(data.name)) {
        errors.name = 'name field is required';
    }
    else if (!(data.username)) {
        errors.username = 'Username field is required';
    }

    else if (!(data.password)) {
        errors.password = 'Password field is required';
    }
    else if( !(data.password2)){
        errors.password2 = ' confirm password field is required';
    }
    else if((data.password.length < 6 && data.password.length > 30)){
        errors.password = 'password must be at least 6 characters';
    }
    else if((data.password !== data.password2)){
        errors.password2 = 'passwords must match';
    }
    return {
        errors,
        isValid: Object.keys(errors).length > 0 ? false : true,
    };
};
