const PasswordValidationRule = require('./PasswordValidationRule')

class PasswordSpecialCharacterRule extends PasswordValidationRule {
    constructor(validationResult) {
        super()
        this.validationResult = validationResult;
    }

    ValidateRule(password) {
        if (!password.match(/[@_!#$%^&*()<>?/\|}{~:]/)) {
            this.validationResult.isValid = false;
            this.validationResult.validationMessages.push(`password must contain atleast 1 special character`);
        }
        return this.validationResult;
    }
}

module.exports = PasswordSpecialCharacterRule;