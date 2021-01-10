const Validator = require("validator"); 
const isEmpty = require('is-empty'); 

module.exports = function validateLogin(data) {

    data.email = !isEmpty(data.email) ? data.email : ''; 
    data.password = !isEmpty(data.password) ? data.password : ""; 

    if (Validator.isEmpty(data.email)) {
        errors.email = "Please enter an email"; 
    } else if (!Validator.isEmail(data.email)) {
        errors.email = "Please enter a valid email address"
    }

    if (Validator.isEmpty(data.password)) {
        errors.password = "please enter a password"
    }

    return {
        errors, 
        isValid: isEmpty(errors)
    }; 
}; 