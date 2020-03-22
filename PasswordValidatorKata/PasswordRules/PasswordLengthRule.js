const PasswordValidationRule = require('./PasswordValidationRule');

class PasswordLengthRule extends PasswordValidationRule {
    constructor(validationResult) {
        super()
        this.validationResult = validationResult;
    }

    ValidateRule(password) {
        if (password.length < 12) {
            this.validationResult.isValid = false;
            this.validationResult.validationMessages.push(`password must be atleast 12 character yours is only ${password.length}`);
        }
        return this.validationResult;
    }
}

module.exports = PasswordLengthRule;