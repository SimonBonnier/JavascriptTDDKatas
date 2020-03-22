const PasswordValidationRule = require('./PasswordValidationRule');

class PasswordLetterVariationRule extends PasswordValidationRule {
    constructor(validationResult) {
        super()
        this.validationResult = validationResult;
    }

    ValidateRule(password) {
        if (!password.match(/[a-z]/)) {
            this.validationResult.isValid = false;
            this.validationResult.validationMessages.push(`password must contain atleast 1 lower case letter`);
        }
        if (!password.match(/[A-Z]/)) {
            this.validationResult.isValid = false;
            this.validationResult.validationMessages.push(`password must contain atleast 1 upper case letter`);
        }
        return this.validationResult;
    }
}

module.exports = PasswordLetterVariationRule;