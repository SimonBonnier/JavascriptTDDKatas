const PasswordValidationRule = require('./PasswordValidationRule')

class PasswordWhiteSpaceRule extends PasswordValidationRule {
    constructor(validationResult) {
        super()
        this.validationResult = validationResult;
    }

    ValidateRule(password) {
        if (password.includes(' ')) {
            this.validationResult.isValid = false;
            this.validationResult.validationMessages.push(`white space not allowed`);
        }
        return this.validationResult;
    }
}

module.exports = PasswordWhiteSpaceRule;