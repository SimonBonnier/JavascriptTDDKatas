const PasswordValidationRule = require('./PasswordValidationRule')

class PasswordDigitRule extends PasswordValidationRule {
    constructor(validationResult) {
        super()
        this.validationResult = validationResult;
    }

    ValidateRule(password) {
        if (!password.match(/[1-9]/)) {
            this.validationResult.isValid = false;
            this.validationResult.validationMessages.push(`password must contain atleast 1 digit`);
        }
        return this.validationResult;
    }
}

module.exports = PasswordDigitRule;