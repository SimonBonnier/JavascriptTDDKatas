class PasswordValidationRule {
    constructor() {
        if (this.constructor === PasswordValidationRule) {
            throw new Error("Abstract class should not be instantiated")
        }
    }

    addValidationResult(validationResult) {
        this.validationResult = validationResult;
    }

    ValidateRule(password) {
        throw new Error('Method "ValidateRule()" is not implemented')
    }
}

module.exports = PasswordValidationRule;