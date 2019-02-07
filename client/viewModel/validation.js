module.exports = {
    validateField: (fieldName, value, context) => {
        let fieldValidationErrors = context.state.formErrors;
        let emailValid = context.state.emailValid;
        let passwordValid = context.state.passwordValid;

        switch(fieldName) {
        case 'email':
            emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
            fieldValidationErrors.email = emailValid ? '' : ' is invalid';
            break;
        case 'password':
            passwordValid = value.length >= 6;
            fieldValidationErrors.password = passwordValid ? '': ' is too short';
            break;
        default:
            break;
        }
        context.setState({formErrors: fieldValidationErrors,
                        emailValid: emailValid,
                        passwordValid: passwordValid
                    }, context.validateForm(context));
    },
    validateForm: (context) => {
        context.setState({formValid: context.state.emailValid && context.state.passwordValid});
    }
}